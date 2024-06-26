import { Point, ItemType, ControllerCursorData, IJFonts } from '@fefeding/utils';
import { IFilter, IFilterManager } from '@fefeding/css-filters';
import JElementCssStyle, { IJElementStyleDeclaration, IStyleTransform } from './styleMap';
import { JElementData, JTextData, JImageData, IJElementData, IJTexteData, IJImageData, IJFontData, JSvgData, IJSvgData } from './data';
import type EventEmitter from '@fefeding/eventemitter';
import type { DomNode, JDomElement, StringKeyValue } from './elementTypes';

export {
    EventEmitter,
    JElementCssStyle,
    type IJElementStyleDeclaration
};

/**
 * 元素参数接口
 * @public
 */
export interface IElementOption<T extends IJElementData = IJElementData> {
    // 非必要，只是唯一标识
    id?: string;
    // 名称
    name?: string;
    // 元素类型
    nodeType?: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;
    // 无需指定，一般是组件设定
    type?: string;
    // 编辑器对象，无需指定
    editor?: IJEditor;
    // transform监听的属性，表示只采用指定的属性，如果全需要请不要设置
    transformWatchProps?: string[];
    // data绑定的类型
    dataType?: any;
    // 默认样式名
    className?: string;
    // 样式
    style?: IJElementStyleDeclaration;
    // 默认是否显示 default=true
    visible?: boolean;
    // 是否可以编辑
    editable?: boolean;
    /**
     * 是否支持移动
     */
    moveable?: boolean;

    // 初始属性值
    data?: T;
    // 变换属性
    transform?: IStyleTransform;

    // 目标元素配置项
    target?: IElementOption;

    /**
     * 子元素
     */
    children?: Array<IElementOption>;

    // 滤镜
    filters?: IFilter[];

    attributes?: StringKeyValue;
    /**
     * 是否保持宽高比
     */
    preserveRatio?: boolean;
}
/**
 * 文本选项接口
 * @public
 */
export interface ITextOption extends IElementOption<IJTexteData> {
    /**
     * 数据类型，应为JTextData
     */
    dataType?: JTextData;
}

/**
 * 图片选项接口
 * @public
 */
export interface IImageOption extends IElementOption<IJImageData> {
    /**
     * 数据类型，应为JImageData
     */
    dataType?: JImageData;

}
/**
 * @public
 */
export interface ISvgOption extends IElementOption<IJSvgData> {
    dataType?: JSvgData;
}

export interface IControllerItemOption extends IElementOption {    
    dir?: ItemType | string;
    size?: number;
}

export interface IControllerStyle extends IJElementStyleDeclaration {
    itemStyle?: IJElementStyleDeclaration;
    // 旋转块样式
    rotateStyle?: IJElementStyleDeclaration;
    // 标线
    markingLineStyle?: IJElementStyleDeclaration;
    // 提示信息
    tipStyle?: IJElementStyleDeclaration;
    // 中心控制区域样式
    skewStyle?: IJElementStyleDeclaration;
    // 中心控制区域样式
    moveStyle?: IJElementStyleDeclaration;
    // 中心控制区域样式
    scaleStyle?: IJElementStyleDeclaration;
}

export interface IControllerOption extends IControllerItemOption {
    style?: IControllerStyle;
    itemSize?: number;
    /**
     * 是否显示提示信息
     */
    tipVisible?: boolean;
    /**
     * 是否展示缩放操作杆
     */
    scaleVisible?: boolean;
    /**
     * 是否展示移动操作杆
     */
	moveVisible?: boolean;

    /**
     * 是否保持比例缩放
     */
    //preserveRatio?: boolean;

    itemCursors?: ControllerCursorData;
    itemIcons?: {
        rotate?: string;
        skew?: string;
    }
}

/**
 * 编辑器选项接口
 * @public
 */
export interface IEditorOption extends IElementOption {
    /**
     * 容器Div。可为一个html元素或一个选择器字符串。
     */
    container?: string|HTMLElement;

    /**
     * 样式选项。
     */
    style?: IJElementStyleDeclaration & {
        // 容器背景色
        containerBackgroundColor?: string;
    };
    
