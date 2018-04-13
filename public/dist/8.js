webpackJsonp([8],{

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(16), __esModule: true };

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
  
  var _defineProperty = __webpack_require__(34);
  
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
  
  var _setPrototypeOf = __webpack_require__(15);
  
  var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
  
  var _create = __webpack_require__(33);
  
  var _create2 = _interopRequireDefault(_create);
  
  var _typeof2 = __webpack_require__(14);
  
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
  
  var _typeof2 = __webpack_require__(14);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
  
    return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  };

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

/***/ 13:
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
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(19);
  module.exports = __webpack_require__(7).Object.getPrototypeOf;

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(20);
  module.exports = __webpack_require__(7).Object.setPrototypeOf;

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var isObject = __webpack_require__(30)
    , anObject = __webpack_require__(22);
  var check = function(O, proto){
    anObject(O);
    if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function(test, buggy, set){
        try {
          set = __webpack_require__(29)(Function.call, __webpack_require__(35).f(Object.prototype, '__proto__').set, 2);
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

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.9 Object.getPrototypeOf(O)
  var toObject        = __webpack_require__(31)
    , $getPrototypeOf = __webpack_require__(36);
  
  __webpack_require__(37)('getPrototypeOf', function(){
    return function getPrototypeOf(it){
      return $getPrototypeOf(toObject(it));
    };
  });

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.19 Object.setPrototypeOf(O, proto)
  var $export = __webpack_require__(23);
  $export($export.S, 'Object', {setPrototypeOf: __webpack_require__(18).set});

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(40);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _extends2 = __webpack_require__(26);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
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
  
  var _Colors = __webpack_require__(11);
  
  var Colors = _interopRequireWildcard(_Colors);
  
  var _Article = __webpack_require__(28);
  
  var _Article2 = _interopRequireDefault(_Article);
  
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
        var _props = this.props,
            title = _props.title,
            subtitle = _props.subtitle,
            url = _props.url,
            children = _props.children,
            style = _props.style;
  
        var baseStyle = {
          height: '100%',
          width: '100%',
          backgroundColor: Colors.WHITE,
          overflow: 'scroll'
        };
        var linkStyle = {
          fontSize: 24
        };
        var sectionStyle = {
          position: 'relative',
          margin: '0 auto',
          width: '95%'
        };
        var headerStyle = (0, _extends3.default)({}, sectionStyle, {
          padding: 12
        });
        var bodyStyle = (0, _extends3.default)({}, sectionStyle, {
          padding: '0 24px'
        });
        var imgStyle = {
          width: 100,
          height: 100,
          margin: '0 auto'
        };
        var articleLayoutStyle = (0, _assign2.default)({}, baseStyle, style);
        return _react2.default.createElement(
          'div',
          { style: articleLayoutStyle },
          _react2.default.createElement(
            'div',
            { style: headerStyle },
            _react2.default.createElement(
              'a',
              { href: '/projects' },
              _react2.default.createElement('img', { src: '/murphy.png', style: imgStyle })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: bodyStyle },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h1',
                { style: { fontSize: 22, marginBottom: 12 } },
                title
              ),
              _react2.default.createElement(
                'h2',
                null,
                subtitle
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _Article2.default.article },
              children
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

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(12)();
  // imports
  
  
  // module
  exports.push([module.id, ".Article_article_2_j a {\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.Article_article_2_j a:link, .Article_article_2_j a:visited {\n  color: #0099e5;\n}\n\n.Article_article_2_j p {\n  margin-bottom: 12px;\n}\n\n@media (max-width: 480px) {\n .Article_layout_1WS {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n }\n}", "", {"version":3,"sources":["/./components/Layout/Article.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,iBAAiB;CAClB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,oBAAoB;CACrB;;AAED;CACC;EACC,6BAAkB;EAAlB,8BAAkB;MAAlB,sBAAkB;UAAlB,kBAAkB;EAClB;CACD","file":"Article.css","sourcesContent":[".article a {\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.article a:link, .article a:visited {\n  color: #0099e5;\n}\n\n.article p {\n  margin-bottom: 12px;\n}\n\n@media (max-width: 480px) {\n .layout {\n  flex-flow: column;\n }\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"article": "Article_article_2_j",
  	"layout": "Article_layout_1WS"
  };

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(27);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(13)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../node_modules/postcss-loader/index.js!./Article.css", function() {
  			var newContent = require("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../node_modules/postcss-loader/index.js!./Article.css");
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
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _Haikudeck = __webpack_require__(229);
  
  var _Haikudeck2 = _interopRequireDefault(_Haikudeck);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = _Haikudeck2.default;

/***/ },

/***/ 229:
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
  
  var _ArticleLayout = __webpack_require__(25);
  
  var _ArticleLayout2 = _interopRequireDefault(_ArticleLayout);
  
  var _Haikudeck = __webpack_require__(420);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var HaikudeckPage = function (_React$Component) {
    (0, _inherits3.default)(HaikudeckPage, _React$Component);
  
    function HaikudeckPage() {
      (0, _classCallCheck3.default)(this, HaikudeckPage);
      return (0, _possibleConstructorReturn3.default)(this, (HaikudeckPage.__proto__ || (0, _getPrototypeOf2.default)(HaikudeckPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(HaikudeckPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = _Haikudeck.title;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _ArticleLayout2.default,
          { title: _Haikudeck.title, url: _Haikudeck.url },
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _Haikudeck.html } })
        );
      }
    }]);
    return HaikudeckPage;
  }(_react2.default.Component);
  
  exports.default = HaikudeckPage;

/***/ },

/***/ 420:
/***/ function(module, exports) {

  module.exports = {"title":"HaikuDeck","subtitle":2014,"url":"//haikudeck.com","html":"<p><a href=\"//haikudeck.com\">Haiku Deck</a> has a very special place in my workplace heart. It was the first ever startup I have worked with and it was awesome. I met some insipiring and amazing people. Learned how much I sucked at programming. Learned how to push through it and get better. I had great programmers around me: Kevin, Adam and Collin. Great leaders: Adam, Marc and Catherine, later on working with the co founder of CoinStar Dan! Great support staff Erin and Lisa MaMa. I worked on the web app and website, mainly in jQuery and Backbone.</p>\n<p><b>Challenges</b></p>\n<p>\nMy main challenges here were adjusting to startup life, learning quickly and producing results. I always had help of more senior engineers to pick up the pieces, @ Haiku Deck I had to be more self reliant and try to figure stuff out on my own.\n</p>\n<p><b>Media</b></p>\n<p>\nWe were lucky enough to get some media coverage on my project and work:\n<ul>\n<li>\n<p><a href=\"http://www.pcmag.com/article2/0,2817,2428803,00.asp\">PCMag Top 100 Web Apps of 2013</a></p>\n</li>\n<li>\n<p><a href=\"https://techcrunch.com/2013/11/21/haiku-deck-web-app/\">TechCrunch Article</a></p>\n</li>\n<li>\n<p><a href=\"http://thenextweb.com/apps/2013/11/21/haiku-deck-launches-free-web-based-version-simple-yet-elegant-ipad-presentation-app/\">TheNextWeb Article</a></p>\n</li>\n<li>\n<p><a href=\"http://allthingsd.com/20131121/haiku-deck-expands-its-anti-powerpoint-presentation-app-to-the-web/\">AllThingsD Article</a></p>\n</li>\n</ul>\n</p>"};

/***/ }

});
//# sourceMappingURL=8.js.map?04edcfd6ae60aef949ca