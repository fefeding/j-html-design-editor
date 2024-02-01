
import EventEmiter from './eventEmitter';
import util from '../lib/util';

export const topZIndex = 10000;

/**
 * 支持的样式属性列表
 * @public
 */
export class JElementStyleDeclaration extends EventEmiter {
    accentColor?: string;
    alignContent?: string;
    alignItems?: string;
    alignSelf?: string;
    alignmentBaseline?: string;
    all?: string;
    animation?: string;
    animationComposition?: string;
    animationDelay?: string;
    animationDirection?: string;
    animationDuration?: string;
    animationFillMode?: string;
    animationIterationCount?: string;
    animationName?: string;
    animationPlayState?: string;
    animationTimingFunction?: string;
    appearance?: string;
    aspectRatio?: string;
    backdropFilter?: string;
    backfaceVisibility?: string;
    background?: string;
    backgroundAttachment?: string;
    backgroundBlendMode?: string;
    backgroundClip?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundOrigin?: string;
    backgroundPosition?: string;
    backgroundPositionX?: string;
    backgroundPositionY?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
    baselineShift?: string;
    blockSize?: string;
    border?: string;
    borderBlock?: string;
    borderBlockColor?: string;
    borderBlockEnd?: string;
    borderBlockEndColor?: string;
    borderBlockEndStyle?: string;
    borderBlockEndWidth?: string;
    borderBlockStart?: string;
    borderBlockStartColor?: string;
    borderBlockStartStyle?: string;
    borderBlockStartWidth?: string;
    borderBlockStyle?: string;
    borderBlockWidth?: string;
    borderBottom?: string;
    borderBottomColor?: string;
    borderBottomLeftRadius?: string;
    borderBottomRightRadius?: string;
    borderBottomStyle?: string;
    borderBottomWidth?: string;
    borderCollapse?: string;
    borderColor?: string;
    borderEndEndRadius?: string;
    borderEndStartRadius?: string;
    borderImage?: string;
    borderImageOutset?: string;
    borderImageRepeat?: string;
    borderImageSlice?: string;
    borderImageSource?: string;
    borderImageWidth?: string;
    borderInline?: string;
    borderInlineColor?: string;
    borderInlineEnd?: string;
    borderInlineEndColor?: string;
    borderInlineEndStyle?: string;
    borderInlineEndWidth?: string;
    borderInlineStart?: string;
    borderInlineStartColor?: string;
    borderInlineStartStyle?: string;
    borderInlineStartWidth?: string;
    borderInlineStyle?: string;
    borderInlineWidth?: string;
    borderLeft?: string;
    borderLeftColor?: string;
    borderLeftStyle?: string;
    borderLeftWidth?: string;
    borderRadius?: string;
    borderRight?: string;
    borderRightColor?: string;
    borderRightStyle?: string;
    borderRightWidth?: string;
    borderSpacing?: string;
    borderStartEndRadius?: string;
    borderStartStartRadius?: string;
    borderStyle?: string;
    borderTop?: string;
    borderTopColor?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
    borderTopStyle?: string;
    borderTopWidth?: string;
    borderWidth?: string;
    bottom?: string|number;
    boxShadow?: string;
    boxSizing?: string;
    breakAfter?: string;
    breakBefore?: string;
    breakInside?: string;
    captionSide?: string;
    caretColor?: string;
    clear?: string;
    clip?: string;
    clipPath?: string;
    clipRule?: string;
    color?: string;
    colorInterpolation?: string;
    colorInterpolationFilters?: string;
    colorScheme?: string;
    columnCount?: string;
    columnFill?: string;
    columnGap?: string;
    columnRule?: string;
    columnRuleColor?: string;
    columnRuleStyle?: string;
    columnRuleWidth?: string;
    columnSpan?: string;
    columnWidth?: string;
    columns?: string;
    contain?: string;
    containIntrinsicBlockSize?: string;
    containIntrinsicHeight?: string;
    containIntrinsicInlineSize?: string;
    containIntrinsicSize?: string;
    containIntrinsicWidth?: string;
    container?: string;
    containerName?: string;
    containerType?: string;
    content?: string;
    counterIncrement?: string;
    counterReset?: string;
    counterSet?: string;
    cssFloat?: string;
    cssText?: string;
    cursor?: string;
    direction?: string;
    display?: string;
    dominantBaseline?: string;
    emptyCells?: string;
    fill?: string;
    fillOpacity?: string;
    fillRule?: string;
    filter?: string;
    flex?: string;
    flexBasis?: string;
    flexDirection?: string;
    flexFlow?: string;
    flexGrow?: string;
    flexShrink?: string;
    flexWrap?: string;
    float?: string;
    floodColor?: string;
    floodOpacity?: string;
    font?: string;
    fontFamily?: string;
    fontFeatureSettings?: string;
    fontKerning?: string;
    fontOpticalSizing?: string;
    fontPalette?: string;
    fontSize?: string|number;
    fontSizeAdjust?: string;
    fontStretch?: string;
    fontStyle?: string;
    fontSynthesis?: string;
    fontSynthesisSmallCaps?: string;
    fontSynthesisStyle?: string;
    fontSynthesisWeight?: string;
    fontVariant?: string;
    fontVariantAlternates?: string;
    fontVariantCaps?: string;
    fontVariantEastAsian?: string;
    fontVariantLigatures?: string;
    fontVariantNumeric?: string;
    fontVariantPosition?: string;
    fontVariationSettings?: string;
    fontWeight?: string;
    forcedColorAdjust?: string;
    gap?: string;
    grid?: string;
    gridArea?: string;
    gridAutoColumns?: string;
    gridAutoFlow?: string;
    gridAutoRows?: string;
    gridColumn?: string;
    gridColumnEnd?: string;
    gridColumnGap?: string;
    gridColumnStart?: string;
    gridGap?: string;
    gridRow?: string;
    gridRowEnd?: string;
    gridRowGap?: string;
    gridRowStart?: string;
    gridTemplate?: string;
    gridTemplateAreas?: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    height?: string|number;
    hyphenateCharacter?: string;
    hyphens?: string;
    imageOrientation?: string;
    imageRendering?: string;
    inlineSize?: string;
    inset?: string;
    insetBlock?: string;
    insetBlockEnd?: string;
    insetBlockStart?: string;
    insetInline?: string;
    insetInlineEnd?: string;
    insetInlineStart?: string;
    isolation?: string;
    justifyContent?: string;
    justifyItems?: string;
    justifySelf?: string;
    left?: string|number;
    length?: number;
    letterSpacing?: string;
    lightingColor?: string;
    lineBreak?: string;
    lineHeight?: string;
    listStyle?: string;
    listStyleImage?: string;
    listStylePosition?: string;
    listStyleType?: string;
    margin?: string;
    marginBlock?: string;
    marginBlockEnd?: string;
    marginBlockStart?: string;
    marginBottom?: string;
    marginInline?: string;
    marginInlineEnd?: string;
    marginInlineStart?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marker?: string;
    markerEnd?: string;
    markerMid?: string;
    markerStart?: string;
    mask?: string;
    maskClip?: string;
    maskComposite?: string;
    maskImage?: string;
    maskMode?: string;
    maskOrigin?: string;
    maskPosition?: string;
    maskRepeat?: string;
    maskSize?: string;
    maskType?: string;
    mathStyle?: string;
    maxBlockSize?: string;
    maxHeight?: string;
    maxInlineSize?: string;
    maxWidth?: string;
    minBlockSize?: string;
    minHeight?: string;
    minInlineSize?: string;
    minWidth?: string;
    mixBlendMode?: string;
    objectFit?: string;
    objectPosition?: string;
    offset?: string;
    offsetDistance?: string;
    offsetPath?: string;
    offsetRotate?: string;
    opacity?: string;
    order?: string;
    orphans?: string;
    outline?: string;
    outlineColor?: string;
    outlineOffset?: string;
    outlineStyle?: string;
    outlineWidth?: string;
    overflow?: string;
    overflowAnchor?: string;
    overflowClipMargin?: string;
    overflowWrap?: string;
    overflowX?: string;
    overflowY?: string;
    overscrollBehavior?: string;
    overscrollBehaviorBlock?: string;
    overscrollBehaviorInline?: string;
    overscrollBehaviorX?: string;
    overscrollBehaviorY?: string;
    padding?: string;
    paddingBlock?: string;
    paddingBlockEnd?: string;
    paddingBlockStart?: string;
    paddingBottom?: string;
    paddingInline?: string;
    paddingInlineEnd?: string;
    paddingInlineStart?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    page?: string;
    pageBreakAfter?: string;
    pageBreakBefore?: string;
    pageBreakInside?: string;
    paintOrder?: string;
    parentRule?: CSSRule;
    perspective?: string;
    perspectiveOrigin?: string;
    placeContent?: string;
    placeItems?: string;
    placeSelf?: string;
    pointerEvents?: string;
    position?: string;
    printColorAdjust?: string;
    quotes?: string;
    resize?: string;
    right?: string|number;
    rotate?: string;
    rowGap?: string;
    rubyPosition?: string;
    scale?: string;
    scrollBehavior?: string;
    scrollMargin?: string;
    scrollMarginBlock?: string;
    scrollMarginBlockEnd?: string;
    scrollMarginBlockStart?: string;
    scrollMarginBottom?: string;
    scrollMarginInline?: string;
    scrollMarginInlineEnd?: string;
    scrollMarginInlineStart?: string;
    scrollMarginLeft?: string;
    scrollMarginRight?: string;
    scrollMarginTop?: string;
    scrollPadding?: string;
    scrollPaddingBlock?: string;
    scrollPaddingBlockEnd?: string;
    scrollPaddingBlockStart?: string;
    scrollPaddingBottom?: string;
    scrollPaddingInline?: string;
    scrollPaddingInlineEnd?: string;
    scrollPaddingInlineStart?: string;
    scrollPaddingLeft?: string;
    scrollPaddingRight?: string;
    scrollPaddingTop?: string;
    scrollSnapAlign?: string;
    scrollSnapStop?: string;
    scrollSnapType?: string;
    scrollbarGutter?: string;
    shapeImageThreshold?: string;
    shapeMargin?: string;
    shapeOutside?: string;
    shapeRendering?: string;
    stopColor?: string;
    stopOpacity?: string;
    stroke?: string;
    strokeDasharray?: string;
    strokeDashoffset?: string;
    strokeLinecap?: string;
    strokeLinejoin?: string;
    strokeMiterlimit?: string;
    strokeOpacity?: string;
    strokeWidth?: string;
    tabSize?: string;
    tableLayout?: string;
    textAlign?: string;
    textAlignLast?: string;
    textAnchor?: string;
    textCombineUpright?: string;
    textDecoration?: string;
    textDecorationColor?: string;
    textDecorationLine?: string;
    textDecorationSkipInk?: string;
    textDecorationStyle?: string;
    textDecorationThickness?: string;
    textEmphasis?: string;
    textEmphasisColor?: string;
    textEmphasisPosition?: string;
    textEmphasisStyle?: string;
    textIndent?: string;
    textOrientation?: string;
    textOverflow?: string;
    textRendering?: string;
    textShadow?: string;
    textTransform?: string;
    textUnderlineOffset?: string;
    textUnderlinePosition?: string;
    top?: string|number;
    touchAction?: string;
    transform?: string;
    transformBox?: string;
    transformOrigin?: string;
    transformStyle?: string;
    transition?: string;
    transitionDelay?: string;
    transitionDuration?: string;
    transitionProperty?: string;
    transitionTimingFunction?: string;
    translate?: string;
    unicodeBidi?: string;
    userSelect?: string;
    verticalAlign?: string;
    visibility?: string;
    whiteSpace?: string;
    widows?: string;
    width?: string|number;
    willChange?: string;
    wordBreak?: string;
    wordSpacing?: string;
    wordWrap?: string;
    writingMode?: string;
    zIndex?: string|number;
}
/**
 * @public
 */
