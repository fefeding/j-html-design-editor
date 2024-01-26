
import JBase from './components/base';
import JText from './components/text';
import JImage from './components/image';
import JElement from './core/element';
import JController from './components/controller';
import util from './lib/util';

export default class JEditor extends JBase {

    constructor(container, option={} as any) {  
        option.style = option.style||{};
        Object.assign(option.style, {
            'boxShadow': '0 0 10px 10px #ccc',
            'position': 'absolute',
            'backgroundSize': '100% 100%',
            'overflow': 'hidden'
        });
        // 外层只响应Z轴旋转
        option.transformWatchProps = [
            'rotateZ'
        ];
        super(option);

        if(typeof container === 'string') container = document.getElementById(container);
        this.container = new JElement<HTMLDivElement>({
            style: {
                'border': 0,
                'padding': 0,
                'margin': 0,
                'position': 'relative',
                'width': '100%',
                'height': '100%',
            }
        });
        // 变换改为控制主元素
        this.transform.bind({
            target: this.container,
            watchProps: [
                'scaleX', 'scaleY'
            ]
        });
        container.appendChild(this.container.dom); 
        this.container.addChild(this.dom);

        this.init(option);        
    }

    // 初始化整个编辑器
    init(option) {

        if(option.style.containerBackgroundColor) this.dom.style.backgroundColor = option.style.containerBackgroundColor;

        // 生成控制器
        this.ElementController = new JController({
            editor: this,
            visible: false
        });
        this.container.addChild(this.ElementController.dom);// 加到外层
        const styleNode = document.createElement('style');
        styleNode.innerHTML = `.j-design-editor-container {
                                    border: 0;
                                }
                                .j-design-editor-container:hover {
                                    box-shadow: 0 0 1px 1px rgba(255,255,255,0.5);
                                }`;
        this.container.addChild(styleNode);

        if(option.width && option.height) {
            this.resize(option.width, option.height);
        }
        this.on('select', (e) => {
            this.select(this);// 选中自已
        });
        this.on('mousedown', function(e) {
            this.selected = true;
            this.ElementController.onDragStart(e);
        });
    }

    // 外层用于定位的容器
    container: JElement<HTMLDivElement>;

    // 所有支持的类型
    shapes = {
        'image': JImage,
        'text': JText
    } as  { [key: string]: typeof JBase};

    // 元素控帛器
    ElementController: JController;

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

    // 选中某个元素
    select(el: JBase) {
        // 选把所有已选择的取消
        this.selectedElements.every(p=> p !== el && p.selected && (p.selected = false));
        if(el.selected) this.ElementController.bind(el);
        else this.ElementController.unbind(el);
    }

    resize(width=this.width, height=this.height) {

        this.attr('data-size', `${width}*${height}`);

        this.width = width;
        this.height = height;

        this.left = util.toNumber(this.container.width) / 2 - util.toNumber(width) / 2;
        this.top = util.toNumber(this.container.height) / 2 - util.toNumber(height) / 2;
        
        setTimeout(() => {
            this.emit('resize', {
                width,
                height
            });
        }, 10);
    }

    // 添加元素到画布
    addChild(child: JBase) {
        if(child === this.target) {
            return super.addChild(child);
        }
        const self = this;
        child.on('select', function(v) {
            self.select(this);
        });
        child.on('mousedown', function(e) {
            this.selected = true;
            self.ElementController.onDragStart(e);
        });
        return this.target.addChild(child);
    }

    // 移除
    removeChild(el: JElement|HTMLElement) {
        if(el === this.target) {
            console.warn('不能移除自已');
            return;
        }
        if(el instanceof JElement) {
            el.off('select');
            el.off('mousehover');
            el.off('mousehout');
        }
        return this.target.removeChild(el);
    }

    // 把domcument坐标转为编辑器相对坐标
    toEditorPosition(pos: {x: number, y: number}) {
        // 编辑器坐标
        const editorPos = util.getElementPosition(this.dom);
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
    }

    // 缩放
    scale(x, y=x) {
        if(x < 0.1 || y < 0.1) return;
        this.transform.scaleX = x;
        this.transform.scaleY = y;
    }

    regShape(name, shape) {
        if(this.shapes[name]) throw Error(`元素类型${name}已经存在`);
        this.shapes[name] = shape;
    }

    // 创建元素
    createShape(type, option={}) {
        const shape = typeof type === 'string'? this.shapes[type]: type;
        if(!shape) {
            throw Error(`${type}不存在的元素类型`);
        }
        const el = new shape({
            ...option,
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

    // 转为图片数据
    async toImage() {
        
    }

    toJSON() {
        const data = {
            width: this.width,
            height: this.height,
            children: []
        };
        for(const c of this.children) {
            
            if(!c.type) continue;
            if(c.toJSON) {
                data.children.push(c.toJSON());
            }
        }
        return data;
    }

    toString() {
        const data = this.toJSON();
        return JSON.stringify(data);
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