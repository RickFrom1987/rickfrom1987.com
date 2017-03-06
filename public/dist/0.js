webpackJsonp([0],{

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
  
  var _setPrototypeOf = __webpack_require__(25);
  
  var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
  
  var _create = __webpack_require__(45);
  
  var _create2 = _interopRequireDefault(_create);
  
  var _typeof2 = __webpack_require__(20);
  
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

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _typeof2 = __webpack_require__(20);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
  
    return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  };

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _defineProperty = __webpack_require__(46);
  
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

/***/ 14:
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
  
  var _createClass2 = __webpack_require__(6);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(5);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(4);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Navigation = __webpack_require__(23);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _Link = __webpack_require__(14);
  
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
          whiteSpace: 'nowrap',
          margin: '0 12px'
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
  
  var _history = __webpack_require__(17);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _Link = __webpack_require__(14);
  
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
      ),
      _react2.default.createElement(
        _Link2.default,
        { className: linkClass('/payment'), to: '/payment' },
        _react2.default.createElement('i', { className: 'fa fa-credit-card' })
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
  
  var _extends2 = __webpack_require__(19);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(12);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(2);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(3);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(6);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(5);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(4);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(17);
  
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
          set = __webpack_require__(39)(Function.call, __webpack_require__(48).f(Object.prototype, '__proto__').set, 2);
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
    , $getPrototypeOf = __webpack_require__(49);
  
  __webpack_require__(50)('getPrototypeOf', function(){
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

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var bind = __webpack_require__(152);
  
  /*global toString:true*/
  
  // utils is a library of generic helper functions non-specific to axios
  
  var toString = Object.prototype.toString;
  
  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */
  function isArray(val) {
    return toString.call(val) === '[object Array]';
  }
  
  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }
  
  /**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
  }
  
  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
      result = ArrayBuffer.isView(val);
    } else {
      result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
    }
    return result;
  }
  
  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
  function isString(val) {
    return typeof val === 'string';
  }
  
  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
  function isNumber(val) {
    return typeof val === 'number';
  }
  
  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  function isUndefined(val) {
    return typeof val === 'undefined';
  }
  
  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
  function isObject(val) {
    return val !== null && typeof val === 'object';
  }
  
  /**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }
  
  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  function isFile(val) {
    return toString.call(val) === '[object File]';
  }
  
  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }
  
  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  function isFunction(val) {
    return toString.call(val) === '[object Function]';
  }
  
  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }
  
  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }
  
  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
  function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
  }
  
  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  typeof document.createElement -> undefined
   */
  function isStandardBrowserEnv() {
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined' &&
      typeof document.createElement === 'function'
    );
  }
  
  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
  function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
  
    // Force an array if not already something iterable
    if (typeof obj !== 'object' && !isArray(obj)) {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }
  
    if (isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  
  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
  function merge(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (typeof result[key] === 'object' && typeof val === 'object') {
        result[key] = merge(result[key], val);
      } else {
        result[key] = val;
      }
    }
  
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  
  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  
  module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim
  };


/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(19);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(12);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(2);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(3);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(6);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(5);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(4);
  
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
  
  var HeaderLayout = function (_React$Component) {
    (0, _inherits3.default)(HeaderLayout, _React$Component);
  
    function HeaderLayout(props) {
      (0, _classCallCheck3.default)(this, HeaderLayout);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (HeaderLayout.__proto__ || (0, _getPrototypeOf2.default)(HeaderLayout)).call(this, props));
  
      _this.state = {};
      return _this;
    }
  
    (0, _createClass3.default)(HeaderLayout, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var style = _props.style;
        var centered = _props.centered;
        var props = (0, _objectWithoutProperties3.default)(_props, ['style', 'centered']);
  
        var layoutStyle = {
          paddingTop: 48
        };
  
        var centerStyle = void 0;
        if (centered) {
          centerStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            minWidth: 300,
            maxWidth: 768
          };
        }
  
        return _react2.default.createElement(
          _reactFlexbox2.default,
          { column: true, style: layoutStyle },
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(_reactFlexbox2.default, (0, _extends3.default)({ column: true }, props, { style: centerStyle }))
        );
      }
    }]);
    return HeaderLayout;
  }(_react2.default.Component);
  
  HeaderLayout.propTypes = {
    centered: _react2.default.PropTypes.bool
  };
  exports.default = HeaderLayout;

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _Payment = __webpack_require__(250);
  
  var _Payment2 = _interopRequireDefault(_Payment);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = _Payment2.default; /**
                                        * React App SDK (https://github.com/kriasoft/react-app)
                                        *
                                        * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
                                        *
                                        * This source code is licensed under the MIT license found in the
                                        * LICENSE.txt file in the root directory of this source tree.
                                        */

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(process) {'use strict';
  
  var utils = __webpack_require__(44);
  var normalizeHeaderName = __webpack_require__(237);
  
  var PROTECTION_PREFIX = /^\)\]\}',?\n/;
  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  
  function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }
  
  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = __webpack_require__(148);
    } else if (typeof process !== 'undefined') {
      // For node use HTTP adapter
      adapter = __webpack_require__(148);
    }
    return adapter;
  }
  
  var defaults = {
    adapter: getDefaultAdapter(),
  
    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Content-Type');
      if (utils.isFormData(data) ||
        utils.isArrayBuffer(data) ||
        utils.isStream(data) ||
        utils.isFile(data) ||
        utils.isBlob(data)
      ) {
        return data;
      }
      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }
      if (utils.isObject(data)) {
        setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
        return JSON.stringify(data);
      }
      return data;
    }],
  
    transformResponse: [function transformResponse(data) {
      /*eslint no-param-reassign:0*/
      if (typeof data === 'string') {
        data = data.replace(PROTECTION_PREFIX, '');
        try {
          data = JSON.parse(data);
        } catch (e) { /* Ignore */ }
      }
      return data;
    }],
  
    timeout: 0,
  
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
  
    maxContentLength: -1,
  
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  
  defaults.headers = {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  };
  
  utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
    defaults.headers[method] = {};
  });
  
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });
  
  module.exports = defaults;
  
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(19);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _assign = __webpack_require__(55);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _objectWithoutProperties2 = __webpack_require__(12);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(2);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(3);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(6);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(5);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(4);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactFlexbox = __webpack_require__(16);
  
  var _reactFlexbox2 = _interopRequireDefault(_reactFlexbox);
  
  var _history = __webpack_require__(17);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _BrowserMock = __webpack_require__(147);
  
  var _BrowserMock2 = _interopRequireDefault(_BrowserMock);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var PADDING = 12;
  
  var BrowserMock = function (_React$Component) {
    (0, _inherits3.default)(BrowserMock, _React$Component);
  
    function BrowserMock(props) {
      (0, _classCallCheck3.default)(this, BrowserMock);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (BrowserMock.__proto__ || (0, _getPrototypeOf2.default)(BrowserMock)).call(this, props));
  
      _this.onMouseOver = function () {
        _this.setState({
          hover: true
        });
      };
  
      _this.onMouseLeave = function () {
        _this.setState({
          hover: false
        });
      };
  
      _this.onMouseUp = function () {
        if (!_this.props.pathname) {
          return;
        } else {
          window.setTimeout(function () {
            var pathname = _this.props.pathname;
            _history2.default.push({
              pathname: pathname
            });
          }, 500);
        }
      };
  
      _this.state = {
        hover: false
      };
      return _this;
    }
  
    (0, _createClass3.default)(BrowserMock, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var pathname = _props.pathname;
        var style = _props.style;
        var props = (0, _objectWithoutProperties3.default)(_props, ['pathname', 'style']);
  
        var browserMockStyle = {
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          borderTop: '2em solid rgba(230, 230, 230, 0.7)',
          boxShadow: '0 0.1em 1em 0 rgba(0, 0, 0, 0.4)',
          position: 'relative',
          borderRadius: '3px 3px 0 0',
          transition: 'all 0.4s ease-out'
        };
        var browserDotsStyle = {
          display: 'block',
          position: 'absolute',
          content: '',
          top: '-1.25em',
          left: '1em',
          width: '0.5em',
          height: '0.5em',
          borderRadius: '50%',
          backgroundColor: '#f44',
          boxShadow: '0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5'
        };
        var browserBodyStyle = {
          position: 'relative',
          height: '100%',
          minWidth: 200,
          overflowY: 'hidden',
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          zIndex: 1000
        };
        if (this.state.hover) {
          browserMockStyle.backgroundColor = 'rgba(0,0,0,0.25)';
          browserMockStyle.cursor = 'pointer';
        }
        var viewStyle = (0, _assign2.default)({}, browserMockStyle, style);
        return _react2.default.createElement(
          _reactFlexbox2.default,
          (0, _extends3.default)({}, props, {
            column: true,
            style: viewStyle,
            onMouseOver: this.onMouseOver,
            onMouseLeave: this.onMouseLeave,
            onMouseUp: this.onMouseUp }),
          _react2.default.createElement('div', { style: browserDotsStyle }),
          _react2.default.createElement(
            _reactFlexbox2.default,
            { column: true, style: browserBodyStyle, className: _BrowserMock2.default.ripple },
            this.props.children
          )
        );
      }
    }]);
    return BrowserMock;
  }(_react2.default.Component);
  
  BrowserMock.propTypes = {
    style: _react2.default.PropTypes.object,
    pathname: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node
  };
  exports.default = BrowserMock;

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(9)();
  // imports
  
  
  // module
  exports.push([module.id, ".BrowserMock_ripple_1Kt {\n  position: relative;\n  overflow: hidden;\n}\n.BrowserMock_ripple_1Kt:after {\n  content: \"\";\n  background: rgba(255, 255, 255, 0.3);\n  display: block;\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  border-radius: 50%;\n  padding-top: 200%;\n  padding-left: 200%;\n  opacity: 0;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s\n}\n.BrowserMock_ripple_1Kt:active:after {\n  padding-top: 0;\n  padding-left: 0;\n  opacity: 1;\n  -webkit-transition: 0s;\n  transition: 0s\n}", "", {"version":3,"sources":["/./components/BrowserMock.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,qCAAqC;EACrC,eAAe;EACf,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,6BAAoB;EAApB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,uBAAc;EAAd,cAAc;CACf","file":"BrowserMock.css","sourcesContent":[".ripple {\n  position: relative;\n  overflow: hidden;\n}\n.ripple:after {\n  content: \"\";\n  background: rgba(255, 255, 255, 0.3);\n  display: block;\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  border-radius: 50%;\n  padding-top: 200%;\n  padding-left: 200%;\n  opacity: 0;\n  transition: all 0.5s\n}\n.ripple:active:after {\n  padding-top: 0;\n  padding-left: 0;\n  opacity: 1;\n  transition: 0s\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"ripple": "BrowserMock_ripple_1Kt"
  };

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(120);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(10)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../node_modules/postcss-loader/index.js!./BrowserMock.css", function() {
  			var newContent = require("!!./../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../node_modules/postcss-loader/index.js!./BrowserMock.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(44);
  var settle = __webpack_require__(229);
  var buildURL = __webpack_require__(232);
  var parseHeaders = __webpack_require__(238);
  var isURLSameOrigin = __webpack_require__(236);
  var createError = __webpack_require__(151);
  var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(231);
  
  module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
  
      if (utils.isFormData(requestData)) {
        delete requestHeaders['Content-Type']; // Let the browser set it
      }
  
      var request = new XMLHttpRequest();
      var loadEvent = 'onreadystatechange';
      var xDomain = false;
  
      // For IE 8/9 CORS support
      // Only supports POST and GET calls and doesn't returns the response headers.
      // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
      if (("development") !== 'test' &&
          typeof window !== 'undefined' &&
          window.XDomainRequest && !('withCredentials' in request) &&
          !isURLSameOrigin(config.url)) {
        request = new window.XDomainRequest();
        loadEvent = 'onload';
        xDomain = true;
        request.onprogress = function handleProgress() {};
        request.ontimeout = function handleTimeout() {};
      }
  
      // HTTP basic authentication
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password || '';
        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
      }
  
      request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
  
      // Set the request timeout in MS
      request.timeout = config.timeout;
  
      // Listen for ready state
      request[loadEvent] = function handleLoad() {
        if (!request || (request.readyState !== 4 && !xDomain)) {
          return;
        }
  
        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
  
        // Prepare the response
        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
        var response = {
          data: responseData,
          // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
          status: request.status === 1223 ? 204 : request.status,
          statusText: request.status === 1223 ? 'No Content' : request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
  
        settle(resolve, reject, response);
  
        // Clean up request
        request = null;
      };
  
      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError('Network Error', config));
  
        // Clean up request
        request = null;
      };
  
      // Handle timeout
      request.ontimeout = function handleTimeout() {
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));
  
        // Clean up request
        request = null;
      };
  
      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (utils.isStandardBrowserEnv()) {
        var cookies = __webpack_require__(234);
  
        // Add xsrf header
        var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
            cookies.read(config.xsrfCookieName) :
            undefined;
  
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }
  
      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
            // Remove Content-Type if data is undefined
            delete requestHeaders[key];
          } else {
            // Otherwise add header to the request
            request.setRequestHeader(key, val);
          }
        });
      }
  
      // Add withCredentials to request if needed
      if (config.withCredentials) {
        request.withCredentials = true;
      }
  
      // Add responseType to request if needed
      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          if (request.responseType !== 'json') {
            throw e;
          }
        }
      }
  
      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', config.onDownloadProgress);
      }
  
      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', config.onUploadProgress);
      }
  
      if (config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }
  
          request.abort();
          reject(cancel);
          // Clean up request
          request = null;
        });
      }
  
      if (requestData === undefined) {
        requestData = null;
      }
  
      // Send the request
      request.send(requestData);
    });
  };