export type IJElementStyleDeclaration = Omit<JElementStyleDeclaration, keyof EventEmiter>;

/**
 * 样式属性集合
 * @public
 */
export class JElementStyleProperty {
    accentColor: string='';
    alignContent: string='';
    alignItems: string='';
    alignSelf: string='';
    alignmentBaseline: string='';
    all: string='';
    animation: string='';
    animationComposition: string='';
    animationDelay: string='';
    animationDirection: string='';
    animationDuration: string='';
    animationFillMode: string='';
    animationIterationCount: string='';
    animationName: string='';
    animationPlayState: string='';
    animationTimingFunction: string='';
    appearance: string='';
    aspectRatio: string='';
    backdropFilter: string='';
    backfaceVisibility: string='';
    background: string='';
    backgroundAttachment: string='';
    backgroundBlendMode: string='';
    backgroundClip: string='';
    backgroundColor: string='';
    backgroundImage: string='';
    backgroundOrigin: string='';
    backgroundPosition: string='';
    backgroundPositionX: string='';
    backgroundPositionY: string='';
    backgroundRepeat: string='';
    backgroundSize: string='';
    baselineShift: string='';
    blockSize: string='';
    border: string='';
    borderBlock: string='';
    borderBlockColor: string='';
    borderBlockEnd: string='';
    borderBlockEndColor: string='';
    borderBlockEndStyle: string='';
    borderBlockEndWidth: string='';
    borderBlockStart: string='';
    borderBlockStartColor: string='';
    borderBlockStartStyle: string='';
    borderBlockStartWidth: string='';
    borderBlockStyle: string='';
    borderBlockWidth: string='';
    borderBottom: string='';
    borderBottomColor: string='';
    borderBottomLeftRadius: string='';
    borderBottomRightRadius: string='';
    borderBottomStyle: string='';
    borderBottomWidth: string='';
    borderCollapse: string='';
    borderColor: string='';
    borderEndEndRadius: string='';
    borderEndStartRadius: string='';
    borderImage: string='';
    borderImageOutset: string='';
    borderImageRepeat: string='';
    borderImageSlice: string='';
    borderImageSource: string='';
    borderImageWidth: string='';
    borderInline: string='';
    borderInlineColor: string='';
    borderInlineEnd: string='';
    borderInlineEndColor: string='';
    borderInlineEndStyle: string='';
    borderInlineEndWidth: string='';
    borderInlineStart: string='';
    borderInlineStartColor: string='';
    borderInlineStartStyle: string='';
    borderInlineStartWidth: string='';
    borderInlineStyle: string='';
    borderInlineWidth: string='';
    borderLeft: string='';
    borderLeftColor: string='';
    borderLeftStyle: string='';
    borderLeftWidth: string='';
    borderRadius: string='';
    borderRight: string='';
    borderRightColor: string='';
    borderRightStyle: string='';
    borderRightWidth: string='';
    borderSpacing: string='';
    borderStartEndRadius: string='';
    borderStartStartRadius: string='';
    borderStyle: string='';
    borderTop: string='';
    borderTopColor: string='';
    borderTopLeftRadius: string='';
    borderTopRightRadius: string='';
    borderTopStyle: string='';
    borderTopWidth: string='';
    borderWidth: string='';
    bottom: string='';
    boxShadow: string='';
    boxSizing: string='';
    breakAfter: string='';
    breakBefore: string='';
    breakInside: string='';
    captionSide: string='';
    caretColor: string='';
    clear: string='';
    clip: string='';
    clipPath: string='';
    clipRule: string='';
    color: string='';
    colorInterpolation: string='';
    colorInterpolationFilters: string='';
    colorScheme: string='';
    columnCount: string='';
    columnFill: string='';
    columnGap: string='';
    columnRule: string='';
    columnRuleColor: string='';
    columnRuleStyle: string='';
    columnRuleWidth: string='';
    columnSpan: string='';
    columnWidth: string='';
    columns: string='';
    contain: string='';
    containIntrinsicBlockSize: string='';
    containIntrinsicHeight: string='';
    containIntrinsicInlineSize: string='';
    containIntrinsicSize: string='';
    containIntrinsicWidth: string='';
    container: string='';
    containerName: string='';
    containerType: string='';
    content: string='';
    counterIncrement: string='';
    counterReset: string='';
    counterSet: string='';
    cssFloat: string='';
    cssText: string='';
    cursor: string='';
    direction: string='';
    display: string='';
    dominantBaseline: string='';
    emptyCells: string='';
    fill: string='';
    fillOpacity: string='';
    fillRule: string='';
    filter: string='';
    flex: string='';
    flexBasis: string='';
    flexDirection: string='';
    flexFlow: string='';
    flexGrow: string='';
    flexShrink: string='';
    flexWrap: string='';
    float: string='';
    floodColor: string='';
    floodOpacity: string='';
    font: string='';
    fontFamily: string='';
    fontFeatureSettings: string='';
    fontKerning: string='';
    fontOpticalSizing: string='';
    fontPalette: string='';
    fontSize: string|number='';
    fontSizeAdjust: string='';
    fontStretch: string='';
    fontStyle: string='';
    fontSynthesis: string='';
    fontSynthesisSmallCaps: string='';
    fontSynthesisStyle: string='';
    fontSynthesisWeight: string='';
    fontVariant: string='';
    fontVariantAlternates: string='';
    fontVariantCaps: string='';
    fontVariantEastAsian: string='';
    fontVariantLigatures: string='';
    fontVariantNumeric: string='';
    fontVariantPosition: string='';
    fontVariationSettings: string='';
    fontWeight: string='';
    forcedColorAdjust: string='';
    gap: string='';
    grid: string='';
    gridArea: string='';
    gridAutoColumns: string='';
    gridAutoFlow: string='';
    gridAutoRows: string='';
    gridColumn: string='';
    gridColumnEnd: string='';
    gridColumnGap: string='';
    gridColumnStart: string='';
    gridGap: string='';
    gridRow: string='';
    gridRowEnd: string='';
    gridRowGap: string='';
    gridRowStart: string='';
    gridTemplate: string='';
    gridTemplateAreas: string='';
    gridTemplateColumns: string='';
    gridTemplateRows: string='';
    height: string='';
    hyphenateCharacter: string='';
    hyphens: string='';
    imageOrientation: string='';
    imageRendering: string='';
    inlineSize: string='';
    inset: string='';
    insetBlock: string='';
    insetBlockEnd: string='';
    insetBlockStart: string='';
    insetInline: string='';
    insetInlineEnd: string='';
    insetInlineStart: string='';
    isolation: string='';
    justifyContent: string='';
    justifyItems: string='';
    justifySelf: string='';
    left: string='';
    length: number;
    letterSpacing: string='';
    lightingColor: string='';
    lineBreak: string='';
    lineHeight: string='';
    listStyle: string='';
    listStyleImage: string='';
    listStylePosition: string='';
    listStyleType: string='';
    margin: string='';
    marginBlock: string='';
    marginBlockEnd: string='';
    marginBlockStart: string='';
    marginBottom: string='';
    marginInline: string='';
    marginInlineEnd: string='';
    marginInlineStart: string='';
    marginLeft: string='';
    marginRight: string='';
    marginTop: string='';
    marker: string='';
    markerEnd: string='';
    markerMid: string='';
    markerStart: string='';
    mask: string='';
    maskClip: string='';
    maskComposite: string='';
    maskImage: string='';
    maskMode: string='';
    maskOrigin: string='';
    maskPosition: string='';
    maskRepeat: string='';
    maskSize: string='';
    maskType: string='';
    mathStyle: string='';
    maxBlockSize: string='';
    maxHeight: string='';
    maxInlineSize: string='';
    maxWidth: string='';
    minBlockSize: string='';
    minHeight: string='';
    minInlineSize: string='';
    minWidth: string='';
    mixBlendMode: string='';
    objectFit: string='';
    objectPosition: string='';
    offset: string='';
    offsetDistance: string='';
    offsetPath: string='';
    offsetRotate: string='';
    opacity: string='';
    order: string='';
    orphans: string='';
    outline: string='';
    outlineColor: string='';
    outlineOffset: string='';
    outlineStyle: string='';
    outlineWidth: string='';
    overflow: string='';
    overflowAnchor: string='';
    overflowClipMargin: string='';
    overflowWrap: string='';
    overflowX: string='';
    overflowY: string='';
    overscrollBehavior: string='';
    overscrollBehaviorBlock: string='';
    overscrollBehaviorInline: string='';
    overscrollBehaviorX: string='';
    overscrollBehaviorY: string='';
    padding: string='';
    paddingBlock: string='';
    paddingBlockEnd: string='';
    paddingBlockStart: string='';
    paddingBottom: string='';
    paddingInline: string='';
    paddingInlineEnd: string='';
    paddingInlineStart: string='';
    paddingLeft: string='';
    paddingRight: string='';
    paddingTop: string='';
    page: string='';
    pageBreakAfter: string='';
    pageBreakBefore: string='';
    pageBreakInside: string='';
    paintOrder: string='';
    parentRule: CSSRule;
    perspective: string='';
    perspectiveOrigin: string='';
    placeContent: string='';
    placeItems: string='';
    placeSelf: string='';
    pointerEvents: string='';
    position: string='';
    printColorAdjust: string='';
    quotes: string='';
    resize: string='';
    right: string='';
    rotate: string='';
    rowGap: string='';
    rubyPosition: string='';
    scale: string='';
    scrollBehavior: string='';
    scrollMargin: string='';
    scrollMarginBlock: string='';
    scrollMarginBlockEnd: string='';
    scrollMarginBlockStart: string='';
    scrollMarginBottom: string='';
    scrollMarginInline: string='';
    scrollMarginInlineEnd: string='';
    scrollMarginInlineStart: string='';
    scrollMarginLeft: string='';
    scrollMarginRight: string='';
    scrollMarginTop: string='';
    scrollPadding: string='';
    scrollPaddingBlock: string='';
    scrollPaddingBlockEnd: string='';
    scrollPaddingBlockStart: string='';
    scrollPaddingBottom: string='';
    scrollPaddingInline: string='';
    scrollPaddingInlineEnd: string='';
    scrollPaddingInlineStart: string='';
    scrollPaddingLeft: string='';
    scrollPaddingRight: string='';
    scrollPaddingTop: string='';
    scrollSnapAlign: string='';
    scrollSnapStop: string='';
    scrollSnapType: string='';
    scrollbarGutter: string='';
    shapeImageThreshold: string='';
    shapeMargin: string='';
    shapeOutside: string='';
    shapeRendering: string='';
    stopColor: string='';
    stopOpacity: string='';
    stroke: string='';
    strokeDasharray: string='';
    strokeDashoffset: string='';
    strokeLinecap: string='';
    strokeLinejoin: string='';
    strokeMiterlimit: string='';
    strokeOpacity: string='';
    strokeWidth: string='';
    tabSize: string='';
    tableLayout: string='';
    textAlign: string='';
    textAlignLast: string='';
    textAnchor: string='';
    textCombineUpright: string='';
    textDecoration: string='';
    textDecorationColor: string='';
    textDecorationLine: string='';
    textDecorationSkipInk: string='';
    textDecorationStyle: string='';
    textDecorationThickness: string='';
    textEmphasis: string='';
    textEmphasisColor: string='';
    textEmphasisPosition: string='';
    textEmphasisStyle: string='';
    textIndent: string='';
    textOrientation: string='';
    textOverflow: string='';
    textRendering: string='';
    textShadow: string='';
    textTransform: string='';
    textUnderlineOffset: string='';
    textUnderlinePosition: string='';
    top: string='';
    touchAction: string='';
    transform: string='';
    transformBox: string='';
    transformOrigin: string='';
    transformStyle: string='';
    transition: string='';
    transitionDelay: string='';
    transitionDuration: string='';
    transitionProperty: string='';
    transitionTimingFunction: string='';
    translate: string='';
    unicodeBidi: string='';
    userSelect: string='';
    verticalAlign: string='';
    visibility: string='';
    webkitAlignContent: string='';
    webkitAlignItems: string='';
    webkitAlignSelf: string='';
    webkitAnimation: string='';
    webkitAnimationDelay: string='';
    webkitAnimationDirection: string='';
    webkitAnimationDuration: string='';
    webkitAnimationFillMode: string='';
    webkitAnimationIterationCount: string='';
    webkitAnimationName: string='';
    webkitAnimationPlayState: string='';
    webkitAnimationTimingFunction: string='';
    webkitAppearance: string='';
    webkitBackfaceVisibility: string='';
    webkitBackgroundClip: string='';
    webkitBackgroundOrigin: string='';
    webkitBackgroundSize: string='';
    webkitBorderBottomLeftRadius: string='';
    webkitBorderBottomRightRadius: string='';
    webkitBorderRadius: string='';
    webkitBorderTopLeftRadius: string='';
    webkitBorderTopRightRadius: string='';
    webkitBoxAlign: string='';
    webkitBoxFlex: string='';
    webkitBoxOrdinalGroup: string='';
    webkitBoxOrient: string='';
    webkitBoxPack: string='';
    webkitBoxShadow: string='';
    webkitBoxSizing: string='';
    webkitFilter: string='';
    webkitFlex: string='';
    webkitFlexBasis: string='';
    webkitFlexDirection: string='';
    webkitFlexFlow: string='';
    webkitFlexGrow: string='';
    webkitFlexShrink: string='';
    webkitFlexWrap: string='';
    webkitJustifyContent: string='';
    webkitLineClamp: string='';
    webkitMask: string='';
    webkitMaskBoxImage: string='';
    webkitMaskBoxImageOutset: string='';
    webkitMaskBoxImageRepeat: string='';
    webkitMaskBoxImageSlice: string='';
    webkitMaskBoxImageSource: string='';
    webkitMaskBoxImageWidth: string='';
    webkitMaskClip: string='';
    webkitMaskComposite: string='';
    webkitMaskImage: string='';
    webkitMaskOrigin: string='';
    webkitMaskPosition: string='';
    webkitMaskRepeat: string='';
    webkitMaskSize: string='';
    webkitOrder: string='';
    webkitPerspective: string='';
    webkitPerspectiveOrigin: string='';
    webkitTextFillColor: string='';
    webkitTextSizeAdjust: string='';
    webkitTextStroke: string='';
    webkitTextStrokeColor: string='';
    webkitTextStrokeWidth: string='';
    webkitTransform: string='';
    webkitTransformOrigin: string='';
    webkitTransformStyle: string='';
    webkitTransition: string='';
    webkitTransitionDelay: string='';
    webkitTransitionDuration: string='';
    webkitTransitionProperty: string='';
    webkitTransitionTimingFunction: string='';
    webkitUserSelect: string='';
    whiteSpace: string='';
    widows: string='';
    width: string='';
    willChange: string='';
    wordBreak: string='';
    wordSpacing: string='';
    wordWrap: string='';
    writingMode: string='';
    zIndex: string|number=0;
}
/**
 * @public
 */
