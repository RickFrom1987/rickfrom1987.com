webpackJsonp([5],{

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(26), __esModule: true };

/***/ },

/***/ 3:
/***/ function(module, exports) {

  "use strict";
  
  exports.__esModule = true;
  
  exports.default = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _defineProperty = __webpack_require__(45);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        (0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }
  
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _setPrototypeOf = __webpack_require__(25);
  
  var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
  
  var _create = __webpack_require__(44);
  
  var _create2 = _interopRequireDefault(_create);
  
  var _typeof2 = __webpack_require__(19);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }
  
    subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  };

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _typeof2 = __webpack_require__(19);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
  
    return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  };

/***/ },

/***/ 9:
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  var stylesInDom = {},
  	memoize = function(fn) {
  		var memo;
  		return function () {
  			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
  			return memo;
  		};
  	},
  	isOldIE = memoize(function() {
  		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
  	}),
  	getHeadElement = memoize(function () {
  		return document.head || document.getElementsByTagName("head")[0];
  	}),
  	singletonElement = null,
  	singletonCounter = 0,
  	styleElementsInsertedAtTop = [];
  
  module.exports = function(list, options) {
  	if(true) {
  		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
  	}
  
  	options = options || {};
  	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  	// tags it will allow on a page
  	if (typeof options.singleton === "undefined") options.singleton = isOldIE();
  
  	// By default, add <style> tags to the bottom of <head>.
  	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
  
  	var styles = listToStyles(list);
  	addStylesToDom(styles, options);
  
  	return function update(newList) {
  		var mayRemove = [];
  		for(var i = 0; i < styles.length; i++) {
  			var item = styles[i];
  			var domStyle = stylesInDom[item.id];
  			domStyle.refs--;
  			mayRemove.push(domStyle);
  		}
  		if(newList) {
  			var newStyles = listToStyles(newList);
  			addStylesToDom(newStyles, options);
  		}
  		for(var i = 0; i < mayRemove.length; i++) {
  			var domStyle = mayRemove[i];
  			if(domStyle.refs === 0) {
  				for(var j = 0; j < domStyle.parts.length; j++)
  					domStyle.parts[j]();
  				delete stylesInDom[domStyle.id];
  			}
  		}
  	};
  }
  
  function addStylesToDom(styles, options) {
  	for(var i = 0; i < styles.length; i++) {
  		var item = styles[i];
  		var domStyle = stylesInDom[item.id];
  		if(domStyle) {
  			domStyle.refs++;
  			for(var j = 0; j < domStyle.parts.length; j++) {
  				domStyle.parts[j](item.parts[j]);
  			}
  			for(; j < item.parts.length; j++) {
  				domStyle.parts.push(addStyle(item.parts[j], options));
  			}
  		} else {
  			var parts = [];
  			for(var j = 0; j < item.parts.length; j++) {
  				parts.push(addStyle(item.parts[j], options));
  			}
  			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
  		}
  	}
  }
  
  function listToStyles(list) {
  	var styles = [];
  	var newStyles = {};
  	for(var i = 0; i < list.length; i++) {
  		var item = list[i];
  		var id = item[0];
  		var css = item[1];
  		var media = item[2];
  		var sourceMap = item[3];
  		var part = {css: css, media: media, sourceMap: sourceMap};
  		if(!newStyles[id])
  			styles.push(newStyles[id] = {id: id, parts: [part]});
  		else
  			newStyles[id].parts.push(part);
  	}
  	return styles;
  }
  
  function insertStyleElement(options, styleElement) {
  	var head = getHeadElement();
  	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
  	if (options.insertAt === "top") {
  		if(!lastStyleElementInsertedAtTop) {
  			head.insertBefore(styleElement, head.firstChild);
  		} else if(lastStyleElementInsertedAtTop.nextSibling) {
  			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
  		} else {
  			head.appendChild(styleElement);
  		}
  		styleElementsInsertedAtTop.push(styleElement);
  	} else if (options.insertAt === "bottom") {
  		head.appendChild(styleElement);
  	} else {
  		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
  	}
  }
  
  function removeStyleElement(styleElement) {
  	styleElement.parentNode.removeChild(styleElement);
  	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
  	if(idx >= 0) {
  		styleElementsInsertedAtTop.splice(idx, 1);
  	}
  }
  
  function createStyleElement(options) {
  	var styleElement = document.createElement("style");
  	styleElement.type = "text/css";
  	insertStyleElement(options, styleElement);
  	return styleElement;
  }
  
  function createLinkElement(options) {
  	var linkElement = document.createElement("link");
  	linkElement.rel = "stylesheet";
  	insertStyleElement(options, linkElement);
  	return linkElement;
  }
  
  function addStyle(obj, options) {
  	var styleElement, update, remove;
  
  	if (options.singleton) {
  		var styleIndex = singletonCounter++;
  		styleElement = singletonElement || (singletonElement = createStyleElement(options));
  		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
  		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
  	} else if(obj.sourceMap &&
  		typeof URL === "function" &&
  		typeof URL.createObjectURL === "function" &&
  		typeof URL.revokeObjectURL === "function" &&
  		typeof Blob === "function" &&
  		typeof btoa === "function") {
  		styleElement = createLinkElement(options);
  		update = updateLink.bind(null, styleElement);
  		remove = function() {
  			removeStyleElement(styleElement);
  			if(styleElement.href)
  				URL.revokeObjectURL(styleElement.href);
  		};
  	} else {
  		styleElement = createStyleElement(options);
  		update = applyToTag.bind(null, styleElement);
  		remove = function() {
  			removeStyleElement(styleElement);
  		};
  	}
  
  	update(obj);
  
  	return function updateStyle(newObj) {
  		if(newObj) {
  			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
  				return;
  			update(obj = newObj);
  		} else {
  			remove();
  		}
  	};
  }
  
  var replaceText = (function () {
  	var textStore = [];
  
  	return function (index, replacement) {
  		textStore[index] = replacement;
  		return textStore.filter(Boolean).join('\n');
  	};
  })();
  
  function applyToSingletonTag(styleElement, index, remove, obj) {
  	var css = remove ? "" : obj.css;
  
  	if (styleElement.styleSheet) {
  		styleElement.styleSheet.cssText = replaceText(index, css);
  	} else {
  		var cssNode = document.createTextNode(css);
  		var childNodes = styleElement.childNodes;
  		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
  		if (childNodes.length) {
  			styleElement.insertBefore(cssNode, childNodes[index]);
  		} else {
  			styleElement.appendChild(cssNode);
  		}
  	}
  }
  
  function applyToTag(styleElement, obj) {
  	var css = obj.css;
  	var media = obj.media;
  
  	if(media) {
  		styleElement.setAttribute("media", media)
  	}
  
  	if(styleElement.styleSheet) {
  		styleElement.styleSheet.cssText = css;
  	} else {
  		while(styleElement.firstChild) {
  			styleElement.removeChild(styleElement.firstChild);
  		}
  		styleElement.appendChild(document.createTextNode(css));
  	}
  }
  
  function updateLink(linkElement, obj) {
  	var css = obj.css;
  	var sourceMap = obj.sourceMap;
  
  	if(sourceMap) {
  		// http://stackoverflow.com/a/26603875
  		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
  	}
  
  	var blob = new Blob([css], { type: "text/css" });
  
  	var oldSrc = linkElement.href;
  
  	linkElement.href = URL.createObjectURL(blob);
  
  	if(oldSrc)
  		URL.revokeObjectURL(oldSrc);
  }