/***/ },

/***/ 149:
/***/ function(module, exports) {

  'use strict';
  
  /**
   * A `Cancel` is an object that is thrown when an operation is canceled.
   *
   * @class
   * @param {string=} message The message.
   */
  function Cancel(message) {
    this.message = message;
  }
  
  Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };
  
  Cancel.prototype.__CANCEL__ = true;
  
  module.exports = Cancel;


/***/ },

/***/ 150:
/***/ function(module, exports) {

  'use strict';
  
  module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };


/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var enhanceError = __webpack_require__(228);
  
  /**
   * Create an Error with the specified message, config, error code, and response.
   *
   * @param {string} message The error message.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   @ @param {Object} [response] The response.
   * @returns {Error} The created error.
   */
  module.exports = function createError(message, config, code, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, response);
  };


/***/ },

/***/ 152:
/***/ function(module, exports) {

  'use strict';
  
  module.exports = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };


/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(223);

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(44);
  var bind = __webpack_require__(152);
  var Axios = __webpack_require__(225);
  var defaults = __webpack_require__(103);
  
  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
  
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
  
    // Copy context to instance
    utils.extend(instance, context);
  
    return instance;
  }
  
  // Create the default instance to be exported
  var axios = createInstance(defaults);
  
  // Expose Axios class to allow class inheritance
  axios.Axios = Axios;
  
  // Factory for creating new instances
  axios.create = function create(instanceConfig) {
    return createInstance(utils.merge(defaults, instanceConfig));
  };
  
  // Expose Cancel & CancelToken
  axios.Cancel = __webpack_require__(149);
  axios.CancelToken = __webpack_require__(224);
  axios.isCancel = __webpack_require__(150);
  
  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = __webpack_require__(239);
  
  module.exports = axios;
  
  // Allow use of default import syntax in TypeScript
  module.exports.default = axios;