export default abstract class JElementCssStyle extends JElementStyleDeclaration {
    static styleNamesMap = [] as Array<string>;
    // 所有样式名称
    get names() {
        
        if(!JElementCssStyle.styleNamesMap.length) {
            const map = new JElementStyleProperty();
            const keys = Object.getOwnPropertyNames(map);
            for(const k of keys) {
                const t = typeof map[k];
                if(t === 'string' || t === 'number') JElementCssStyle.styleNamesMap.push(k);
            }
        }
        return JElementCssStyle.styleNamesMap;
    }

    // 把样式应用到元素或当前对象
    abstract apply(data: JElementStyleDeclaration, target?: CSSStyleDeclaration | JElementStyleDeclaration);

    // 样式对应的元素
    abstract applyTo(element: HTMLElement);

    // 设置样式
    abstract setStyle(name, value);

    // 触发所有更新到dom
    abstract refresh();

    // 转为json
    abstract toJSON(): JElementStyleProperty;
}

// 最外层容器默认样式
export const ContainerDefaultStyle = {
    position: 'absolute',
    left: '0',
    top: '0',
    width: 'auto',
    height: 'auto',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    margin: '0',
    zIndex: '0',
    display: 'inline-block',
    overflow: 'visible'
}

export const nwse = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAe1BMVEUAAAD///////////////////////////////////////////////////////////////////+anqaeoqqjpq7e3+Li4uRpbXhiZ3NjaHRfZHFZX2tAR1c/RlU7QVH////9/f3////////9/f3////9/f3///8PFyr////UYjabAAAAJ3RSTlMABAUMDRAREhckKS4wMjU2N6jAwMDHyMrMzM3P2tvd5Ojo6evr7PowgHoyAAAAAWJLR0QovbC1sgAAAJVJREFUKM+90dsSgiAQgGHIDkBUoqaVGRXE7vs/YSgz5QDX/pd8HGYWQpZqLQ8+WSTrb5yyLII91jdfi8cIJPYAUKEiObgaJ3JwgcFonkL1ucPjOUrJ5o+f0QURCi39QWFRCT2J83s2/yPsRAgP0vRzmOLaDNBBCkQ400EOFDaQgxLbcTB1AsyGUb5ofBXdjW1Xi/32F3U3EU6pnu/zAAAAAElFTkSuQmCC';
export const ns = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAmVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+oq7KusLevsriZm6Wdoamipa2jpq6Tl6CNkZqIjJX///98gYv///////////////8PFyr///8ipdpMAAAAMXRSTlMAAQIDBAUHCVpcXV5faGl3gIKDhIWImJydnp+mqaqxuLu/v7/AwMDAwcLDxMX7/P3+tV+LYwAAAAFiS0dEMkDSTMgAAAC/SURBVCjPfZLZEoIwDEWhClhAxQVFVDYVF1xI/v/jJBbRVvA8dJgcyL0zRdMamOsyrQV9gRiy1nmWtxgWYAaQ40oxbIk7ADKBbAZiDnBELgmOFQB0OnI09wsShW/rarxHwpPfHhMJieT1yMVXNtaIDMJudsjUGztF56qqKlHXJbj+vy5hDt91R6YkZp+MuSQm94sodL1NJWHF5Z7m50dsKSFReQA4lZGpxhsbTFPcGr+X3gsR1/2234Q5zte1PgEi+SemTJG1vwAAAABJRU5ErkJggg==';

