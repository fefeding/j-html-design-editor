import JBase from './core/baseComponent';
import JText from './components/text';
import JImage from './components/image';
import JElement from './core/element';
import JController from './core/controller';
import JFonts from './core/fonts';
import util from './lib/util';
import { IJElement, IJEditor, IJControllerComponent, IJBaseComponent, IJFonts, IJFontData } from './constant/types';

export default class JEditor extends JBase implements IJEditor {

    constructor(option={} as any) {  
        option.style = option.style||{};
        Object.assign(option.style, {
            'boxShadow': '0 0 10px 10px #ccc',
            'position': 'absolute',
            'backgroundSize': '100% 100%',            
        });
        // 外层只响应Z轴旋转
        option.transformWatchProps = [
            'rotateZ', 'scaleX', 'scaleY'
        ];
        super(option);

        if(typeof option.container === 'string') option.container = document.getElementById( option.container);
        this.view = new JElement<HTMLDivElement>({
            style: {
                'border': 0,
                'padding': 0,
                'margin': 0,
                'position': 'relative',
                'width': '100%',
                'height': '100%',
            }
        });
        // 字体管理实例
        this.fonts = new JFonts();
        
        this.target.css({
            'overflow': 'hidden'
        });
        if(option.container) option.container.appendChild(this.view.dom); 
        this.view.addChild(this.dom);
        
        // @ts-ignore
        this.regShape('image', JImage);
        // @ts-ignore
        this.regShape('text', JText);

        this.init(option);  

        this.bindEvent(this.view.dom);
    }

    // 初始化整个编辑器
    init(option) {

        if(option.style.containerBackgroundColor) this.dom.style.backgroundColor = option.style.containerBackgroundColor;

        // 生成控制器
        this.elementController = new JController({
            editor: this,
            visible: false
        });
        
        const styleNode = document.createElement('style');
        styleNode.innerHTML = `.j-design-editor-container {
                                    border: 0;
                                }
                                .j-design-editor-container:hover {
                                    box-shadow: 0 0 1px 1px rgba(255,255,255,0.5);
                                }`;
        this.view.addChild(styleNode);

        if(option.width && option.height) {
            this.resize(option.width, option.height);
        }
        this.on('select', (e) => {
            this.select(this);// 选中自已
        });
        this.on('mousedown', function(e) {
            this.selected = true;
            this.elementController.onDragStart(e);
        });

        // 刷新样式
        this.style.refresh();
    }

    // 外层用于定位的容器
    view: JElement<HTMLDivElement>;

    // 所有支持的类型
    protected shapes = new Map<string, IJBaseComponent>();

    // 元素控帛器
    elementController: IJControllerComponent;

    fonts: IJFonts; // 字体管理器

    // 重写子集为target
    get children() {
        return this.target.children;
    }
    // 被选中的元素
    get selectedElements(): Array<JBase> {
        const res = [];
        for(const el of this.children) {
            if(el instanceof JBase && el.selected) {
                res.push(el);
            }
        }
        return res;
    }

    // 绑定事件
    bindEvent(dom?: HTMLElement) {
        if(this.view) super.bindEvent(this.view.dom);// 编辑器事件绑到整个容器上
    }

    // 选中某个元素
    select(el: IJBaseComponent) {
        if(el.selected) {
            // 选把所有已选择的取消
            this.selectedElements.every(p=> p !== el && p.selected && (p.selected = false));
            this.elementController.bind(el);
        }
        else this.elementController.unbind(el);
    }

    resize(width=this.width, height=this.height) {

        this.attr('data-size', `${width}*${height}`);

        this.width = width;
        this.height = height;        
        
        setTimeout(() => {
            this.left = util.toNumber(this.view.dom.clientWidth) / 2 - util.toNumber(width) / 2;
            this.top = util.toNumber(this.view.dom.clientHeight) / 2 - util.toNumber(height) / 2;

            this.emit('resize', {
                width,
                height
            });
        }, 10);
    }

    // 添加元素到画布
    addChild(child: IJBaseComponent) {
        if(child === this.target) {
            return super.addChild(child);
        }
        const self = this;
        child.on('select', function(v) {
            self.select(this);
        });
        child.on('mousedown', function(e) {
            this.selected = true;
            self.elementController.onDragStart(e);
        });
        // 监听样式改变
        child.on('styleChange', (e) => {
            this.emit('styleChange', e);
        });
        
        child.parent = this;// 把父设置成编辑器
        child.editor = this;
        
        // 刷新样式
        child.style.refresh();

        this.target.addChild(child, this.target);
    }

    // 移除
    removeChild(el: IJElement|HTMLElement) {
        if(el === this.target) {
            //console.warn('不能移除自已');
            return;
        }
        if(el instanceof JElement) {
            el.off('select');
            el.off('mousedown');
            el.off('styleChange');
        }
        return this.target.removeChild(el);
    }

    // 把domcument坐标转为编辑器相对坐标
    toEditorPosition(pos: {x: number, y: number}) {
        // 编辑器坐标
        const editorPos = util.getElementPosition(this.view.dom);
        return {
            x: pos.x - editorPos.x,
            y: pos.y - editorPos.y
        };
    }

    clear() {
        this.css({
            'backgroundColor': '#fff',
            'backgroundImage': ''
        });

        for(let i=this.children.length-1;i>=0; i--) {
            const el = this.children[i];
            this.removeChild(el);
        }
        this.elementController.visible = false;
    }

    // 缩放
    scale(x, y=x) {
        if(x < 0.1 || y < 0.1) return;
        this.transform.scaleX = x;
        this.transform.scaleY = y;
    }

    // 注册自定义组件
    regShape(name: string, shape: IJBaseComponent) {
        if(this.shapes.has(name)) throw Error(`元素类型${name}已经存在`);
        this.shapes.set(name, shape);
        return shape;
    }

    // 创建元素
    createShape(type, option={}) {
        const shape = typeof type === 'string'? this.shapes.get(type): type;
        if(!shape) {
            throw Error(`${type}不存在的元素类型`);
        }
        const el = new shape({
            ...option,
            editor: this,
            type,
        });
        return el;
    }

    // 创建图片元素
    createImage(url, option={}) {
        const img = this.createShape('image', {
            ...option,
            url,
        });
        return img;
    }

    fromJSON(data) {
        this.clear();
        if(typeof data === 'string') data = JSON.parse(data);
        if(data.style) {
            this.style.apply(data.style);// 应用样式
        }
        this.resize(data.width, data.height);

        for(const c of data.children) {
            if(!c.type) continue;
            const item = this.createShape(c.type, c);
            this.addChild(item);
        }
    }
}

export {
    JEditor,
    JImage,
    JText,
}