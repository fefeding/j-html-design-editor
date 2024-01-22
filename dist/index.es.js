/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var eventemitter3 = {exports: {}};

eventemitter3.exports;

(function (module) {

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	{
	  module.exports = EventEmitter;
	} 
} (eventemitter3));

var eventemitter3Exports = eventemitter3.exports;
var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

// 支持的样式属性列表
var JElementStyleMap = /** @class */ (function () {
    function JElementStyleMap() {
    }
    return JElementStyleMap;
}());
// 样式属性集合
var JElementStyleProperty = /** @class */ (function (_super) {
    __extends(JElementStyleProperty, _super);
    function JElementStyleProperty() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.accentColor = '';
        _this.alignContent = '';
        _this.alignItems = '';
        _this.alignSelf = '';
        _this.alignmentBaseline = '';
        _this.all = '';
        _this.animation = '';
        _this.animationComposition = '';
        _this.animationDelay = '';
        _this.animationDirection = '';
        _this.animationDuration = '';
        _this.animationFillMode = '';
        _this.animationIterationCount = '';
        _this.animationName = '';
        _this.animationPlayState = '';
        _this.animationTimingFunction = '';
        _this.appearance = '';
        _this.aspectRatio = '';
        _this.backdropFilter = '';
        _this.backfaceVisibility = '';
        _this.background = '';
        _this.backgroundAttachment = '';
        _this.backgroundBlendMode = '';
        _this.backgroundClip = '';
        _this.backgroundColor = '';
        _this.backgroundImage = '';
        _this.backgroundOrigin = '';
        _this.backgroundPosition = '';
        _this.backgroundPositionX = '';
        _this.backgroundPositionY = '';
        _this.backgroundRepeat = '';
        _this.backgroundSize = '';
        _this.baselineShift = '';
        _this.blockSize = '';
        _this.border = '';
        _this.borderBlock = '';
        _this.borderBlockColor = '';
        _this.borderBlockEnd = '';
        _this.borderBlockEndColor = '';
        _this.borderBlockEndStyle = '';
        _this.borderBlockEndWidth = '';
        _this.borderBlockStart = '';
        _this.borderBlockStartColor = '';
        _this.borderBlockStartStyle = '';
        _this.borderBlockStartWidth = '';
        _this.borderBlockStyle = '';
        _this.borderBlockWidth = '';
        _this.borderBottom = '';
        _this.borderBottomColor = '';
        _this.borderBottomLeftRadius = '';
        _this.borderBottomRightRadius = '';
        _this.borderBottomStyle = '';
        _this.borderBottomWidth = '';
        _this.borderCollapse = '';
        _this.borderColor = '';
        _this.borderEndEndRadius = '';
        _this.borderEndStartRadius = '';
        _this.borderImage = '';
        _this.borderImageOutset = '';
        _this.borderImageRepeat = '';
        _this.borderImageSlice = '';
        _this.borderImageSource = '';
        _this.borderImageWidth = '';
        _this.borderInline = '';
        _this.borderInlineColor = '';
        _this.borderInlineEnd = '';
        _this.borderInlineEndColor = '';
        _this.borderInlineEndStyle = '';
        _this.borderInlineEndWidth = '';
        _this.borderInlineStart = '';
        _this.borderInlineStartColor = '';
        _this.borderInlineStartStyle = '';
        _this.borderInlineStartWidth = '';
        _this.borderInlineStyle = '';
        _this.borderInlineWidth = '';
        _this.borderLeft = '';
        _this.borderLeftColor = '';
        _this.borderLeftStyle = '';
        _this.borderLeftWidth = '';
        _this.borderRadius = '';
        _this.borderRight = '';
        _this.borderRightColor = '';
        _this.borderRightStyle = '';
        _this.borderRightWidth = '';
        _this.borderSpacing = '';
        _this.borderStartEndRadius = '';
        _this.borderStartStartRadius = '';
        _this.borderStyle = '';
        _this.borderTop = '';
        _this.borderTopColor = '';
        _this.borderTopLeftRadius = '';
        _this.borderTopRightRadius = '';
        _this.borderTopStyle = '';
        _this.borderTopWidth = '';
        _this.borderWidth = '';
        _this.bottom = '';
        _this.boxShadow = '';
        _this.boxSizing = '';
        _this.breakAfter = '';
        _this.breakBefore = '';
        _this.breakInside = '';
        _this.captionSide = '';
        _this.caretColor = '';
        _this.clear = '';
        _this.clip = '';
        _this.clipPath = '';
        _this.clipRule = '';
        _this.color = '';
        _this.colorInterpolation = '';
        _this.colorInterpolationFilters = '';
        _this.colorScheme = '';
        _this.columnCount = '';
        _this.columnFill = '';
        _this.columnGap = '';
        _this.columnRule = '';
        _this.columnRuleColor = '';
        _this.columnRuleStyle = '';
        _this.columnRuleWidth = '';
        _this.columnSpan = '';
        _this.columnWidth = '';
        _this.columns = '';
        _this.contain = '';
        _this.containIntrinsicBlockSize = '';
        _this.containIntrinsicHeight = '';
        _this.containIntrinsicInlineSize = '';
        _this.containIntrinsicSize = '';
        _this.containIntrinsicWidth = '';
        _this.container = '';
        _this.containerName = '';
        _this.containerType = '';
        _this.content = '';
        _this.counterIncrement = '';
        _this.counterReset = '';
        _this.counterSet = '';
        _this.cssFloat = '';
        _this.cssText = '';
        _this.cursor = '';
        _this.direction = '';
        _this.display = '';
        _this.dominantBaseline = '';
        _this.emptyCells = '';
        _this.fill = '';
        _this.fillOpacity = '';
        _this.fillRule = '';
        _this.filter = '';
        _this.flex = '';
        _this.flexBasis = '';
        _this.flexDirection = '';
        _this.flexFlow = '';
        _this.flexGrow = '';
        _this.flexShrink = '';
        _this.flexWrap = '';
        _this.float = '';
        _this.floodColor = '';
        _this.floodOpacity = '';
        _this.font = '';
        _this.fontFamily = '';
        _this.fontFeatureSettings = '';
        _this.fontKerning = '';
        _this.fontOpticalSizing = '';
        _this.fontPalette = '';
        _this.fontSize = '';
        _this.fontSizeAdjust = '';
        _this.fontStretch = '';
        _this.fontStyle = '';
        _this.fontSynthesis = '';
        _this.fontSynthesisSmallCaps = '';
        _this.fontSynthesisStyle = '';
        _this.fontSynthesisWeight = '';
        _this.fontVariant = '';
        _this.fontVariantAlternates = '';
        _this.fontVariantCaps = '';
        _this.fontVariantEastAsian = '';
        _this.fontVariantLigatures = '';
        _this.fontVariantNumeric = '';
        _this.fontVariantPosition = '';
        _this.fontVariationSettings = '';
        _this.fontWeight = '';
        _this.forcedColorAdjust = '';
        _this.gap = '';
        _this.grid = '';
        _this.gridArea = '';
        _this.gridAutoColumns = '';
        _this.gridAutoFlow = '';
        _this.gridAutoRows = '';
        _this.gridColumn = '';
        _this.gridColumnEnd = '';
        _this.gridColumnGap = '';
        _this.gridColumnStart = '';
        _this.gridGap = '';
        _this.gridRow = '';
        _this.gridRowEnd = '';
        _this.gridRowGap = '';
        _this.gridRowStart = '';
        _this.gridTemplate = '';
        _this.gridTemplateAreas = '';
        _this.gridTemplateColumns = '';
        _this.gridTemplateRows = '';
        _this.height = '';
        _this.hyphenateCharacter = '';
        _this.hyphens = '';
        _this.imageOrientation = '';
        _this.imageRendering = '';
        _this.inlineSize = '';
        _this.inset = '';
        _this.insetBlock = '';
        _this.insetBlockEnd = '';
        _this.insetBlockStart = '';
        _this.insetInline = '';
        _this.insetInlineEnd = '';
        _this.insetInlineStart = '';
        _this.isolation = '';
        _this.justifyContent = '';
        _this.justifyItems = '';
        _this.justifySelf = '';
        _this.left = '';
        _this.letterSpacing = '';
        _this.lightingColor = '';
        _this.lineBreak = '';
        _this.lineHeight = '';
        _this.listStyle = '';
        _this.listStyleImage = '';
        _this.listStylePosition = '';
        _this.listStyleType = '';
        _this.margin = '';
        _this.marginBlock = '';
        _this.marginBlockEnd = '';
        _this.marginBlockStart = '';
        _this.marginBottom = '';
        _this.marginInline = '';
        _this.marginInlineEnd = '';
        _this.marginInlineStart = '';
        _this.marginLeft = '';
        _this.marginRight = '';
        _this.marginTop = '';
        _this.marker = '';
        _this.markerEnd = '';
        _this.markerMid = '';
        _this.markerStart = '';
        _this.mask = '';
        _this.maskClip = '';
        _this.maskComposite = '';
        _this.maskImage = '';
        _this.maskMode = '';
        _this.maskOrigin = '';
        _this.maskPosition = '';
        _this.maskRepeat = '';
        _this.maskSize = '';
        _this.maskType = '';
        _this.mathStyle = '';
        _this.maxBlockSize = '';
        _this.maxHeight = '';
        _this.maxInlineSize = '';
        _this.maxWidth = '';
        _this.minBlockSize = '';
        _this.minHeight = '';
        _this.minInlineSize = '';
        _this.minWidth = '';
        _this.mixBlendMode = '';
        _this.objectFit = '';
        _this.objectPosition = '';
        _this.offset = '';
        _this.offsetDistance = '';
        _this.offsetPath = '';
        _this.offsetRotate = '';
        _this.opacity = '';
        _this.order = '';
        _this.orphans = '';
        _this.outline = '';
        _this.outlineColor = '';
        _this.outlineOffset = '';
        _this.outlineStyle = '';
        _this.outlineWidth = '';
        _this.overflow = '';
        _this.overflowAnchor = '';
        _this.overflowClipMargin = '';
        _this.overflowWrap = '';
        _this.overflowX = '';
        _this.overflowY = '';
        _this.overscrollBehavior = '';
        _this.overscrollBehaviorBlock = '';
        _this.overscrollBehaviorInline = '';
        _this.overscrollBehaviorX = '';
        _this.overscrollBehaviorY = '';
        _this.padding = '';
        _this.paddingBlock = '';
        _this.paddingBlockEnd = '';
        _this.paddingBlockStart = '';
        _this.paddingBottom = '';
        _this.paddingInline = '';
        _this.paddingInlineEnd = '';
        _this.paddingInlineStart = '';
        _this.paddingLeft = '';
        _this.paddingRight = '';
        _this.paddingTop = '';
        _this.page = '';
        _this.pageBreakAfter = '';
        _this.pageBreakBefore = '';
        _this.pageBreakInside = '';
        _this.paintOrder = '';
        _this.perspective = '';
        _this.perspectiveOrigin = '';
        _this.placeContent = '';
        _this.placeItems = '';
        _this.placeSelf = '';
        _this.pointerEvents = '';
        _this.position = '';
        _this.printColorAdjust = '';
        _this.quotes = '';
        _this.resize = '';
        _this.right = '';
        _this.rotate = '';
        _this.rowGap = '';
        _this.rubyPosition = '';
        _this.scale = '';
        _this.scrollBehavior = '';
        _this.scrollMargin = '';
        _this.scrollMarginBlock = '';
        _this.scrollMarginBlockEnd = '';
        _this.scrollMarginBlockStart = '';
        _this.scrollMarginBottom = '';
        _this.scrollMarginInline = '';
        _this.scrollMarginInlineEnd = '';
        _this.scrollMarginInlineStart = '';
        _this.scrollMarginLeft = '';
        _this.scrollMarginRight = '';
        _this.scrollMarginTop = '';
        _this.scrollPadding = '';
        _this.scrollPaddingBlock = '';
        _this.scrollPaddingBlockEnd = '';
        _this.scrollPaddingBlockStart = '';
        _this.scrollPaddingBottom = '';
        _this.scrollPaddingInline = '';
        _this.scrollPaddingInlineEnd = '';
        _this.scrollPaddingInlineStart = '';
        _this.scrollPaddingLeft = '';
        _this.scrollPaddingRight = '';
        _this.scrollPaddingTop = '';
        _this.scrollSnapAlign = '';
        _this.scrollSnapStop = '';
        _this.scrollSnapType = '';
        _this.scrollbarGutter = '';
        _this.shapeImageThreshold = '';
        _this.shapeMargin = '';
        _this.shapeOutside = '';
        _this.shapeRendering = '';
        _this.stopColor = '';
        _this.stopOpacity = '';
        _this.stroke = '';
        _this.strokeDasharray = '';
        _this.strokeDashoffset = '';
        _this.strokeLinecap = '';
        _this.strokeLinejoin = '';
        _this.strokeMiterlimit = '';
        _this.strokeOpacity = '';
        _this.strokeWidth = '';
        _this.tabSize = '';
        _this.tableLayout = '';
        _this.textAlign = '';
        _this.textAlignLast = '';
        _this.textAnchor = '';
        _this.textCombineUpright = '';
        _this.textDecoration = '';
        _this.textDecorationColor = '';
        _this.textDecorationLine = '';
        _this.textDecorationSkipInk = '';
        _this.textDecorationStyle = '';
        _this.textDecorationThickness = '';
        _this.textEmphasis = '';
        _this.textEmphasisColor = '';
        _this.textEmphasisPosition = '';
        _this.textEmphasisStyle = '';
        _this.textIndent = '';
        _this.textOrientation = '';
        _this.textOverflow = '';
        _this.textRendering = '';
        _this.textShadow = '';
        _this.textTransform = '';
        _this.textUnderlineOffset = '';
        _this.textUnderlinePosition = '';
        _this.top = '';
        _this.touchAction = '';
        _this.transform = '';
        _this.transformBox = '';
        _this.transformOrigin = '';
        _this.transformStyle = '';
        _this.transition = '';
        _this.transitionDelay = '';
        _this.transitionDuration = '';
        _this.transitionProperty = '';
        _this.transitionTimingFunction = '';
        _this.translate = '';
        _this.unicodeBidi = '';
        _this.userSelect = '';
        _this.verticalAlign = '';
        _this.visibility = '';
        _this.webkitAlignContent = '';
        _this.webkitAlignItems = '';
        _this.webkitAlignSelf = '';
        _this.webkitAnimation = '';
        _this.webkitAnimationDelay = '';
        _this.webkitAnimationDirection = '';
        _this.webkitAnimationDuration = '';
        _this.webkitAnimationFillMode = '';
        _this.webkitAnimationIterationCount = '';
        _this.webkitAnimationName = '';
        _this.webkitAnimationPlayState = '';
        _this.webkitAnimationTimingFunction = '';
        _this.webkitAppearance = '';
        _this.webkitBackfaceVisibility = '';
        _this.webkitBackgroundClip = '';
        _this.webkitBackgroundOrigin = '';
        _this.webkitBackgroundSize = '';
        _this.webkitBorderBottomLeftRadius = '';
        _this.webkitBorderBottomRightRadius = '';
        _this.webkitBorderRadius = '';
        _this.webkitBorderTopLeftRadius = '';
        _this.webkitBorderTopRightRadius = '';
        _this.webkitBoxAlign = '';
        _this.webkitBoxFlex = '';
        _this.webkitBoxOrdinalGroup = '';
        _this.webkitBoxOrient = '';
        _this.webkitBoxPack = '';
        _this.webkitBoxShadow = '';
        _this.webkitBoxSizing = '';
        _this.webkitFilter = '';
        _this.webkitFlex = '';
        _this.webkitFlexBasis = '';
        _this.webkitFlexDirection = '';
        _this.webkitFlexFlow = '';
        _this.webkitFlexGrow = '';
        _this.webkitFlexShrink = '';
        _this.webkitFlexWrap = '';
        _this.webkitJustifyContent = '';
        _this.webkitLineClamp = '';
        _this.webkitMask = '';
        _this.webkitMaskBoxImage = '';
        _this.webkitMaskBoxImageOutset = '';
        _this.webkitMaskBoxImageRepeat = '';
        _this.webkitMaskBoxImageSlice = '';
        _this.webkitMaskBoxImageSource = '';
        _this.webkitMaskBoxImageWidth = '';
        _this.webkitMaskClip = '';
        _this.webkitMaskComposite = '';
        _this.webkitMaskImage = '';
        _this.webkitMaskOrigin = '';
        _this.webkitMaskPosition = '';
        _this.webkitMaskRepeat = '';
        _this.webkitMaskSize = '';
        _this.webkitOrder = '';
        _this.webkitPerspective = '';
        _this.webkitPerspectiveOrigin = '';
        _this.webkitTextFillColor = '';
        _this.webkitTextSizeAdjust = '';
        _this.webkitTextStroke = '';
        _this.webkitTextStrokeColor = '';
        _this.webkitTextStrokeWidth = '';
        _this.webkitTransform = '';
        _this.webkitTransformOrigin = '';
        _this.webkitTransformStyle = '';
        _this.webkitTransition = '';
        _this.webkitTransitionDelay = '';
        _this.webkitTransitionDuration = '';
        _this.webkitTransitionProperty = '';
        _this.webkitTransitionTimingFunction = '';
        _this.webkitUserSelect = '';
        _this.whiteSpace = '';
        _this.widows = '';
        _this.width = '';
        _this.willChange = '';
        _this.wordBreak = '';
        _this.wordSpacing = '';
        _this.wordWrap = '';
        _this.writingMode = '';
        _this.zIndex = '';
        return _this;
    }
    return JElementStyleProperty;
}(JElementStyleMap));