// 操作杠指针
export const ControlerCursors = {
    'l': '',
    'lt': nwse,
    't': ns,
    'tr': '',
    'r': '',
    'rb': nwse,
    'b': ns,
    'lb': '',
    'rotate': 'pointer',
    'skew': 'pointer',
    // 根据角度旋转指针
    async get(dir: string, rotation: number=0) {
        if(dir === 'rotate' || dir === 'skew') return this[dir];
        const rotationKey = Number(rotation.toFixed(2));// 精度只取小数2位
        const key = rotationKey===0 ? dir: `${dir}_${rotationKey}`;
        let cursor = this[key];
        if(!cursor) {
            if(dir === 'l' || dir === 'r' || dir === 't' || dir === 'b') {
                // 如果没有旋转角度，则把ns转90度即可
                if(rotation === 0) {
                    cursor = await util.rotateImage(ns, Math.PI/2);
                    this['l'] = this['r'] = cursor;
                }
                // 如果有旋转角度，则获取标准的再转对应的角度
                else {
                    const normal = await this.get(dir, 0);
                    cursor = await util.rotateImage(normal, rotation);
                    this[key] = cursor;
                }
            }
            else if(dir === 'tr' || dir === 'lb' || dir === 'lt' || dir === 'rb') {
                // 如果没有旋转角度，则把nwse转90度即可
                if(rotation === 0) {
                    cursor = await util.rotateImage(nwse, Math.PI/2);
                    return this['tr'] = this['lb'] = cursor;
                }
                // 如果有旋转角度，则获取标准的再转对应的角度
                else {
                    const normal = await this.get(dir, 0);
                    cursor = await util.rotateImage(normal, rotation);
                    this[key] = cursor;
                }
            }
        }
        return cursor;
    }
}; 

