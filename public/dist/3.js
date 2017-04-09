webpackJsonp([3],{

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

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _setPrototypeOf = __webpack_require__(24);
  
  var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
  
  var _create = __webpack_require__(45);
  
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

/***/ 10:
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

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _Link = __webpack_require__(23);
  
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

/***/ 13:
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

/***/ 14:
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
  		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
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

/***/ 15:
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

/***/ 17:
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

/***/ 20:
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var HEADER_HEIGHT = exports.HEADER_HEIGHT = '50px';

/***/ },

/***/ 21:
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
  
  var _Navigation = __webpack_require__(22);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _Link = __webpack_require__(11);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _App = __webpack_require__(20);
  
  var App = _interopRequireWildcard(_App);
  
  var _Colors = __webpack_require__(10);
  
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
          margin: '0 12px',
          fontWeight: 300,
          fontSize: 18
        };
        var headerStyle = {
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
              'h1',
              { style: logoStyle },
              _react2.default.createElement(
                'a',
                { href: '/', style: { color: Colors.WHITE } },
                'RickFrom1987'
              )
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

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(18);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _Link = __webpack_require__(11);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Navigation = __webpack_require__(32);
  
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
        'a',
        { className: linkClass('/payment'), href: 'https://payments.rickfrom1987.com' },
        _react2.default.createElement('i', { className: 'fa fa-credit-card' })
      )
    );
  }
  
  exports.default = Navigation;

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(25);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(15);
  
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
        var _props = this.props,
            to = _props.to,
            props = (0, _objectWithoutProperties3.default)(_props, ['to']); // eslint-disable-line no-use-before-define
  
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

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(27), __esModule: true };

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(29);
  module.exports = __webpack_require__(9).Object.getPrototypeOf;

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(30);
  module.exports = __webpack_require__(9).Object.setPrototypeOf;

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var isObject = __webpack_require__(38)
    , anObject = __webpack_require__(34);
  var check = function(O, proto){
    anObject(O);
    if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function(test, buggy, set){
        try {
          set = __webpack_require__(37)(Function.call, __webpack_require__(48).f(Object.prototype, '__proto__').set, 2);
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
  var toObject        = __webpack_require__(40)
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
  var $export = __webpack_require__(35);
  $export($export.S, 'Object', {setPrototypeOf: __webpack_require__(28).set});

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(13)();
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

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(31);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(14)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../node_modules/postcss-loader/index.js!./Navigation.css", function() {
  			var newContent = require("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../node_modules/postcss-loader/index.js!./Navigation.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(25);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(15);
  
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
  
  var _reactFlexbox = __webpack_require__(17);
  
  var _reactFlexbox2 = _interopRequireDefault(_reactFlexbox);
  
  var _Header = __webpack_require__(21);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Colors = __webpack_require__(10);
  
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
        var _props = this.props,
            style = _props.style,
            centered = _props.centered,
            props = (0, _objectWithoutProperties3.default)(_props, ['style', 'centered']);
  
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

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _Contact = __webpack_require__(224);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = _Contact2.default;

/***/ },

/***/ 224:
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
  
  var _reactFlexbox = __webpack_require__(17);
  
  var _reactFlexbox2 = _interopRequireDefault(_reactFlexbox);
  
  var _HeaderLayout = __webpack_require__(72);
  
  var _HeaderLayout2 = _interopRequireDefault(_HeaderLayout);
  
  var _Link = __webpack_require__(11);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Contact = __webpack_require__(404);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  var _Contact3 = __webpack_require__(412);
  
  var _Colors = __webpack_require__(10);
  
  var Colors = _interopRequireWildcard(_Colors);
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var documentTitle = 'RickFrom1987 - Contact';
  
  var ContactPage = function (_React$Component) {
    (0, _inherits3.default)(ContactPage, _React$Component);
  
    function ContactPage() {
      (0, _classCallCheck3.default)(this, ContactPage);
      return (0, _possibleConstructorReturn3.default)(this, (ContactPage.__proto__ || (0, _getPrototypeOf2.default)(ContactPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(ContactPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = documentTitle;
      }
    }, {
      key: 'render',
      value: function render() {
        var homeStyle = {
          textAlign: 'center',
          color: Colors.WHITE
        };
        var itemStyle = {
          fontSize: 14
        };
        return _react2.default.createElement(
          _HeaderLayout2.default,
          { centered: true },
          _react2.default.createElement(
            _reactFlexbox2.default,
            { column: true, style: homeStyle },
            _react2.default.createElement(
              'h1',
              null,
              _Contact3.title
            ),
            _react2.default.createElement(
              'p',
              { style: itemStyle },
              _react2.default.createElement('i', { className: 'fa fa-envelope-o' }),
              _react2.default.createElement(
                'span',
                { style: { marginLeft: 12 } },
                _Contact3.email
              )
            ),
            _react2.default.createElement(
              'p',
              { style: itemStyle },
              _react2.default.createElement('i', { className: 'fa fa-phone' }),
              _react2.default.createElement(
                'span',
                { style: { marginLeft: 12 } },
                _Contact3.phone
              )
            )
          )
        );
      }
    }]);
    return ContactPage;
  }(_react2.default.Component);
  
  exports.default = ContactPage;

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(13)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React App SDK (https://github.com/kriasoft/react-app)\n *\n * Copyright © 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@media screen and (max-width: 1024px) {\n\n  .Contact_content_22- {\n    padding: 0 16px;\n  }\n\n}\n", "", {"version":3,"sources":["/./routes/Contact/Contact.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;EAEE;IACE,gBAAgB;GACjB;;CAEF","file":"Contact.css","sourcesContent":["/**\n * React App SDK (https://github.com/kriasoft/react-app)\n *\n * Copyright © 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@media screen and (max-width: 1024px) {\n\n  .content {\n    padding: 0 16px;\n  }\n\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"content": "Contact_content_22-"
  };

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(281);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(14)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../node_modules/postcss-loader/index.js!./Contact.css", function() {
  			var newContent = require("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../node_modules/postcss-loader/index.js!./Contact.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 412:
/***/ function(module, exports) {

  module.exports = {"title":"Call me maybe","phone":"425.985.9755","email":"rick@rickfrom1987.com","html":""};

/***/ }

});
//# sourceMappingURL=3.js.map?d91a269717207c687685