/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var Cancel = __webpack_require__(149);
  
  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @class
   * @param {Function} executor The executor function.
   */
  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
  
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
  
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
  
      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }
  
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };
  
  module.exports = CancelToken;


/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var defaults = __webpack_require__(103);
  var utils = __webpack_require__(44);
  var InterceptorManager = __webpack_require__(226);
  var dispatchRequest = __webpack_require__(227);
  var isAbsoluteURL = __webpack_require__(235);
  var combineURLs = __webpack_require__(233);
  
  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */
  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  
  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
  Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
      config = utils.merge({
        url: arguments[0]
      }, arguments[1]);
    }
  
    config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  
    // Support baseURL config
    if (config.baseURL && !isAbsoluteURL(config.url)) {
      config.url = combineURLs(config.baseURL, config.url);
    }
  
    // Hook up interceptors middleware
    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);
  
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
  
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
  
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
  
    return promise;
  };
  
  // Provide aliases for supported request methods
  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url
      }));
    };
  });
  
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, data, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
  });
  
  module.exports = Axios;


/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(44);
  
  function InterceptorManager() {
    this.handlers = [];
  }
  
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
  };
  
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */
  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  
  module.exports = InterceptorManager;


/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(44);
  var transformData = __webpack_require__(230);
  var isCancel = __webpack_require__(150);
  var defaults = __webpack_require__(103);
  
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }
  
  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
  module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
  
    // Ensure headers exist
    config.headers = config.headers || {};
  
    // Transform request data
    config.data = transformData(
      config.data,
      config.headers,
      config.transformRequest
    );
  
    // Flatten headers
    config.headers = utils.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers || {}
    );
  
    utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );
  
    var adapter = config.adapter || defaults.adapter;
  
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
  
      // Transform response data
      response.data = transformData(
        response.data,
        response.headers,
        config.transformResponse
      );
  
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
  
        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData(
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }
  
      return Promise.reject(reason);
    });
  };