    /**
     * 初始化支持的字体
     */
    fonts?: Array<IJFontData>|{[key:string]: IJFontData};

    /**
     * 编辑器是否可以被编辑
     */
    editable?: boolean;
    
    /**
     * 初始属性值
     */
    data?: {width?: string|number; height?: string|number;}

    /**
     * 控制器选项
     */
    controllerOption?: IControllerOption;
}

/**
 * 变换描述接口，继承自 IStyleTransform 和 EventEmitter
 * @public
 */
export interface ITransform extends IStyleTransform, EventEmitter {
    from(data: IStyleTransform): void;
    // 生效
    apply(target?: TransformWatcher | Array<TransformWatcher>): void;

    // 绑定并刷新到目标上
    bind(target: TransformWatcher): void;
    unbind(target: TransformWatcher): void;

    toString(watchProps: Array<string>|undefined): string;

    toJSON(): IStyleTransform;
}
/**
 * Represents a transform watcher.
 * @public
 */
export interface TransformWatcher {
    target: any;
    watchProps?: Array<string>
}

/**
 * Provides methods for managing events.
 * @public
 */
export interface IJEvent {
    init(handler: EventListenerOrEventListenerObject, target?: JDomElement): void;
    target: JDomElement;
    /**
     * 绑定事件到html对象
     * @param name - 事件名称
     * @param  fun - 事件委托
     * @returns   返回当前绑定
     */
    on(name: string | Array<string>, fun: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions): any;
    /**
     * 从对象中移除事件到
     * @param name - 事件名称
     * @param  fun - 事件委托
     */
    off(name: string, fun: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions): this;
    
}

export interface IElementJSON {
    data: any;
    children: Array<IElementJSON>;
    target?: IElementJSON
}

/**
 * Represents a generic element.
 * @typeParam T - The type of the HTML element.
 * @public
 */
export interface IJElement<T extends JDomElement = JDomElement> extends EventEmitter {
    
    get id(): string;
    get type(): string;
    // 名称
    name: string;
    // 选项
    option: IElementOption;

    get children(): Array<IJElement<JDomElement>>;
    get dom(): T;
    parent: IJElement | undefined;
    // 当前编辑器
    editor: IJEditor;
    event: IJEvent;
    style: JElementCssStyle;
    data: JElementData;  
    /**
     * dom上的附加属性
     */
    attributes: StringKeyValue;

    get className(): string;
    set className(v: string);
    transform: ITransform;
    // 当前子元素最大的level层
    get childrenMaxLevel(): number;
    editable: boolean;
    visible: boolean;
    setDomStyle(name: string, value: string): void;
    css(name: string | Object, value?: string | number): this;
    attr(name: string, value?: string | number | undefined): any;
    move(dx: any, dy: any): void;
    // 把子元素按zIndex排序
    childrenSort(): Array<IJElement>;
    resize(w: any, h: any): void;
    addChild(child: IJElement | JDomElement, parent?: IJElement): IJElement<JDomElement>;
    remove(): void;
    removeChild(el: IJElement | JDomElement): void;
    // 通过ID获取子元素
    getChild(id: string): IJElement|undefined;
    /** 复制组件 */
    clone(): IJElement;
    // 清空
    clear(): void;

    toJSON(props?: any[], ig?: (p: IJElement) => boolean): IElementJSON;
    toString(): string;
    toHtml(): string;
    dispose(): void;
}

/**
 * Represents a base component.
 * @typeParam T - The type of the HTML element.
 * @public
 */
export interface IJBaseComponent<T extends JDomElement = JDomElement> extends IJElement<T> {
    target: IJElement<T>;

    /**
     * 类型名称
     */
    get typeName(): string;

    /**
     * 是否支持移动
     */
    moveable: boolean;

    get selected(): boolean;
    set selected(v: boolean);
    filters: IFilterManager;
    // 设置层级，指定数字或操作, next下一层，pre上一层，top顶层，bottom最底层
    setLevel(level: number|'next'|'pre'|'top'|'bottom'): void;
}
/**
 * 文字组件接口.
 * @public
 */
