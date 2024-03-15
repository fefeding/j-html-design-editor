<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [j-html-design-editor](./j-html-design-editor.md) &gt; [IEditorOption](./j-html-design-editor.ieditoroption.md)

## IEditorOption interface

编辑器选项接口

**Signature:**

```typescript
export interface IEditorOption 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [container?](./j-html-design-editor.ieditoroption.container.md) |  | string \| HTMLElement | _(Optional)_ 容器Div。可为一个html元素或一个选择器字符串。 |
|  [controllerOption?](./j-html-design-editor.ieditoroption.controlleroption.md) |  | [IControllerOption](./j-html-design-editor.icontrolleroption.md) | _(Optional)_ 控制器选项 |
|  [data?](./j-html-design-editor.ieditoroption.data.md) |  |` { width?: string \| number; height?: string \| number; } `| _(Optional)_ 初始属性值 |
|  [editable?](./j-html-design-editor.ieditoroption.editable.md) |  | boolean | _(Optional)_ 编辑器是否可以被编辑 |
|  [fonts?](./j-html-design-editor.ieditoroption.fonts.md) |  | Array&lt;[IJFontData](./j-html-design-editor.ijfontdata.md)<!-- -->&gt; \|` { \[key: string\]: [IJFontData](./j-html-design-editor.ijfontdata.md)<!-- -->; } `| _(Optional)_ 初始化支持的字体 |
|  [style?](./j-html-design-editor.ieditoroption.style.md) |  | [IJElementStyleDeclaration](./j-html-design-editor.ijelementstyledeclaration.md) &amp; { containerBackgroundColor?: string; } | _(Optional)_ 样式选项。 |