/***/ },

/***/ 228:
/***/ function(module, exports) {

  'use strict';
  
  /**
   * Update an Error with the specified config, error code, and response.
   *
   * @param {Error} error The error to update.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   @ @param {Object} [response] The response.
   * @returns {Error} The error.
   */
  module.exports = function enhanceError(error, config, code, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }
    error.response = response;
    return error;
  };


/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var createError = __webpack_require__(151);
  
  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   */
  module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    // Note: status is not exposed by XDomainRequest
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError(
        'Request failed with status code ' + response.status,
        response.config,
        null,
        response
      ));
    }
  };


/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(44);
  
  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */
  module.exports = function transformData(data, headers, fns) {
    /*eslint no-param-reassign:0*/
    utils.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });
  
    return data;
  };


/***/ },

/***/ 231:
/***/ function(module, exports) {

  'use strict';
  
  // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
  
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  
  function E() {
    this.message = 'String contains an invalid character';
  }
  E.prototype = new Error;
  E.prototype.code = 5;
  E.prototype.name = 'InvalidCharacterError';
  
  function btoa(input) {
    var str = String(input);
    var output = '';
    for (
      // initialize result and counter
      var block, charCode, idx = 0, map = chars;
      // if the next str index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      str.charAt(idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = str.charCodeAt(idx += 3 / 4);
      if (charCode > 0xFF) {
        throw new E();
      }
      block = block << 8 | charCode;
    }
    return output;
  }
  
  module.exports = btoa;


/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(44);
  
  function encode(val) {
    return encodeURIComponent(val).
      replace(/%40/gi, '@').
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, '+').
      replace(/%5B/gi, '[').
      replace(/%5D/gi, ']');
  }
  
  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
  module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }
  
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
  
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }
  
        if (utils.isArray(val)) {
          key = key + '[]';
        }
  
        if (!utils.isArray(val)) {
          val = [val];
        }
  
        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + '=' + encode(v));
        });
      });
  
      serializedParams = parts.join('&');
    }
  
    if (serializedParams) {
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
  
    return url;
  };


/***/ },

/***/ 233:
/***/ function(module, exports) {

  'use strict';
  
  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   * @returns {string} The combined URL
   */
  module.exports = function combineURLs(baseURL, relativeURL) {
    return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
  };


/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(44);
  
  module.exports = (
    utils.isStandardBrowserEnv() ?
  
    // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));
  
          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }
  
          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }
  
          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }
  
          if (secure === true) {
            cookie.push('secure');
          }
  
          document.cookie = cookie.join('; ');
        },
  
        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },
  
        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :
  
    // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
  );


/***/ },

/***/ 235:
/***/ function(module, exports) {

  'use strict';
  
  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };


/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(44);
  
  module.exports = (
    utils.isStandardBrowserEnv() ?
  
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;
  
      /**
      * Parse a URL to discover it's components
      *
      * @param {String} url The URL to be parsed
      * @returns {Object}
      */
      function resolveURL(url) {
        var href = url;
  
        if (msie) {
          // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }
  
        urlParsingNode.setAttribute('href', href);
  
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                    urlParsingNode.pathname :
                    '/' + urlParsingNode.pathname
        };
      }
  
      originURL = resolveURL(window.location.href);
  
      /**
      * Determine if a URL shares the same origin as the current location
      *
      * @param {String} requestURL The URL to test
      * @returns {boolean} True if URL shares the same origin, otherwise false
      */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
              parsed.host === originURL.host);
      };
    })() :
  
    // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
  );


/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(44);
  
  module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };


/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(44);
  
  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} headers Headers needing to be parsed
   * @returns {Object} Headers parsed into an object
   */
  module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
  
    if (!headers) { return parsed; }
  
    utils.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));
  
      if (key) {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    });
  
    return parsed;
  };


/***/ },

/***/ 239:
/***/ function(module, exports) {

  'use strict';
  
  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   * @returns {Function}
   */
  module.exports = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };


/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(2);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(3);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _possibleConstructorReturn2 = __webpack_require__(5);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(4);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactStripeCheckout = __webpack_require__(347);
  
  var _reactStripeCheckout2 = _interopRequireDefault(_reactStripeCheckout);
  
  var _reactFlexbox = __webpack_require__(16);
  
  var _reactFlexbox2 = _interopRequireDefault(_reactFlexbox);
  
  var _BrowserMock = __webpack_require__(104);
  
  var _BrowserMock2 = _interopRequireDefault(_BrowserMock);
  
  var _axios = __webpack_require__(222);
  
  var _axios2 = _interopRequireDefault(_axios);
  
  var _history = __webpack_require__(17);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _Payment = __webpack_require__(432);
  
  var _HeaderLayout = __webpack_require__(64);
  
  var _HeaderLayout2 = _interopRequireDefault(_HeaderLayout);
  
  var _Colors = __webpack_require__(11);
  
  var Colors = _interopRequireWildcard(_Colors);
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var documentTitle = 'RickFrom1987';
  
  var CONFIG = {
    key: {
      test: 'pk_test_AwZhy8uwOOHku8SWAYiaGH54',
      live: 'pk_live_wU9QymCYFQM8w2NKMeOIxB5R'
    }
  };
  
  var PaymentPage = function (_React$Component) {
    (0, _inherits3.default)(PaymentPage, _React$Component);
  
    function PaymentPage(props) {
      (0, _classCallCheck3.default)(this, PaymentPage);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (PaymentPage.__proto__ || (0, _getPrototypeOf2.default)(PaymentPage)).call(this, props));
  
      _this.componentDidMount = function () {
        _this.onToken({ test: 'token' });
      };
  
      _this.onToken = function (token) {
        _axios2.default.post('https://25cw6kon3l.execute-api.us-east-1.amazonaws.com/prod/payment').then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
      };
  
      _this.render = function () {
        var loc = _history2.default.getCurrentLocation();
        var key = void 0;
        if (loc.query.test) {
          key = CONFIG.key.test;
          console.warn("Using test key:", key);
        } else {
          key = CONFIG.key.live;
        }
        var linkStyle = {
          fontSize: 24,
          padding: 12
        };
        var sectionStyle = {
          color: 'white',
          height: 300,
          marginBottom: 12
        };
        return _react2.default.createElement(
          _HeaderLayout2.default,
          { centered: true },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-12' },
              _react2.default.createElement(
                _BrowserMock2.default,
                { style: sectionStyle },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Individual'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  '$100 / month'
                ),
                _react2.default.createElement(_reactStripeCheckout2.default, {
                  name: 'RickFrom1987',
                  description: 'Individual ($100 per month)',
                  label: 'Subscribe',
                  panelLabel: 'Subscribe',
                  amount: 10000,
                  token: _this.onToken,
                  stripeKey: key,
                  allowRememberMe: false,
                  style: {
                    position: 'relative',
                    zIndex: 1000,
                    marginTop: 12
                  } })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-12' },
              _react2.default.createElement(
                _BrowserMock2.default,
                { style: sectionStyle },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Enterprise'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  '$300 / month'
                ),
                _react2.default.createElement(_reactStripeCheckout2.default, {
                  name: 'RickFrom1987',
                  description: 'Enterprise ($300 per month)',
                  label: 'Subscribe',
                  panelLabel: 'Subscribe',
                  amount: 30000,
                  token: _this.onToken,
                  stripeKey: key,
                  allowRememberMe: false,
                  style: {
                    position: 'relative',
                    zIndex: 1000,
                    marginTop: 12
                  } })
              )
            )
          )
        );
      };
  
      return _this;
    }
  
    return PaymentPage;
  }(_react2.default.Component);
  
  exports.default = PaymentPage;

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var scriptLoading = false;
  var scriptLoaded = false;
  var scriptDidError = false;
  
  var ReactStripeCheckout = function (_React$Component) {
    _inherits(ReactStripeCheckout, _React$Component);
  
    function ReactStripeCheckout(props) {
      _classCallCheck(this, ReactStripeCheckout);
  
      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactStripeCheckout).call(this, props));
  
      _this.onScriptLoaded = function () {
        if (!ReactStripeCheckout.stripeHandler) {
          ReactStripeCheckout.stripeHandler = StripeCheckout.configure({
            key: _this.props.stripeKey
          });
          if (_this.hasPendingClick) {
            _this.showStripeDialog();
          }
        }
      };
  
      _this.onScriptError = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
  
        _this.hideLoadingDialog();
        if (_this.props.onScriptError) {
          _this.props.onScriptError.apply(_this, args);
        }
      };
  
      _this.onClosed = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
  
        _this.setState({ open: false });
        if (_this.props.closed) {
          _this.props.closed.apply(_this, args);
        }
      };
  
      _this.onOpened = function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
  
        _this.setState({ open: true });
        if (_this.props.opened) {
          _this.props.opened.apply(_this, args);
        }
      };
  
      _this.getConfig = function () {
        return ['token', 'image', 'name', 'description', 'amount', 'locale', 'currency', 'panelLabel', 'zipCode', 'shippingAddress', 'billingAddress', 'email', 'allowRememberMe', 'bitcoin', 'alipay', 'alipayReusable'].reduce(function (config, key) {
          return _extends({}, config, _this.props.hasOwnProperty(key) && _defineProperty({}, key, _this.props[key]));
        }, {
          opened: _this.onOpened,
          closed: _this.onClosed
        });
      };
  
      _this.onClick = function () {
        // eslint-disable-line react/sort-comp
        if (_this.props.disabled) {
          return;
        }
  
        if (scriptDidError) {
          try {
            throw new Error('Tried to call onClick, but StripeCheckout failed to load');
          } catch (x) {} // eslint-disable-line no-empty
        } else if (ReactStripeCheckout.stripeHandler) {
          _this.showStripeDialog();
        } else {
          _this.showLoadingDialog();
          _this.hasPendingClick = true;
        }
      };
  
      _this.handleOnMouseDown = function () {
        _this.setState({
          buttonActive: true
        });
      };
  
      _this.handleOnMouseUp = function () {
        _this.setState({
          buttonActive: false
        });
      };
  
      _this.state = {
        open: false,
        buttonActive: false
      };
      return _this;
    }
  
    _createClass(ReactStripeCheckout, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
  
        if (scriptLoaded) {
          return;
        }
  
        if (scriptLoading) {
          return;
        }
  
        scriptLoading = true;
  
        var script = document.createElement('script');
        if (typeof this.props.onScriptTagCreated === 'function') {
          this.props.onScriptTagCreated(script);
        }
  
        script.src = 'https://checkout.stripe.com/checkout.js';
        script.async = 1;
  
        this.loadPromise = function () {
          var canceled = false;
          var promise = new Promise(function (resolve, reject) {
            script.onload = function () {
              scriptLoaded = true;
              scriptLoading = false;
              resolve();
              _this2.onScriptLoaded();
            };
            script.onerror = function (event) {
              scriptDidError = true;
              scriptLoading = false;
              reject(event);
              _this2.onScriptError(event);
            };
          });
          var wrappedPromise = new Promise(function (accept, cancel) {
            promise.then(function () {
              return canceled ? cancel({ isCanceled: true }) : accept();
            }); // eslint-disable-line no-confusing-arrow
            promise.catch(function (error) {
              return canceled ? cancel({ isCanceled: true }) : cancel(error);
            }); // eslint-disable-line no-confusing-arrow
          });
  
          return {
            promise: wrappedPromise,
            cancel: function cancel() {
              canceled = true;
            }
          };
        }();
  
        this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError);
  
        document.body.appendChild(script);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (!scriptLoading) {
          this.updateStripeHandler();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.loadPromise) {
          this.loadPromise.cancel();
        }
        if (ReactStripeCheckout.stripeHandler && this.state.open) {
          ReactStripeCheckout.stripeHandler.close();
        }
      }
    }, {
      key: 'updateStripeHandler',
      value: function updateStripeHandler() {
        if (!ReactStripeCheckout.stripeHandler || this.props.reconfigureOnUpdate) {
          ReactStripeCheckout.stripeHandler = StripeCheckout.configure({
            key: this.props.stripeKey
          });
        }
      }
    }, {
      key: 'showLoadingDialog',
      value: function showLoadingDialog() {
        if (this.props.showLoadingDialog) {
          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
  
          this.props.showLoadingDialog.apply(this, args);
        }
      }
    }, {
      key: 'hideLoadingDialog',
      value: function hideLoadingDialog() {
        if (this.props.hideLoadingDialog) {
          for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
  
          this.props.hideLoadingDialog.apply(this, args);
        }
      }
    }, {
      key: 'showStripeDialog',
      value: function showStripeDialog() {
        this.hideLoadingDialog();
        ReactStripeCheckout.stripeHandler.open(this.getConfig());
      }
    }, {
      key: 'renderDefaultStripeButton',
      value: function renderDefaultStripeButton() {
        return _react2.default.createElement(
          'button',
          _extends({}, _defineProperty({}, this.props.triggerEvent, this.onClick), {
            className: this.props.className,
            onMouseDown: this.handleOnMouseDown,
            onFocus: this.handleOnMouseDown,
            onMouseUp: this.handleOnMouseUp,
            onMouseOut: this.handleOnMouseUp,
            onBlur: this.handleOnMouseUp,
            style: _extends({}, {
              overflow: 'hidden',
              display: 'inline-block',
              background: 'linear-gradient(#28a0e5,#015e94)',
              border: 0,
              padding: 1,
              textDecoration: 'none',
              borderRadius: 5,
              boxShadow: '0 1px 0 rgba(0,0,0,0.2)',
              cursor: 'pointer',
              visibility: 'visible',
              userSelect: 'none'
            }, this.state.buttonActive && {
              background: '#005d93'
            }, this.props.style)
          }),
          _react2.default.createElement(
            'span',
            {
              style: _extends({}, {
                backgroundImage: 'linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)',
                fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                fontSize: 14,
                position: 'relative',
                padding: '0 12px',
                display: 'block',
                height: 30,
                lineHeight: '30px',
                color: '#fff',
                fontWeight: 'bold',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                textShadow: '0 -1px 0 rgba(0,0,0,0.25)',
                borderRadius: 4
              }, this.state.buttonActive && {
                color: '#eee',
                boxShadow: 'inset 0 1px 0 rgba(0,0,0,0.1)',
                backgroundImage: 'linear-gradient(#008cdd,#008cdd 85%,#239adf)'
              }, this.props.textStyle)
            },
            this.props.label
          )
        );
      }
    }, {
      key: 'renderDisabledButton',
      value: function renderDisabledButton() {
        return _react2.default.createElement(
          'button',
          {
            disabled: true,
            style: {
              background: 'rgba(0,0,0,0.2)',
              overflow: 'hidden',
              display: 'inline-block',
              border: 0,
              padding: 1,
              textDecoration: 'none',
              borderRadius: 5,
              userSelect: 'none'
            }
          },
          _react2.default.createElement(
            'span',
            {
              style: {
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                fontSize: 14,
                position: 'relative',
                padding: '0 12px',
                display: 'block',
                height: 30,
                lineHeight: '30px',
                borderRadius: 4,
                color: '#999',
                background: '#f8f9fa',
                textShadow: '0 1px 0 rgba(255,255,255,0.5)'
              }
            },
            this.props.label
          )
        );
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.props.desktopShowModal === true && !this.state.open) {
          this.onClick();
        } else if (this.props.desktopShowModal === false && this.state.open) {
          ReactStripeCheckout.stripeHandler.close();
        }
  
        var ComponentClass = this.props.ComponentClass;
  
        if (this.props.children) {
          return _react2.default.createElement(ComponentClass, _extends({}, _defineProperty({}, this.props.triggerEvent, this.onClick), {
            children: this.props.children
          }));
        }
        return this.props.disabled ? this.renderDisabledButton() : this.renderDefaultStripeButton();
      }
    }]);
  
    return ReactStripeCheckout;
  }(_react2.default.Component);
  
  ReactStripeCheckout.defaultProps = {
    className: 'StripeCheckout',
    label: 'Pay With Card',
    locale: 'auto',
    ComponentClass: 'span',
    reconfigureOnUpdate: false,
    triggerEvent: 'onClick'
  };
  ReactStripeCheckout.propTypes = {
    // Opens / closes the checkout modal by value
    // WARNING: does not work on mobile due to browser security restrictions
    // NOTE: Must be set to false when receiving token to prevent modal from
    //       opening automatically after closing
    desktopShowModal: _react2.default.PropTypes.bool,
  
    triggerEvent: _react2.default.PropTypes.oneOf(['onClick', 'onTouchTap', 'onTouchStart']),
  
    // If included, will render the default blue button with label text.
    // (Requires including stripe-checkout.css or adding the .styl file
    // to your pipeline)
    label: _react2.default.PropTypes.string,
  
    // Custom styling for default button
    style: _react2.default.PropTypes.object,
    // Custom styling for <span> tag inside default button
    textStyle: _react2.default.PropTypes.object,
  
    // Prevents any events from opening the popup
    // Adds the disabled prop to the button and adjusts the styling as well
    disabled: _react2.default.PropTypes.bool,
  
    // Named component to wrap button (eg. div)
    ComponentClass: _react2.default.PropTypes.string,
  
    // Show a loading indicator
    showLoadingDialog: _react2.default.PropTypes.func,
    // Hide the loading indicator
    hideLoadingDialog: _react2.default.PropTypes.func,
  
    // Run this method when the scrupt fails to load. Will run if the internet
    // connection is offline when attemting to load the script.
    onScriptError: _react2.default.PropTypes.func,
  
    // Runs when the script tag is created, but before it is added to the DOM
    onScriptTagCreated: _react2.default.PropTypes.func,
  
    // By default, any time the React component is updated, it will call
    // StripeCheckout.configure, which may result in additional XHR calls to the
    // stripe API.  If you know the first configuration is all you need, you
    // can set this to false.  Subsequent updates will affect the StripeCheckout.open
    // (e.g. different prices)
    reconfigureOnUpdate: _react2.default.PropTypes.bool,
  
    // =====================================================
    // Required by stripe
    // see Stripe docs for more info:
    //   https://stripe.com/docs/checkout#integration-custom
    // =====================================================
  
    // Your publishable key (test or live).
    // can't use "key" as a prop in react, so have to change the keyname
    stripeKey: _react2.default.PropTypes.string.isRequired,
  
    // The callback to invoke when the Checkout process is complete.
    //   function(token)
    //     token is the token object created.
    //     token.id can be used to create a charge or customer.
    //     token.email contains the email address entered by the user.
    token: _react2.default.PropTypes.func.isRequired,
  
    // ==========================
    // Highly Recommended Options
    // ==========================
  
    // Name of the company or website.
    name: _react2.default.PropTypes.string,
  
    // A description of the product or service being purchased.
    description: _react2.default.PropTypes.string,
  
    // A relative URL pointing to a square image of your brand or product. The
    // recommended minimum size is 128x128px. The recommended image types are
    // .gif, .jpeg, and .png.
    image: _react2.default.PropTypes.string,
  
    // The amount (in cents) that's shown to the user. Note that you will still
    // have to explicitly include it when you create a charge using the API.
    amount: _react2.default.PropTypes.number,
  
    // Specify auto to display Checkout in the user's preferred language, if
    // available. English will be used by default.
    //
    // https://support.stripe.com/questions/what-languages-does-stripe-checkout-support
    // for more info.
    locale: _react2.default.PropTypes.oneOf(['auto', // (Default) Automatically chosen by checkout
    'zh', // Chinese
    'nl', // Dutch
    'en', // English
    'fr', // French
    'de', // German
    'it', // Italian
    'jp', // Japanease
    'es']),
  
    // ==============
    // Optional Props
    // ==============
  
    // The currency of the amount (3-letter ISO code). The default is USD.
    currency: _react2.default.PropTypes.oneOf(['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', // eslint-disable-line comma-spacing
    'BDT', 'BGN', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BWP', 'BZD', 'CAD', 'CDF', // eslint-disable-line comma-spacing
    'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EEK', // eslint-disable-line comma-spacing
    'EGP', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', // eslint-disable-line comma-spacing
    'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JMD', 'JPY', 'KES', // eslint-disable-line comma-spacing
    'KGS', 'KHR', 'KMF', 'KRW', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTL', // eslint-disable-line comma-spacing
    'LVL', 'MAD', 'MDL', 'MGA', 'MKD', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', // eslint-disable-line comma-spacing
    'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'PAB', 'PEN', 'PGK', 'PHP', // eslint-disable-line comma-spacing
    'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SEK', // eslint-disable-line comma-spacing
    'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SVC', 'SZL', 'THB', 'TJS', 'TOP', 'TRY', // eslint-disable-line comma-spacing
    'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VND', 'VUV', 'WST', 'XAF', // eslint-disable-line comma-spacing
    'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW']),
  
    // The label of the payment button in the Checkout form (e.g. “Subscribe”,
    // “Pay {{amount}}”, etc.). If you include {{amount}}, it will be replaced
    // by the provided amount. Otherwise, the amount will be appended to the
    // end of your label.
    panelLabel: _react2.default.PropTypes.string,
  
    // Specify whether Checkout should validate the billing ZIP code (true or
    // false)
    zipCode: _react2.default.PropTypes.bool,
  
    // Specify whether Checkout should collect the user's billing address
    // (true or false). The default is false.
    billingAddress: _react2.default.PropTypes.bool,
  
    // Specify whether Checkout should collect the user's shipping address
    // (true or false). The default is false.
    shippingAddress: _react2.default.PropTypes.bool,
  
    // Specify whether Checkout should validate the billing ZIP code (true or
    // false). The default is false.
    email: _react2.default.PropTypes.string,
  
    // Specify whether to include the option to "Remember Me" for future
    // purchases (true or false). The default is true.
    allowRememberMe: _react2.default.PropTypes.bool,
  
    // Specify whether to accept Bitcoin in Checkout. The default is false.
    bitcoin: _react2.default.PropTypes.bool,
  
    // Specify whether to accept Alipay ('auto', true, or false). The default
    // is false.
    alipay: _react2.default.PropTypes.oneOf(['auto', true, false]),
  
    // Specify if you need reusable access to the customer's Alipay account
    // (true or false). The default is false.
    alipayReusable: _react2.default.PropTypes.bool,
  
    // function() The callback to invoke when Checkout is opened (not supported
    // in IE6 and IE7).
    opened: _react2.default.PropTypes.func,
  
    // function() The callback to invoke when Checkout is closed (not supported
    // in IE6 and IE7).
    closed: _react2.default.PropTypes.func
  };
  exports.default = ReactStripeCheckout;


/***/ },

/***/ 432:
/***/ function(module, exports) {

  module.exports = {"title":"Hello!","desc":"I make wonderful things.","html":""};

/***/ }

});
//# sourceMappingURL=0.js.map?ee9bc894ec88d3d13024