/***/ },

/***/ 11:
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var WHITE = exports.WHITE = '#F8F8FF';
  var BLACK = exports.BLACK = '#555459';
  var BLUE = exports.BLUE = '#2986BE';
  var GRADIENT_BG = exports.GRADIENT_BG = 'linear-gradient(-150deg, #00C1B6 0%, #136EB5 97%)';

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _Link = __webpack_require__(24);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = _Link2.default; /**
                                     * React App SDK (https://github.com/kriasoft/react-app)
                                     *
                                     * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
                                     *
                                     * This source code is licensed under the MIT license found in the
                                     * LICENSE.txt file in the root directory of this source tree.
                                     */

/***/ },

/***/ 14:
/***/ function(module, exports) {

  "use strict";
  
  exports.__esModule = true;
  
  exports.default = function (obj, keys) {
    var target = {};
  
    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }
  
    return target;
  };

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var flexStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'nowrap',
    flex: '1 0 auto',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'stretch'
  };
  
  var mixProps = function mixProps(style, props) {
    var divStyle = {};
  
    if (props.row) {
      divStyle.flexDirection = 'row';
    } else if (props.column) {
      divStyle.flexDirection = 'column';
    }
  
    if (typeof props.width === 'number') {
      divStyle.flexGrow = props.width;
    } else if (props.width) {
      divStyle.flexBasis = 'auto';
      divStyle.flexGrow = 0;
      divStyle.flexShrink = 0;
      divStyle.width = props.width;
    }
  
    if (props.height) {
      divStyle.flexBasis = 'auto';
      divStyle.flexGrow = 0;
      divStyle.flexShrink = 0;
      divStyle.height = props.height;
    }
  
    if (props.style) {
      return _extends({}, flexStyle, style, divStyle, props.style);
    } else {
      return _extends({}, flexStyle, style, divStyle);
    }
  };
  
  var View = (function (_Component) {
    _inherits(View, _Component);
  
    function View() {
      _classCallCheck(this, View);
  
      _get(Object.getPrototypeOf(View.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(View, [{
      key: 'render',
      value: function render() {
        var style = mixProps({}, this.props);
        if (this.props.auto) {
          style.flex = '0 0 auto';
        }
  
        // strip props that are invalid to set on a div.
        // (prevents https://fb.me/react-unknown-prop)
        var _props = this.props;
        var row = _props.row;
        var column = _props.column;
        var auto = _props.auto;
  
        var divProps = _objectWithoutProperties(_props, ['row', 'column', 'auto']);
  
        return _react2['default'].createElement(
          'div',
          _extends({}, divProps, { style: style }),
          this.props.children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        row: _react.PropTypes.bool,
        column: _react.PropTypes.bool,
        auto: _react.PropTypes.bool,
        className: _react.PropTypes.string,
        height: _react.PropTypes.string,
        style: _react.PropTypes.object,
        width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
      },
      enumerable: true
    }]);
  
    return View;
  })(_react.Component);
  
  exports['default'] = View;
  module.exports = exports['default'];


/***/ },

/***/ 21:
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var HEADER_HEIGHT = exports.HEADER_HEIGHT = '50px';

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(2);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(3);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(4);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(6);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(5);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Navigation = __webpack_require__(23);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _Link = __webpack_require__(12);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _App = __webpack_require__(21);
  
  var App = _interopRequireWildcard(_App);
  
  var _Colors = __webpack_require__(11);
  
  var Colors = _interopRequireWildcard(_Colors);
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);
  
    function Header() {
      (0, _classCallCheck3.default)(this, Header);
      return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Header, [{
      key: 'render',
      value: function render() {
        var logoStyle = {
          color: Colors.WHITE,
          height: App.HEADER_HEIGHT,
          lineHeight: App.HEADER_HEIGHT,
          whiteSpace: 'nowrap'
        };
        var headerStyle = {
          fontFamily: 'Montserrat',
          textTransform: 'uppercase',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1040,
          width: '100%',
          height: App.HEADER_HEIGHT,
          color: Colors.WHITE,
          backgroundColor: 'rgba(0,0,0, 0.5)'
        };
        return _react2.default.createElement(
          'div',
          { className: 'container-fluid', style: headerStyle },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'a',
              { href: '/', style: logoStyle },
              'RickFrom1987'
            ),
            _react2.default.createElement(_Navigation2.default, null)
          )
        );
      }
    }]);
    return Header;
  }(_react2.default.Component);
  
  exports.default = Header;

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(18);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _Link = __webpack_require__(12);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Navigation = __webpack_require__(34);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Navigation() {
    var path = _history2.default.getCurrentLocation().pathname;
    var linkClass = function linkClass(href) {
      return '' + _Navigation2.default.link + (path === href ? ' ' + _Navigation2.default.active : '');
    };
    return _react2.default.createElement(
      'nav',
      { className: _Navigation2.default.nav },
      _react2.default.createElement(
        _Link2.default,
        { className: linkClass('/contact'), to: '/contact' },
        _react2.default.createElement('i', { className: 'fa fa-phone' })
      ),
      _react2.default.createElement(
        _Link2.default,
        { className: linkClass('/projects'), to: '/projects' },
        _react2.default.createElement('i', { className: 'fa fa-desktop' })
      )
    );
  }
  
  exports.default = Navigation;

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(20);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(14);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(2);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(3);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(4);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(6);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(5);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(18);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React App SDK (https://github.com/kriasoft/react-app)
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var Link = function (_React$Component) {
    (0, _inherits3.default)(Link, _React$Component);
  
    function Link() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (event.button !== 0 /* left click */) {
            return;
          }
  
        if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          return;
        }
  
        event.preventDefault();
  
        if (_this.props.to) {
          _history2.default.push(_this.props.to);
        } else {
          _history2.default.push({
            pathname: event.currentTarget.pathname,
            search: event.currentTarget.search
          });
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var props = (0, _objectWithoutProperties3.default)(_props, ['to']); // eslint-disable-line no-use-before-define
  
        return _react2.default.createElement('a', (0, _extends3.default)({ href: _history2.default.createHref(to) }, props, { onClick: this.handleClick }));
      }
    }]);
    return Link;
  }(_react2.default.Component);
  
  Link.propTypes = {
    to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
    onClick: _react.PropTypes.func
  };
  exports.default = Link;

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(27), __esModule: true };

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(29);
  module.exports = __webpack_require__(13).Object.getPrototypeOf;

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(30);
  module.exports = __webpack_require__(13).Object.setPrototypeOf;

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var isObject = __webpack_require__(40)
    , anObject = __webpack_require__(36);
  var check = function(O, proto){
    anObject(O);
    if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function(test, buggy, set){
        try {
          set = __webpack_require__(39)(Function.call, __webpack_require__(47).f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch(e){ buggy = true; }
        return function setPrototypeOf(O, proto){
          check(O, proto);
          if(buggy)O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
    check: check
  };

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.9 Object.getPrototypeOf(O)
  var toObject        = __webpack_require__(41)
    , $getPrototypeOf = __webpack_require__(48);
  
  __webpack_require__(49)('getPrototypeOf', function(){
    return function getPrototypeOf(it){
      return $getPrototypeOf(toObject(it));
    };
  });

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.19 Object.setPrototypeOf(O, proto)
  var $export = __webpack_require__(37);
  $export($export.S, 'Object', {setPrototypeOf: __webpack_require__(28).set});

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(9)();
  // imports
  
  
  // module
  exports.push([module.id, "progress,sub,sup{vertical-align:baseline}button,hr,input{overflow:visible}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}figcaption, menu,article,aside,details,figure,footer,header,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}button,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{}button,select{text-transform:none}[type=submit], [type=reset],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}html {\n  box-sizing: border-box;\n}*, *:before, *:after {\n  box-sizing: inherit;\n}html,\nbody {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  color: #252525;\n}body {\n  background-attachment: fixed;\n  background-image: -webkit-linear-gradient(240deg, rgb(0, 193, 182) 0%, rgb(19, 110, 181) 97%);\n  background-image: linear-gradient(-150deg, rgb(0, 193, 182) 0%, rgb(19, 110, 181) 97%);\n  background-color: rgb(41, 134, 190);\n  overflow-y: scroll;\n}h1, h2, h3, h4, h5, h6 {\n  font-family: 'Montserrat', sans-serif;\n  margin: 0;\n  padding: 0;\n  text-transform: uppercase;\n  text-shadow: 0px 0px 2px #7FDBFF;\n}h1 {\n  font-size: 48px;\n}h2 {\n  font-size: 18px;\n}h3 {\n  font-size: 14px;\n}p {\n  font-family: 'Noto Serif', serif;\n  font-size: 16px;\n  line-height: 32px;\n  margin: 0;\n  padding: 0;\n}a {\n  text-decoration: none;\n  -webkit-transition: all .4s;\n  transition: all .4s;\n  color: rgb(41, 134, 190);\n  text-shadow: 0px 0px 4px #7FDBFF;\n  cursor: pointer;\n}a:link, a:visited { \n  color: #7FDDE0;\n}a:hover { \n  color: #F8F8FF;\n  text-shadow: 0px 0px 2px #7FDBFF;\n}a:active { -webkit-transition: all .3s; transition: all .3s; all: #3aa3e3; }.Layout_article_2Uo p {\n  margin: 24px 0;\n}.Layout_article_2Uo a {\n  text-decoration: none;\n  -webkit-transition: all .4s;\n  transition: all .4s;\n  color: #00A1DF;\n  text-shadow: 0px 0px 1px #7FDBFF;\n  cursor: pointer;\n}.Layout_article_2Uo a:link, .Layout_article_2Uo a:visited { \n  color: #00A1DF;\n}.Layout_article_2Uo a:hover { \n  color: rgb(19, 110, 181);\n  text-shadow: 0px 0px 2px #7FDBFF;\n}.Layout_article_2Uo a:active { -webkit-transition: all .3s; transition: all .3s; all: #3aa3e3; }.Layout_article_2Uo ul {\n  margin: 0;\n  padding: 12px;\n  background: #f5f5f5;\n  list-style: none;\n  border: 1px solid #dedede\n}.Layout_article_2Uo ul li {\n  margin: 0;\n  padding: 6px;\n}@media (max-width: 480px) {\n  h1 {\n    font-size: 32px;\n  }\n}\n\n", "", {"version":3,"sources":["/./components/Layout/Layout.css"],"names":[],"mappings":"AAAA,iBAAiB,uBAAuB,CAAC,gBAAgB,gBAAgB,CAAC,KAAK,uBAAuB,0BAA0B,6BAA6B,CAAC,KAAK,QAAQ,CAAC,qFAAsF,aAAa,CAAC,4BAA4B,oBAAoB,CAAC,sBAAsB,aAAa,QAAQ,CAAC,kBAAmB,YAAY,CAAC,EAAE,6BAA6B,oCAAoC,CAAC,iBAAiB,eAAe,CAAC,YAAY,mBAAmB,0BAA0B,gCAAgC,CAAC,SAAS,kBAAkB,CAAC,IAAI,iBAAiB,CAAC,GAAG,cAAc,cAAc,CAAC,KAAK,sBAAsB,UAAU,CAAC,MAAM,aAAa,CAAC,QAAQ,cAAc,cAAc,iBAAiB,CAAC,IAAI,aAAa,CAAC,IAAI,SAAS,CAAC,IAAI,iBAAiB,CAAC,eAAe,eAAe,CAAC,kBAAkB,gCAAgC,aAAa,CAAC,OAAO,eAAe,CAAC,GAAG,uBAAuB,QAAQ,CAAC,6BAA6B,aAAa,QAAQ,CAAC,SAAS,eAAe,CAAC,cAAc,cAAc,mBAAmB,CAAC,sDAAsD,yBAAyB,CAAC,wHAAwH,kBAAkB,SAAS,CAAC,4GAA4G,6BAA6B,CAAC,SAAS,wBAAwB,aAAa,0BAA0B,CAAC,OAAO,sBAAsB,cAAc,cAAc,eAAe,UAAU,kBAAkB,CAAC,SAAS,aAAa,CAAC,6BAA6B,sBAAsB,SAAS,CAAC,kFAAkF,WAAW,CAAC,cAAc,6BAA6B,mBAAmB,CAAC,qFAAqF,uBAAuB,CAAC,4BAA4B,cAAc,WAAW,CAAC,6BAA6B,0BAA0B,YAAY,CAAC;EAK3kE,uBAAuB;CACxB;EAKC,oBAAoB;CACrB;;EAIC,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,eAAe;CAChB;EAGC,6BAA6B;EAC7B,8FAAuF;EAAvF,uFAAuF;EACvF,oCAAoC;EACpC,mBAAmB;CACpB;EAGC,sCAAsC;EACtC,UAAU;EACV,WAAW;EACX,0BAA0B;EAC1B,iCAAiC;CAClC;EAGC,gBAAgB;CACjB;EAGC,gBAAgB;CACjB;EAGC,gBAAgB;CACjB;EAGC,iCAAiC;EACjC,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;EACV,WAAW;CACZ;EAGC,sBAAsB;EACtB,4BAA4B;EAC5B,oBAAoB;EACpB,yBAAyB;EACzB,iCAAiC;EACjC,gBAAgB;CACjB;EAGC,eAAe;CAChB;EAGC,eAAe;EACf,iCAAiC;CAClC,WAEU,4BAA4B,CAAC,oBAAoB,CAAC,aAAa,EAAE;EAG1E,eAAe;CAChB;EAGC,sBAAsB;EACtB,4BAA4B;EAC5B,oBAAoB;EACpB,eAAe;EACf,iCAAiC;EACjC,gBAAgB;CACjB;EAGC,eAAe;CAChB;EAGC,yBAAyB;EACzB,iCAAiC;CAClC,+BAEmB,4BAA4B,CAAC,oBAAoB,CAAC,aAAa,EAAE;EAGnF,UAAU;EACV,cAAc;EACd,oBAAoB;EACpB,iBAAiB;EACjB,yBAAyB;CAC1B;EAGC,UAAU;EACV,aAAa;CACd;EAGC;IACE,gBAAgB;GACjB;CACF","file":"Layout.css","sourcesContent":["progress,sub,sup{vertical-align:baseline}button,hr,input{overflow:visible}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0} figcaption, menu,article,aside,details,figure,footer,header,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0} [hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}button,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{}button,select{text-transform:none}[type=submit], [type=reset],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\nhtml,\nbody {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  color: #252525;\n}\n\nbody {\n  background-attachment: fixed;\n  background-image: linear-gradient(-150deg, rgb(0, 193, 182) 0%, rgb(19, 110, 181) 97%);\n  background-color: rgb(41, 134, 190);\n  overflow-y: scroll;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Montserrat', sans-serif;\n  margin: 0;\n  padding: 0;\n  text-transform: uppercase;\n  text-shadow: 0px 0px 2px #7FDBFF;\n}\n\nh1 {\n  font-size: 48px;\n}\n\nh2 {\n  font-size: 18px;\n}\n\nh3 {\n  font-size: 14px;\n}\n\np {\n  font-family: 'Noto Serif', serif;\n  font-size: 16px;\n  line-height: 32px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  -webkit-transition: all .4s;\n  transition: all .4s;\n  color: rgb(41, 134, 190);\n  text-shadow: 0px 0px 4px #7FDBFF;\n  cursor: pointer;\n}\n\na:link, a:visited { \n  color: #7FDDE0;\n}\n\na:hover { \n  color: #F8F8FF;\n  text-shadow: 0px 0px 2px #7FDBFF;\n}\n\na:active { -webkit-transition: all .3s; transition: all .3s; all: #3aa3e3; }\n\n.article p {\n  margin: 24px 0;\n}\n\n.article a {\n  text-decoration: none;\n  -webkit-transition: all .4s;\n  transition: all .4s;\n  color: #00A1DF;\n  text-shadow: 0px 0px 1px #7FDBFF;\n  cursor: pointer;\n}\n\n.article a:link, .article a:visited { \n  color: #00A1DF;\n}\n\n.article a:hover { \n  color: rgb(19, 110, 181);\n  text-shadow: 0px 0px 2px #7FDBFF;\n}\n\n.article a:active { -webkit-transition: all .3s; transition: all .3s; all: #3aa3e3; }\n\n.article ul {\n  margin: 0;\n  padding: 12px;\n  background: #f5f5f5;\n  list-style: none;\n  border: 1px solid #dedede\n}\n\n.article ul li {\n  margin: 0;\n  padding: 6px;\n}\n\n@media (max-width: 480px) {\n  h1 {\n    font-size: 32px;\n  }\n}\n\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"article": "Layout_article_2Uo"
  };

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(9)();
  // imports
  
  
  // module
  exports.push([module.id, ".Navigation_nav_3_J {\n\theight: 100%;\n\ttext-align: right;\n}\n\n.Navigation_link_3F8 {\n  display: inline-block;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.Navigation_active_1Xf {\n\n}\n", "", {"version":3,"sources":["/./components/Layout/Navigation.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,kBAAkB;CAClB;;AAED;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;CACpB;;AAED;;CAEC","file":"Navigation.css","sourcesContent":[".nav {\n\theight: 100%;\n\ttext-align: right;\n}\n\n.link {\n  display: inline-block;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.active {\n\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"nav": "Navigation_nav_3_J",
  	"link": "Navigation_link_3F8",
  	"active": "Navigation_active_1Xf"
  };

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(31);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(10)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Layout.css", function() {
  			var newContent = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Layout.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(32);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(10)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Navigation.css", function() {
  			var newContent = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Navigation.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(59);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _objectWithoutProperties2 = __webpack_require__(14);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(2);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(3);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(4);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(6);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(5);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactFlexbox = __webpack_require__(16);
  
  var _reactFlexbox2 = _interopRequireDefault(_reactFlexbox);
  
  var _Header = __webpack_require__(22);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Layout = __webpack_require__(33);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Colors = __webpack_require__(11);
  
  var Colors = _interopRequireWildcard(_Colors);
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ArticleLayout = function (_React$Component) {
    (0, _inherits3.default)(ArticleLayout, _React$Component);
  
    function ArticleLayout(props) {
      (0, _classCallCheck3.default)(this, ArticleLayout);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ArticleLayout.__proto__ || (0, _getPrototypeOf2.default)(ArticleLayout)).call(this, props));
  
      _this.state = {};
      return _this;
    }
  
    (0, _createClass3.default)(ArticleLayout, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var title = _props.title;
        var subtitle = _props.subtitle;
        var url = _props.url;
        var style = _props.style;
        var props = (0, _objectWithoutProperties3.default)(_props, ['title', 'subtitle', 'url', 'style']);
  
        var baseStyle = {
          height: '100%'
        };
        var headerStyle = {
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50%',
          minHeight: 320,
          maxHeight: 580,
          color: Colors.WHITE,
          fontSize: 16
        };
        var bodyStyle = {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white'
        };
        var contentStyle = {
          width: '85%',
          maxWidth: 1024,
          minWidth: 248,
          padding: '24px 0'
        };
        var linkStyle = {
          fontSize: 24
        };
        var articleLayoutStyle = (0, _assign2.default)({}, baseStyle, style);
        return _react2.default.createElement(
          _reactFlexbox2.default,
          { column: true, style: articleLayoutStyle },
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            _reactFlexbox2.default,
            { column: true, style: headerStyle },
            _react2.default.createElement(
              'h1',
              null,
              title
            ),
            _react2.default.createElement(
              'h2',
              null,
              subtitle
            )
          ),
          _react2.default.createElement(
            _reactFlexbox2.default,
            { row: true, className: _Layout2.default.article, style: bodyStyle },
            _react2.default.createElement(
              'div',
              { style: contentStyle },
              this.props.children
            )
          )
        );
      }
    }]);
    return ArticleLayout;
  }(_react2.default.Component);
  
  ArticleLayout.propTypes = {
    style: _react2.default.PropTypes.object,
    title: _react2.default.PropTypes.node,
    subtitle: _react2.default.PropTypes.node,
    url: _react2.default.PropTypes.node
  };
  exports.default = ArticleLayout;

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _Yahoo = __webpack_require__(228);
  
  var _Yahoo2 = _interopRequireDefault(_Yahoo);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = _Yahoo2.default;

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(2);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(3);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(4);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(6);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(5);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ArticleLayout = __webpack_require__(42);
  
  var _ArticleLayout2 = _interopRequireDefault(_ArticleLayout);
  
  var _Yahoo = __webpack_require__(413);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var YahooPage = function (_React$Component) {
    (0, _inherits3.default)(YahooPage, _React$Component);
  
    function YahooPage() {
      (0, _classCallCheck3.default)(this, YahooPage);
      return (0, _possibleConstructorReturn3.default)(this, (YahooPage.__proto__ || (0, _getPrototypeOf2.default)(YahooPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(YahooPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = _Yahoo.title;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _ArticleLayout2.default,
          { title: _Yahoo.title },
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _Yahoo.html } })
        );
      }
    }]);
    return YahooPage;
  }(_react2.default.Component);
  
  exports.default = YahooPage;

/***/ },

/***/ 413:
/***/ function(module, exports) {

  module.exports = {"title":"Yahoo!","subtitle":2009,"url":"https://yahoo.com","html":"<p>My first job ever was at Yahoo! It feels like forever ago. I met great people and lifelong friends here. Yahoo! was one of the best places I have ever worked. Lots of perks and working with really fun and smart people. My main goal was to learn from others and do the best that I could as I didn't know much about life or programming. I just kind of dove head first into anything they would let me work on. Met some great engineers / friends like Naveen, Rohith, Nat and Steven Ramkumar. I got to work with a great team. Special thanks to everyone on Yahoo! Local who helped me grow as a developer and person, I will never have enough good things to say about my time there.</p>\n"};

/***/ }

});
//# sourceMappingURL=5.js.map?2e73908ce346952b6f94