export interface IJTextComponent extends IJBaseComponent<HTMLDivElement> {
    /**该文字组件的数据 */
    data: JTextData;
    /**
     * 编辑状态
     */
    contenteditable:boolean;
}

/**
 * 图像组件接口.
 * 继承于 IJBaseComponent<HTMLImageElement>
 * @public
 */
export interface IJImageComponent extends IJBaseComponent<HTMLImageElement> {
    data: JImageData;
}
/**
 * @public
 */
export interface IJSvgComponent extends IJBaseComponent<SVGElement> {
    data: JSvgData;
}

/**
 * 控制器项接口.
 * 继承于 IJElement<HTMLDivElement>
 * 包含了一系列属性以及和拖拽相关的方法.
 * @public
 */
export interface IJControllerItem extends IJElement<HTMLDivElement> {
    /**控制器的方向（在画布中的位置） */
    dir: ItemType | string;
    /**控制器的尺寸 */
    size: number;
    /**控制器关联的编辑器 */
    editor: IJEditor;
    get isMoving(): boolean;
    set isMoving(v: boolean);
    /**拖拽开始的位置 */
    dragStartPosition: {
        x: number;
        y: number;
    };
    /**处理拖拽移动的方法 */
    onDragMove(event: MouseEvent, pos?: Point): void;
    /**处理拖拽开始的方法 */
    onDragStart(event: MouseEvent, pos?: Point): void;
    /**处理拖拽结束的方法 */
    onDragEnd(event: MouseEvent, pos?: Point): void;
    /**重置光标 */
    resetCursor(rotation: number): void;
}


/**
 * 控制器组件接口.
 * 继承于 IJControllerItem
 * 包含旋转控制器、偏移控制器等
 * @public
 */
export interface IJControllerComponent extends IJControllerItem {
    /**控制器项的集合 */
    items: IJControllerItem[];
    /**控制旋转的控制器项 */
    rotateItem: IJControllerItem;
    /**控制偏移的控制器项 */
    targetMoveItem: IJControllerItem;
    /**控制器关联的目标元素 */
    target: IJElement|undefined;
    /**控制器的内边距大小 */
    paddingSize: number;
    /**是否是编辑态 */
    isEditor: boolean;
    /**创建一个新的控制器项 */
    createItem(id: any, option: any): IJControllerItem;
    /**控制器变更的处理方法 */
    change(e: any): void;
    /**控制器应用到目标的方法*/
    applyToTarget(): void;
    /**重置控制器 */
    reset(isEditor?: boolean): void;
    /**绑定目标元素 */
    bind(target: IJElement): void;
    /**解绑目标元素 */
    unbind(target: IJElement): void;
}
/**
 * 编辑器接口.
 * 继承于 IJBaseComponent
 * 提供一系列和编辑器相关的方法.

 * @public
 */
export interface IJEditor extends IJBaseComponent {
    /** 查看元素属性 */
    view: IJElement<HTMLDivElement>;

    /** 文本编辑元素 */
    textEditElement?: IJElement<HTMLTextAreaElement>;

    /** @remarks 字体管理器 */
    fonts: IJFonts;

    /** 获取选定的元素 */
    get selectedElements(): Array<IJBaseComponent>;

    /**
     * 控制器
     */
    elementController: IJControllerComponent;

    /** 绑定事件 */
    bindEvent(dom?: JDomElement): void;

    /** 选择元素 */
    select(el: IJBaseComponent): void;

    /**
     * @remarks 通过ID获取子元素
     */
    getChild(id: string): IJElement|undefined;

    /** 尺寸调整 */
    resize(width?: string | number, height?: string | number): void;

/**
 * @remarks 转换至编辑器的位置
 */
    /**转换至编辑器的位置 */
    toEditorPosition(pos: Point, dom?: JDomElement): Point;
    /**清空编辑器 */
    clear(): void;
    scale(x: any, y?: any): void;
    /**注册组件 */
    regShape(name: string, shape: IJBaseComponent): IJBaseComponent;
    /**创建组件 */
    createShape(type: any, option?: {}): any;
    /**从JSON导入到编辑器 */
    fromJSON(data: any): void;
}

