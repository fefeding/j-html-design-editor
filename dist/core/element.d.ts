import EventEmiter from 'eventemitter3';
import JStyleMap from '../constant/styleMap';
export default class JElement extends EventEmiter {
    constructor(option: any);
    init(option: any): void;
    id: string;
    type: string;
    children: JElement[];
    container: HTMLDivElement;
    parent: JElement | undefined;
    style: JStyleMap;
    get x(): number | string;
    set x(v: number | string);
    get y(): number | string;
    set y(v: number | string);
    get top(): string | number;
    set top(v: string | number);
    get left(): string | number;
    set left(v: string | number);
    get right(): number | string;
    set right(v: number | string);
    get bottom(): number | string;
    set bottom(v: number | string);
    get width(): string | number;
    set width(v: string | number);
    get height(): string | number;
    set height(v: string | number);
    set rotation(v: number);
    get rotation(): number;
    set angle(v: number);
    get angle(): number;
    get visible(): boolean;
    set visible(v: boolean);
    get zIndex(): number;
    set zIndex(v: number);
    editable: boolean;
    bindEvent(): void;
    move(dx: any, dy: any): void;
    resize(w: any, h: any): void;
    addChild(child: JElement): this;
    remove(): void;
    removeChild(el: JElement): JElement[];
    toControlPosition(p: any): any;
    toRenderPosition(p: any): any;
    toElementAnchorPosition(p: any): any;
    toJSON(): {};
    toString(): string;
}