var StyleNamesMap;
var JElementStyle = /** @class */ (function (_super) {
    __extends(JElementStyle, _super);
    function JElementStyle(option) {
        var _this = _super.call(this) || this;
        if (option) {
            _this.apply(option);
        }
        return _this;
    }
    Object.defineProperty(JElementStyle.prototype, "names", {
        // 所有样式名称
        get: function () {
            if (!StyleNamesMap) {
                var map = new JElementStyleProperty();
                StyleNamesMap = Object.getOwnPropertyNames(map);
            }
            return StyleNamesMap;
        },
        enumerable: false,
        configurable: true
    });
    // 把样式应用到元素或当前对象
    JElementStyle.prototype.apply = function (data, target) {
        var e_1, _a;
        if (target === void 0) { target = this; }
        try {
            for (var _b = __values(this.names), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_1 = _c.value;
                if (typeof name_1 !== 'string')
                    continue;
                if (typeof data[name_1] === 'string')
                    target[name_1] = data[name_1];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return target;
    };
    // 样式对应的元素
    JElementStyle.prototype.applyTo = function (element) {
        this.apply(this, element.style);
    };
    return JElementStyle;
}(JElementStyleMap));

var util = {
    // 是否是数字
    isNumber: function (v) {
        return typeof v === 'number' || /\s*[\d\.]+\s*/.test(v);
    },
    // 是否是带像素单位的字符串
    isPXNumber: function (v) {
        return /^\s*[\d\.]+\s*px\s*/i.test(v);
    }
};

var JElement = /** @class */ (function (_super) {
    __extends(JElement, _super);
    function JElement(option) {
        var _this = _super.call(this) || this;
        _this.id = '';
        // 类型名称
        _this.type = '';
        // 子元素
        _this.children = [];
        // 控件最外层的容器
        _this.container = document.createElement('div');
        // 是否可以编辑
        _this.editable = true;
        _this.id = option.id || v4().replace(/-/g, '');
        _this.type = option.type || '';
        var numberStyleMap = ['left', 'top', 'right', 'bottom', 'width', 'height'];
        var style = new JElementStyle(option.style);
        // 样式代理处理
        _this.style = new Proxy(style, {
            get: function (target, p, receiver) {
                var v = target[p];
                // 数字样式，处理px问题
                if (typeof p === 'string' && numberStyleMap.includes(p)) {
                    if (v === '0')
                        return 0;
                    if (util.isPXNumber(v))
                        return parseFloat(v);
                }
                return v;
            },
            set: function (target, p, value, receiver) {
                // 非白名单样式不支持设置
                if (typeof p !== 'string' || !style.names.includes(p))
                    return false;
                // 数字样式，处理px问题
                if (numberStyleMap.includes(p)) {
                    target[p] = typeof value === 'number' || util.isNumber(value) ? "".concat(value, "px") : value;
                }
                else {
                    target[p] = value;
                }
                return true;
            }
        });
        return _this;
    }
    JElement.prototype.init = function (option) {
    };
    Object.defineProperty(JElement.prototype, "x", {
        // 坐标X
        get: function () {
            var v = this.style.left || 0;
            return v;
        },
        set: function (v) {
            this.style.left = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "y", {
        // 坐标Y
        get: function () {
            var v = this.style.top || 0;
            return v;
        },
        set: function (v) {
            this.style.top = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "top", {
        get: function () {
            return this.y;
        },
        set: function (v) {
            this.y = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "left", {
        get: function () {
            return this.x;
        },
        set: function (v) {
            this.x = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "right", {
        // 坐标right
        get: function () {
            var v = this.style.right || 0;
            return v;
        },
        set: function (v) {
            this.style.right = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "bottom", {
        // 坐标bottom
        get: function () {
            var v = this.style.bottom || 0;
            return v;
        },
        set: function (v) {
            this.style.bottom = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "width", {
        get: function () {
            return this.style.width || 0;
        },
        set: function (v) {
            this.style.width = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "height", {
        get: function () {
            return this.style.height || 0;
        },
        set: function (v) {
            this.style.height = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "rotation", {
        get: function () {
            var v = this.style.rotate;
            if (/^\s*[\d\.]+\s*deg\s*/i.test(v))
                return parseFloat(v);
            else if (/^\s*[\d\.]+\s*rad\s*/i.test(v)) {
                return this.angle * (180 / Math.PI);
            }
            return Number(v);
        },
        // 旋转角度
        set: function (v) {
            this.style.rotate = "".concat(v, "deg");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "angle", {
        get: function () {
            var v = this.style.rotate;
            if (/^\s*[\d\.]+\s*rad\s*/i.test(v))
                return parseFloat(v);
            else if (/^\s*[\d\.]+\s*deg\s*/i.test(v)) {
                return this.rotation * (Math.PI / 180);
            }
            return Number(v);
        },
        // 旋转弧度
        set: function (v) {
            this.style.rotate = "".concat(v, "rad");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "visible", {
        get: function () {
            return this.style.display !== 'none';
        },
        set: function (v) {
            this.style.display = v ? 'block' : 'none';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "zIndex", {
        /*
        get skew() {
            return {
                x: this.style.skew.x,
                y: this.container.skew.y
            };
        }
        set skew(v) {
            if(!v) return;
            if(typeof v.x !== 'undefined') this.container.skew.x = v.x;
            if(typeof v.y !== 'undefined') this.container.skew.y = v.y;
        }*/
        get: function () {
            return Number(this.style.zIndex || '0');
        },
        set: function (v) {
            this.style.zIndex = v + '';
        },
        enumerable: false,
        configurable: true
    });
    /*
    // 被选中
    get selected() {
        return this._selected;
    }
    set selected(v) {
        if(v) this.editor.controlElement.bind(this);
        else {
            this.editor.controlElement.unbind(this);
        }
        this.propertyChange('selected', v, this._selected);
        this._selected = v;
    }*/
    JElement.prototype.bindEvent = function () {
        /*
        
        this.container.on('pointerdown', function(event) {
            this.emit('pointerdown', event);
        }, this);
        this.container.on('pointerup', function(event) {
            this.emit('pointerup', event);
        }, this);
        this.container.on('pointerenter', function(event) {
            this.emit('pointerenter', event);
        }, this);
        this.container.on('pointerleave', function(event) {
            this.emit('pointerleave', event);
        }, this);
        this.container.on('pointerout', function(event) {
            this.emit('pointerout', event);
        }, this);*/
    };
    // 移位
    JElement.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    // 重置大小
    JElement.prototype.resize = function (w, h) {
        if (typeof w === 'number') {
            //const rw = w / this.sprite.texture.width;
            //if(rw !== this.sprite.scale.x) this.sprite.scale.x = rw;
            this.width = w;
        }
        if (typeof h === 'number') {
            //const rh = h / this.sprite.texture.height;
            //if(rh !== this.sprite.scale.y) this.sprite.scale.y = rh;
            this.height = h;
        }
    };
    // 新增子元素
    JElement.prototype.addChild = function (child) {
        var e_1, _a;
        if (Array.isArray(child)) {
            try {
                for (var child_1 = __values(child), child_1_1 = child_1.next(); !child_1_1.done; child_1_1 = child_1.next()) {
                    var c = child_1_1.value;
                    this.addChild(c);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (child_1_1 && !child_1_1.done && (_a = child_1.return)) _a.call(child_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return this;
        }
        if (child instanceof JElement) {
            this.container.appendChild(child.container);
            this.children.push(child);
        }
        else {
            this.container.appendChild(child);
        }
    };
    // 移除自已
    JElement.prototype.remove = function () {
        if (this.parent)
            this.parent.removeChild(this);
    };
    // 移除子元素
    JElement.prototype.removeChild = function (el) {
        this.container.removeChild(el.container);
        for (var i = this.children.length - 1; i > -1; i--) {
            if (this.children[i] === el)
                return this.children.splice(i, 1);
        }
    };
    // 把渲染层坐标转为控制层
    JElement.prototype.toControlPosition = function (p) {
        var e_2, _a;
        if (Array.isArray(p)) {
            var res = [];
            try {
                for (var p_1 = __values(p), p_1_1 = p_1.next(); !p_1_1.done; p_1_1 = p_1.next()) {
                    var point = p_1_1.value;
                    res.push(this.toControlPosition(point));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (p_1_1 && !p_1_1.done && (_a = p_1.return)) _a.call(p_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return res;
        }
        return __assign(__assign({}, p), { x: p.x + this.left, y: p.y + this.top });
    };
    // 把控制层坐标转为渲染层
    JElement.prototype.toRenderPosition = function (p) {
        var e_3, _a;
        if (Array.isArray(p)) {
            var res = [];
            try {
                for (var p_2 = __values(p), p_2_1 = p_2.next(); !p_2_1.done; p_2_1 = p_2.next()) {
                    var point = p_2_1.value;
                    res.push(this.toRenderPosition(point));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (p_2_1 && !p_2_1.done && (_a = p_2.return)) _a.call(p_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return res;
        }
        return __assign(__assign({}, p), { x: p.x, y: p.y });
    };
    // 把原点转回0，0坐标
    JElement.prototype.toElementAnchorPosition = function (p) {
        var e_4, _a;
        if (Array.isArray(p)) {
            var res = [];
            try {
                for (var p_3 = __values(p), p_3_1 = p_3.next(); !p_3_1.done; p_3_1 = p_3.next()) {
                    var point = p_3_1.value;
                    res.push(this.toElementAnchorPosition(point));
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (p_3_1 && !p_3_1.done && (_a = p_3.return)) _a.call(p_3);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return res;
        }
        return __assign(__assign({}, p), { x: p.x, y: p.y });
    };
    JElement.prototype.toJSON = function () {
        var e_5, _a;
        var fields = ['x', 'y', 'width', 'height', 'url', 'text', 'rotation', 'type', 'style', 'id', 'skew', 'points', 'isClosed'];
        var obj = {};
        try {
            for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var k = fields_1_1.value;
                if (typeof this[k] !== 'undefined') {
                    obj[k] = this[k];
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return obj;
    };
    JElement.prototype.toString = function () {
        var obj = this.toJSON();
        return JSON.stringify(obj);
    };
    return JElement;
}(EventEmitter));

var element = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': JElement
});

export { element as JElement };