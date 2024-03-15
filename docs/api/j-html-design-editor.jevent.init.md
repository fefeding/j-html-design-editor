<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [j-html-design-editor](./j-html-design-editor.md) &gt; [JEvent](./j-html-design-editor.jevent.md) &gt; [init](./j-html-design-editor.jevent.init.md)

## JEvent.init() method

初始化所有支持的事件，在init之前不要on，不然在init的时候会被释放掉。

**Signature:**

```typescript
init(handler: EventListenerOrEventListenerObject, target?: HTMLElement): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  handler | EventListenerOrEventListenerObject | 事件处理函数 |
|  target | HTMLElement | _(Optional)_ 元素 |

**Returns:**

void