export const ControlItemIcons = {    
    'rotate': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAAiK9MjKdUfKNYjKdUiKNYiKdUeHuAjKNYjKNYiKNYyMswiKNYiKNYiKNYiKNYhKNYiKdUiKNYiKNYjKdUjKNYgJ9cjJdYiKNYiKNYiKdUhJ9cjKNYiKdUdLNMrK9MiKNYiKNYiKdUiKNYjKNYjKdUjKdUjKNYjKdUjKdUjKdaUW7eVAAAAKnRSTlMAFdMY1/v4CPXo4wXuyLh6RfKRjWpAJxykb1tSTjARC8OslYVgOivQrqey7caqAAABM0lEQVRIx+2U6W6DMBCEDdSE+2wg950e3/s/YGOBQI0hMf+qKvODHYsZe9derXjh32C2PsU+BIcyCw3kVhnRIUj3z/TvEcTp1RGizs42BJvH+kqSbPtlFkP52LFc353oshCTMM8pJzpchuuwrLEs8fdDes9zRhwH0gG9DbY1khR+OKQfd9hkuv4Nbp/hrFIKXe+ANebIiHW9gJbod2fhN7zTq+Shpb/3UusQ2fGeuMw6rtBv1vxraX9UgNNwPV1l0NONmbdMd7jUenkFqRhzyKEr3/DZENNHDSOuKpq3zZlEBfPG3EVcVDRv/RX5VkzCAv9jkiFMyO+GwHb1eOgt4Kvq104hverJIMshea/CG61X3y6yeDb7nJMHyChwVTia1LS7HAMJ+MmyNp/gO2cmXvjD+AHprhpoJKiYYAAAAABJRU5ErkJggg==',
    'skew': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAABlY/97e/9kYv9kY/9nZ/9lY/9kYv9kY/9kYv9kY/9lY/9kYv9kY/9pYP9oYP9kYv9kYv9kY/9kYv9iYv9nY/9kYv9lYv9kYv9lYv9lY/9kYv9lYv9kY/9kYv9lZf9lY/9kYv9kYv9lYv9kYv9lY/9lY/+ktQNRAAAAJnRSTlMA/ATv3xHmW/V0TtO3khcNy8XBUh8U6ti+ppt5bksnGTqygmNEZ0ctpdUAAAEmSURBVEjH7VPbloIwDKSloAUqF6kgd123//+Ja+jSSpGqD74xbynJycxkcDZs+BIOAa2ygrgIuaQoKxocbN03FooFQnZ73u1RIlZQUG/ZvzsJC9zGaOeZkEAJa9ou9zD28q5tWIKERDZb0kvu+3MQm5vj4LyXWh7k42Rce/VW1F1d+J5g9fILddmv29eX0PGj6vReRdhmOI7uLakqgWTnWNGBRFWBo7l9IAeRqgKGFzulCzirjyZAxGRb6/tHM2GREq1VC7eWtvpCoN3M1nq0NX3gwAt9OBiACfNwZKaSRyoaVST0xJBN0UjNMzVG+NCog0zho0tP4noebwKP/2zq+Ll5AwuNAYpEyIZXv+hJU3I4d17iiKToN6Fs/WDgg34djQ0bvo4/naYvgs8xmvwAAAAASUVORK5CYII='
}
