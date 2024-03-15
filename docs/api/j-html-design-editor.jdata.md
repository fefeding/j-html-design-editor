<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [j-html-design-editor](./j-html-design-editor.md) &gt; [JData](./j-html-design-editor.jdata.md)

## JData class

JData 类：提供了一种方式来处理和管理数据

**Signature:**

```typescript
export default class JData<T extends object> extends EventEmiter implements IData`<T>` 
```
**Extends:** EventEmiter

**Implements:** [IData](./j-html-design-editor.idata.md)<!-- -->&lt;T&gt;

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(data)](./j-html-design-editor.jdata._constructor_.md) |  | Constructs a new instance of the <code>JData</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [data](./j-html-design-editor.jdata.data.md) |  | T | 用于存放数据的对象 |
|  [watcher](./j-html-design-editor.jdata.watcher.md) |  | Map&lt;string, [DataChangeWatch](./j-html-design-editor.datachangewatch.md)<!-- -->\[\]&gt; | 存放数据变化的监听器 |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [createProxy(data)](./j-html-design-editor.jdata.createproxy.md) | <code>static</code> |  |
|  [from(data)](./j-html-design-editor.jdata.from.md) |  | 从对象中导入数据到当前实例 |
|  [getProperty(name)](./j-html-design-editor.jdata.getproperty.md) |  |  |
|  [map(fun)](./j-html-design-editor.jdata.map.md) |  |  |
|  [propertyChange(name, value)](./j-html-design-editor.jdata.propertychange.md) |  |  |
|  [toJSON()](./j-html-design-editor.jdata.tojson.md) |  | 导出数据为 JSON 对象 |
|  [watch(name, watcher)](./j-html-design-editor.jdata.watch.md) |  |  |
