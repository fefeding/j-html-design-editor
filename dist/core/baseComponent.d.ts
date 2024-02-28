import { IFilterManager } from 'j-css-filters';
import { IJBaseComponent, IJElement } from '../constant/types';
import JElement from '../core/element';
/**
 * @public
 */
export default class JBaseComponent<T extends HTMLElement = HTMLElement> extends JElement<T> implements IJBaseComponent {
    constructor(option?: any);
    target: IJElement<T>;
    filters: IFilterManager;
    /**
     * 类型名称
     */
    get typeName(): string;
    /**
     * 当前组件new指向的class，可用于复制
     */
    protected componentType: any;
    private _selected;
    get selected(): boolean;
    set selected(v: boolean);
    setLevel(level: number | 'next' | 'pre' | 'top' | 'bottom'): void;
    private getMyNextLevelChildren;
    private getMyPreLevelChildren;
    setDomStyle(name: string, value: string): void;
    toJSON(props?: any[]): import("../constant/types").IElementJSON;
    /**
     * 复制当前组件
     * @returns 当前组件同类型副本
     */
    clone(): IJBaseComponent;
}
