webpackJsonp([13],{

/***/ 2:
/***/ (function(module, exports) {

  //Types of elements found in the DOM
  module.exports = {
  	Text: "text", //Text
  	Directive: "directive", //<? ... ?>
  	Comment: "comment", //<!-- ... -->
  	Script: "script", //<script> tags
  	Style: "style", //<style> tags
  	Tag: "tag", //Any tag
  	CDATA: "cdata", //<![CDATA[ ... ]]>
  	Doctype: "doctype",
  
  	isTag: function(elem){
  		return elem.type === "tag" || elem.type === "script" || elem.type === "style";
  	}
  };


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

  var Parser = __webpack_require__(17);
  var DomHandler = __webpack_require__(42);
  
  function defineProp(name, value){
  	delete module.exports[name];
  	module.exports[name] = value;
  	return value;
  }
  
  module.exports = {
  	Parser: Parser,
  	Tokenizer: __webpack_require__(18),
  	ElementType: __webpack_require__(2),
  	DomHandler: DomHandler,
  	get FeedHandler(){
  		return defineProp("FeedHandler", __webpack_require__(56));
  	},
  	get Stream(){
  		return defineProp("Stream", __webpack_require__(58));
  	},
  	get WritableStream(){
  		return defineProp("WritableStream", __webpack_require__(19));
  	},
  	get ProxyHandler(){
  		return defineProp("ProxyHandler", __webpack_require__(57));
  	},
  	get DomUtils(){
  		return defineProp("DomUtils", __webpack_require__(44));
  	},
  	get CollectingHandler(){
  		return defineProp("CollectingHandler", __webpack_require__(55));
  	},
  	// For legacy support
  	DefaultHandler: DomHandler,
  	get RssHandler(){
  		return defineProp("RssHandler", this.FeedHandler);
  	},
  	//helper methods
  	parseDOM: function(data, options){
  		var handler = new DomHandler(options);
  		new Parser(handler, options).end(data);
  		return handler.dom;
  	},
  	parseFeed: function(feed, options){
  		var handler = new module.exports.FeedHandler(options);
  		new Parser(handler, options).end(feed);
  		return handler.dom;
  	},
  	createDomStream: function(cb, options, elementCb){
  		var handler = new DomHandler(cb, options, elementCb);
  		return new Parser(handler, options);
  	},
  	// List of all events that the parser emits
  	EVENTS: { /* Format: eventname: number of arguments */
  		attribute: 2,
  		cdatastart: 0,
  		cdataend: 0,
  		text: 1,
  		processinginstruction: 2,
  		comment: 1,
  		commentend: 0,
  		closetag: 1,
  		opentag: 2,
  		opentagname: 1,
  		error: 1,
  		end: 0
  	}
  };


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

  if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(28), __esModule: true };

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

  "use strict";
  
  exports.__esModule = true;
  
  exports.default = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _defineProperty = __webpack_require__(85);
  
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

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _setPrototypeOf = __webpack_require__(27);
  
  var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
  
  var _create = __webpack_require__(84);
  
  var _create2 = _interopRequireDefault(_create);
  
  var _typeof2 = __webpack_require__(25);
  
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

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _typeof2 = __webpack_require__(25);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
  
    return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  };

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

  module.exports = {"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

  module.exports = {"amp":"&","apos":"'","gt":">","lt":"<","quot":"\""}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(global) {/*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  /* eslint-disable no-proto */
  
  'use strict'
  
  var base64 = __webpack_require__(37)
  var ieee754 = __webpack_require__(59)
  var isArray = __webpack_require__(38)
  
  exports.Buffer = Buffer
  exports.SlowBuffer = SlowBuffer
  exports.INSPECT_MAX_BYTES = 50
  
  /**
   * If `Buffer.TYPED_ARRAY_SUPPORT`:
   *   === true    Use Uint8Array implementation (fastest)
   *   === false   Use Object implementation (most compatible, even IE6)
   *
   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
   * Opera 11.6+, iOS 4.2+.
   *
   * Due to various browser bugs, sometimes the Object implementation will be used even
   * when the browser supports typed arrays.
   *
   * Note:
   *
   *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
   *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
   *
   *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
   *
   *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
   *     incorrect length in some situations.
  
   * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
   * get the Object implementation, which is slower but behaves correctly.
   */
  Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
    ? global.TYPED_ARRAY_SUPPORT
    : typedArraySupport()
  
  /*
   * Export kMaxLength after typed array support is determined.
   */
  exports.kMaxLength = kMaxLength()
  
  function typedArraySupport () {
    try {
      var arr = new Uint8Array(1)
      arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
      return arr.foo() === 42 && // typed array instances can be augmented
          typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
          arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
    } catch (e) {
      return false
    }
  }
  
  function kMaxLength () {
    return Buffer.TYPED_ARRAY_SUPPORT
      ? 0x7fffffff
      : 0x3fffffff
  }
  
  function createBuffer (that, length) {
    if (kMaxLength() < length) {
      throw new RangeError('Invalid typed array length')
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = new Uint8Array(length)
      that.__proto__ = Buffer.prototype
    } else {
      // Fallback: Return an object instance of the Buffer class
      if (that === null) {
        that = new Buffer(length)
      }
      that.length = length
    }
  
    return that
  }
  
  /**
   * The Buffer constructor returns instances of `Uint8Array` that have their
   * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
   * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
   * and the `Uint8Array` methods. Square bracket notation works as expected -- it
   * returns a single octet.
   *
   * The `Uint8Array` prototype remains unmodified.
   */
  
  function Buffer (arg, encodingOrOffset, length) {
    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
      return new Buffer(arg, encodingOrOffset, length)
    }
  
    // Common case.
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new Error(
          'If encoding is specified then the first argument must be a string'
        )
      }
      return allocUnsafe(this, arg)
    }
    return from(this, arg, encodingOrOffset, length)
  }
  
  Buffer.poolSize = 8192 // not used by this implementation
  
  // TODO: Legacy, not needed anymore. Remove in next major version.
  Buffer._augment = function (arr) {
    arr.__proto__ = Buffer.prototype
    return arr
  }
  
  function from (that, value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('"value" argument must not be a number')
    }
  
    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
      return fromArrayBuffer(that, value, encodingOrOffset, length)
    }
  
    if (typeof value === 'string') {
      return fromString(that, value, encodingOrOffset)
    }
  
    return fromObject(that, value)
  }
  
  /**
   * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
   * if value is a number.
   * Buffer.from(str[, encoding])
   * Buffer.from(array)
   * Buffer.from(buffer)
   * Buffer.from(arrayBuffer[, byteOffset[, length]])
   **/
  Buffer.from = function (value, encodingOrOffset, length) {
    return from(null, value, encodingOrOffset, length)
  }
  
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype
    Buffer.__proto__ = Uint8Array
    if (typeof Symbol !== 'undefined' && Symbol.species &&
        Buffer[Symbol.species] === Buffer) {
      // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
      Object.defineProperty(Buffer, Symbol.species, {
        value: null,
        configurable: true
      })
    }
  }
  
  function assertSize (size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be a number')
    } else if (size < 0) {
      throw new RangeError('"size" argument must not be negative')
    }
  }
  
  function alloc (that, size, fill, encoding) {
    assertSize(size)
    if (size <= 0) {
      return createBuffer(that, size)
    }
    if (fill !== undefined) {
      // Only pay attention to encoding if it's a string. This
      // prevents accidentally sending in a number that would
      // be interpretted as a start offset.
      return typeof encoding === 'string'
        ? createBuffer(that, size).fill(fill, encoding)
        : createBuffer(that, size).fill(fill)
    }
    return createBuffer(that, size)
  }
  
  /**
   * Creates a new filled Buffer instance.
   * alloc(size[, fill[, encoding]])
   **/
  Buffer.alloc = function (size, fill, encoding) {
    return alloc(null, size, fill, encoding)
  }
  
  function allocUnsafe (that, size) {
    assertSize(size)
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < size; ++i) {
        that[i] = 0
      }
    }
    return that
  }
  
  /**
   * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
   * */
  Buffer.allocUnsafe = function (size) {
    return allocUnsafe(null, size)
  }
  /**
   * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
   */
  Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(null, size)
  }
  
  function fromString (that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8'
    }
  
    if (!Buffer.isEncoding(encoding)) {
      throw new TypeError('"encoding" must be a valid string encoding')
    }
  
    var length = byteLength(string, encoding) | 0
    that = createBuffer(that, length)
  
    var actual = that.write(string, encoding)
  
    if (actual !== length) {
      // Writing a hex string, for example, that contains invalid characters will
      // cause everything after the first invalid character to be ignored. (e.g.
      // 'abxxcd' will be treated as 'ab')
      that = that.slice(0, actual)
    }
  
    return that
  }
  
  function fromArrayLike (that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0
    that = createBuffer(that, length)
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255
    }
    return that
  }
  
  function fromArrayBuffer (that, array, byteOffset, length) {
    array.byteLength // this throws if `array` is not a valid ArrayBuffer
  
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('\'offset\' is out of bounds')
    }
  
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('\'length\' is out of bounds')
    }
  
    if (byteOffset === undefined && length === undefined) {
      array = new Uint8Array(array)
    } else if (length === undefined) {
      array = new Uint8Array(array, byteOffset)
    } else {
      array = new Uint8Array(array, byteOffset, length)
    }
  
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = array
      that.__proto__ = Buffer.prototype
    } else {
      // Fallback: Return an object instance of the Buffer class
      that = fromArrayLike(that, array)
    }
    return that
  }
  
  function fromObject (that, obj) {
    if (Buffer.isBuffer(obj)) {
      var len = checked(obj.length) | 0
      that = createBuffer(that, len)
  
      if (that.length === 0) {
        return that
      }
  
      obj.copy(that, 0, 0, len)
      return that
    }
  
    if (obj) {
      if ((typeof ArrayBuffer !== 'undefined' &&
          obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
        if (typeof obj.length !== 'number' || isnan(obj.length)) {
          return createBuffer(that, 0)
        }
        return fromArrayLike(that, obj)
      }
  
      if (obj.type === 'Buffer' && isArray(obj.data)) {
        return fromArrayLike(that, obj.data)
      }
    }
  
    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
  }
  
  function checked (length) {
    // Note: cannot use `length < kMaxLength()` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                           'size: 0x' + kMaxLength().toString(16) + ' bytes')
    }
    return length | 0
  }
  
  function SlowBuffer (length) {
    if (+length != length) { // eslint-disable-line eqeqeq
      length = 0
    }
    return Buffer.alloc(+length)
  }
  
  Buffer.isBuffer = function isBuffer (b) {
    return !!(b != null && b._isBuffer)
  }
  
  Buffer.compare = function compare (a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('Arguments must be Buffers')
    }
  
    if (a === b) return 0
  
    var x = a.length
    var y = b.length
  
    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i]
        y = b[i]
        break
      }
    }
  
    if (x < y) return -1
    if (y < x) return 1
    return 0
  }
  
  Buffer.isEncoding = function isEncoding (encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true
      default:
        return false
    }
  }
  
  Buffer.concat = function concat (list, length) {
    if (!isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
  
    if (list.length === 0) {
      return Buffer.alloc(0)
    }
  
    var i
    if (length === undefined) {
      length = 0
      for (i = 0; i < list.length; ++i) {
        length += list[i].length
      }
    }
  
    var buffer = Buffer.allocUnsafe(length)
    var pos = 0
    for (i = 0; i < list.length; ++i) {
      var buf = list[i]
      if (!Buffer.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }
      buf.copy(buffer, pos)
      pos += buf.length
    }
    return buffer
  }
  
  function byteLength (string, encoding) {
    if (Buffer.isBuffer(string)) {
      return string.length
    }
    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
        (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
      return string.byteLength
    }
    if (typeof string !== 'string') {
      string = '' + string
    }
  
    var len = string.length
    if (len === 0) return 0
  
    // Use a for loop to avoid recursion
    var loweredCase = false
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len
        case 'utf8':
        case 'utf-8':
        case undefined:
          return utf8ToBytes(string).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2
        case 'hex':
          return len >>> 1
        case 'base64':
          return base64ToBytes(string).length
        default:
          if (loweredCase) return utf8ToBytes(string).length // assume utf8
          encoding = ('' + encoding).toLowerCase()
          loweredCase = true
      }
    }
  }
  Buffer.byteLength = byteLength
  
  function slowToString (encoding, start, end) {
    var loweredCase = false
  
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
  
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
      start = 0
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
      return ''
    }
  
    if (end === undefined || end > this.length) {
      end = this.length
    }
  
    if (end <= 0) {
      return ''
    }
  
    // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0
    start >>>= 0
  
    if (end <= start) {
      return ''
    }
  
    if (!encoding) encoding = 'utf8'
  
    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end)
  
        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end)
  
        case 'ascii':
          return asciiSlice(this, start, end)
  
        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end)
  
        case 'base64':
          return base64Slice(this, start, end)
  
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end)
  
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = (encoding + '').toLowerCase()
          loweredCase = true
      }
    }
  }
  
  // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
  // Buffer instances.
  Buffer.prototype._isBuffer = true
  
  function swap (b, n, m) {
    var i = b[n]
    b[n] = b[m]
    b[m] = i
  }
  
  Buffer.prototype.swap16 = function swap16 () {
    var len = this.length
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits')
    }
    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1)
    }
    return this
  }
  
  Buffer.prototype.swap32 = function swap32 () {
    var len = this.length
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits')
    }
    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3)
      swap(this, i + 1, i + 2)
    }
    return this
  }
  
  Buffer.prototype.swap64 = function swap64 () {
    var len = this.length
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits')
    }
    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7)
      swap(this, i + 1, i + 6)
      swap(this, i + 2, i + 5)
      swap(this, i + 3, i + 4)
    }
    return this
  }
  
  Buffer.prototype.toString = function toString () {
    var length = this.length | 0
    if (length === 0) return ''
    if (arguments.length === 0) return utf8Slice(this, 0, length)
    return slowToString.apply(this, arguments)
  }
  
  Buffer.prototype.equals = function equals (b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
    if (this === b) return true
    return Buffer.compare(this, b) === 0
  }
  
  Buffer.prototype.inspect = function inspect () {
    var str = ''
    var max = exports.INSPECT_MAX_BYTES
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
      if (this.length > max) str += ' ... '
    }
    return '<Buffer ' + str + '>'
  }
  
  Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
    if (!Buffer.isBuffer(target)) {
      throw new TypeError('Argument must be a Buffer')
    }
  
    if (start === undefined) {
      start = 0
    }
    if (end === undefined) {
      end = target ? target.length : 0
    }
    if (thisStart === undefined) {
      thisStart = 0
    }
    if (thisEnd === undefined) {
      thisEnd = this.length
    }
  
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index')
    }
  
    if (thisStart >= thisEnd && start >= end) {
      return 0
    }
    if (thisStart >= thisEnd) {
      return -1
    }
    if (start >= end) {
      return 1
    }
  
    start >>>= 0
    end >>>= 0
    thisStart >>>= 0
    thisEnd >>>= 0
  
    if (this === target) return 0
  
    var x = thisEnd - thisStart
    var y = end - start
    var len = Math.min(x, y)
  
    var thisCopy = this.slice(thisStart, thisEnd)
    var targetCopy = target.slice(start, end)
  
    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i]
        y = targetCopy[i]
        break
      }
    }
  
    if (x < y) return -1
    if (y < x) return 1
    return 0
  }
  
  // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
  // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
  //
  // Arguments:
  // - buffer - a Buffer to search
  // - val - a string, Buffer, or number
  // - byteOffset - an index into `buffer`; will be clamped to an int32
  // - encoding - an optional encoding, relevant is val is a string
  // - dir - true for indexOf, false for lastIndexOf
  function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1
  
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
      encoding = byteOffset
      byteOffset = 0
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000
    }
    byteOffset = +byteOffset  // Coerce to Number.
    if (isNaN(byteOffset)) {
      // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
      byteOffset = dir ? 0 : (buffer.length - 1)
    }
  
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset
    if (byteOffset >= buffer.length) {
      if (dir) return -1
      else byteOffset = buffer.length - 1
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0
      else return -1
    }
  
    // Normalize val
    if (typeof val === 'string') {
      val = Buffer.from(val, encoding)
    }
  
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
      // Special case: looking for empty string/buffer always fails
      if (val.length === 0) {
        return -1
      }
      return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
    } else if (typeof val === 'number') {
      val = val & 0xFF // Search for a byte value [0-255]
      if (Buffer.TYPED_ARRAY_SUPPORT &&
          typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
        }
      }
      return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
    }
  
    throw new TypeError('val must be string, number or Buffer')
  }
  
  function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
    var indexSize = 1
    var arrLength = arr.length
    var valLength = val.length
  
    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase()
      if (encoding === 'ucs2' || encoding === 'ucs-2' ||
          encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1
        }
        indexSize = 2
        arrLength /= 2
        valLength /= 2
        byteOffset /= 2
      }
    }
  
    function read (buf, i) {
      if (indexSize === 1) {
        return buf[i]
      } else {
        return buf.readUInt16BE(i * indexSize)
      }
    }
  
    var i
    if (dir) {
      var foundIndex = -1
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
        } else {
          if (foundIndex !== -1) i -= i - foundIndex
          foundIndex = -1
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
      for (i = byteOffset; i >= 0; i--) {
        var found = true
        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false
            break
          }
        }
        if (found) return i
      }
    }
  
    return -1
  }
  
  Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1
  }
  
  Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
  }
  
  Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
  }
  
  function hexWrite (buf, string, offset, length) {
    offset = Number(offset) || 0
    var remaining = buf.length - offset
    if (!length) {
      length = remaining
    } else {
      length = Number(length)
      if (length > remaining) {
        length = remaining
      }
    }
  
    // must be an even number of digits
    var strLen = string.length
    if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
  
    if (length > strLen / 2) {
      length = strLen / 2
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16)
      if (isNaN(parsed)) return i
      buf[offset + i] = parsed
    }
    return i
  }
  
  function utf8Write (buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
  }
  
  function asciiWrite (buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length)
  }
  
  function latin1Write (buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length)
  }
  
  function base64Write (buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length)
  }
  
  function ucs2Write (buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
  }
  
  Buffer.prototype.write = function write (string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8'
      length = this.length
      offset = 0
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset
      length = this.length
      offset = 0
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset | 0
      if (isFinite(length)) {
        length = length | 0
        if (encoding === undefined) encoding = 'utf8'
      } else {
        encoding = length
        length = undefined
      }
    // legacy write(string, encoding, offset, length) - remove in v0.13
    } else {
      throw new Error(
        'Buffer.write(string, encoding, offset[, length]) is no longer supported'
      )
    }
  
    var remaining = this.length - offset
    if (length === undefined || length > remaining) length = remaining
  
    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds')
    }
  
    if (!encoding) encoding = 'utf8'
  
    var loweredCase = false
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length)
  
        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length)
  
        case 'ascii':
          return asciiWrite(this, string, offset, length)
  
        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length)
  
        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write(this, string, offset, length)
  
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length)
  
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = ('' + encoding).toLowerCase()
          loweredCase = true
      }
    }
  }
  
  Buffer.prototype.toJSON = function toJSON () {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    }
  }
  
  function base64Slice (buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf)
    } else {
      return base64.fromByteArray(buf.slice(start, end))
    }
  }
  
  function utf8Slice (buf, start, end) {
    end = Math.min(buf.length, end)
    var res = []
  
    var i = start
    while (i < end) {
      var firstByte = buf[i]
      var codePoint = null
      var bytesPerSequence = (firstByte > 0xEF) ? 4
        : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
        : 1
  
      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint
  
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte
            }
            break
          case 2:
            secondByte = buf[i + 1]
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint
              }
            }
            break
          case 3:
            secondByte = buf[i + 1]
            thirdByte = buf[i + 2]
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint
              }
            }
            break
          case 4:
            secondByte = buf[i + 1]
            thirdByte = buf[i + 2]
            fourthByte = buf[i + 3]
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint
              }
            }
        }
      }
  
      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD
        bytesPerSequence = 1
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000
        res.push(codePoint >>> 10 & 0x3FF | 0xD800)
        codePoint = 0xDC00 | codePoint & 0x3FF
      }
  
      res.push(codePoint)
      i += bytesPerSequence
    }
  
    return decodeCodePointsArray(res)
  }
  
  // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety
  var MAX_ARGUMENTS_LENGTH = 0x1000
  
  function decodeCodePointsArray (codePoints) {
    var len = codePoints.length
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    }
  
    // Decode in chunks to avoid "call stack size exceeded".
    var res = ''
    var i = 0
    while (i < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
      )
    }
    return res
  }
  
  function asciiSlice (buf, start, end) {
    var ret = ''
    end = Math.min(buf.length, end)
  
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F)
    }
    return ret
  }
  
  function latin1Slice (buf, start, end) {
    var ret = ''
    end = Math.min(buf.length, end)
  
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i])
    }
    return ret
  }
  
  function hexSlice (buf, start, end) {
    var len = buf.length
  
    if (!start || start < 0) start = 0
    if (!end || end < 0 || end > len) end = len
  
    var out = ''
    for (var i = start; i < end; ++i) {
      out += toHex(buf[i])
    }
    return out
  }
  
  function utf16leSlice (buf, start, end) {
    var bytes = buf.slice(start, end)
    var res = ''
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
    }
    return res
  }
  
  Buffer.prototype.slice = function slice (start, end) {
    var len = this.length
    start = ~~start
    end = end === undefined ? len : ~~end
  
    if (start < 0) {
      start += len
      if (start < 0) start = 0
    } else if (start > len) {
      start = len
    }
  
    if (end < 0) {
      end += len
      if (end < 0) end = 0
    } else if (end > len) {
      end = len
    }
  
    if (end < start) end = start
  
    var newBuf
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = this.subarray(start, end)
      newBuf.__proto__ = Buffer.prototype
    } else {
      var sliceLen = end - start
      newBuf = new Buffer(sliceLen, undefined)
      for (var i = 0; i < sliceLen; ++i) {
        newBuf[i] = this[i + start]
      }
    }
  
    return newBuf
  }
  
  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */
  function checkOffset (offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
  }
  
  Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
    offset = offset | 0
    byteLength = byteLength | 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)
  
    var val = this[offset]
    var mul = 1
    var i = 0
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul
    }
  
    return val
  }
  
  Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
    offset = offset | 0
    byteLength = byteLength | 0
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length)
    }
  
    var val = this[offset + --byteLength]
    var mul = 1
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul
    }
  
    return val
  }
  
  Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length)
    return this[offset]
  }
  
  Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length)
    return this[offset] | (this[offset + 1] << 8)
  }
  
  Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length)
    return (this[offset] << 8) | this[offset + 1]
  }
  
  Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return ((this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16)) +
        (this[offset + 3] * 0x1000000)
  }
  
  Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
  }
  
  Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
    offset = offset | 0
    byteLength = byteLength | 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)
  
    var val = this[offset]
    var mul = 1
    var i = 0
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul
    }
    mul *= 0x80
  
    if (val >= mul) val -= Math.pow(2, 8 * byteLength)
  
    return val
  }
  
  Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
    offset = offset | 0
    byteLength = byteLength | 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)
  
    var i = byteLength
    var mul = 1
    var val = this[offset + --i]
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul
    }
    mul *= 0x80
  
    if (val >= mul) val -= Math.pow(2, 8 * byteLength)
  
    return val
  }
  
  Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length)
    if (!(this[offset] & 0x80)) return (this[offset])
    return ((0xff - this[offset] + 1) * -1)
  }
  
  Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length)
    var val = this[offset] | (this[offset + 1] << 8)
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  }
  
  Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length)
    var val = this[offset + 1] | (this[offset] << 8)
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  }
  
  Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
  }
  
  Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
  }
  
  Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length)
    return ieee754.read(this, offset, true, 23, 4)
  }
  
  Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length)
    return ieee754.read(this, offset, false, 23, 4)
  }
  
  Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length)
    return ieee754.read(this, offset, true, 52, 8)
  }
  
  Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length)
    return ieee754.read(this, offset, false, 52, 8)
  }
  
  function checkInt (buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
  }
  
  Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset | 0
    byteLength = byteLength | 0
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1
      checkInt(this, value, offset, byteLength, maxBytes, 0)
    }
  
    var mul = 1
    var i = 0
    this[offset] = value & 0xFF
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset | 0
    byteLength = byteLength | 0
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1
      checkInt(this, value, offset, byteLength, maxBytes, 0)
    }
  
    var i = byteLength - 1
    var mul = 1
    this[offset + i] = value & 0xFF
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
    this[offset] = (value & 0xff)
    return offset + 1
  }
  
  function objectWriteUInt16 (buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
      buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
        (littleEndian ? i : 1 - i) * 8
    }
  }
  
  Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
    } else {
      objectWriteUInt16(this, value, offset, true)
    }
    return offset + 2
  }
  
  Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8)
      this[offset + 1] = (value & 0xff)
    } else {
      objectWriteUInt16(this, value, offset, false)
    }
    return offset + 2
  }
  
  function objectWriteUInt32 (buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
      buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
    }
  }
  
  Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = (value >>> 24)
      this[offset + 2] = (value >>> 16)
      this[offset + 1] = (value >>> 8)
      this[offset] = (value & 0xff)
    } else {
      objectWriteUInt32(this, value, offset, true)
    }
    return offset + 4
  }
  
  Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24)
      this[offset + 1] = (value >>> 16)
      this[offset + 2] = (value >>> 8)
      this[offset + 3] = (value & 0xff)
    } else {
      objectWriteUInt32(this, value, offset, false)
    }
    return offset + 4
  }
  
  Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1)
  
      checkInt(this, value, offset, byteLength, limit - 1, -limit)
    }
  
    var i = 0
    var mul = 1
    var sub = 0
    this[offset] = value & 0xFF
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1)
  
      checkInt(this, value, offset, byteLength, limit - 1, -limit)
    }
  
    var i = byteLength - 1
    var mul = 1
    var sub = 0
    this[offset + i] = value & 0xFF
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
    if (value < 0) value = 0xff + value + 1
    this[offset] = (value & 0xff)
    return offset + 1
  }
  
  Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
    } else {
      objectWriteUInt16(this, value, offset, true)
    }
    return offset + 2
  }
  
  Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8)
      this[offset + 1] = (value & 0xff)
    } else {
      objectWriteUInt16(this, value, offset, false)
    }
    return offset + 2
  }
  
  Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      this[offset + 2] = (value >>> 16)
      this[offset + 3] = (value >>> 24)
    } else {
      objectWriteUInt32(this, value, offset, true)
    }
    return offset + 4
  }
  
  Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
    if (value < 0) value = 0xffffffff + value + 1
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24)
      this[offset + 1] = (value >>> 16)
      this[offset + 2] = (value >>> 8)
      this[offset + 3] = (value & 0xff)
    } else {
      objectWriteUInt32(this, value, offset, false)
    }
    return offset + 4
  }
  
  function checkIEEE754 (buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
    if (offset < 0) throw new RangeError('Index out of range')
  }
  
  function writeFloat (buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4)
    return offset + 4
  }
  
  Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert)
  }
  
  Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert)
  }
  
  function writeDouble (buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8)
    return offset + 8
  }
  
  Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert)
  }
  
  Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert)
  }
  
  // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
  Buffer.prototype.copy = function copy (target, targetStart, start, end) {
    if (!start) start = 0
    if (!end && end !== 0) end = this.length
    if (targetStart >= target.length) targetStart = target.length
    if (!targetStart) targetStart = 0
    if (end > 0 && end < start) end = start
  
    // Copy 0 bytes; we're done
    if (end === start) return 0
    if (target.length === 0 || this.length === 0) return 0
  
    // Fatal error conditions
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds')
    }
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
    if (end < 0) throw new RangeError('sourceEnd out of bounds')
  
    // Are we oob?
    if (end > this.length) end = this.length
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start
    }
  
    var len = end - start
    var i
  
    if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start]
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      // ascending copy from start
      for (i = 0; i < len; ++i) {
        target[i + targetStart] = this[i + start]
      }
    } else {
      Uint8Array.prototype.set.call(
        target,
        this.subarray(start, start + len),
        targetStart
      )
    }
  
    return len
  }
  
  // Usage:
  //    buffer.fill(number[, offset[, end]])
  //    buffer.fill(buffer[, offset[, end]])
  //    buffer.fill(string[, offset[, end]][, encoding])
  Buffer.prototype.fill = function fill (val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start
        start = 0
        end = this.length
      } else if (typeof end === 'string') {
        encoding = end
        end = this.length
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0)
        if (code < 256) {
          val = code
        }
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string')
      }
      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
      }
    } else if (typeof val === 'number') {
      val = val & 255
    }
  
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index')
    }
  
    if (end <= start) {
      return this
    }
  
    start = start >>> 0
    end = end === undefined ? this.length : end >>> 0
  
    if (!val) val = 0
  
    var i
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val
      }
    } else {
      var bytes = Buffer.isBuffer(val)
        ? val
        : utf8ToBytes(new Buffer(val, encoding).toString())
      var len = bytes.length
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len]
      }
    }
  
    return this
  }
  
  // HELPER FUNCTIONS
  // ================
  
  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
  
  function base64clean (str) {
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = stringtrim(str).replace(INVALID_BASE64_RE, '')
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return ''
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
      str = str + '='
    }
    return str
  }
  
  function stringtrim (str) {
    if (str.trim) return str.trim()
    return str.replace(/^\s+|\s+$/g, '')
  }
  
  function toHex (n) {
    if (n < 16) return '0' + n.toString(16)
    return n.toString(16)
  }
  
  function utf8ToBytes (string, units) {
    units = units || Infinity
    var codePoint
    var length = string.length
    var leadSurrogate = null
    var bytes = []
  
    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i)
  
      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            continue
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            continue
          }
  
          // valid lead
          leadSurrogate = codePoint
  
          continue
        }
  
        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          leadSurrogate = codePoint
          continue
        }
  
        // valid surrogate pair
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
      }
  
      leadSurrogate = null
  
      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break
        bytes.push(codePoint)
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break
        bytes.push(
          codePoint >> 0x6 | 0xC0,
          codePoint & 0x3F | 0x80
        )
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break
        bytes.push(
          codePoint >> 0xC | 0xE0,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        )
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break
        bytes.push(
          codePoint >> 0x12 | 0xF0,
          codePoint >> 0xC & 0x3F | 0x80,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        )
      } else {
        throw new Error('Invalid code point')
      }
    }
  
    return bytes
  }
  
  function asciiToBytes (str) {
    var byteArray = []
    for (var i = 0; i < str.length; ++i) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF)
    }
    return byteArray
  }
  
  function utf16leToBytes (str, units) {
    var c, hi, lo
    var byteArray = []
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break
  
      c = str.charCodeAt(i)
      hi = c >> 8
      lo = c % 256
      byteArray.push(lo)
      byteArray.push(hi)
    }
  
    return byteArray
  }
  
  function base64ToBytes (str) {
    return base64.toByteArray(base64clean(str))
  }
  
  function blitBuffer (src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if ((i + offset >= dst.length) || (i >= src.length)) break
      dst[i + offset] = src[i]
    }
    return i
  }
  
  function isnan (val) {
    return val !== val // eslint-disable-line no-self-compare
  }
  
  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

  // This object will be used as the prototype for Nodes when creating a
  // DOM-Level-1-compliant structure.
  var NodePrototype = module.exports = {
  	get firstChild() {
  		var children = this.children;
  		return children && children[0] || null;
  	},
  	get lastChild() {
  		var children = this.children;
  		return children && children[children.length - 1] || null;
  	},
  	get nodeType() {
  		return nodeTypes[this.type] || nodeTypes.element;
  	}
  };
  
  var domLvl1 = {
  	tagName: "name",
  	childNodes: "children",
  	parentNode: "parent",
  	previousSibling: "prev",
  	nextSibling: "next",
  	nodeValue: "data"
  };
  
  var nodeTypes = {
  	element: 1,
  	text: 3,
  	cdata: 4,
  	comment: 8
  };
  
  Object.keys(domLvl1).forEach(function(key) {
  	var shorthand = domLvl1[key];
  	Object.defineProperty(NodePrototype, key, {
  		get: function() {
  			return this[shorthand] || null;
  		},
  		set: function(val) {
  			this[shorthand] = val;
  			return val;
  		}
  	});
  });


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

  var decodeMap = __webpack_require__(60);
  
  module.exports = decodeCodePoint;
  
  // modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
  function decodeCodePoint(codePoint) {
      if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
          return "\uFFFD";
      }
  
      if (codePoint in decodeMap) {
          codePoint = decodeMap[codePoint];
      }
  
      var output = "";
  
      if (codePoint > 0xffff) {
          codePoint -= 0x10000;
          output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
          codePoint = 0xdc00 | (codePoint & 0x3ff);
      }
  
      output += String.fromCharCode(codePoint);
      return output;
  }


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

  var Tokenizer = __webpack_require__(18);
  
  /*
  	Options:
  
  	xmlMode: Disables the special behavior for script/style tags (false by default)
  	lowerCaseAttributeNames: call .toLowerCase for each attribute name (true if xmlMode is `false`)
  	lowerCaseTags: call .toLowerCase for each tag name (true if xmlMode is `false`)
  */
  
  /*
  	Callbacks:
  
  	oncdataend,
  	oncdatastart,
  	onclosetag,
  	oncomment,
  	oncommentend,
  	onerror,
  	onopentag,
  	onprocessinginstruction,
  	onreset,
  	ontext
  */
  
  var formTags = {
  	input: true,
  	option: true,
  	optgroup: true,
  	select: true,
  	button: true,
  	datalist: true,
  	textarea: true
  };
  
  var openImpliesClose = {
  	tr      : { tr:true, th:true, td:true },
  	th      : { th:true },
  	td      : { thead:true, th:true, td:true },
  	body    : { head:true, link:true, script:true },
  	li      : { li:true },
  	p       : { p:true },
  	h1      : { p:true },
  	h2      : { p:true },
  	h3      : { p:true },
  	h4      : { p:true },
  	h5      : { p:true },
  	h6      : { p:true },
  	select  : formTags,
  	input   : formTags,
  	output  : formTags,
  	button  : formTags,
  	datalist: formTags,
  	textarea: formTags,
  	option  : { option:true },
  	optgroup: { optgroup:true }
  };
  
  var voidElements = {
  	__proto__: null,
  	area: true,
  	base: true,
  	basefont: true,
  	br: true,
  	col: true,
  	command: true,
  	embed: true,
  	frame: true,
  	hr: true,
  	img: true,
  	input: true,
  	isindex: true,
  	keygen: true,
  	link: true,
  	meta: true,
  	param: true,
  	source: true,
  	track: true,
  	wbr: true,
  };
  
  var foreignContextElements = {
  	__proto__: null,
  	math: true,
  	svg: true
  }
  var htmlIntegrationElements = {
  	__proto__: null,
  	mi: true,
  	mo: true,
  	mn: true,
  	ms: true,
  	mtext: true,
  	"annotation-xml": true,
  	foreignObject: true,
  	desc: true,
  	title: true
  }
  
  var re_nameEnd = /\s|\//;
  
  function Parser(cbs, options){
  	this._options = options || {};
  	this._cbs = cbs || {};
  
  	this._tagname = "";
  	this._attribname = "";
  	this._attribvalue = "";
  	this._attribs = null;
  	this._stack = [];
  	this._foreignContext = [];
  
  	this.startIndex = 0;
  	this.endIndex = null;
  
  	this._lowerCaseTagNames = "lowerCaseTags" in this._options ?
  		!!this._options.lowerCaseTags :
  		!this._options.xmlMode;
  	this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ?
  		!!this._options.lowerCaseAttributeNames :
  		!this._options.xmlMode;
  
  	if(this._options.Tokenizer) {
  		Tokenizer = this._options.Tokenizer;
  	}
  	this._tokenizer = new Tokenizer(this._options, this);
  
  	if(this._cbs.onparserinit) this._cbs.onparserinit(this);
  }
  
  __webpack_require__(4)(Parser, __webpack_require__(54).EventEmitter);
  
  Parser.prototype._updatePosition = function(initialOffset){
  	if(this.endIndex === null){
  		if(this._tokenizer._sectionStart <= initialOffset){
  			this.startIndex = 0;
  		} else {
  			this.startIndex = this._tokenizer._sectionStart - initialOffset;
  		}
  	}
  	else this.startIndex = this.endIndex + 1;
  	this.endIndex = this._tokenizer.getAbsoluteIndex();
  };
  
  //Tokenizer event handlers
  Parser.prototype.ontext = function(data){
  	this._updatePosition(1);
  	this.endIndex--;
  
  	if(this._cbs.ontext) this._cbs.ontext(data);
  };
  
  Parser.prototype.onopentagname = function(name){
  	if(this._lowerCaseTagNames){
  		name = name.toLowerCase();
  	}
  
  	this._tagname = name;
  
  	if(!this._options.xmlMode && name in openImpliesClose) {
  		for(
  			var el;
  			(el = this._stack[this._stack.length - 1]) in openImpliesClose[name];
  			this.onclosetag(el)
  		);
  	}
  
  	if(this._options.xmlMode || !(name in voidElements)){
  		this._stack.push(name);
  		if(name in foreignContextElements) this._foreignContext.push(true);
  		else if(name in htmlIntegrationElements) this._foreignContext.push(false);
  	}
  
  	if(this._cbs.onopentagname) this._cbs.onopentagname(name);
  	if(this._cbs.onopentag) this._attribs = {};
  };
  
  Parser.prototype.onopentagend = function(){
  	this._updatePosition(1);
  
  	if(this._attribs){
  		if(this._cbs.onopentag) this._cbs.onopentag(this._tagname, this._attribs);
  		this._attribs = null;
  	}
  
  	if(!this._options.xmlMode && this._cbs.onclosetag && this._tagname in voidElements){
  		this._cbs.onclosetag(this._tagname);
  	}
  
  	this._tagname = "";
  };
  
  Parser.prototype.onclosetag = function(name){
  	this._updatePosition(1);
  
  	if(this._lowerCaseTagNames){
  		name = name.toLowerCase();
  	}
  
  	if(this._stack.length && (!(name in voidElements) || this._options.xmlMode)){
  		var pos = this._stack.lastIndexOf(name);
  		if(pos !== -1){
  			if(this._cbs.onclosetag){
  				pos = this._stack.length - pos;
  				while(pos--) this._cbs.onclosetag(this._stack.pop());
  			}
  			else this._stack.length = pos;
  		} else if(name === "p" && !this._options.xmlMode){
  			this.onopentagname(name);
  			this._closeCurrentTag();
  		}
  	} else if(!this._options.xmlMode && (name === "br" || name === "p")){
  		this.onopentagname(name);
  		this._closeCurrentTag();
  	}
  };
  
  Parser.prototype.onselfclosingtag = function(){
  	if(this._options.xmlMode || this._options.recognizeSelfClosing
  		|| this._foreignContext[this._foreignContext.length - 1]){
  		this._closeCurrentTag();
  	} else {
  		this.onopentagend();
  	}
  };
  
  Parser.prototype._closeCurrentTag = function(){
  	var name = this._tagname;
  
  	this.onopentagend();
  
  	//self-closing tags will be on the top of the stack
  	//(cheaper check than in onclosetag)
  	if(this._stack[this._stack.length - 1] === name){
  		if(this._cbs.onclosetag){
  			this._cbs.onclosetag(name);
  		}
  		this._stack.pop();
  		if((name in foreignContextElements) || (name in htmlIntegrationElements)){
  			this._foreignContext.pop();
  		}
  	}
  };
  
  Parser.prototype.onattribname = function(name){
  	if(this._lowerCaseAttributeNames){
  		name = name.toLowerCase();
  	}
  	this._attribname = name;
  };
  
  Parser.prototype.onattribdata = function(value){
  	this._attribvalue += value;
  };
  
  Parser.prototype.onattribend = function(){
  	if(this._cbs.onattribute) this._cbs.onattribute(this._attribname, this._attribvalue);
  	if(
  		this._attribs &&
  		!Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)
  	){
  		this._attribs[this._attribname] = this._attribvalue;
  	}
  	this._attribname = "";
  	this._attribvalue = "";
  };
  
  Parser.prototype._getInstructionName = function(value){
  	var idx = value.search(re_nameEnd),
  	    name = idx < 0 ? value : value.substr(0, idx);
  
  	if(this._lowerCaseTagNames){
  		name = name.toLowerCase();
  	}
  
  	return name;
  };
  
  Parser.prototype.ondeclaration = function(value){
  	if(this._cbs.onprocessinginstruction){
  		var name = this._getInstructionName(value);
  		this._cbs.onprocessinginstruction("!" + name, "!" + value);
  	}
  };
  
  Parser.prototype.onprocessinginstruction = function(value){
  	if(this._cbs.onprocessinginstruction){
  		var name = this._getInstructionName(value);
  		this._cbs.onprocessinginstruction("?" + name, "?" + value);
  	}
  };
  
  Parser.prototype.oncomment = function(value){
  	this._updatePosition(4);
  
  	if(this._cbs.oncomment) this._cbs.oncomment(value);
  	if(this._cbs.oncommentend) this._cbs.oncommentend();
  };
  
  Parser.prototype.oncdata = function(value){
  	this._updatePosition(1);
  
  	if(this._options.xmlMode || this._options.recognizeCDATA){
  		if(this._cbs.oncdatastart) this._cbs.oncdatastart();
  		if(this._cbs.ontext) this._cbs.ontext(value);
  		if(this._cbs.oncdataend) this._cbs.oncdataend();
  	} else {
  		this.oncomment("[CDATA[" + value + "]]");
  	}
  };
  
  Parser.prototype.onerror = function(err){
  	if(this._cbs.onerror) this._cbs.onerror(err);
  };
  
  Parser.prototype.onend = function(){
  	if(this._cbs.onclosetag){
  		for(
  			var i = this._stack.length;
  			i > 0;
  			this._cbs.onclosetag(this._stack[--i])
  		);
  	}
  	if(this._cbs.onend) this._cbs.onend();
  };
  
  
  //Resets the parser to a blank state, ready to parse a new HTML document
  Parser.prototype.reset = function(){
  	if(this._cbs.onreset) this._cbs.onreset();
  	this._tokenizer.reset();
  
  	this._tagname = "";
  	this._attribname = "";
  	this._attribs = null;
  	this._stack = [];
  
  	if(this._cbs.onparserinit) this._cbs.onparserinit(this);
  };
  
  //Parses a complete HTML document and pushes it to the handler
  Parser.prototype.parseComplete = function(data){
  	this.reset();
  	this.end(data);
  };
  
  Parser.prototype.write = function(chunk){
  	this._tokenizer.write(chunk);
  };
  
  Parser.prototype.end = function(chunk){
  	this._tokenizer.end(chunk);
  };
  
  Parser.prototype.pause = function(){
  	this._tokenizer.pause();
  };
  
  Parser.prototype.resume = function(){
  	this._tokenizer.resume();
  };
  
  //alias for backwards compat
  Parser.prototype.parseChunk = Parser.prototype.write;
  Parser.prototype.done = Parser.prototype.end;
  
  module.exports = Parser;


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

  module.exports = Tokenizer;
  
  var decodeCodePoint = __webpack_require__(16);
  var entityMap = __webpack_require__(10);
  var legacyMap = __webpack_require__(20);
  var xmlMap    = __webpack_require__(11);
  
  var i = 0;
  
  var TEXT                      = i++;
  var BEFORE_TAG_NAME           = i++; //after <
  var IN_TAG_NAME               = i++;
  var IN_SELF_CLOSING_TAG       = i++;
  var BEFORE_CLOSING_TAG_NAME   = i++;
  var IN_CLOSING_TAG_NAME       = i++;
  var AFTER_CLOSING_TAG_NAME    = i++;
  
  //attributes
  var BEFORE_ATTRIBUTE_NAME     = i++;
  var IN_ATTRIBUTE_NAME         = i++;
  var AFTER_ATTRIBUTE_NAME      = i++;
  var BEFORE_ATTRIBUTE_VALUE    = i++;
  var IN_ATTRIBUTE_VALUE_DQ     = i++; // "
  var IN_ATTRIBUTE_VALUE_SQ     = i++; // '
  var IN_ATTRIBUTE_VALUE_NQ     = i++;
  
  //declarations
  var BEFORE_DECLARATION        = i++; // !
  var IN_DECLARATION            = i++;
  
  //processing instructions
  var IN_PROCESSING_INSTRUCTION = i++; // ?
  
  //comments
  var BEFORE_COMMENT            = i++;
  var IN_COMMENT                = i++;
  var AFTER_COMMENT_1           = i++;
  var AFTER_COMMENT_2           = i++;
  
  //cdata
  var BEFORE_CDATA_1            = i++; // [
  var BEFORE_CDATA_2            = i++; // C
  var BEFORE_CDATA_3            = i++; // D
  var BEFORE_CDATA_4            = i++; // A
  var BEFORE_CDATA_5            = i++; // T
  var BEFORE_CDATA_6            = i++; // A
  var IN_CDATA                  = i++; // [
  var AFTER_CDATA_1             = i++; // ]
  var AFTER_CDATA_2             = i++; // ]
  
  //special tags
  var BEFORE_SPECIAL            = i++; //S
  var BEFORE_SPECIAL_END        = i++;   //S
  
  var BEFORE_SCRIPT_1           = i++; //C
  var BEFORE_SCRIPT_2           = i++; //R
  var BEFORE_SCRIPT_3           = i++; //I
  var BEFORE_SCRIPT_4           = i++; //P
  var BEFORE_SCRIPT_5           = i++; //T
  var AFTER_SCRIPT_1            = i++; //C
  var AFTER_SCRIPT_2            = i++; //R
  var AFTER_SCRIPT_3            = i++; //I
  var AFTER_SCRIPT_4            = i++; //P
  var AFTER_SCRIPT_5            = i++; //T
  
  var BEFORE_STYLE_1            = i++; //T
  var BEFORE_STYLE_2            = i++; //Y
  var BEFORE_STYLE_3            = i++; //L
  var BEFORE_STYLE_4            = i++; //E
  var AFTER_STYLE_1             = i++; //T
  var AFTER_STYLE_2             = i++; //Y
  var AFTER_STYLE_3             = i++; //L
  var AFTER_STYLE_4             = i++; //E
  
  var BEFORE_ENTITY             = i++; //&
  var BEFORE_NUMERIC_ENTITY     = i++; //#
  var IN_NAMED_ENTITY           = i++;
  var IN_NUMERIC_ENTITY         = i++;
  var IN_HEX_ENTITY             = i++; //X
  
  var j = 0;
  
  var SPECIAL_NONE              = j++;
  var SPECIAL_SCRIPT            = j++;
  var SPECIAL_STYLE             = j++;
  
  function whitespace(c){
  	return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
  }
  
  function ifElseState(upper, SUCCESS, FAILURE){
  	var lower = upper.toLowerCase();
  
  	if(upper === lower){
  		return function(c){
  			if(c === lower){
  				this._state = SUCCESS;
  			} else {
  				this._state = FAILURE;
  				this._index--;
  			}
  		};
  	} else {
  		return function(c){
  			if(c === lower || c === upper){
  				this._state = SUCCESS;
  			} else {
  				this._state = FAILURE;
  				this._index--;
  			}
  		};
  	}
  }
  
  function consumeSpecialNameChar(upper, NEXT_STATE){
  	var lower = upper.toLowerCase();
  
  	return function(c){
  		if(c === lower || c === upper){
  			this._state = NEXT_STATE;
  		} else {
  			this._state = IN_TAG_NAME;
  			this._index--; //consume the token again
  		}
  	};
  }
  
  function Tokenizer(options, cbs){
  	this._state = TEXT;
  	this._buffer = "";
  	this._sectionStart = 0;
  	this._index = 0;
  	this._bufferOffset = 0; //chars removed from _buffer
  	this._baseState = TEXT;
  	this._special = SPECIAL_NONE;
  	this._cbs = cbs;
  	this._running = true;
  	this._ended = false;
  	this._xmlMode = !!(options && options.xmlMode);
  	this._decodeEntities = !!(options && options.decodeEntities);
  }
  
  Tokenizer.prototype._stateText = function(c){
  	if(c === "<"){
  		if(this._index > this._sectionStart){
  			this._cbs.ontext(this._getSection());
  		}
  		this._state = BEFORE_TAG_NAME;
  		this._sectionStart = this._index;
  	} else if(this._decodeEntities && this._special === SPECIAL_NONE && c === "&"){
  		if(this._index > this._sectionStart){
  			this._cbs.ontext(this._getSection());
  		}
  		this._baseState = TEXT;
  		this._state = BEFORE_ENTITY;
  		this._sectionStart = this._index;
  	}
  };
  
  Tokenizer.prototype._stateBeforeTagName = function(c){
  	if(c === "/"){
  		this._state = BEFORE_CLOSING_TAG_NAME;
  	} else if(c === "<"){
  		this._cbs.ontext(this._getSection());
  		this._sectionStart = this._index;
  	} else if(c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
  		this._state = TEXT;
  	} else if(c === "!"){
  		this._state = BEFORE_DECLARATION;
  		this._sectionStart = this._index + 1;
  	} else if(c === "?"){
  		this._state = IN_PROCESSING_INSTRUCTION;
  		this._sectionStart = this._index + 1;
  	} else {
  		this._state = (!this._xmlMode && (c === "s" || c === "S")) ?
  			BEFORE_SPECIAL : IN_TAG_NAME;
  		this._sectionStart = this._index;
  	}
  };
  
  Tokenizer.prototype._stateInTagName = function(c){
  	if(c === "/" || c === ">" || whitespace(c)){
  		this._emitToken("onopentagname");
  		this._state = BEFORE_ATTRIBUTE_NAME;
  		this._index--;
  	}
  };
  
  Tokenizer.prototype._stateBeforeCloseingTagName = function(c){
  	if(whitespace(c));
  	else if(c === ">"){
  		this._state = TEXT;
  	} else if(this._special !== SPECIAL_NONE){
  		if(c === "s" || c === "S"){
  			this._state = BEFORE_SPECIAL_END;
  		} else {
  			this._state = TEXT;
  			this._index--;
  		}
  	} else {
  		this._state = IN_CLOSING_TAG_NAME;
  		this._sectionStart = this._index;
  	}
  };
  
  Tokenizer.prototype._stateInCloseingTagName = function(c){
  	if(c === ">" || whitespace(c)){
  		this._emitToken("onclosetag");
  		this._state = AFTER_CLOSING_TAG_NAME;
  		this._index--;
  	}
  };
  
  Tokenizer.prototype._stateAfterCloseingTagName = function(c){
  	//skip everything until ">"
  	if(c === ">"){
  		this._state = TEXT;
  		this._sectionStart = this._index + 1;
  	}
  };
  
  Tokenizer.prototype._stateBeforeAttributeName = function(c){
  	if(c === ">"){
  		this._cbs.onopentagend();
  		this._state = TEXT;
  		this._sectionStart = this._index + 1;
  	} else if(c === "/"){
  		this._state = IN_SELF_CLOSING_TAG;
  	} else if(!whitespace(c)){
  		this._state = IN_ATTRIBUTE_NAME;
  		this._sectionStart = this._index;
  	}
  };
  
  Tokenizer.prototype._stateInSelfClosingTag = function(c){
  	if(c === ">"){
  		this._cbs.onselfclosingtag();
  		this._state = TEXT;
  		this._sectionStart = this._index + 1;
  	} else if(!whitespace(c)){
  		this._state = BEFORE_ATTRIBUTE_NAME;
  		this._index--;
  	}
  };
  
  Tokenizer.prototype._stateInAttributeName = function(c){
  	if(c === "=" || c === "/" || c === ">" || whitespace(c)){
  		this._cbs.onattribname(this._getSection());
  		this._sectionStart = -1;
  		this._state = AFTER_ATTRIBUTE_NAME;
  		this._index--;
  	}
  };
  
  Tokenizer.prototype._stateAfterAttributeName = function(c){
  	if(c === "="){
  		this._state = BEFORE_ATTRIBUTE_VALUE;
  	} else if(c === "/" || c === ">"){
  		this._cbs.onattribend();
  		this._state = BEFORE_ATTRIBUTE_NAME;
  		this._index--;
  	} else if(!whitespace(c)){
  		this._cbs.onattribend();
  		this._state = IN_ATTRIBUTE_NAME;
  		this._sectionStart = this._index;
  	}
  };
  
  Tokenizer.prototype._stateBeforeAttributeValue = function(c){
  	if(c === "\""){
  		this._state = IN_ATTRIBUTE_VALUE_DQ;
  		this._sectionStart = this._index + 1;
  	} else if(c === "'"){
  		this._state = IN_ATTRIBUTE_VALUE_SQ;
  		this._sectionStart = this._index + 1;
  	} else if(!whitespace(c)){
  		this._state = IN_ATTRIBUTE_VALUE_NQ;
  		this._sectionStart = this._index;
  		this._index--; //reconsume token
  	}
  };
  
  Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function(c){
  	if(c === "\""){
  		this._emitToken("onattribdata");
  		this._cbs.onattribend();
  		this._state = BEFORE_ATTRIBUTE_NAME;
  	} else if(this._decodeEntities && c === "&"){
  		this._emitToken("onattribdata");
  		this._baseState = this._state;
  		this._state = BEFORE_ENTITY;
  		this._sectionStart = this._index;
  	}
  };
  
  Tokenizer.prototype._stateInAttributeValueSingleQuotes = function(c){
  	if(c === "'"){
  		this._emitToken("onattribdata");
  		this._cbs.onattribend();
  		this._state = BEFORE_ATTRIBUTE_NAME;
  	} else if(this._decodeEntities && c === "&"){
  		this._emitToken("onattribdata");
  		this._baseState = this._state;
  		this._state = BEFORE_ENTITY;
  		this._sectionStart = this._index;
  	}
  };
  
  Tokenizer.prototype._stateInAttributeValueNoQuotes = function(c){
  	if(whitespace(c) || c === ">"){
  		this._emitToken("onattribdata");
  		this._cbs.onattribend();
  		this._state = BEFORE_ATTRIBUTE_NAME;
  		this._index--;
  	} else if(this._decodeEntities && c === "&"){
  		this._emitToken("onattribdata");
  		this._baseState = this._state;
  		this._state = BEFORE_ENTITY;
  		this._sectionStart = this._index;
  	}
  };
  
  Tokenizer.prototype._stateBeforeDeclaration = function(c){
  	this._state = c === "[" ? BEFORE_CDATA_1 :
  		c === "-" ? BEFORE_COMMENT :
  			IN_DECLARATION;
  };
  
  Tokenizer.prototype._stateInDeclaration = function(c){
  	if(c === ">"){
  		this._cbs.ondeclaration(this._getSection());
  		this._state = TEXT;
  		this._sectionStart = this._index + 1;
  	}
  };
  
  Tokenizer.prototype._stateInProcessingInstruction = function(c){
  	if(c === ">"){
  		this._cbs.onprocessinginstruction(this._getSection());
  		this._state = TEXT;
  		this._sectionStart = this._index + 1;
  	}
  };
  
  Tokenizer.prototype._stateBeforeComment = function(c){
  	if(c === "-"){
  		this._state = IN_COMMENT;
  		this._sectionStart = this._index + 1;
  	} else {
  		this._state = IN_DECLARATION;
  	}
  };
  
  Tokenizer.prototype._stateInComment = function(c){
  	if(c === "-") this._state = AFTER_COMMENT_1;
  };
  
  Tokenizer.prototype._stateAfterComment1 = function(c){
  	if(c === "-"){
  		this._state = AFTER_COMMENT_2;
  	} else {
  		this._state = IN_COMMENT;
  	}
  };
  
  Tokenizer.prototype._stateAfterComment2 = function(c){
  	if(c === ">"){
  		//remove 2 trailing chars
  		this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2));
  		this._state = TEXT;
  		this._sectionStart = this._index + 1;
  	} else if(c !== "-"){
  		this._state = IN_COMMENT;
  	}
  	// else: stay in AFTER_COMMENT_2 (`--->`)
  };
  
  Tokenizer.prototype._stateBeforeCdata1 = ifElseState("C", BEFORE_CDATA_2, IN_DECLARATION);
  Tokenizer.prototype._stateBeforeCdata2 = ifElseState("D", BEFORE_CDATA_3, IN_DECLARATION);
  Tokenizer.prototype._stateBeforeCdata3 = ifElseState("A", BEFORE_CDATA_4, IN_DECLARATION);
  Tokenizer.prototype._stateBeforeCdata4 = ifElseState("T", BEFORE_CDATA_5, IN_DECLARATION);
  Tokenizer.prototype._stateBeforeCdata5 = ifElseState("A", BEFORE_CDATA_6, IN_DECLARATION);
  
  Tokenizer.prototype._stateBeforeCdata6 = function(c){
  	if(c === "["){
  		this._state = IN_CDATA;
  		this._sectionStart = this._index + 1;
  	} else {
  		this._state = IN_DECLARATION;
  		this._index--;
  	}
  };
  
  Tokenizer.prototype._stateInCdata = function(c){
  	if(c === "]") this._state = AFTER_CDATA_1;
  };
  
  Tokenizer.prototype._stateAfterCdata1 = function(c){
  	if(c === "]") this._state = AFTER_CDATA_2;
  	else this._state = IN_CDATA;
  };
  
  Tokenizer.prototype._stateAfterCdata2 = function(c){
  	if(c === ">"){
  		//remove 2 trailing chars
  		this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2));
  		this._state = TEXT;
  		this._sectionStart = this._index + 1;
  	} else if(c !== "]") {
  		this._state = IN_CDATA;
  	}
  	//else: stay in AFTER_CDATA_2 (`]]]>`)
  };
  
  Tokenizer.prototype._stateBeforeSpecial = function(c){
  	if(c === "c" || c === "C"){
  		this._state = BEFORE_SCRIPT_1;
  	} else if(c === "t" || c === "T"){
  		this._state = BEFORE_STYLE_1;
  	} else {
  		this._state = IN_TAG_NAME;
  		this._index--; //consume the token again
  	}
  };
  
  Tokenizer.prototype._stateBeforeSpecialEnd = function(c){
  	if(this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")){
  		this._state = AFTER_SCRIPT_1;
  	} else if(this._special === SPECIAL_STYLE && (c === "t" || c === "T")){
  		this._state = AFTER_STYLE_1;
  	}
  	else this._state = TEXT;
  };
  
  Tokenizer.prototype._stateBeforeScript1 = consumeSpecialNameChar("R", BEFORE_SCRIPT_2);
  Tokenizer.prototype._stateBeforeScript2 = consumeSpecialNameChar("I", BEFORE_SCRIPT_3);
  Tokenizer.prototype._stateBeforeScript3 = consumeSpecialNameChar("P", BEFORE_SCRIPT_4);
  Tokenizer.prototype._stateBeforeScript4 = consumeSpecialNameChar("T", BEFORE_SCRIPT_5);
  
  Tokenizer.prototype._stateBeforeScript5 = function(c){
  	if(c === "/" || c === ">" || whitespace(c)){
  		this._special = SPECIAL_SCRIPT;
  	}
  	this._state = IN_TAG_NAME;
  	this._index--; //consume the token again
  };
  
  Tokenizer.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
  Tokenizer.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
  Tokenizer.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
  Tokenizer.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);
  
  Tokenizer.prototype._stateAfterScript5 = function(c){
  	if(c === ">" || whitespace(c)){
  		this._special = SPECIAL_NONE;
  		this._state = IN_CLOSING_TAG_NAME;
  		this._sectionStart = this._index - 6;
  		this._index--; //reconsume the token
  	}
  	else this._state = TEXT;
  };
  
  Tokenizer.prototype._stateBeforeStyle1 = consumeSpecialNameChar("Y", BEFORE_STYLE_2);
  Tokenizer.prototype._stateBeforeStyle2 = consumeSpecialNameChar("L", BEFORE_STYLE_3);
  Tokenizer.prototype._stateBeforeStyle3 = consumeSpecialNameChar("E", BEFORE_STYLE_4);
  
  Tokenizer.prototype._stateBeforeStyle4 = function(c){
  	if(c === "/" || c === ">" || whitespace(c)){
  		this._special = SPECIAL_STYLE;
  	}
  	this._state = IN_TAG_NAME;
  	this._index--; //consume the token again
  };
  
  Tokenizer.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
  Tokenizer.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
  Tokenizer.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);
  
  Tokenizer.prototype._stateAfterStyle4 = function(c){
  	if(c === ">" || whitespace(c)){
  		this._special = SPECIAL_NONE;
  		this._state = IN_CLOSING_TAG_NAME;
  		this._sectionStart = this._index - 5;
  		this._index--; //reconsume the token
  	}
  	else this._state = TEXT;
  };
  
  Tokenizer.prototype._stateBeforeEntity = ifElseState("#", BEFORE_NUMERIC_ENTITY, IN_NAMED_ENTITY);
  Tokenizer.prototype._stateBeforeNumericEntity = ifElseState("X", IN_HEX_ENTITY, IN_NUMERIC_ENTITY);
  
  //for entities terminated with a semicolon
  Tokenizer.prototype._parseNamedEntityStrict = function(){
  	//offset = 1
  	if(this._sectionStart + 1 < this._index){
  		var entity = this._buffer.substring(this._sectionStart + 1, this._index),
  		    map = this._xmlMode ? xmlMap : entityMap;
  
  		if(map.hasOwnProperty(entity)){
  			this._emitPartial(map[entity]);
  			this._sectionStart = this._index + 1;
  		}
  	}
  };
  
  
  //parses legacy entities (without trailing semicolon)
  Tokenizer.prototype._parseLegacyEntity = function(){
  	var start = this._sectionStart + 1,
  	    limit = this._index - start;
  
  	if(limit > 6) limit = 6; //the max length of legacy entities is 6
  
  	while(limit >= 2){ //the min length of legacy entities is 2
  		var entity = this._buffer.substr(start, limit);
  
  		if(legacyMap.hasOwnProperty(entity)){
  			this._emitPartial(legacyMap[entity]);
  			this._sectionStart += limit + 1;
  			return;
  		} else {
  			limit--;
  		}
  	}
  };
  
  Tokenizer.prototype._stateInNamedEntity = function(c){
  	if(c === ";"){
  		this._parseNamedEntityStrict();
  		if(this._sectionStart + 1 < this._index && !this._xmlMode){
  			this._parseLegacyEntity();
  		}
  		this._state = this._baseState;
  	} else if((c < "a" || c > "z") && (c < "A" || c > "Z") && (c < "0" || c > "9")){
  		if(this._xmlMode);
  		else if(this._sectionStart + 1 === this._index);
  		else if(this._baseState !== TEXT){
  			if(c !== "="){
  				this._parseNamedEntityStrict();
  			}
  		} else {
  			this._parseLegacyEntity();
  		}
  
  		this._state = this._baseState;
  		this._index--;
  	}
  };
  
  Tokenizer.prototype._decodeNumericEntity = function(offset, base){
  	var sectionStart = this._sectionStart + offset;
  
  	if(sectionStart !== this._index){
  		//parse entity
  		var entity = this._buffer.substring(sectionStart, this._index);
  		var parsed = parseInt(entity, base);
  
  		this._emitPartial(decodeCodePoint(parsed));
  		this._sectionStart = this._index;
  	} else {
  		this._sectionStart--;
  	}
  
  	this._state = this._baseState;
  };
  
  Tokenizer.prototype._stateInNumericEntity = function(c){
  	if(c === ";"){
  		this._decodeNumericEntity(2, 10);
  		this._sectionStart++;
  	} else if(c < "0" || c > "9"){
  		if(!this._xmlMode){
  			this._decodeNumericEntity(2, 10);
  		} else {
  			this._state = this._baseState;
  		}
  		this._index--;
  	}
  };
  
  Tokenizer.prototype._stateInHexEntity = function(c){
  	if(c === ";"){
  		this._decodeNumericEntity(3, 16);
  		this._sectionStart++;
  	} else if((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")){
  		if(!this._xmlMode){
  			this._decodeNumericEntity(3, 16);
  		} else {
  			this._state = this._baseState;
  		}
  		this._index--;
  	}
  };
  
  Tokenizer.prototype._cleanup = function (){
  	if(this._sectionStart < 0){
  		this._buffer = "";
  		this._bufferOffset += this._index;
  		this._index = 0;
  	} else if(this._running){
  		if(this._state === TEXT){
  			if(this._sectionStart !== this._index){
  				this._cbs.ontext(this._buffer.substr(this._sectionStart));
  			}
  			this._buffer = "";
  			this._bufferOffset += this._index;
  			this._index = 0;
  		} else if(this._sectionStart === this._index){
  			//the section just started
  			this._buffer = "";
  			this._bufferOffset += this._index;
  			this._index = 0;
  		} else {
  			//remove everything unnecessary
  			this._buffer = this._buffer.substr(this._sectionStart);
  			this._index -= this._sectionStart;
  			this._bufferOffset += this._sectionStart;
  		}
  
  		this._sectionStart = 0;
  	}
  };
  
  //TODO make events conditional
  Tokenizer.prototype.write = function(chunk){
  	if(this._ended) this._cbs.onerror(Error(".write() after done!"));
  
  	this._buffer += chunk;
  	this._parse();
  };
  
  Tokenizer.prototype._parse = function(){
  	while(this._index < this._buffer.length && this._running){
  		var c = this._buffer.charAt(this._index);
  		if(this._state === TEXT) {
  			this._stateText(c);
  		} else if(this._state === BEFORE_TAG_NAME){
  			this._stateBeforeTagName(c);
  		} else if(this._state === IN_TAG_NAME) {
  			this._stateInTagName(c);
  		} else if(this._state === BEFORE_CLOSING_TAG_NAME){
  			this._stateBeforeCloseingTagName(c);
  		} else if(this._state === IN_CLOSING_TAG_NAME){
  			this._stateInCloseingTagName(c);
  		} else if(this._state === AFTER_CLOSING_TAG_NAME){
  			this._stateAfterCloseingTagName(c);
  		} else if(this._state === IN_SELF_CLOSING_TAG){
  			this._stateInSelfClosingTag(c);
  		}
  
  		/*
  		*	attributes
  		*/
  		else if(this._state === BEFORE_ATTRIBUTE_NAME){
  			this._stateBeforeAttributeName(c);
  		} else if(this._state === IN_ATTRIBUTE_NAME){
  			this._stateInAttributeName(c);
  		} else if(this._state === AFTER_ATTRIBUTE_NAME){
  			this._stateAfterAttributeName(c);
  		} else if(this._state === BEFORE_ATTRIBUTE_VALUE){
  			this._stateBeforeAttributeValue(c);
  		} else if(this._state === IN_ATTRIBUTE_VALUE_DQ){
  			this._stateInAttributeValueDoubleQuotes(c);
  		} else if(this._state === IN_ATTRIBUTE_VALUE_SQ){
  			this._stateInAttributeValueSingleQuotes(c);
  		} else if(this._state === IN_ATTRIBUTE_VALUE_NQ){
  			this._stateInAttributeValueNoQuotes(c);
  		}
  
  		/*
  		*	declarations
  		*/
  		else if(this._state === BEFORE_DECLARATION){
  			this._stateBeforeDeclaration(c);
  		} else if(this._state === IN_DECLARATION){
  			this._stateInDeclaration(c);
  		}
  
  		/*
  		*	processing instructions
  		*/
  		else if(this._state === IN_PROCESSING_INSTRUCTION){
  			this._stateInProcessingInstruction(c);
  		}
  
  		/*
  		*	comments
  		*/
  		else if(this._state === BEFORE_COMMENT){
  			this._stateBeforeComment(c);
  		} else if(this._state === IN_COMMENT){
  			this._stateInComment(c);
  		} else if(this._state === AFTER_COMMENT_1){
  			this._stateAfterComment1(c);
  		} else if(this._state === AFTER_COMMENT_2){
  			this._stateAfterComment2(c);
  		}
  
  		/*
  		*	cdata
  		*/
  		else if(this._state === BEFORE_CDATA_1){
  			this._stateBeforeCdata1(c);
  		} else if(this._state === BEFORE_CDATA_2){
  			this._stateBeforeCdata2(c);
  		} else if(this._state === BEFORE_CDATA_3){
  			this._stateBeforeCdata3(c);
  		} else if(this._state === BEFORE_CDATA_4){
  			this._stateBeforeCdata4(c);
  		} else if(this._state === BEFORE_CDATA_5){
  			this._stateBeforeCdata5(c);
  		} else if(this._state === BEFORE_CDATA_6){
  			this._stateBeforeCdata6(c);
  		} else if(this._state === IN_CDATA){
  			this._stateInCdata(c);
  		} else if(this._state === AFTER_CDATA_1){
  			this._stateAfterCdata1(c);
  		} else if(this._state === AFTER_CDATA_2){
  			this._stateAfterCdata2(c);
  		}
  
  		/*
  		* special tags
  		*/
  		else if(this._state === BEFORE_SPECIAL){
  			this._stateBeforeSpecial(c);
  		} else if(this._state === BEFORE_SPECIAL_END){
  			this._stateBeforeSpecialEnd(c);
  		}
  
  		/*
  		* script
  		*/
  		else if(this._state === BEFORE_SCRIPT_1){
  			this._stateBeforeScript1(c);
  		} else if(this._state === BEFORE_SCRIPT_2){
  			this._stateBeforeScript2(c);
  		} else if(this._state === BEFORE_SCRIPT_3){
  			this._stateBeforeScript3(c);
  		} else if(this._state === BEFORE_SCRIPT_4){
  			this._stateBeforeScript4(c);
  		} else if(this._state === BEFORE_SCRIPT_5){
  			this._stateBeforeScript5(c);
  		}
  
  		else if(this._state === AFTER_SCRIPT_1){
  			this._stateAfterScript1(c);
  		} else if(this._state === AFTER_SCRIPT_2){
  			this._stateAfterScript2(c);
  		} else if(this._state === AFTER_SCRIPT_3){
  			this._stateAfterScript3(c);
  		} else if(this._state === AFTER_SCRIPT_4){
  			this._stateAfterScript4(c);
  		} else if(this._state === AFTER_SCRIPT_5){
  			this._stateAfterScript5(c);
  		}
  
  		/*
  		* style
  		*/
  		else if(this._state === BEFORE_STYLE_1){
  			this._stateBeforeStyle1(c);
  		} else if(this._state === BEFORE_STYLE_2){
  			this._stateBeforeStyle2(c);
  		} else if(this._state === BEFORE_STYLE_3){
  			this._stateBeforeStyle3(c);
  		} else if(this._state === BEFORE_STYLE_4){
  			this._stateBeforeStyle4(c);
  		}
  
  		else if(this._state === AFTER_STYLE_1){
  			this._stateAfterStyle1(c);
  		} else if(this._state === AFTER_STYLE_2){
  			this._stateAfterStyle2(c);
  		} else if(this._state === AFTER_STYLE_3){
  			this._stateAfterStyle3(c);
  		} else if(this._state === AFTER_STYLE_4){
  			this._stateAfterStyle4(c);
  		}
  
  		/*
  		* entities
  		*/
  		else if(this._state === BEFORE_ENTITY){
  			this._stateBeforeEntity(c);
  		} else if(this._state === BEFORE_NUMERIC_ENTITY){
  			this._stateBeforeNumericEntity(c);
  		} else if(this._state === IN_NAMED_ENTITY){
  			this._stateInNamedEntity(c);
  		} else if(this._state === IN_NUMERIC_ENTITY){
  			this._stateInNumericEntity(c);
  		} else if(this._state === IN_HEX_ENTITY){
  			this._stateInHexEntity(c);
  		}
  
  		else {
  			this._cbs.onerror(Error("unknown _state"), this._state);
  		}
  
  		this._index++;
  	}
  
  	this._cleanup();
  };
  
  Tokenizer.prototype.pause = function(){
  	this._running = false;
  };
  Tokenizer.prototype.resume = function(){
  	this._running = true;
  
  	if(this._index < this._buffer.length){
  		this._parse();
  	}
  	if(this._ended){
  		this._finish();
  	}
  };
  
  Tokenizer.prototype.end = function(chunk){
  	if(this._ended) this._cbs.onerror(Error(".end() after done!"));
  	if(chunk) this.write(chunk);
  
  	this._ended = true;
  
  	if(this._running) this._finish();
  };
  
  Tokenizer.prototype._finish = function(){
  	//if there is remaining data, emit it in a reasonable way
  	if(this._sectionStart < this._index){
  		this._handleTrailingData();
  	}
  
  	this._cbs.onend();
  };
  
  Tokenizer.prototype._handleTrailingData = function(){
  	var data = this._buffer.substr(this._sectionStart);
  
  	if(this._state === IN_CDATA || this._state === AFTER_CDATA_1 || this._state === AFTER_CDATA_2){
  		this._cbs.oncdata(data);
  	} else if(this._state === IN_COMMENT || this._state === AFTER_COMMENT_1 || this._state === AFTER_COMMENT_2){
  		this._cbs.oncomment(data);
  	} else if(this._state === IN_NAMED_ENTITY && !this._xmlMode){
  		this._parseLegacyEntity();
  		if(this._sectionStart < this._index){
  			this._state = this._baseState;
  			this._handleTrailingData();
  		}
  	} else if(this._state === IN_NUMERIC_ENTITY && !this._xmlMode){
  		this._decodeNumericEntity(2, 10);
  		if(this._sectionStart < this._index){
  			this._state = this._baseState;
  			this._handleTrailingData();
  		}
  	} else if(this._state === IN_HEX_ENTITY && !this._xmlMode){
  		this._decodeNumericEntity(3, 16);
  		if(this._sectionStart < this._index){
  			this._state = this._baseState;
  			this._handleTrailingData();
  		}
  	} else if(
  		this._state !== IN_TAG_NAME &&
  		this._state !== BEFORE_ATTRIBUTE_NAME &&
  		this._state !== BEFORE_ATTRIBUTE_VALUE &&
  		this._state !== AFTER_ATTRIBUTE_NAME &&
  		this._state !== IN_ATTRIBUTE_NAME &&
  		this._state !== IN_ATTRIBUTE_VALUE_SQ &&
  		this._state !== IN_ATTRIBUTE_VALUE_DQ &&
  		this._state !== IN_ATTRIBUTE_VALUE_NQ &&
  		this._state !== IN_CLOSING_TAG_NAME
  	){
  		this._cbs.ontext(data);
  	}
  	//else, ignore remaining data
  	//TODO add a way to remove current tag
  };
  
  Tokenizer.prototype.reset = function(){
  	Tokenizer.call(this, {xmlMode: this._xmlMode, decodeEntities: this._decodeEntities}, this._cbs);
  };
  
  Tokenizer.prototype.getAbsoluteIndex = function(){
  	return this._bufferOffset + this._index;
  };
  
  Tokenizer.prototype._getSection = function(){
  	return this._buffer.substring(this._sectionStart, this._index);
  };
  
  Tokenizer.prototype._emitToken = function(name){
  	this._cbs[name](this._getSection());
  	this._sectionStart = -1;
  };
  
  Tokenizer.prototype._emitPartial = function(value){
  	if(this._baseState !== TEXT){
  		this._cbs.onattribdata(value); //TODO implement the new event
  	} else {
  		this._cbs.ontext(value);
  	}
  };


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

  module.exports = Stream;
  
  var Parser = __webpack_require__(17);
  var WritableStream = __webpack_require__(79).Writable;
  var StringDecoder = __webpack_require__(76).StringDecoder;
  var Buffer = __webpack_require__(14).Buffer;
  
  function Stream(cbs, options){
  	var parser = this._parser = new Parser(cbs, options);
  	var decoder = this._decoder = new StringDecoder();
  
  	WritableStream.call(this, {decodeStrings: false});
  
  	this.once("finish", function(){
  		parser.end(decoder.end());
  	});
  }
  
  __webpack_require__(4)(Stream, WritableStream);
  
  WritableStream.prototype._write = function(chunk, encoding, cb){
  	if(chunk instanceof Buffer) chunk = this._decoder.write(chunk);
  	this._parser.write(chunk);
  	cb();
  };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

  module.exports = {"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","QUOT":"\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
  
    GLOBAL: {
      HIDE: '__react_tooltip_hide_event',
      REBUILD: '__react_tooltip_rebuild_event',
      SHOW: '__react_tooltip_show_event'
    }
  };

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var WHITE = exports.WHITE = '#F8F8FF';
  var BLACK = exports.BLACK = '#555459';
  var BLUE = exports.BLUE = '#2986BE';
  var GRADIENT_BG = exports.GRADIENT_BG = 'linear-gradient(-150deg, #00C1B6 0%, #136EB5 97%)';

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

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


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Dog() {
    return _react2.default.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", width: "275px", height: "275px", viewBox: "0 0 324 252.73" },
      _react2.default.createElement("path", { d: "M207.73,235.86", transform: "translate(-18.1 -53.2)", style: { fill: '#502211' } }),
      _react2.default.createElement("path", { d: "M147.12,305.93l-.65-.62A2,2,0,0,0,147.12,305.93Z", transform: "translate(-18.1 -53.2)", style: { fill: 'none' } }),
      _react2.default.createElement("path", { d: "M235,301.87l-.61.62A2,2,0,0,0,235,301.87Z", transform: "translate(-18.1 -53.2)", style: { fill: 'none' } }),
      _react2.default.createElement("path", { d: "M331.6,102.77l-.09-.17c-1.61-3.5-3.59-5.69-5.87-6.51a6.53,6.53,0,0,0-4.68.14l-8.28,4.28,2.55-5.37a31.41,31.41,0,0,1-8.84,1.15l-3.1-.13.09-3.1a22.75,22.75,0,0,1,2.6-9.73c-9-3.51-16.68-4.07-22.74-1.66a17.38,17.38,0,0,0-9.41,8.63l-1.29,3.24-3.09-1.61a11,11,0,0,1-6.07-7.43,12.17,12.17,0,0,1-.07-4.64A86.75,86.75,0,0,0,246.1,93.48c.1.75.2,1.4.29,1.92,10.09,5.35,18.07,14.27,23.71,22.25a119.36,119.36,0,0,1,23.72-.4c15.17,15.15,8.92,37.11,6.67,43.41a19.47,19.47,0,0,1,4.49,7,27.61,27.61,0,0,1,3.35,7.66c20-14.07,13.4-30.79,13.09-31.53l-2.48-5.85,6.16,1.58a32.54,32.54,0,0,0,6.43,1c-6.28-10.22-.92-25.55-.69-26.2l1.85-5.19,2.55,3.07A42.64,42.64,0,0,0,331.6,102.77Z", transform: "translate(-18.1 -53.2)", style: { fill: '#fec869' } }),
      _react2.default.createElement("path", { d: "M293.81,117.24a119.36,119.36,0,0,0-23.72.4,104.7,104.7,0,0,1,9.8,16.94l2.47,5.66-5.9-1.15a53,53,0,0,0,12.44,17.07,16.15,16.15,0,0,1,6.28,1,15.49,15.49,0,0,1,5.31,3.45C302.73,154.35,309,132.39,293.81,117.24Z", transform: "translate(-18.1 -53.2)", style: { fill: '#f27395' } }),
      _react2.default.createElement("path", { d: "M335.32,122.12c-.81,4.55-1.17,10.87,1.67,15.28.27.42,1.7,2.18,3.16,2.47l.3,6.09a31.21,31.21,0,0,1-11.89.6,30.83,30.83,0,0,1,0,9.84c-2.31,13.92-13.5,22.77-22.48,27.75l-3.39-5.28a1.41,1.41,0,0,0-.36.35s1-2.17-2.87-8.57l-.21-.35-.12-.37c0-.05-1.65-5.13-6.23-6.87a12.11,12.11,0,0,0-7.71,0,72.28,72.28,0,0,1,8.24,10.77l5.94,9.43-10.07-4.78a27,27,0,0,0-3.46-1.4c4,7.27,1.76,18.23,1.43,19.73l-2.15,9.74-4-9.14a4.71,4.71,0,0,0-2.84-2c2.55,7,8.47,16.22,11,19.79l2.6,3.68-4.31,1.3a20.63,20.63,0,0,1-4.65.86q.1.35.18.72a19.16,19.16,0,0,1,.42,5.83l0,.28-.08.27c-1.71,5.93-2.38,23.32-2.49,29.52l-.14,7.66-5.4-5.43a11.36,11.36,0,0,0-3.86-2.22c-4.55,26-18.79,27.1-19.42,27.13l-4.71.25.85-2.62a53.39,53.39,0,0,1-13.09,9,35.29,35.29,0,0,1-5.7,2.11c-8.09,2.2-13.13.09-13.52-.08l-2.13-.94a33.84,33.84,0,0,1-9.84,4.56,15.07,15.07,0,0,1-11.87-2,17.71,17.71,0,0,1-13.78.07c-2.7-.93-4.9-.94-6.54,0-2.54,1.38-3.33,4.63-3.34,4.67l-.36,1.52-1.42.69a7.48,7.48,0,0,1-3.09.71c-3,.05-6.48-1.5-10.42-4.64-.47-.38-.93-.76-1.37-1.15a55.25,55.25,0,0,1-4-3.85l-2.07-.25a26.31,26.31,0,0,1-7-1.64A37.35,37.35,0,0,0,135,290c-12.83-3.51-18.39-7.56-19.82-8.74-6.59-3.73-9.49-8.44-10.59-12.76L104,268c-4.17-3.58-3.46-9.87-2.54-13.62a17.67,17.67,0,0,1-6.68-7.75l-.1-.24-.06-.25c-1.45-6.13-.22-15.42.9-21.52a24.71,24.71,0,0,1-6.54-.06c-2.5-.43-3.88-1.57-4.13-3.38a3.62,3.62,0,0,1,2.25-3.79,8.47,8.47,0,0,0,1.59-1.2L82.26,218l6-7.79c1.33-1.72,3-8.54,4-14.49-3-2.32-7.52-.5-7.57-.48l-2.65-5.91a22.83,22.83,0,0,0,5.27-3.24,23.08,23.08,0,0,1-5.54-12.77c-3.34-.6-6.14-.3-8.36.9-4.3,2.34-5.23,7.6-5.23,7.66l-.06.38-.16.38c-3,6.88-1.68,8.86-1.67,8.88a1.41,1.41,0,0,0-.41-.29l-2.63,5.69c-9.57-3.7-21.87-10.93-26.07-24.4a30.83,30.83,0,0,1-1.39-9.74,31.21,31.21,0,0,1-11.86,1l-.53-6.07c1.41-.49,2.58-2.42,2.8-2.88,2.21-4.76,1-11-.44-15.36l-2.87,4.62-2.72-4c-4.74-6.9,0-20.48.7-22.43,1.65-5.39,4.39-9.08,8.14-11a12.5,12.5,0,0,1,3.23-1.11l3.8-4A20.49,20.49,0,0,0,46.24,104a17.22,17.22,0,0,0-3.62-5.44L39.55,95.8l3.51-2.2C54.39,86.48,64.62,84,73.48,86.24a24.19,24.19,0,0,1,11.78,6.94,3.83,3.83,0,0,0,.34-1.3c.24-3-2.71-6.67-3.76-7.71l-8.6-8.47,11.64,3.2c12.62,3.47,22.93,10.21,28.93,14.81a61.06,61.06,0,0,1,16.41-4.23,3.07,3.07,0,0,0-1.16-.71.53.53,0,0,0,.45-.22h0l-5.46-3.49a4.83,4.83,0,0,1,.28-.41c3.59-5,11.34-6.63,23.07-4.93a99.52,99.52,0,0,1,11.51,2.43,31.65,31.65,0,0,0-4.26-9.53l-3.45-5.21,6.25.18c10.78.32,16.64,5.25,19.45,10.11A33,33,0,0,1,207,67.22l5.61.84L209,72.47a4.93,4.93,0,0,0-.9,1.82c.31.19,1.42.69,4.33.7,1.7,0,2.32-.55,2.67-1,1.71-2.35.82-8.54-.36-12.18L212.92,56l5.81,1.6c6,1.67,9.32,5,11,8.4,6.9-6.71,17.44-12.08,18.93-12.83l3.6,5.33c-5.66,5-6.92,15-7,22.45,0,1.54,0,3,.09,4.47a84.47,84.47,0,0,1,23.12-15.26l11.09-4.77L272.19,75c-.9,1.17-3.32,5.18-2.67,8.15a3.83,3.83,0,0,0,.51,1.24,24.19,24.19,0,0,1,10.72-8.49c8.47-3.43,18.94-2.38,31.14,3.11l3.78,1.7L313,83.88a17.22,17.22,0,0,0-2.84,5.89A20.49,20.49,0,0,0,319.95,86l4.32,3.45a12.5,12.5,0,0,1,3.35.66c4,1.37,7.2,4.65,9.57,9.76,1,1.84,7.51,14.64,3.77,22.12l-2.15,4.3ZM90.05,134.68c.71-.69,1.4-1.3,2.07-1.84a44.21,44.21,0,0,0-10.76-.94l-6.93.37,4-5.33.16-.22a49.54,49.54,0,0,1,24.07-17.6c-1,0-1.93.11-2.85.21l-10.71,1.14,8.3-6.86a64.54,64.54,0,0,1,10-6.79,85.1,85.1,0,0,0-16.08-9,12.17,12.17,0,0,1,.57,4.6,11,11,0,0,1-5,8.19l-2.84,2-1.72-3a17.38,17.38,0,0,0-10.5-7.26c-6.34-1.55-13.83.05-22.3,4.76a22.75,22.75,0,0,1,3.9,9.28l.51,3.06-3.05.55A31.41,31.41,0,0,1,42,110l3.27,5-8.79-3.11a6.53,6.53,0,0,0-4.65.5c-2.15,1.12-3.8,3.56-4.92,7.25l-.06.18a42.64,42.64,0,0,0-2.31,9.81l2.1-3.39,2.55,4.89c.32.62,7.73,15.06,2.91,26.05a32.54,32.54,0,0,0,6.23-1.86l5.88-2.41-1.66,6.14c-.2.78-4.42,18.24,17.29,29.44a27.61,27.61,0,0,1,2.27-8,19.47,19.47,0,0,1,3.48-7.55,15.49,15.49,0,0,1,4.78-4.14A18.11,18.11,0,0,1,81.9,167a32.24,32.24,0,0,1,.7-3.64c.28-1.11.61-2.18,1-3.18l-4.73,4.93,1.29-9.48.05-.4C81.62,144.77,86.34,138.28,90.05,134.68Zm186.46,42.39.22-2a5.44,5.44,0,0,1,2.82-4,7.19,7.19,0,0,1,3.21-.86c-1.85-2.27-3.69-4.17-5-4.82l-3.46-1.74,2.32-3.1a14.53,14.53,0,0,1,3.86-3.59,55.86,55.86,0,0,1-11.31-18.6,3.88,3.88,0,0,1,2.4-5.87c-4.4-8.19-14.76-24.8-29.53-32l-1.44-.7-.32-1.57c-.2-1-3.72-18.86.62-32.87-4.34,3-8.56,6.54-10.23,9.77l-6.08-2a7.53,7.53,0,0,0-2.19-6.28c.38,3.65.17,7.94-2,11a9.21,9.21,0,0,1-7.92,3.72c-2,0-8.14,0-10.22-4.37a6.38,6.38,0,0,1-.5-3.82h-.86c-15.23.28-22.14,12.54-22.22,12.67l-5.1,9.29-1-10.55a11.62,11.62,0,0,0-2.31-5.19,13.36,13.36,0,0,0-7-4.55c1.67,3.75,3.11,8.57,1.9,12.47l-1,3.16-3.14-1a96.92,96.92,0,0,0-14.66-3.42,41.36,41.36,0,0,0-10.69-.37,31.11,31.11,0,0,1,3.77,5l-3,5a37.93,37.93,0,0,0-6.66.4,55.91,55.91,0,0,0-13.61,3.67h0c-1,.43-2.1.9-3.17,1.42s-2.1,1-3.16,1.65a28.31,28.31,0,0,1,4.91,1q.62.18,1.21.41l.54.21c.44.18.86.38,1.27.6s.61.34.9.53l.44.3a8.21,8.21,0,0,1,2.16,2.25l3.39,5.38-6.34-.42a24.93,24.93,0,0,0-2.92,0c-.83.05-1.82.15-2.93.3l-1.05.16-.13,0a42.83,42.83,0,0,0-23.27,12.06c1.09.11,2.24.26,3.43.47a29.05,29.05,0,0,1,8.56,2.76c.33.18.65.36,1,.55l3.84,2.37.52.32,1.28.79-1.85.69-.68.25-3.68,1.37c-.39.15-8.63,3.48-12.39,14.61a8.48,8.48,0,0,1,3.49.35l4.21,1.34-2.54,3.61a31.26,31.26,0,0,0-5,13.44q-.06.66-.09,1.34a19.62,19.62,0,0,0,0,2,17.46,17.46,0,0,0,.64,3.65,17.19,17.19,0,0,0,4.35,7.31,4.45,4.45,0,0,1,1.12,3.84,5.87,5.87,0,0,1-.91,2.25,11.48,11.48,0,0,1,4.92,3.68l.86,1.09-.2,1.38a100.25,100.25,0,0,1-2.55,12.13l2-.59a2.91,2.91,0,0,1,1.88-.17l2.49.5.11,2.54a2.84,2.84,0,0,1-1,2.51l-.73.79c-1.86,2-3.46,3.71-4.84,5.1a2.85,2.85,0,0,0,1-.44.92.92,0,0,0-.19.26l6,2.28c-1.13,4.51-3.7,17.55-2.26,24.34.41.84,2.21,4.19,5.41,5.1l3.42,1-1.28,3.32a19.4,19.4,0,0,0-.86,3.12l4,1.46-1,3.51c-.52,3.59.12,9.52,8.07,13.91l.34.19.29.27s4.66,4,17.46,7.53a43.25,43.25,0,0,1,4.21,1.37c1.69.63,2.72,1,8.71,1.65l1.27.13.84,1c3.76,4.32,8.56,7.87,11,8.33a13.56,13.56,0,0,1,5.77-6.72c3.38-1.88,7.43-2,12.05-.36l.24.08.22.12c.13.06,4.21,2,10-.85l2.08-1,1.66,1.63a8.57,8.57,0,0,0,7.64,1.71c.11,0,12.47-3.26,16.77-14.71l2.41-6.44,3.43,6c.73,1.27,1.73,4.83-2.46,12.43,5.41-.1,15.91-2.81,29.09-18.55l7-8.38-1.31,10.85c0,.11-.19,1.53-.58,3.57l.51-.49c2.92-3,6.74-9.19,8.36-21.91l.44-3.43,3.4.66a28.11,28.11,0,0,1,5.12,1.58c.27-7.23.94-19.48,2.48-25.22,0-1,.09-5-2.3-7.15a10.84,10.84,0,0,1-2.23-1.38l3.34-5.46a11.6,11.6,0,0,1,2.35,1.3,9.6,9.6,0,0,0,2.8.57c-3.71-5.78-9.58-15.86-10.36-22.88l-.41-3.67,3.7.07a21.39,21.39,0,0,1,7.65,1.67c.2-4.42-.35-9.69-3.37-11.59ZM98.28,206.73a3.25,3.25,0,0,0-1.09.84A4.87,4.87,0,0,1,98.28,206.73Zm3.59,5.3a5.19,5.19,0,0,1-1.54.8A3.19,3.19,0,0,0,101.87,212Zm233.36-99.85a42.64,42.64,0,0,0-3.63-9.41l-.09-.17c-1.61-3.5-3.59-5.69-5.87-6.51a6.53,6.53,0,0,0-4.68.14l-8.28,4.28,2.55-5.37a31.41,31.41,0,0,1-8.84,1.15l-3.1-.13.09-3.1a22.75,22.75,0,0,1,2.6-9.73c-9-3.51-16.68-4.07-22.74-1.66a17.38,17.38,0,0,0-9.41,8.63l-1.29,3.24-3.09-1.61a11,11,0,0,1-6.07-7.43,12.17,12.17,0,0,1-.07-4.64A86.75,86.75,0,0,0,246.1,93.48c.1.75.2,1.4.29,1.92,10.09,5.35,18.07,14.27,23.71,22.25a104.7,104.7,0,0,1,9.8,16.94l2.47,5.66-5.9-1.15a53,53,0,0,0,12.44,17.07,16.15,16.15,0,0,1,6.28,1,15.49,15.49,0,0,1,5.31,3.45,19.47,19.47,0,0,1,4.49,7,27.61,27.61,0,0,1,3.35,7.66c20-14.07,13.4-30.79,13.09-31.53l-2.48-5.85,6.16,1.58a32.54,32.54,0,0,0,6.43,1c-6.28-10.22-.92-25.55-.69-26.2l1.85-5.19Z", transform: "translate(-18.1 -53.2)" }),
      _react2.default.createElement("path", { d: "M66.22,129a105.81,105.81,0,0,1,12.2-2.06l.16-.22a49.54,49.54,0,0,1,24.07-17.6c-1,0-1.93.11-2.85.21l-10.71,1.14,8.3-6.86a64.54,64.54,0,0,1,10-6.79,85.1,85.1,0,0,0-16.08-9,12.17,12.17,0,0,1,.57,4.6,11,11,0,0,1-5,8.19l-2.84,2-1.72-3a17.38,17.38,0,0,0-10.5-7.26c-6.34-1.55-13.83.05-22.3,4.76a22.75,22.75,0,0,1,3.9,9.28l.51,3.06-3.05.55A31.41,31.41,0,0,1,42,110l3.27,5-8.79-3.11a6.53,6.53,0,0,0-4.65.5c-2.15,1.12-3.8,3.56-4.92,7.25l-.06.18a42.64,42.64,0,0,0-2.31,9.81l2.1-3.39,2.55,4.89c.32.62,7.73,15.06,2.91,26.05a32.54,32.54,0,0,0,6.23-1.86l5.88-2.41-1.66,6.14c-.2.78-4.42,18.24,17.29,29.44a27.61,27.61,0,0,1,2.27-8,19.47,19.47,0,0,1,3.48-7.55C62.47,167,53.27,146.08,66.22,129Z", transform: "translate(-18.1 -53.2)", style: { fill: '#fec869' } }),
      _react2.default.createElement("path", { d: "M90.05,134.68c.71-.69,1.4-1.3,2.07-1.84a44.21,44.21,0,0,0-10.76-.94l-6.93.37,4-5.33A105.81,105.81,0,0,0,66.22,129c-12.95,17.09-3.75,38-.66,43.92a15.49,15.49,0,0,1,4.78-4.14A18.11,18.11,0,0,1,81.9,167a32.24,32.24,0,0,1,.7-3.64c.28-1.11.61-2.18,1-3.18l-4.73,4.93,1.29-9.48.05-.4C81.62,144.77,86.34,138.28,90.05,134.68Z", transform: "translate(-18.1 -53.2)", style: { fill: '#f27395' } }),
      _react2.default.createElement("path", { d: "M100.34,212.83a3.19,3.19,0,0,0,1.54-.8A5.19,5.19,0,0,1,100.34,212.83Z", transform: "translate(-18.1 -53.2)", style: { fill: '#fec869' } }),
      _react2.default.createElement("path", { d: "M279.55,171a7.19,7.19,0,0,1,3.21-.86c-1.85-2.27-3.69-4.17-5-4.82l-3.46-1.74,2.32-3.1a14.53,14.53,0,0,1,3.86-3.59,55.86,55.86,0,0,1-11.31-18.6,3.88,3.88,0,0,1,2.4-5.87c-4.4-8.19-14.76-24.8-29.53-32l-1.44-.7-.32-1.57c-.2-1-3.72-18.86.62-32.87-4.34,3-8.56,6.54-10.23,9.77l-6.08-2a7.53,7.53,0,0,0-2.19-6.28c.38,3.65.17,7.94-2,11a9.21,9.21,0,0,1-7.92,3.72c-2,0-8.14,0-10.22-4.37a6.38,6.38,0,0,1-.5-3.82h-.86c-15.23.28-22.14,12.54-22.22,12.67l-5.1,9.29-1-10.55a11.63,11.63,0,0,0-2.31-5.19,13.36,13.36,0,0,0-7-4.55c1.67,3.75,3.11,8.57,1.9,12.47l-1,3.16-3.14-1a96.92,96.92,0,0,0-14.66-3.42,41.36,41.36,0,0,0-10.69-.37,31.11,31.11,0,0,1,3.77,5l-3,5a37.93,37.93,0,0,0-6.66.4,55.91,55.91,0,0,0-13.61,3.67h0c-1,.43-2.1.9-3.17,1.42s-2.1,1-3.16,1.65a28.31,28.31,0,0,1,4.91,1q.62.18,1.21.41l.54.21c.44.18.86.38,1.27.6s.61.34.9.53l.44.3a8.21,8.21,0,0,1,2.16,2.25l3.39,5.38-6.34-.42a24.93,24.93,0,0,0-2.92,0c-.83.05-1.82.15-2.93.3l-1.05.16-.13,0a42.83,42.83,0,0,0-23.27,12.06c1.09.11,2.24.26,3.43.47a29.05,29.05,0,0,1,8.56,2.76c.33.18.65.36,1,.55l3.84,2.37.52.32,1.28.79-1.85.69-.68.25-3.68,1.37c-.39.15-8.63,3.48-12.39,14.61a8.48,8.48,0,0,1,3.49.35l4.21,1.34-2.54,3.61a31.26,31.26,0,0,0-5,13.44q-.06.66-.09,1.34a19.62,19.62,0,0,0,0,2,17.46,17.46,0,0,0,.64,3.65,17.19,17.19,0,0,0,4.35,7.31,4.45,4.45,0,0,1,1.12,3.84,5.87,5.87,0,0,1-.91,2.25,11.48,11.48,0,0,1,4.92,3.68l.86,1.09-.2,1.38a100.25,100.25,0,0,1-2.55,12.13l2-.59a2.91,2.91,0,0,1,1.88-.17l2.49.5.11,2.54a2.84,2.84,0,0,1-1,2.51l-.73.79c-1.86,2-3.46,3.71-4.84,5.1a2.85,2.85,0,0,0,1-.44.92.92,0,0,0-.19.26l6,2.28c-1.13,4.51-3.7,17.55-2.26,24.34.41.84,2.21,4.19,5.41,5.1l3.42,1-1.28,3.32a19.4,19.4,0,0,0-.86,3.12l4,1.46-1,3.51c-.52,3.59.12,9.52,8.07,13.91l.34.19.29.27s4.66,4,17.46,7.53a43.25,43.25,0,0,1,4.21,1.37c1.69.63,2.72,1,8.71,1.65l1.27.13.84,1c3.76,4.32,8.56,7.87,11,8.33a13.56,13.56,0,0,1,5.77-6.72c3.38-1.88,7.43-2,12.05-.36l.24.08.22.12c.13.06,4.21,2,10-.85l2.08-1,1.66,1.63a8.57,8.57,0,0,0,7.64,1.71c.11,0,12.47-3.26,16.77-14.71l2.41-6.44,3.43,6c.73,1.27,1.73,4.83-2.46,12.43,5.41-.1,15.91-2.81,29.09-18.55l7-8.38-1.31,10.85c0,.11-.19,1.53-.58,3.57l.51-.49c2.92-3,6.74-9.19,8.36-21.91l.44-3.43,3.4.66a28.11,28.11,0,0,1,5.12,1.58c.27-7.23.94-19.48,2.48-25.22,0-1,.09-5-2.3-7.15a10.84,10.84,0,0,1-2.23-1.38l3.34-5.46a11.6,11.6,0,0,1,2.35,1.3,9.6,9.6,0,0,0,2.8.57c-3.71-5.78-9.58-15.86-10.36-22.88l-.41-3.67,3.7.07a21.39,21.39,0,0,1,7.65,1.67c.2-4.42-.35-9.69-3.37-11.59l-1.72-1.08.22-2A5.44,5.44,0,0,1,279.55,171Z", transform: "translate(-18.1 -53.2)", style: { fill: '#fec869' } }),
      _react2.default.createElement("path", { d: "M97.19,207.57a4.87,4.87,0,0,1,1.09-.84A3.25,3.25,0,0,0,97.19,207.57Z", transform: "translate(-18.1 -53.2)", style: { fill: '#fec869' } }),
      _react2.default.createElement("path", { d: "M303.37,281.2a2.94,2.94,0,0,0,1.83-1.33,3,3,0,0,0-.33-3.37c-8.94-11.15-22.34-24.55-30.74-32.65-.79-.76-.23-2.15.76-1.89,4.81,1.24,9.49,2.68,12.93,3.78a3.18,3.18,0,0,0,4.12-1.77,3.1,3.1,0,0,0-1.26-3.52c-10.7-7.51-26.45-18.66-31.07-21.93a1,1,0,0,0-.9-.14,2,2,0,0,0-.4,3.47c3.72,2.63,13.24,9.37,22.18,15.68,1,.68.44,2.31-.65,2-3.06-.87-6.33-1.72-9.5-2.42a3,3,0,0,0-2.89,5.06c6,5.72,19.93,19.1,30.51,31.3.76.87,0,2.22-1,1.77-16.29-7.43-46.25-20-63.27-20.48a.91.91,0,0,0-.86,1.08l.14,1.51a1.2,1.2,0,0,0,1.07,1.14c7,.26,25.9,3.24,66.81,22.47A3.73,3.73,0,0,0,303.37,281.2Z", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20' } }),
      _react2.default.createElement("path", { d: "M161.39,230.53c-.23,8.43-6.78,15.09-15.21,14.86a15.27,15.27,0,1,1,.84-30.53C155.44,215.09,161.62,222.1,161.39,230.53Z", transform: "translate(-18.1 -53.2)", style: { fill: '#fff' } }),
      _react2.default.createElement("path", { d: "M160.41,229c-.23,8.43-6.78,15.09-15.22,14.86a15.27,15.27,0,1,1,.84-30.53C154.47,213.58,160.64,220.58,160.41,229Z", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20' } }),
      _react2.default.createElement("circle", { cx: "146.44", cy: "230.02", r: "10.54", transform: "translate(-105.62 316.87) rotate(-88.42)", style: { fill: '#231f20' } }),
      _react2.default.createElement("circle", { cx: "140.81", cy: "224.07", r: "5.33", transform: "translate(-105.15 305.46) rotate(-88.42)", style: { fill: '#fff' } }),
      _react2.default.createElement("path", { d: "M146.49,224.23a5.68,5.68,0,1,0-5.83,5.52h.26A5.69,5.69,0,0,0,146.49,224.23Zm-5.54-5.13a5,5,0,0,1,4.84,5.11h0a5,5,0,1,1-5.07-5.11Z", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20' } }),
      _react2.default.createElement("circle", { cx: "152.9", cy: "223.06", r: "2.81", transform: "translate(-92.37 316.56) rotate(-88.42)", style: { fill: '#fff' } }),
      _react2.default.createElement("path", { d: "M156.06,223.14a3.16,3.16,0,1,0-6.31-.17h0a3.16,3.16,0,0,0,3.07,3.24H153A3.16,3.16,0,0,0,156.06,223.14Zm-5.61-.15a2.46,2.46,0,1,1,2.39,2.52,2.44,2.44,0,0,1-2.39-2.52Z", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20' } }),
      _react2.default.createElement("path", { d: "M139.74,216.92", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20', stroke: '#231f20', strokeWidth: 3 } }),
      _react2.default.createElement("path", { d: "M155.21,217", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20', stroke: '#231f20', strokeWidth: 3 } }),
      _react2.default.createElement("path", { d: "M207.14,252.22h0c1.76,10-2.6,19.2-9.68,20.45l-11.34,2c-7.08,1.25-14.32-5.91-16.08-15.91h0C168.28,248.75,205.38,242.22,207.14,252.22Z", transform: "translate(-18.1 -53.2)", style: { fill: '#fff' } }),
      _react2.default.createElement("path", { d: "M208.39,252.82h0c1.76,10-2.6,19.2-9.68,20.45l-11.34,2c-7.08,1.25-14.32-5.91-16.08-15.91h0C169.54,249.35,206.63,242.82,208.39,252.82Z", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20' } }),
      _react2.default.createElement("path", { d: "M246.83,224.25c-.23,8.43-6.78,15.09-15.21,14.86a15.27,15.27,0,1,1,.84-30.53C240.89,208.8,247.07,215.81,246.83,224.25Z", transform: "translate(-18.1 -53.2)", style: { fill: '#fff' } }),
      _react2.default.createElement("path", { d: "M245.86,222.73c-.23,8.43-6.78,15.09-15.22,14.86a15.27,15.27,0,1,1,.84-30.53C239.91,207.29,246.09,214.3,245.86,222.73Z", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20' } }),
      _react2.default.createElement("circle", { cx: "231.88", cy: "223.73", r: "10.54", transform: "translate(-16.24 396.17) rotate(-88.42)", style: { fill: '#231f20' } }),
      _react2.default.createElement("circle", { cx: "226.26", cy: "217.78", r: "5.33", transform: "translate(-15.77 384.76) rotate(-88.42)", style: { fill: '#fff' } }),
      _react2.default.createElement("path", { d: "M231.93,217.94h0a5.68,5.68,0,1,0-5.83,5.52h.26A5.69,5.69,0,0,0,231.93,217.94Zm-5.54-5.13a5,5,0,0,1,4.84,5.11h0a5,5,0,1,1-5.07-5.11Z", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20' } }),
      _react2.default.createElement("circle", { cx: "238.35", cy: "216.77", r: "2.81", transform: "translate(-2.99 395.86) rotate(-88.42)", style: { fill: '#fff' } }),
      _react2.default.createElement("path", { d: "M241.51,216.86a3.16,3.16,0,1,0-3.24,3.07h.15A3.16,3.16,0,0,0,241.51,216.86Zm-3.09-2.54a2.46,2.46,0,1,1-2.52,2.39h0a2.46,2.46,0,0,1,2.41-2.39Z", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20' } }),
      _react2.default.createElement("path", { d: "M225.19,210.63", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20', stroke: '#231f20', strokeWidth: 3 } }),
      _react2.default.createElement("path", { d: "M240.66,210.69", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20', stroke: '#231f20', strokeWidth: 3 } }),
      _react2.default.createElement("path", { d: "M77.21,292.41a3.27,3.27,0,0,1-2.07-1,2.37,2.37,0,0,1-.22-3c7.19-10.86,18.5-24.21,25.64-32.32a1,1,0,0,0-1.08-1.58c-4.65,1.66-9.13,3.46-12.42,4.84a3.6,3.6,0,0,1-4.44-1.07,2.46,2.46,0,0,1,.7-3.24c9.56-7.86,23.61-19.5,27.74-22.92a1.05,1.05,0,0,1,.88-.23,1.72,1.72,0,0,1,1,3c-3.32,2.75-11.81,9.79-19.8,16.38a1,1,0,0,0,1,1.68c2.95-1.12,6.1-2.26,9.18-3.24a3.5,3.5,0,0,1,4.05,1.13,2.42,2.42,0,0,1-.31,3C101.85,259.6,90,273,81.38,285a1,1,0,0,0,1.28,1.44C97.87,278,126,263.4,143.12,261a.92.92,0,0,1,1,.85l.11,1.35a1.05,1.05,0,0,1-.89,1.13c-7,1-25.6,5.88-63.7,27.58A4.19,4.19,0,0,1,77.21,292.41Z", transform: "translate(-18.1 -53.2)", style: { fill: '#231f20' } })
    );
  }
  
  exports.default = Dog;

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

  __webpack_require__(31);
  module.exports = __webpack_require__(12).Object.getPrototypeOf;


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

  __webpack_require__(32);
  module.exports = __webpack_require__(12).Object.setPrototypeOf;


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var isObject = __webpack_require__(80);
  var anObject = __webpack_require__(35);
  var check = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function (test, buggy, set) {
        try {
          set = __webpack_require__(82)(Function.call, __webpack_require__(86).f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch (e) { buggy = true; }
        return function setPrototypeOf(O, proto) {
          check(O, proto);
          if (buggy) O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
    check: check
  };


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

  // 19.1.2.9 Object.getPrototypeOf(O)
  var toObject = __webpack_require__(83);
  var $getPrototypeOf = __webpack_require__(87);
  
  __webpack_require__(88)('getPrototypeOf', function () {
    return function getPrototypeOf(it) {
      return $getPrototypeOf(toObject(it));
    };
  });


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

  // 19.1.3.19 Object.setPrototypeOf(O, proto)
  var $export = __webpack_require__(34);
  $export($export.S, 'Object', { setPrototypeOf: __webpack_require__(30).set });


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */
  
  (function () {
  	'use strict';
  
  	var hasOwn = {}.hasOwnProperty;
  
  	function classNames () {
  		var classes = [];
  
  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;
  
  			var argType = typeof arg;
  
  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg) && arg.length) {
  				var inner = classNames.apply(null, arg);
  				if (inner) {
  					classes.push(inner);
  				}
  			} else if (argType === 'object') {
  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}
  
  		return classes.join(' ');
  	}
  
  	if (typeof module !== 'undefined' && module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else if (true) {
  		// register as 'classnames', consistent with npm package name
  		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
  			return classNames;
  		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  	} else {
  		window.classNames = classNames;
  	}
  }());


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(90);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _extends2 = __webpack_require__(81);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(5);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(6);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(7);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(9);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(8);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _propTypes = __webpack_require__(13);
  
  var _propTypes2 = _interopRequireDefault(_propTypes);
  
  var _reactTooltip = __webpack_require__(67);
  
  var _reactTooltip2 = _interopRequireDefault(_reactTooltip);
  
  var _Dog = __webpack_require__(26);
  
  var _Dog2 = _interopRequireDefault(_Dog);
  
  var _Colors = __webpack_require__(22);
  
  var Colors = _interopRequireWildcard(_Colors);
  
  var _Article = __webpack_require__(77);
  
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
          overflowY: 'scroll',
          WebkitOverflowScrolling: 'touch'
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
        var iconStyle = {
          display: 'block',
          width: 75,
          height: 'auto',
          margin: '12px 0'
        };
        var articleLayoutStyle = (0, _assign2.default)({}, baseStyle, style);
        return _react2.default.createElement(
          'div',
          { style: articleLayoutStyle },
          _react2.default.createElement(_reactTooltip2.default, null),
          _react2.default.createElement(
            'div',
            { style: headerStyle },
            _react2.default.createElement(
              'a',
              { href: '/projects', style: iconStyle, 'data-tip': 'Back to projects' },
              _react2.default.createElement(_Dog2.default, null)
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
    style: _propTypes2.default.object,
    title: _propTypes2.default.node,
    subtitle: _propTypes2.default.node,
    url: _propTypes2.default.node
  };
  exports.default = ArticleLayout;

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

  'use strict'
  
  exports.byteLength = byteLength
  exports.toByteArray = toByteArray
  exports.fromByteArray = fromByteArray
  
  var lookup = []
  var revLookup = []
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
  
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i]
    revLookup[code.charCodeAt(i)] = i
  }
  
  // Support decoding URL-safe base64 strings, as Node.js does.
  // See: https://en.wikipedia.org/wiki/Base64#URL_applications
  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63
  
  function getLens (b64) {
    var len = b64.length
  
    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4')
    }
  
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=')
    if (validLen === -1) validLen = len
  
    var placeHoldersLen = validLen === len
      ? 0
      : 4 - (validLen % 4)
  
    return [validLen, placeHoldersLen]
  }
  
  // base64 is 4/3 + up to two characters of the original data
  function byteLength (b64) {
    var lens = getLens(b64)
    var validLen = lens[0]
    var placeHoldersLen = lens[1]
    return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
  }
  
  function _byteLength (b64, validLen, placeHoldersLen) {
    return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
  }
  
  function toByteArray (b64) {
    var tmp
    var lens = getLens(b64)
    var validLen = lens[0]
    var placeHoldersLen = lens[1]
  
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))
  
    var curByte = 0
  
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0
      ? validLen - 4
      : validLen
  
    for (var i = 0; i < len; i += 4) {
      tmp =
        (revLookup[b64.charCodeAt(i)] << 18) |
        (revLookup[b64.charCodeAt(i + 1)] << 12) |
        (revLookup[b64.charCodeAt(i + 2)] << 6) |
        revLookup[b64.charCodeAt(i + 3)]
      arr[curByte++] = (tmp >> 16) & 0xFF
      arr[curByte++] = (tmp >> 8) & 0xFF
      arr[curByte++] = tmp & 0xFF
    }
  
    if (placeHoldersLen === 2) {
      tmp =
        (revLookup[b64.charCodeAt(i)] << 2) |
        (revLookup[b64.charCodeAt(i + 1)] >> 4)
      arr[curByte++] = tmp & 0xFF
    }
  
    if (placeHoldersLen === 1) {
      tmp =
        (revLookup[b64.charCodeAt(i)] << 10) |
        (revLookup[b64.charCodeAt(i + 1)] << 4) |
        (revLookup[b64.charCodeAt(i + 2)] >> 2)
      arr[curByte++] = (tmp >> 8) & 0xFF
      arr[curByte++] = tmp & 0xFF
    }
  
    return arr
  }
  
  function tripletToBase64 (num) {
    return lookup[num >> 18 & 0x3F] +
      lookup[num >> 12 & 0x3F] +
      lookup[num >> 6 & 0x3F] +
      lookup[num & 0x3F]
  }
  
  function encodeChunk (uint8, start, end) {
    var tmp
    var output = []
    for (var i = start; i < end; i += 3) {
      tmp =
        ((uint8[i] << 16) & 0xFF0000) +
        ((uint8[i + 1] << 8) & 0xFF00) +
        (uint8[i + 2] & 0xFF)
      output.push(tripletToBase64(tmp))
    }
    return output.join('')
  }
  
  function fromByteArray (uint8) {
    var tmp
    var len = uint8.length
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    var parts = []
    var maxChunkLength = 16383 // must be multiple of 3
  
    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(
        uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
      ))
    }
  
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
      tmp = uint8[len - 1]
      parts.push(
        lookup[tmp >> 2] +
        lookup[(tmp << 4) & 0x3F] +
        '=='
      )
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1]
      parts.push(
        lookup[tmp >> 10] +
        lookup[(tmp >> 4) & 0x3F] +
        lookup[(tmp << 2) & 0x3F] +
        '='
      )
    }
  
    return parts.join('')
  }


/***/ }),

/***/ 38:
/***/ (function(module, exports) {

  var toString = {}.toString;
  
  module.exports = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(23)();
  // imports
  
  
  // module
  exports.push([module.id, ".Article_article_2_j a {\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.Article_article_2_j a:link, .Article_article_2_j a:visited {\n  color: #0099e5;\n}\n\n.Article_article_2_j p {\n  margin-bottom: 12px;\n}\n\n@media (max-width: 480px) {\n .Article_layout_1WS {\n  -ms-flex-flow: column;\n      flex-flow: column;\n }\n}", "", {"version":3,"sources":["/./components/Layout/Article.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,iBAAiB;CAClB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,oBAAoB;CACrB;;AAED;CACC;EACC,sBAAkB;MAAlB,kBAAkB;EAClB;CACD","file":"Article.css","sourcesContent":[".article a {\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.article a:link, .article a:visited {\n  color: #0099e5;\n}\n\n.article p {\n  margin-bottom: 12px;\n}\n\n@media (max-width: 480px) {\n .layout {\n  flex-flow: column;\n }\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"article": "Article_article_2_j",
  	"layout": "Article_layout_1WS"
  };

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

  /*
    Module dependencies
  */
  var ElementType = __webpack_require__(41);
  var entities = __webpack_require__(51);
  
  /*
    Boolean Attributes
  */
  var booleanAttributes = {
    __proto__: null,
    allowfullscreen: true,
    async: true,
    autofocus: true,
    autoplay: true,
    checked: true,
    controls: true,
    default: true,
    defer: true,
    disabled: true,
    hidden: true,
    ismap: true,
    loop: true,
    multiple: true,
    muted: true,
    open: true,
    readonly: true,
    required: true,
    reversed: true,
    scoped: true,
    seamless: true,
    selected: true,
    typemustmatch: true
  };
  
  var unencodedElements = {
    __proto__: null,
    style: true,
    script: true,
    xmp: true,
    iframe: true,
    noembed: true,
    noframes: true,
    plaintext: true,
    noscript: true
  };
  
  /*
    Format attributes
  */
  function formatAttrs(attributes, opts) {
    if (!attributes) return;
  
    var output = '',
        value;
  
    // Loop through the attributes
    for (var key in attributes) {
      value = attributes[key];
      if (output) {
        output += ' ';
      }
  
      if (!value && booleanAttributes[key]) {
        output += key;
      } else {
        output += key + '="' + (opts.decodeEntities ? entities.encodeXML(value) : value) + '"';
      }
    }
  
    return output;
  }
  
  /*
    Self-enclosing tags (stolen from node-htmlparser)
  */
  var singleTag = {
    __proto__: null,
    area: true,
    base: true,
    basefont: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    isindex: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true,
  };
  
  
  var render = module.exports = function(dom, opts) {
    if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
    opts = opts || {};
  
    var output = '';
  
    for(var i = 0; i < dom.length; i++){
      var elem = dom[i];
  
      if (elem.type === 'root')
        output += render(elem.children, opts);
      else if (ElementType.isTag(elem))
        output += renderTag(elem, opts);
      else if (elem.type === ElementType.Directive)
        output += renderDirective(elem);
      else if (elem.type === ElementType.Comment)
        output += renderComment(elem);
      else if (elem.type === ElementType.CDATA)
        output += renderCdata(elem);
      else
        output += renderText(elem, opts);
    }
  
    return output;
  };
  
  function renderTag(elem, opts) {
    // Handle SVG
    if (elem.name === "svg") opts = {decodeEntities: opts.decodeEntities, xmlMode: true};
  
    var tag = '<' + elem.name,
        attribs = formatAttrs(elem.attribs, opts);
  
    if (attribs) {
      tag += ' ' + attribs;
    }
  
    if (
      opts.xmlMode
      && (!elem.children || elem.children.length === 0)
    ) {
      tag += '/>';
    } else {
      tag += '>';
      if (elem.children) {
        tag += render(elem.children, opts);
      }
  
      if (!singleTag[elem.name] || opts.xmlMode) {
        tag += '</' + elem.name + '>';
      }
    }
  
    return tag;
  }
  
  function renderDirective(elem) {
    return '<' + elem.data + '>';
  }
  
  function renderText(elem, opts) {
    var data = elem.data || '';
  
    // if entities weren't decoded, no need to encode them back
    if (opts.decodeEntities && !(elem.parent && elem.parent.name in unencodedElements)) {
      data = entities.encodeXML(data);
    }
  
    return data;
  }
  
  function renderCdata(elem) {
    return '<![CDATA[' + elem.children[0].data + ']]>';
  }
  
  function renderComment(elem) {
    return '<!--' + elem.data + '-->';
  }


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

  //Types of elements found in the DOM
  module.exports = {
  	Text: "text", //Text
  	Directive: "directive", //<? ... ?>
  	Comment: "comment", //<!-- ... -->
  	Script: "script", //<script> tags
  	Style: "style", //<style> tags
  	Tag: "tag", //Any tag
  	CDATA: "cdata", //<![CDATA[ ... ]]>
  
  	isTag: function(elem){
  		return elem.type === "tag" || elem.type === "script" || elem.type === "style";
  	}
  };

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

  var ElementType = __webpack_require__(2);
  
  var re_whitespace = /\s+/g;
  var NodePrototype = __webpack_require__(15);
  var ElementPrototype = __webpack_require__(43);
  
  function DomHandler(callback, options, elementCB){
  	if(typeof callback === "object"){
  		elementCB = options;
  		options = callback;
  		callback = null;
  	} else if(typeof options === "function"){
  		elementCB = options;
  		options = defaultOpts;
  	}
  	this._callback = callback;
  	this._options = options || defaultOpts;
  	this._elementCB = elementCB;
  	this.dom = [];
  	this._done = false;
  	this._tagStack = [];
  	this._parser = this._parser || null;
  }
  
  //default options
  var defaultOpts = {
  	normalizeWhitespace: false, //Replace all whitespace with single spaces
  	withStartIndices: false, //Add startIndex properties to nodes
  	withEndIndices: false, //Add endIndex properties to nodes
  };
  
  DomHandler.prototype.onparserinit = function(parser){
  	this._parser = parser;
  };
  
  //Resets the handler back to starting state
  DomHandler.prototype.onreset = function(){
  	DomHandler.call(this, this._callback, this._options, this._elementCB);
  };
  
  //Signals the handler that parsing is done
  DomHandler.prototype.onend = function(){
  	if(this._done) return;
  	this._done = true;
  	this._parser = null;
  	this._handleCallback(null);
  };
  
  DomHandler.prototype._handleCallback =
  DomHandler.prototype.onerror = function(error){
  	if(typeof this._callback === "function"){
  		this._callback(error, this.dom);
  	} else {
  		if(error) throw error;
  	}
  };
  
  DomHandler.prototype.onclosetag = function(){
  	//if(this._tagStack.pop().name !== name) this._handleCallback(Error("Tagname didn't match!"));
  	
  	var elem = this._tagStack.pop();
  
  	if(this._options.withEndIndices && elem){
  		elem.endIndex = this._parser.endIndex;
  	}
  
  	if(this._elementCB) this._elementCB(elem);
  };
  
  DomHandler.prototype._createDomElement = function(properties){
  	if (!this._options.withDomLvl1) return properties;
  
  	var element;
  	if (properties.type === "tag") {
  		element = Object.create(ElementPrototype);
  	} else {
  		element = Object.create(NodePrototype);
  	}
  
  	for (var key in properties) {
  		if (properties.hasOwnProperty(key)) {
  			element[key] = properties[key];
  		}
  	}
  
  	return element;
  };
  
  DomHandler.prototype._addDomElement = function(element){
  	var parent = this._tagStack[this._tagStack.length - 1];
  	var siblings = parent ? parent.children : this.dom;
  	var previousSibling = siblings[siblings.length - 1];
  
  	element.next = null;
  
  	if(this._options.withStartIndices){
  		element.startIndex = this._parser.startIndex;
  	}
  	if(this._options.withEndIndices){
  		element.endIndex = this._parser.endIndex;
  	}
  
  	if(previousSibling){
  		element.prev = previousSibling;
  		previousSibling.next = element;
  	} else {
  		element.prev = null;
  	}
  
  	siblings.push(element);
  	element.parent = parent || null;
  };
  
  DomHandler.prototype.onopentag = function(name, attribs){
  	var properties = {
  		type: name === "script" ? ElementType.Script : name === "style" ? ElementType.Style : ElementType.Tag,
  		name: name,
  		attribs: attribs,
  		children: []
  	};
  
  	var element = this._createDomElement(properties);
  
  	this._addDomElement(element);
  
  	this._tagStack.push(element);
  };
  
  DomHandler.prototype.ontext = function(data){
  	//the ignoreWhitespace is officially dropped, but for now,
  	//it's an alias for normalizeWhitespace
  	var normalize = this._options.normalizeWhitespace || this._options.ignoreWhitespace;
  
  	var lastTag;
  
  	if(!this._tagStack.length && this.dom.length && (lastTag = this.dom[this.dom.length-1]).type === ElementType.Text){
  		if(normalize){
  			lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
  		} else {
  			lastTag.data += data;
  		}
  	} else {
  		if(
  			this._tagStack.length &&
  			(lastTag = this._tagStack[this._tagStack.length - 1]) &&
  			(lastTag = lastTag.children[lastTag.children.length - 1]) &&
  			lastTag.type === ElementType.Text
  		){
  			if(normalize){
  				lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
  			} else {
  				lastTag.data += data;
  			}
  		} else {
  			if(normalize){
  				data = data.replace(re_whitespace, " ");
  			}
  
  			var element = this._createDomElement({
  				data: data,
  				type: ElementType.Text
  			});
  
  			this._addDomElement(element);
  		}
  	}
  };
  
  DomHandler.prototype.oncomment = function(data){
  	var lastTag = this._tagStack[this._tagStack.length - 1];
  
  	if(lastTag && lastTag.type === ElementType.Comment){
  		lastTag.data += data;
  		return;
  	}
  
  	var properties = {
  		data: data,
  		type: ElementType.Comment
  	};
  
  	var element = this._createDomElement(properties);
  
  	this._addDomElement(element);
  	this._tagStack.push(element);
  };
  
  DomHandler.prototype.oncdatastart = function(){
  	var properties = {
  		children: [{
  			data: "",
  			type: ElementType.Text
  		}],
  		type: ElementType.CDATA
  	};
  
  	var element = this._createDomElement(properties);
  
  	this._addDomElement(element);
  	this._tagStack.push(element);
  };
  
  DomHandler.prototype.oncommentend = DomHandler.prototype.oncdataend = function(){
  	this._tagStack.pop();
  };
  
  DomHandler.prototype.onprocessinginstruction = function(name, data){
  	var element = this._createDomElement({
  		name: name,
  		data: data,
  		type: ElementType.Directive
  	});
  
  	this._addDomElement(element);
  };
  
  module.exports = DomHandler;


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

  // DOM-Level-1-compliant structure
  var NodePrototype = __webpack_require__(15);
  var ElementPrototype = module.exports = Object.create(NodePrototype);
  
  var domLvl1 = {
  	tagName: "name"
  };
  
  Object.keys(domLvl1).forEach(function(key) {
  	var shorthand = domLvl1[key];
  	Object.defineProperty(ElementPrototype, key, {
  		get: function() {
  			return this[shorthand] || null;
  		},
  		set: function(val) {
  			this[shorthand] = val;
  			return val;
  		}
  	});
  });


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

  var DomUtils = module.exports;
  
  [
  	__webpack_require__(49),
  	__webpack_require__(50),
  	__webpack_require__(47),
  	__webpack_require__(48),
  	__webpack_require__(46),
  	__webpack_require__(45)
  ].forEach(function(ext){
  	Object.keys(ext).forEach(function(key){
  		DomUtils[key] = ext[key].bind(DomUtils);
  	});
  });


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

  // removeSubsets
  // Given an array of nodes, remove any member that is contained by another.
  exports.removeSubsets = function(nodes) {
  	var idx = nodes.length, node, ancestor, replace;
  
  	// Check if each node (or one of its ancestors) is already contained in the
  	// array.
  	while (--idx > -1) {
  		node = ancestor = nodes[idx];
  
  		// Temporarily remove the node under consideration
  		nodes[idx] = null;
  		replace = true;
  
  		while (ancestor) {
  			if (nodes.indexOf(ancestor) > -1) {
  				replace = false;
  				nodes.splice(idx, 1);
  				break;
  			}
  			ancestor = ancestor.parent;
  		}
  
  		// If the node has been found to be unique, re-insert it.
  		if (replace) {
  			nodes[idx] = node;
  		}
  	}
  
  	return nodes;
  };
  
  // Source: http://dom.spec.whatwg.org/#dom-node-comparedocumentposition
  var POSITION = {
  	DISCONNECTED: 1,
  	PRECEDING: 2,
  	FOLLOWING: 4,
  	CONTAINS: 8,
  	CONTAINED_BY: 16
  };
  
  // Compare the position of one node against another node in any other document.
  // The return value is a bitmask with the following values:
  //
  // document order:
  // > There is an ordering, document order, defined on all the nodes in the
  // > document corresponding to the order in which the first character of the
  // > XML representation of each node occurs in the XML representation of the
  // > document after expansion of general entities. Thus, the document element
  // > node will be the first node. Element nodes occur before their children.
  // > Thus, document order orders element nodes in order of the occurrence of
  // > their start-tag in the XML (after expansion of entities). The attribute
  // > nodes of an element occur after the element and before its children. The
  // > relative order of attribute nodes is implementation-dependent./
  // Source:
  // http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
  //
  // @argument {Node} nodaA The first node to use in the comparison
  // @argument {Node} nodeB The second node to use in the comparison
  //
  // @return {Number} A bitmask describing the input nodes' relative position.
  //         See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
  //         a description of these values.
  var comparePos = exports.compareDocumentPosition = function(nodeA, nodeB) {
  	var aParents = [];
  	var bParents = [];
  	var current, sharedParent, siblings, aSibling, bSibling, idx;
  
  	if (nodeA === nodeB) {
  		return 0;
  	}
  
  	current = nodeA;
  	while (current) {
  		aParents.unshift(current);
  		current = current.parent;
  	}
  	current = nodeB;
  	while (current) {
  		bParents.unshift(current);
  		current = current.parent;
  	}
  
  	idx = 0;
  	while (aParents[idx] === bParents[idx]) {
  		idx++;
  	}
  
  	if (idx === 0) {
  		return POSITION.DISCONNECTED;
  	}
  
  	sharedParent = aParents[idx - 1];
  	siblings = sharedParent.children;
  	aSibling = aParents[idx];
  	bSibling = bParents[idx];
  
  	if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
  		if (sharedParent === nodeB) {
  			return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
  		}
  		return POSITION.FOLLOWING;
  	} else {
  		if (sharedParent === nodeA) {
  			return POSITION.PRECEDING | POSITION.CONTAINS;
  		}
  		return POSITION.PRECEDING;
  	}
  };
  
  // Sort an array of nodes based on their relative position in the document and
  // remove any duplicate nodes. If the array contains nodes that do not belong
  // to the same document, sort order is unspecified.
  //
  // @argument {Array} nodes Array of DOM nodes
  //
  // @returns {Array} collection of unique nodes, sorted in document order
  exports.uniqueSort = function(nodes) {
  	var idx = nodes.length, node, position;
  
  	nodes = nodes.slice();
  
  	while (--idx > -1) {
  		node = nodes[idx];
  		position = nodes.indexOf(node);
  		if (position > -1 && position < idx) {
  			nodes.splice(idx, 1);
  		}
  	}
  	nodes.sort(function(a, b) {
  		var relative = comparePos(a, b);
  		if (relative & POSITION.PRECEDING) {
  			return -1;
  		} else if (relative & POSITION.FOLLOWING) {
  			return 1;
  		}
  		return 0;
  	});
  
  	return nodes;
  };


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

  var ElementType = __webpack_require__(2);
  var isTag = exports.isTag = ElementType.isTag;
  
  exports.testElement = function(options, element){
  	for(var key in options){
  		if(!options.hasOwnProperty(key));
  		else if(key === "tag_name"){
  			if(!isTag(element) || !options.tag_name(element.name)){
  				return false;
  			}
  		} else if(key === "tag_type"){
  			if(!options.tag_type(element.type)) return false;
  		} else if(key === "tag_contains"){
  			if(isTag(element) || !options.tag_contains(element.data)){
  				return false;
  			}
  		} else if(!element.attribs || !options[key](element.attribs[key])){
  			return false;
  		}
  	}
  	return true;
  };
  
  var Checks = {
  	tag_name: function(name){
  		if(typeof name === "function"){
  			return function(elem){ return isTag(elem) && name(elem.name); };
  		} else if(name === "*"){
  			return isTag;
  		} else {
  			return function(elem){ return isTag(elem) && elem.name === name; };
  		}
  	},
  	tag_type: function(type){
  		if(typeof type === "function"){
  			return function(elem){ return type(elem.type); };
  		} else {
  			return function(elem){ return elem.type === type; };
  		}
  	},
  	tag_contains: function(data){
  		if(typeof data === "function"){
  			return function(elem){ return !isTag(elem) && data(elem.data); };
  		} else {
  			return function(elem){ return !isTag(elem) && elem.data === data; };
  		}
  	}
  };
  
  function getAttribCheck(attrib, value){
  	if(typeof value === "function"){
  		return function(elem){ return elem.attribs && value(elem.attribs[attrib]); };
  	} else {
  		return function(elem){ return elem.attribs && elem.attribs[attrib] === value; };
  	}
  }
  
  function combineFuncs(a, b){
  	return function(elem){
  		return a(elem) || b(elem);
  	};
  }
  
  exports.getElements = function(options, element, recurse, limit){
  	var funcs = Object.keys(options).map(function(key){
  		var value = options[key];
  		return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
  	});
  
  	return funcs.length === 0 ? [] : this.filter(
  		funcs.reduce(combineFuncs),
  		element, recurse, limit
  	);
  };
  
  exports.getElementById = function(id, element, recurse){
  	if(!Array.isArray(element)) element = [element];
  	return this.findOne(getAttribCheck("id", id), element, recurse !== false);
  };
  
  exports.getElementsByTagName = function(name, element, recurse, limit){
  	return this.filter(Checks.tag_name(name), element, recurse, limit);
  };
  
  exports.getElementsByTagType = function(type, element, recurse, limit){
  	return this.filter(Checks.tag_type(type), element, recurse, limit);
  };


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

  exports.removeElement = function(elem){
  	if(elem.prev) elem.prev.next = elem.next;
  	if(elem.next) elem.next.prev = elem.prev;
  
  	if(elem.parent){
  		var childs = elem.parent.children;
  		childs.splice(childs.lastIndexOf(elem), 1);
  	}
  };
  
  exports.replaceElement = function(elem, replacement){
  	var prev = replacement.prev = elem.prev;
  	if(prev){
  		prev.next = replacement;
  	}
  
  	var next = replacement.next = elem.next;
  	if(next){
  		next.prev = replacement;
  	}
  
  	var parent = replacement.parent = elem.parent;
  	if(parent){
  		var childs = parent.children;
  		childs[childs.lastIndexOf(elem)] = replacement;
  	}
  };
  
  exports.appendChild = function(elem, child){
  	child.parent = elem;
  
  	if(elem.children.push(child) !== 1){
  		var sibling = elem.children[elem.children.length - 2];
  		sibling.next = child;
  		child.prev = sibling;
  		child.next = null;
  	}
  };
  
  exports.append = function(elem, next){
  	var parent = elem.parent,
  		currNext = elem.next;
  
  	next.next = currNext;
  	next.prev = elem;
  	elem.next = next;
  	next.parent = parent;
  
  	if(currNext){
  		currNext.prev = next;
  		if(parent){
  			var childs = parent.children;
  			childs.splice(childs.lastIndexOf(currNext), 0, next);
  		}
  	} else if(parent){
  		parent.children.push(next);
  	}
  };
  
  exports.prepend = function(elem, prev){
  	var parent = elem.parent;
  	if(parent){
  		var childs = parent.children;
  		childs.splice(childs.lastIndexOf(elem), 0, prev);
  	}
  
  	if(elem.prev){
  		elem.prev.next = prev;
  	}
  	
  	prev.parent = parent;
  	prev.prev = elem.prev;
  	prev.next = elem;
  	elem.prev = prev;
  };
  
  


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

  var isTag = __webpack_require__(2).isTag;
  
  module.exports = {
  	filter: filter,
  	find: find,
  	findOneChild: findOneChild,
  	findOne: findOne,
  	existsOne: existsOne,
  	findAll: findAll
  };
  
  function filter(test, element, recurse, limit){
  	if(!Array.isArray(element)) element = [element];
  
  	if(typeof limit !== "number" || !isFinite(limit)){
  		limit = Infinity;
  	}
  	return find(test, element, recurse !== false, limit);
  }
  
  function find(test, elems, recurse, limit){
  	var result = [], childs;
  
  	for(var i = 0, j = elems.length; i < j; i++){
  		if(test(elems[i])){
  			result.push(elems[i]);
  			if(--limit <= 0) break;
  		}
  
  		childs = elems[i].children;
  		if(recurse && childs && childs.length > 0){
  			childs = find(test, childs, recurse, limit);
  			result = result.concat(childs);
  			limit -= childs.length;
  			if(limit <= 0) break;
  		}
  	}
  
  	return result;
  }
  
  function findOneChild(test, elems){
  	for(var i = 0, l = elems.length; i < l; i++){
  		if(test(elems[i])) return elems[i];
  	}
  
  	return null;
  }
  
  function findOne(test, elems){
  	var elem = null;
  
  	for(var i = 0, l = elems.length; i < l && !elem; i++){
  		if(!isTag(elems[i])){
  			continue;
  		} else if(test(elems[i])){
  			elem = elems[i];
  		} else if(elems[i].children.length > 0){
  			elem = findOne(test, elems[i].children);
  		}
  	}
  
  	return elem;
  }
  
  function existsOne(test, elems){
  	for(var i = 0, l = elems.length; i < l; i++){
  		if(
  			isTag(elems[i]) && (
  				test(elems[i]) || (
  					elems[i].children.length > 0 &&
  					existsOne(test, elems[i].children)
  				)
  			)
  		){
  			return true;
  		}
  	}
  
  	return false;
  }
  
  function findAll(test, rootElems){
  	var result = [];
  	var stack = rootElems.slice();
  	while(stack.length){
  		var elem = stack.shift();
  		if(!isTag(elem)) continue;
  		if (elem.children && elem.children.length > 0) {
  			stack.unshift.apply(stack, elem.children);
  		}
  		if(test(elem)) result.push(elem);
  	}
  	return result;
  }


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

  var ElementType = __webpack_require__(2),
      getOuterHTML = __webpack_require__(40),
      isTag = ElementType.isTag;
  
  module.exports = {
  	getInnerHTML: getInnerHTML,
  	getOuterHTML: getOuterHTML,
  	getText: getText
  };
  
  function getInnerHTML(elem, opts){
  	return elem.children ? elem.children.map(function(elem){
  		return getOuterHTML(elem, opts);
  	}).join("") : "";
  }
  
  function getText(elem){
  	if(Array.isArray(elem)) return elem.map(getText).join("");
  	if(isTag(elem)) return elem.name === "br" ? "\n" : getText(elem.children);
  	if(elem.type === ElementType.CDATA) return getText(elem.children);
  	if(elem.type === ElementType.Text) return elem.data;
  	return "";
  }


/***/ }),

/***/ 50:
/***/ (function(module, exports) {

  var getChildren = exports.getChildren = function(elem){
  	return elem.children;
  };
  
  var getParent = exports.getParent = function(elem){
  	return elem.parent;
  };
  
  exports.getSiblings = function(elem){
  	var parent = getParent(elem);
  	return parent ? getChildren(parent) : [elem];
  };
  
  exports.getAttributeValue = function(elem, name){
  	return elem.attribs && elem.attribs[name];
  };
  
  exports.hasAttrib = function(elem, name){
  	return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
  };
  
  exports.getName = function(elem){
  	return elem.name;
  };


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

  var encode = __webpack_require__(53),
      decode = __webpack_require__(52);
  
  exports.decode = function(data, level) {
      return (!level || level <= 0 ? decode.XML : decode.HTML)(data);
  };
  
  exports.decodeStrict = function(data, level) {
      return (!level || level <= 0 ? decode.XML : decode.HTMLStrict)(data);
  };
  
  exports.encode = function(data, level) {
      return (!level || level <= 0 ? encode.XML : encode.HTML)(data);
  };
  
  exports.encodeXML = encode.XML;
  
  exports.encodeHTML4 = exports.encodeHTML5 = exports.encodeHTML = encode.HTML;
  
  exports.decodeXML = exports.decodeXMLStrict = decode.XML;
  
  exports.decodeHTML4 = exports.decodeHTML5 = exports.decodeHTML = decode.HTML;
  
  exports.decodeHTML4Strict = exports.decodeHTML5Strict = exports.decodeHTMLStrict = decode.HTMLStrict;
  
  exports.escape = encode.escape;


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

  var entityMap = __webpack_require__(10),
      legacyMap = __webpack_require__(20),
      xmlMap = __webpack_require__(11),
      decodeCodePoint = __webpack_require__(16);
  
  var decodeXMLStrict = getStrictDecoder(xmlMap),
      decodeHTMLStrict = getStrictDecoder(entityMap);
  
  function getStrictDecoder(map) {
      var keys = Object.keys(map).join("|"),
          replace = getReplacer(map);
  
      keys += "|#[xX][\\da-fA-F]+|#\\d+";
  
      var re = new RegExp("&(?:" + keys + ");", "g");
  
      return function(str) {
          return String(str).replace(re, replace);
      };
  }
  
  var decodeHTML = (function() {
      var legacy = Object.keys(legacyMap).sort(sorter);
  
      var keys = Object.keys(entityMap).sort(sorter);
  
      for (var i = 0, j = 0; i < keys.length; i++) {
          if (legacy[j] === keys[i]) {
              keys[i] += ";?";
              j++;
          } else {
              keys[i] += ";";
          }
      }
  
      var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
          replace = getReplacer(entityMap);
  
      function replacer(str) {
          if (str.substr(-1) !== ";") str += ";";
          return replace(str);
      }
  
      //TODO consider creating a merged map
      return function(str) {
          return String(str).replace(re, replacer);
      };
  })();
  
  function sorter(a, b) {
      return a < b ? 1 : -1;
  }
  
  function getReplacer(map) {
      return function replace(str) {
          if (str.charAt(1) === "#") {
              if (str.charAt(2) === "X" || str.charAt(2) === "x") {
                  return decodeCodePoint(parseInt(str.substr(3), 16));
              }
              return decodeCodePoint(parseInt(str.substr(2), 10));
          }
          return map[str.slice(1, -1)];
      };
  }
  
  module.exports = {
      XML: decodeXMLStrict,
      HTML: decodeHTML,
      HTMLStrict: decodeHTMLStrict
  };


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

  var inverseXML = getInverseObj(__webpack_require__(11)),
      xmlReplacer = getInverseReplacer(inverseXML);
  
  exports.XML = getInverse(inverseXML, xmlReplacer);
  
  var inverseHTML = getInverseObj(__webpack_require__(10)),
      htmlReplacer = getInverseReplacer(inverseHTML);
  
  exports.HTML = getInverse(inverseHTML, htmlReplacer);
  
  function getInverseObj(obj) {
      return Object.keys(obj)
          .sort()
          .reduce(function(inverse, name) {
              inverse[obj[name]] = "&" + name + ";";
              return inverse;
          }, {});
  }
  
  function getInverseReplacer(inverse) {
      var single = [],
          multiple = [];
  
      Object.keys(inverse).forEach(function(k) {
          if (k.length === 1) {
              single.push("\\" + k);
          } else {
              multiple.push(k);
          }
      });
  
      //TODO add ranges
      multiple.unshift("[" + single.join("") + "]");
  
      return new RegExp(multiple.join("|"), "g");
  }
  
  var re_nonASCII = /[^\0-\x7F]/g,
      re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  
  function singleCharReplacer(c) {
      return (
          "&#x" +
          c
              .charCodeAt(0)
              .toString(16)
              .toUpperCase() +
          ";"
      );
  }
  
  function astralReplacer(c) {
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      var high = c.charCodeAt(0);
      var low = c.charCodeAt(1);
      var codePoint = (high - 0xd800) * 0x400 + low - 0xdc00 + 0x10000;
      return "&#x" + codePoint.toString(16).toUpperCase() + ";";
  }
  
  function getInverse(inverse, re) {
      function func(name) {
          return inverse[name];
      }
  
      return function(data) {
          return data
              .replace(re, func)
              .replace(re_astralSymbols, astralReplacer)
              .replace(re_nonASCII, singleCharReplacer);
      };
  }
  
  var re_xmlChars = getInverseReplacer(inverseXML);
  
  function escapeXML(data) {
      return data
          .replace(re_xmlChars, singleCharReplacer)
          .replace(re_astralSymbols, astralReplacer)
          .replace(re_nonASCII, singleCharReplacer);
  }
  
  exports.escape = escapeXML;


/***/ }),

/***/ 54:
/***/ (function(module, exports) {

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;
  
  // Backwards-compat with node 0.10.x
  EventEmitter.EventEmitter = EventEmitter;
  
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;
  
  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  EventEmitter.defaultMaxListeners = 10;
  
  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n))
      throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };
  
  EventEmitter.prototype.emit = function(type) {
    var er, handler, len, args, i, listeners;
  
    if (!this._events)
      this._events = {};
  
    // If there is no 'error' event listener then throw.
    if (type === 'error') {
      if (!this._events.error ||
          (isObject(this._events.error) && !this._events.error.length)) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        } else {
          // At least give some kind of context to the user
          var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
          err.context = er;
          throw err;
        }
      }
    }
  
    handler = this._events[type];
  
    if (isUndefined(handler))
      return false;
  
    if (isFunction(handler)) {
      switch (arguments.length) {
        // fast cases
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        // slower
        default:
          args = Array.prototype.slice.call(arguments, 1);
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      args = Array.prototype.slice.call(arguments, 1);
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++)
        listeners[i].apply(this, args);
    }
  
    return true;
  };
  
  EventEmitter.prototype.addListener = function(type, listener) {
    var m;
  
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
  
    if (!this._events)
      this._events = {};
  
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener)
      this.emit('newListener', type,
                isFunction(listener.listener) ?
                listener.listener : listener);
  
    if (!this._events[type])
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    else if (isObject(this._events[type]))
      // If we've already got an array, just append.
      this._events[type].push(listener);
    else
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];
  
    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }
  
      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' +
                      'leak detected. %d listeners added. ' +
                      'Use emitter.setMaxListeners() to increase limit.',
                      this._events[type].length);
        if (typeof console.trace === 'function') {
          // not supported in IE 10
          console.trace();
        }
      }
    }
  
    return this;
  };
  
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  
  EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
  
    var fired = false;
  
    function g() {
      this.removeListener(type, g);
  
      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }
  
    g.listener = listener;
    this.on(type, g);
  
    return this;
  };
  
  // emits a 'removeListener' event iff the listener was removed
  EventEmitter.prototype.removeListener = function(type, listener) {
    var list, position, length, i;
  
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
  
    if (!this._events || !this._events[type])
      return this;
  
    list = this._events[type];
    length = list.length;
    position = -1;
  
    if (list === listener ||
        (isFunction(list.listener) && list.listener === listener)) {
      delete this._events[type];
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
  
    } else if (isObject(list)) {
      for (i = length; i-- > 0;) {
        if (list[i] === listener ||
            (list[i].listener && list[i].listener === listener)) {
          position = i;
          break;
        }
      }
  
      if (position < 0)
        return this;
  
      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }
  
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    }
  
    return this;
  };
  
  EventEmitter.prototype.removeAllListeners = function(type) {
    var key, listeners;
  
    if (!this._events)
      return this;
  
    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
      if (arguments.length === 0)
        this._events = {};
      else if (this._events[type])
        delete this._events[type];
      return this;
    }
  
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener') continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }
  
    listeners = this._events[type];
  
    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (listeners) {
      // LIFO order
      while (listeners.length)
        this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];
  
    return this;
  };
  
  EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type])
      ret = [];
    else if (isFunction(this._events[type]))
      ret = [this._events[type]];
    else
      ret = this._events[type].slice();
    return ret;
  };
  
  EventEmitter.prototype.listenerCount = function(type) {
    if (this._events) {
      var evlistener = this._events[type];
  
      if (isFunction(evlistener))
        return 1;
      else if (evlistener)
        return evlistener.length;
    }
    return 0;
  };
  
  EventEmitter.listenerCount = function(emitter, type) {
    return emitter.listenerCount(type);
  };
  
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  
  function isUndefined(arg) {
    return arg === void 0;
  }


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

  module.exports = CollectingHandler;
  
  function CollectingHandler(cbs){
  	this._cbs = cbs || {};
  	this.events = [];
  }
  
  var EVENTS = __webpack_require__(3).EVENTS;
  Object.keys(EVENTS).forEach(function(name){
  	if(EVENTS[name] === 0){
  		name = "on" + name;
  		CollectingHandler.prototype[name] = function(){
  			this.events.push([name]);
  			if(this._cbs[name]) this._cbs[name]();
  		};
  	} else if(EVENTS[name] === 1){
  		name = "on" + name;
  		CollectingHandler.prototype[name] = function(a){
  			this.events.push([name, a]);
  			if(this._cbs[name]) this._cbs[name](a);
  		};
  	} else if(EVENTS[name] === 2){
  		name = "on" + name;
  		CollectingHandler.prototype[name] = function(a, b){
  			this.events.push([name, a, b]);
  			if(this._cbs[name]) this._cbs[name](a, b);
  		};
  	} else {
  		throw Error("wrong number of arguments");
  	}
  });
  
  CollectingHandler.prototype.onreset = function(){
  	this.events = [];
  	if(this._cbs.onreset) this._cbs.onreset();
  };
  
  CollectingHandler.prototype.restart = function(){
  	if(this._cbs.onreset) this._cbs.onreset();
  
  	for(var i = 0, len = this.events.length; i < len; i++){
  		if(this._cbs[this.events[i][0]]){
  
  			var num = this.events[i].length;
  
  			if(num === 1){
  				this._cbs[this.events[i][0]]();
  			} else if(num === 2){
  				this._cbs[this.events[i][0]](this.events[i][1]);
  			} else {
  				this._cbs[this.events[i][0]](this.events[i][1], this.events[i][2]);
  			}
  		}
  	}
  };


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

  var index = __webpack_require__(3);
  var DomHandler = index.DomHandler;
  var DomUtils = index.DomUtils;
  
  //TODO: make this a streamable handler
  function FeedHandler(callback, options){
  	this.init(callback, options);
  }
  
  __webpack_require__(4)(FeedHandler, DomHandler);
  
  FeedHandler.prototype.init = DomHandler;
  
  function getElements(what, where){
  	return DomUtils.getElementsByTagName(what, where, true);
  }
  function getOneElement(what, where){
  	return DomUtils.getElementsByTagName(what, where, true, 1)[0];
  }
  function fetch(what, where, recurse){
  	return DomUtils.getText(
  		DomUtils.getElementsByTagName(what, where, recurse, 1)
  	).trim();
  }
  
  function addConditionally(obj, prop, what, where, recurse){
  	var tmp = fetch(what, where, recurse);
  	if(tmp) obj[prop] = tmp;
  }
  
  var isValidFeed = function(value){
  	return value === "rss" || value === "feed" || value === "rdf:RDF";
  };
  
  FeedHandler.prototype.onend = function(){
  	var feed = {},
  	    feedRoot = getOneElement(isValidFeed, this.dom),
  	    tmp, childs;
  
  	if(feedRoot){
  		if(feedRoot.name === "feed"){
  			childs = feedRoot.children;
  
  			feed.type = "atom";
  			addConditionally(feed, "id", "id", childs);
  			addConditionally(feed, "title", "title", childs);
  			if((tmp = getOneElement("link", childs)) && (tmp = tmp.attribs) && (tmp = tmp.href)) feed.link = tmp;
  			addConditionally(feed, "description", "subtitle", childs);
  			if((tmp = fetch("updated", childs))) feed.updated = new Date(tmp);
  			addConditionally(feed, "author", "email", childs, true);
  
  			feed.items = getElements("entry", childs).map(function(item){
  				var entry = {}, tmp;
  
  				item = item.children;
  
  				addConditionally(entry, "id", "id", item);
  				addConditionally(entry, "title", "title", item);
  				if((tmp = getOneElement("link", item)) && (tmp = tmp.attribs) && (tmp = tmp.href)) entry.link = tmp;
  				if((tmp = fetch("summary", item) || fetch("content", item))) entry.description = tmp;
  				if((tmp = fetch("updated", item))) entry.pubDate = new Date(tmp);
  				return entry;
  			});
  		} else {
  			childs = getOneElement("channel", feedRoot.children).children;
  
  			feed.type = feedRoot.name.substr(0, 3);
  			feed.id = "";
  			addConditionally(feed, "title", "title", childs);
  			addConditionally(feed, "link", "link", childs);
  			addConditionally(feed, "description", "description", childs);
  			if((tmp = fetch("lastBuildDate", childs))) feed.updated = new Date(tmp);
  			addConditionally(feed, "author", "managingEditor", childs, true);
  
  			feed.items = getElements("item", feedRoot.children).map(function(item){
  				var entry = {}, tmp;
  
  				item = item.children;
  
  				addConditionally(entry, "id", "guid", item);
  				addConditionally(entry, "title", "title", item);
  				addConditionally(entry, "link", "link", item);
  				addConditionally(entry, "description", "description", item);
  				if((tmp = fetch("pubDate", item))) entry.pubDate = new Date(tmp);
  				return entry;
  			});
  		}
  	}
  	this.dom = feed;
  	DomHandler.prototype._handleCallback.call(
  		this, feedRoot ? null : Error("couldn't find root of feed")
  	);
  };
  
  module.exports = FeedHandler;


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

  module.exports = ProxyHandler;
  
  function ProxyHandler(cbs){
  	this._cbs = cbs || {};
  }
  
  var EVENTS = __webpack_require__(3).EVENTS;
  Object.keys(EVENTS).forEach(function(name){
  	if(EVENTS[name] === 0){
  		name = "on" + name;
  		ProxyHandler.prototype[name] = function(){
  			if(this._cbs[name]) this._cbs[name]();
  		};
  	} else if(EVENTS[name] === 1){
  		name = "on" + name;
  		ProxyHandler.prototype[name] = function(a){
  			if(this._cbs[name]) this._cbs[name](a);
  		};
  	} else if(EVENTS[name] === 2){
  		name = "on" + name;
  		ProxyHandler.prototype[name] = function(a, b){
  			if(this._cbs[name]) this._cbs[name](a, b);
  		};
  	} else {
  		throw Error("wrong number of arguments");
  	}
  });

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

  module.exports = Stream;
  
  var Parser = __webpack_require__(19);
  
  function Stream(options){
  	Parser.call(this, new Cbs(this), options);
  }
  
  __webpack_require__(4)(Stream, Parser);
  
  Stream.prototype.readable = true;
  
  function Cbs(scope){
  	this.scope = scope;
  }
  
  var EVENTS = __webpack_require__(3).EVENTS;
  
  Object.keys(EVENTS).forEach(function(name){
  	if(EVENTS[name] === 0){
  		Cbs.prototype["on" + name] = function(){
  			this.scope.emit(name);
  		};
  	} else if(EVENTS[name] === 1){
  		Cbs.prototype["on" + name] = function(a){
  			this.scope.emit(name, a);
  		};
  	} else if(EVENTS[name] === 2){
  		Cbs.prototype["on" + name] = function(a, b){
  			this.scope.emit(name, a, b);
  		};
  	} else {
  		throw Error("wrong number of arguments!");
  	}
  });

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

  exports.read = function (buffer, offset, isLE, mLen, nBytes) {
    var e, m
    var eLen = (nBytes * 8) - mLen - 1
    var eMax = (1 << eLen) - 1
    var eBias = eMax >> 1
    var nBits = -7
    var i = isLE ? (nBytes - 1) : 0
    var d = isLE ? -1 : 1
    var s = buffer[offset + i]
  
    i += d
  
    e = s & ((1 << (-nBits)) - 1)
    s >>= (-nBits)
    nBits += eLen
    for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}
  
    m = e & ((1 << (-nBits)) - 1)
    e >>= (-nBits)
    nBits += mLen
    for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}
  
    if (e === 0) {
      e = 1 - eBias
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity)
    } else {
      m = m + Math.pow(2, mLen)
      e = e - eBias
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
  }
  
  exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c
    var eLen = (nBytes * 8) - mLen - 1
    var eMax = (1 << eLen) - 1
    var eBias = eMax >> 1
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
    var i = isLE ? 0 : (nBytes - 1)
    var d = isLE ? 1 : -1
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
  
    value = Math.abs(value)
  
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0
      e = eMax
    } else {
      e = Math.floor(Math.log(value) / Math.LN2)
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--
        c *= 2
      }
      if (e + eBias >= 1) {
        value += rt / c
      } else {
        value += rt * Math.pow(2, 1 - eBias)
      }
      if (value * c >= 2) {
        e++
        c /= 2
      }
  
      if (e + eBias >= eMax) {
        m = 0
        e = eMax
      } else if (e + eBias >= 1) {
        m = ((value * c) - 1) * Math.pow(2, mLen)
        e = e + eBias
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
        e = 0
      }
    }
  
    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
  
    e = (e << mLen) | m
    eLen += mLen
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
  
    buffer[offset + i - d] |= s * 128
  }


/***/ }),

/***/ 60:
/***/ (function(module, exports) {

  module.exports = {"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (target) {
    target.prototype.isCustomEvent = function (ele) {
      var event = this.state.event;
  
      return event || !!ele.getAttribute('data-event');
    };
  
    /* Bind listener for custom event */
    target.prototype.customBindListener = function (ele) {
      var _this = this;
  
      var _state = this.state,
          event = _state.event,
          eventOff = _state.eventOff;
  
      var dataEvent = ele.getAttribute('data-event') || event;
      var dataEventOff = ele.getAttribute('data-event-off') || eventOff;
  
      dataEvent.split(' ').forEach(function (event) {
        ele.removeEventListener(event, customListeners.get(ele, event));
        var customListener = checkStatus.bind(_this, dataEventOff);
        customListeners.set(ele, event, customListener);
        ele.addEventListener(event, customListener, false);
      });
      if (dataEventOff) {
        dataEventOff.split(' ').forEach(function (event) {
          ele.removeEventListener(event, _this.hideTooltip);
          ele.addEventListener(event, _this.hideTooltip, false);
        });
      }
    };
  
    /* Unbind listener for custom event */
    target.prototype.customUnbindListener = function (ele) {
      var _state2 = this.state,
          event = _state2.event,
          eventOff = _state2.eventOff;
  
      var dataEvent = event || ele.getAttribute('data-event');
      var dataEventOff = eventOff || ele.getAttribute('data-event-off');
  
      ele.removeEventListener(dataEvent, customListeners.get(ele, event));
      if (dataEventOff) ele.removeEventListener(dataEventOff, this.hideTooltip);
    };
  };
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  /**
   * Custom events to control showing and hiding of tooltip
   *
   * @attributes
   * - `event` {String}
   * - `eventOff` {String}
   */
  
  var checkStatus = function checkStatus(dataEventOff, e) {
    var show = this.state.show;
    var id = this.props.id;
  
    var dataIsCapture = e.currentTarget.getAttribute('data-iscapture');
    var isCapture = dataIsCapture && dataIsCapture === 'true' || this.props.isCapture;
    var currentItem = e.currentTarget.getAttribute('currentItem');
  
    if (!isCapture) e.stopPropagation();
    if (show && currentItem === 'true') {
      if (!dataEventOff) this.hideTooltip(e);
    } else {
      e.currentTarget.setAttribute('currentItem', 'true');
      setUntargetItems(e.currentTarget, this.getTargetArray(id));
      this.showTooltip(e);
    }
  };
  
  var setUntargetItems = function setUntargetItems(currentTarget, targetArray) {
    for (var i = 0; i < targetArray.length; i++) {
      if (currentTarget !== targetArray[i]) {
        targetArray[i].setAttribute('currentItem', 'false');
      } else {
        targetArray[i].setAttribute('currentItem', 'true');
      }
    }
  };
  
  var customListeners = {
    id: '9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf',
    set: function set(target, event, listener) {
      if (this.id in target) {
        var map = target[this.id];
        map[event] = listener;
      } else {
        // this is workaround for WeakMap, which is not supported in older browsers, such as IE
        Object.defineProperty(target, this.id, {
          configurable: true,
          value: _defineProperty({}, event, listener)
        });
      }
    },
    get: function get(target, event) {
      var map = target[this.id];
      if (map !== undefined) {
        return map[event];
      }
    }
  };

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (target) {
    target.prototype.getEffect = function (currentTarget) {
      var dataEffect = currentTarget.getAttribute('data-effect');
      return dataEffect || this.props.effect || 'float';
    };
  };

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (target) {
    target.prototype.isCapture = function (currentTarget) {
      return currentTarget && currentTarget.getAttribute('data-iscapture') === 'true' || this.props.isCapture || false;
    };
  };

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (target) {
    /**
     * Hide all tooltip
     * @trigger ReactTooltip.hide()
     */
    target.hide = function (target) {
      dispatchGlobalEvent(_constant2.default.GLOBAL.HIDE, { target: target });
    };
  
    /**
     * Rebuild all tooltip
     * @trigger ReactTooltip.rebuild()
     */
    target.rebuild = function () {
      dispatchGlobalEvent(_constant2.default.GLOBAL.REBUILD);
    };
  
    /**
     * Show specific tooltip
     * @trigger ReactTooltip.show()
     */
    target.show = function (target) {
      dispatchGlobalEvent(_constant2.default.GLOBAL.SHOW, { target: target });
    };
  
    target.prototype.globalRebuild = function () {
      if (this.mount) {
        this.unbindListener();
        this.bindListener();
      }
    };
  
    target.prototype.globalShow = function (event) {
      if (this.mount) {
        // Create a fake event, specific show will limit the type to `solid`
        // only `float` type cares e.clientX e.clientY
        var e = { currentTarget: event.detail.target };
        this.showTooltip(e, true);
      }
    };
  
    target.prototype.globalHide = function (event) {
      if (this.mount) {
        var hasTarget = event && event.detail && event.detail.target && true || false;
        this.hideTooltip({ currentTarget: hasTarget && event.detail.target }, hasTarget);
      }
    };
  };
  
  var _constant = __webpack_require__(21);
  
  var _constant2 = _interopRequireDefault(_constant);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var dispatchGlobalEvent = function dispatchGlobalEvent(eventName, opts) {
    // Compatibale with IE
    // @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
    var event = void 0;
  
    if (typeof window.CustomEvent === 'function') {
      event = new window.CustomEvent(eventName, { detail: opts });
    } else {
      event = document.createEvent('Event');
      event.initEvent(eventName, false, true);
      event.detail = opts;
    }
  
    window.dispatchEvent(event);
  }; /**
      * Static methods for react-tooltip
      */

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (target) {
    target.prototype.bindRemovalTracker = function () {
      var _this = this;
  
      var MutationObserver = getMutationObserverClass();
      if (MutationObserver == null) return;
  
      var observer = new MutationObserver(function (mutations) {
        for (var m1 = 0; m1 < mutations.length; m1++) {
          var mutation = mutations[m1];
          for (var m2 = 0; m2 < mutation.removedNodes.length; m2++) {
            var element = mutation.removedNodes[m2];
            if (element === _this.state.currentTarget) {
              _this.hideTooltip();
              return;
            }
          }
        }
      });
  
      observer.observe(window.document, { childList: true, subtree: true });
  
      this.removalTracker = observer;
    };
  
    target.prototype.unbindRemovalTracker = function () {
      if (this.removalTracker) {
        this.removalTracker.disconnect();
        this.removalTracker = null;
      }
    };
  };
  
  /**
   * Tracking target removing from DOM.
   * It's nessesary to hide tooltip when it's target disappears.
   * Otherwise, the tooltip would be shown forever until another target
   * is triggered.
   *
   * If MutationObserver is not available, this feature just doesn't work.
   */
  
  // https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
  var getMutationObserverClass = function getMutationObserverClass() {
    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  };

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (target) {
    target.prototype.bindWindowEvents = function (resizeHide) {
      // ReactTooltip.hide
      window.removeEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide);
      window.addEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide, false);
  
      // ReactTooltip.rebuild
      window.removeEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild);
      window.addEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild, false);
  
      // ReactTooltip.show
      window.removeEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow);
      window.addEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow, false);
  
      // Resize
      if (resizeHide) {
        window.removeEventListener('resize', this.onWindowResize);
        window.addEventListener('resize', this.onWindowResize, false);
      }
    };
  
    target.prototype.unbindWindowEvents = function () {
      window.removeEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide);
      window.removeEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild);
      window.removeEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow);
      window.removeEventListener('resize', this.onWindowResize);
    };
  
    /**
     * invoked by resize event of window
     */
    target.prototype.onWindowResize = function () {
      if (!this.mount) return;
      this.hideTooltip();
    };
  };
  
  var _constant = __webpack_require__(21);
  
  var _constant2 = _interopRequireDefault(_constant);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _class, _class2, _temp;
  
  /* Decoraters */
  
  
  /* Utils */
  
  
  /* CSS */
  
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _propTypes = __webpack_require__(13);
  
  var _propTypes2 = _interopRequireDefault(_propTypes);
  
  var _reactDom = __webpack_require__(89);
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _classnames = __webpack_require__(33);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _sanitizeHtmlReact = __webpack_require__(75);
  
  var _sanitizeHtmlReact2 = _interopRequireDefault(_sanitizeHtmlReact);
  
  var _staticMethods = __webpack_require__(64);
  
  var _staticMethods2 = _interopRequireDefault(_staticMethods);
  
  var _windowListener = __webpack_require__(66);
  
  var _windowListener2 = _interopRequireDefault(_windowListener);
  
  var _customEvent = __webpack_require__(61);
  
  var _customEvent2 = _interopRequireDefault(_customEvent);
  
  var _isCapture = __webpack_require__(63);
  
  var _isCapture2 = _interopRequireDefault(_isCapture);
  
  var _getEffect = __webpack_require__(62);
  
  var _getEffect2 = _interopRequireDefault(_getEffect);
  
  var _trackRemoval = __webpack_require__(65);
  
  var _trackRemoval2 = _interopRequireDefault(_trackRemoval);
  
  var _getPosition = __webpack_require__(70);
  
  var _getPosition2 = _interopRequireDefault(_getPosition);
  
  var _getTipContent = __webpack_require__(71);
  
  var _getTipContent2 = _interopRequireDefault(_getTipContent);
  
  var _aria = __webpack_require__(69);
  
  var _nodeListToArray = __webpack_require__(72);
  
  var _nodeListToArray2 = _interopRequireDefault(_nodeListToArray);
  
  var _style = __webpack_require__(68);
  
  var _style2 = _interopRequireDefault(_style);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var ReactTooltip = (0, _staticMethods2.default)(_class = (0, _windowListener2.default)(_class = (0, _customEvent2.default)(_class = (0, _isCapture2.default)(_class = (0, _getEffect2.default)(_class = (0, _trackRemoval2.default)(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(ReactTooltip, _React$Component);
  
    function ReactTooltip(props) {
      _classCallCheck(this, ReactTooltip);
  
      var _this = _possibleConstructorReturn(this, (ReactTooltip.__proto__ || Object.getPrototypeOf(ReactTooltip)).call(this, props));
  
      _this.state = {
        place: props.place || 'top', // Direction of tooltip
        desiredPlace: props.place || 'top',
        type: 'dark', // Color theme of tooltip
        effect: 'float', // float or fixed
        show: false,
        border: false,
        offset: {},
        extraClass: '',
        html: false,
        delayHide: 0,
        delayShow: 0,
        event: props.event || null,
        eventOff: props.eventOff || null,
        currentEvent: null, // Current mouse event
        currentTarget: null, // Current target of mouse event
        ariaProps: (0, _aria.parseAria)(props), // aria- and role attributes
        isEmptyTip: false,
        disable: false,
        originTooltip: null,
        isMultiline: false
      };
  
      _this.bind(['showTooltip', 'updateTooltip', 'hideTooltip', 'getTooltipContent', 'globalRebuild', 'globalShow', 'globalHide', 'onWindowResize', 'mouseOnToolTip']);
  
      _this.mount = true;
      _this.delayShowLoop = null;
      _this.delayHideLoop = null;
      _this.delayReshow = null;
      _this.intervalUpdateContent = null;
      return _this;
    }
  
    /**
     * For unify the bind and unbind listener
     */
  
  
    _createClass(ReactTooltip, [{
      key: 'bind',
      value: function bind(methodArray) {
        var _this2 = this;
  
        methodArray.forEach(function (method) {
          _this2[method] = _this2[method].bind(_this2);
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
            insecure = _props.insecure,
            resizeHide = _props.resizeHide;
  
        if (insecure) {
          this.setStyleHeader(); // Set the style to the <link>
        }
        this.bindListener(); // Bind listener for tooltip
        this.bindWindowEvents(resizeHide); // Bind global event for static method
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        var ariaProps = this.state.ariaProps;
  
        var newAriaProps = (0, _aria.parseAria)(props);
  
        var isChanged = Object.keys(newAriaProps).some(function (props) {
          return newAriaProps[props] !== ariaProps[props];
        });
        if (isChanged) {
          this.setState({ ariaProps: newAriaProps });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.mount = false;
  
        this.clearTimer();
  
        this.unbindListener();
        this.removeScrollListener();
        this.unbindWindowEvents();
      }
  
      /**
       * Return if the mouse is on the tooltip.
       * @returns {boolean} true - mouse is on the tooltip
       */
  
    }, {
      key: 'mouseOnToolTip',
      value: function mouseOnToolTip() {
        var show = this.state.show;
  
  
        if (show && this.tooltipRef) {
          /* old IE work around */
          if (!this.tooltipRef.matches) {
            this.tooltipRef.matches = this.tooltipRef.msMatchesSelector;
          }
          return this.tooltipRef.matches(':hover');
        }
        return false;
      }
      /**
       * Pick out corresponded target elements
       */
  
    }, {
      key: 'getTargetArray',
      value: function getTargetArray(id) {
        var targetArray = void 0;
        if (!id) {
          targetArray = document.querySelectorAll('[data-tip]:not([data-for])');
        } else {
          var escaped = id.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
          targetArray = document.querySelectorAll('[data-tip][data-for="' + escaped + '"]');
        }
        // targetArray is a NodeList, convert it to a real array
        return (0, _nodeListToArray2.default)(targetArray);
      }
  
      /**
       * Bind listener to the target elements
       * These listeners used to trigger showing or hiding the tooltip
       */
  
    }, {
      key: 'bindListener',
      value: function bindListener() {
        var _this3 = this;
  
        var _props2 = this.props,
            id = _props2.id,
            globalEventOff = _props2.globalEventOff,
            isCapture = _props2.isCapture;
  
        var targetArray = this.getTargetArray(id);
  
        targetArray.forEach(function (target) {
          var isCaptureMode = _this3.isCapture(target);
          var effect = _this3.getEffect(target);
          if (target.getAttribute('currentItem') === null) {
            target.setAttribute('currentItem', 'false');
          }
          _this3.unbindBasicListener(target);
  
          if (_this3.isCustomEvent(target)) {
            _this3.customBindListener(target);
            return;
          }
  
          target.addEventListener('mouseenter', _this3.showTooltip, isCaptureMode);
          if (effect === 'float') {
            target.addEventListener('mousemove', _this3.updateTooltip, isCaptureMode);
          }
          target.addEventListener('mouseleave', _this3.hideTooltip, isCaptureMode);
        });
  
        // Global event to hide tooltip
        if (globalEventOff) {
          window.removeEventListener(globalEventOff, this.hideTooltip);
          window.addEventListener(globalEventOff, this.hideTooltip, isCapture);
        }
  
        // Track removal of targetArray elements from DOM
        this.bindRemovalTracker();
      }
  
      /**
       * Unbind listeners on target elements
       */
  
    }, {
      key: 'unbindListener',
      value: function unbindListener() {
        var _this4 = this;
  
        var _props3 = this.props,
            id = _props3.id,
            globalEventOff = _props3.globalEventOff;
  
        var targetArray = this.getTargetArray(id);
        targetArray.forEach(function (target) {
          _this4.unbindBasicListener(target);
          if (_this4.isCustomEvent(target)) _this4.customUnbindListener(target);
        });
  
        if (globalEventOff) window.removeEventListener(globalEventOff, this.hideTooltip);
        this.unbindRemovalTracker();
      }
  
      /**
       * Invoke this before bind listener and ummount the compont
       * it is necessary to invloke this even when binding custom event
       * so that the tooltip can switch between custom and default listener
       */
  
    }, {
      key: 'unbindBasicListener',
      value: function unbindBasicListener(target) {
        var isCaptureMode = this.isCapture(target);
        target.removeEventListener('mouseenter', this.showTooltip, isCaptureMode);
        target.removeEventListener('mousemove', this.updateTooltip, isCaptureMode);
        target.removeEventListener('mouseleave', this.hideTooltip, isCaptureMode);
      }
    }, {
      key: 'getTooltipContent',
      value: function getTooltipContent() {
        var _props4 = this.props,
            getContent = _props4.getContent,
            children = _props4.children;
  
        // Generate tooltip content
  
        var content = void 0;
        if (getContent) {
          if (Array.isArray(getContent)) {
            content = getContent[0] && getContent[0](this.state.originTooltip);
          } else {
            content = getContent(this.state.originTooltip);
          }
        }
  
        return (0, _getTipContent2.default)(this.state.originTooltip, children, content, this.state.isMultiline);
      }
    }, {
      key: 'isEmptyTip',
      value: function isEmptyTip(placeholder) {
        return typeof placeholder === 'string' && placeholder === '' || placeholder === null;
      }
  
      /**
       * When mouse enter, show the tooltip
       */
  
    }, {
      key: 'showTooltip',
      value: function showTooltip(e, isGlobalCall) {
        if (isGlobalCall) {
          // Don't trigger other elements belongs to other ReactTooltip
          var targetArray = this.getTargetArray(this.props.id);
          var isMyElement = targetArray.some(function (ele) {
            return ele === e.currentTarget;
          });
          if (!isMyElement) return;
        }
        // Get the tooltip content
        // calculate in this phrase so that tip width height can be detected
        var _props5 = this.props,
            multiline = _props5.multiline,
            getContent = _props5.getContent;
  
        var originTooltip = e.currentTarget.getAttribute('data-tip');
        var isMultiline = e.currentTarget.getAttribute('data-multiline') || multiline || false;
  
        // If it is focus event or called by ReactTooltip.show, switch to `solid` effect
        var switchToSolid = e instanceof window.FocusEvent || isGlobalCall;
  
        // if it needs to skip adding hide listener to scroll
        var scrollHide = true;
        if (e.currentTarget.getAttribute('data-scroll-hide')) {
          scrollHide = e.currentTarget.getAttribute('data-scroll-hide') === 'true';
        } else if (this.props.scrollHide != null) {
          scrollHide = this.props.scrollHide;
        }
  
        // Make sure the correct place is set
        var desiredPlace = e.currentTarget.getAttribute('data-place') || this.props.place || 'top';
        var effect = switchToSolid && 'solid' || this.getEffect(e.currentTarget);
        var offset = e.currentTarget.getAttribute('data-offset') || this.props.offset || {};
        var result = (0, _getPosition2.default)(e, e.currentTarget, _reactDom2.default.findDOMNode(this), desiredPlace, desiredPlace, effect, offset);
        var place = result.isNewState ? result.newState.place : desiredPlace;
  
        // To prevent previously created timers from triggering
        this.clearTimer();
  
        var target = e.currentTarget;
  
        var reshowDelay = this.state.show ? target.getAttribute('data-delay-update') || this.props.delayUpdate : 0;
  
        var self = this;
  
        var updateState = function updateState() {
          self.setState({
            originTooltip: originTooltip,
            isMultiline: isMultiline,
            desiredPlace: desiredPlace,
            place: place,
            type: target.getAttribute('data-type') || self.props.type || 'dark',
            effect: effect,
            offset: offset,
            html: target.getAttribute('data-html') ? target.getAttribute('data-html') === 'true' : self.props.html || false,
            delayShow: target.getAttribute('data-delay-show') || self.props.delayShow || 0,
            delayHide: target.getAttribute('data-delay-hide') || self.props.delayHide || 0,
            delayUpdate: target.getAttribute('data-delay-update') || self.props.delayUpdate || 0,
            border: target.getAttribute('data-border') ? target.getAttribute('data-border') === 'true' : self.props.border || false,
            extraClass: target.getAttribute('data-class') || self.props.class || self.props.className || '',
            disable: target.getAttribute('data-tip-disable') ? target.getAttribute('data-tip-disable') === 'true' : self.props.disable || false,
            currentTarget: target
          }, function () {
            if (scrollHide) self.addScrollListener(self.state.currentTarget);
            self.updateTooltip(e);
  
            if (getContent && Array.isArray(getContent)) {
              self.intervalUpdateContent = setInterval(function () {
                if (self.mount) {
                  var _getContent = self.props.getContent;
  
                  var placeholder = (0, _getTipContent2.default)(originTooltip, '', _getContent[0](), isMultiline);
                  var isEmptyTip = self.isEmptyTip(placeholder);
                  self.setState({
                    isEmptyTip: isEmptyTip
                  });
                  self.updatePosition();
                }
              }, getContent[1]);
            }
          });
        };
  
        // If there is no delay call immediately, don't allow events to get in first.
        if (reshowDelay) {
          this.delayReshow = setTimeout(updateState, reshowDelay);
        } else {
          updateState();
        }
      }
  
      /**
       * When mouse hover, updatetooltip
       */
  
    }, {
      key: 'updateTooltip',
      value: function updateTooltip(e) {
        var _this5 = this;
  
        var _state = this.state,
            delayShow = _state.delayShow,
            disable = _state.disable;
        var afterShow = this.props.afterShow;
  
        var placeholder = this.getTooltipContent();
        var delayTime = parseInt(delayShow, 10);
        var eventTarget = e.currentTarget || e.target;
  
        // Check if the mouse is actually over the tooltip, if so don't hide the tooltip
        if (this.mouseOnToolTip()) {
          return;
        }
  
        if (this.isEmptyTip(placeholder) || disable) return; // if the tooltip is empty, disable the tooltip
        var updateState = function updateState() {
          if (Array.isArray(placeholder) && placeholder.length > 0 || placeholder) {
            var isInvisible = !_this5.state.show;
            _this5.setState({
              currentEvent: e,
              currentTarget: eventTarget,
              show: true
            }, function () {
              _this5.updatePosition();
              if (isInvisible && afterShow) afterShow();
            });
          }
        };
  
        clearTimeout(this.delayShowLoop);
        if (delayShow) {
          this.delayShowLoop = setTimeout(updateState, delayTime);
        } else {
          updateState();
        }
      }
  
      /*
      * If we're mousing over the tooltip remove it when we leave.
       */
  
    }, {
      key: 'listenForTooltipExit',
      value: function listenForTooltipExit() {
        var show = this.state.show;
  
  
        if (show && this.tooltipRef) {
          this.tooltipRef.addEventListener('mouseleave', this.hideTooltip);
        }
      }
    }, {
      key: 'removeListenerForTooltipExit',
      value: function removeListenerForTooltipExit() {
        var show = this.state.show;
  
  
        if (show && this.tooltipRef) {
          this.tooltipRef.removeEventListener('mouseleave', this.hideTooltip);
        }
      }
  
      /**
       * When mouse leave, hide tooltip
       */
  
    }, {
      key: 'hideTooltip',
      value: function hideTooltip(e, hasTarget) {
        var _this6 = this;
  
        var _state2 = this.state,
            delayHide = _state2.delayHide,
            disable = _state2.disable;
        var afterHide = this.props.afterHide;
  
        var placeholder = this.getTooltipContent();
        if (!this.mount) return;
        if (this.isEmptyTip(placeholder) || disable) return; // if the tooltip is empty, disable the tooltip
        if (hasTarget) {
          // Don't trigger other elements belongs to other ReactTooltip
          var targetArray = this.getTargetArray(this.props.id);
          var isMyElement = targetArray.some(function (ele) {
            return ele === e.currentTarget;
          });
          if (!isMyElement || !this.state.show) return;
        }
  
        var resetState = function resetState() {
          var isVisible = _this6.state.show;
          // Check if the mouse is actually over the tooltip, if so don't hide the tooltip
          if (_this6.mouseOnToolTip()) {
            _this6.listenForTooltipExit();
            return;
          }
          _this6.removeListenerForTooltipExit();
  
          _this6.setState({
            show: false
          }, function () {
            _this6.removeScrollListener();
            if (isVisible && afterHide) afterHide();
          });
        };
  
        this.clearTimer();
        if (delayHide) {
          this.delayHideLoop = setTimeout(resetState, parseInt(delayHide, 10));
        } else {
          resetState();
        }
      }
  
      /**
       * Add scroll eventlistener when tooltip show
       * automatically hide the tooltip when scrolling
       */
  
    }, {
      key: 'addScrollListener',
      value: function addScrollListener(currentTarget) {
        var isCaptureMode = this.isCapture(currentTarget);
        window.addEventListener('scroll', this.hideTooltip, isCaptureMode);
      }
    }, {
      key: 'removeScrollListener',
      value: function removeScrollListener() {
        window.removeEventListener('scroll', this.hideTooltip);
      }
  
      // Calculation the position
  
    }, {
      key: 'updatePosition',
      value: function updatePosition() {
        var _this7 = this;
  
        var _state3 = this.state,
            currentEvent = _state3.currentEvent,
            currentTarget = _state3.currentTarget,
            place = _state3.place,
            desiredPlace = _state3.desiredPlace,
            effect = _state3.effect,
            offset = _state3.offset;
  
        var node = _reactDom2.default.findDOMNode(this);
        var result = (0, _getPosition2.default)(currentEvent, currentTarget, node, place, desiredPlace, effect, offset);
  
        if (result.isNewState) {
          // Switch to reverse placement
          return this.setState(result.newState, function () {
            _this7.updatePosition();
          });
        }
        // Set tooltip position
        node.style.left = result.position.left + 'px';
        node.style.top = result.position.top + 'px';
      }
  
      /**
       * Set style tag in header
       * in this way we can insert default css
       */
  
    }, {
      key: 'setStyleHeader',
      value: function setStyleHeader() {
        var head = document.getElementsByTagName('head')[0];
        if (!head.querySelector('style[id="react-tooltip"]')) {
          var tag = document.createElement('style');
          tag.id = 'react-tooltip';
          tag.innerHTML = _style2.default;
          /* eslint-disable */
          if (typeof __webpack_nonce__ !== 'undefined' && __webpack_nonce__) {
            tag.setAttribute('nonce', __webpack_nonce__);
          }
          /* eslint-enable */
          head.insertBefore(tag, head.firstChild);
        }
      }
  
      /**
       * CLear all kinds of timeout of interval
       */
  
    }, {
      key: 'clearTimer',
      value: function clearTimer() {
        clearTimeout(this.delayShowLoop);
        clearTimeout(this.delayHideLoop);
        clearTimeout(this.delayReshow);
        clearInterval(this.intervalUpdateContent);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this8 = this;
  
        var _state4 = this.state,
            extraClass = _state4.extraClass,
            html = _state4.html,
            ariaProps = _state4.ariaProps,
            disable = _state4.disable;
  
        var placeholder = this.getTooltipContent();
        var isEmptyTip = this.isEmptyTip(placeholder);
        var tooltipClass = (0, _classnames2.default)('__react_component_tooltip', { 'show': this.state.show && !disable && !isEmptyTip }, { 'border': this.state.border }, { 'place-top': this.state.place === 'top' }, { 'place-bottom': this.state.place === 'bottom' }, { 'place-left': this.state.place === 'left' }, { 'place-right': this.state.place === 'right' }, { 'type-dark': this.state.type === 'dark' }, { 'type-success': this.state.type === 'success' }, { 'type-warning': this.state.type === 'warning' }, { 'type-error': this.state.type === 'error' }, { 'type-info': this.state.type === 'info' }, { 'type-light': this.state.type === 'light' }, { 'allow_hover': this.props.delayUpdate });
  
        var Wrapper = this.props.wrapper;
        if (ReactTooltip.supportedWrappers.indexOf(Wrapper) < 0) {
          Wrapper = ReactTooltip.defaultProps.wrapper;
        }
  
        if (html) {
          return _react2.default.createElement(Wrapper, _extends({ className: tooltipClass + ' ' + extraClass,
            id: this.props.id,
            ref: function ref(_ref) {
              return _this8.tooltipRef = _ref;
            }
          }, ariaProps, {
            'data-id': 'tooltip',
            dangerouslySetInnerHTML: { __html: (0, _sanitizeHtmlReact2.default)(placeholder, this.props.sanitizeHtmlOptions) } }));
        } else {
          return _react2.default.createElement(
            Wrapper,
            _extends({ className: tooltipClass + ' ' + extraClass,
              id: this.props.id
            }, ariaProps, {
              ref: function ref(_ref2) {
                return _this8.tooltipRef = _ref2;
              },
              'data-id': 'tooltip' }),
            placeholder
          );
        }
      }
    }]);
  
    return ReactTooltip;
  }(_react2.default.Component), _class2.propTypes = {
    children: _propTypes2.default.any,
    place: _propTypes2.default.string,
    type: _propTypes2.default.string,
    effect: _propTypes2.default.string,
    offset: _propTypes2.default.object,
    multiline: _propTypes2.default.bool,
    border: _propTypes2.default.bool,
    insecure: _propTypes2.default.bool,
    class: _propTypes2.default.string,
    className: _propTypes2.default.string,
    id: _propTypes2.default.string,
    html: _propTypes2.default.bool,
    delayHide: _propTypes2.default.number,
    delayUpdate: _propTypes2.default.number,
    delayShow: _propTypes2.default.number,
    event: _propTypes2.default.string,
    eventOff: _propTypes2.default.string,
    watchWindow: _propTypes2.default.bool,
    isCapture: _propTypes2.default.bool,
    globalEventOff: _propTypes2.default.string,
    getContent: _propTypes2.default.any,
    afterShow: _propTypes2.default.func,
    afterHide: _propTypes2.default.func,
    disable: _propTypes2.default.bool,
    scrollHide: _propTypes2.default.bool,
    resizeHide: _propTypes2.default.bool,
    wrapper: _propTypes2.default.string,
    sanitizeHtmlOptions: _propTypes2.default.any
  }, _class2.defaultProps = {
    insecure: true,
    resizeHide: true,
    wrapper: 'div'
  }, _class2.supportedWrappers = ['div', 'span'], _class2.displayName = 'ReactTooltip', _temp)) || _class) || _class) || _class) || _class) || _class) || _class;
  
  /* export default not fit for standalone, it will exports {default:...} */
  
  
  module.exports = ReactTooltip;

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = '.__react_component_tooltip{border-radius:3px;display:inline-block;font-size:13px;left:-999em;opacity:0;padding:8px 21px;position:fixed;pointer-events:none;transition:opacity 0.3s ease-out;top:-999em;visibility:hidden;z-index:999}.__react_component_tooltip.allow_hover{pointer-events:auto}.__react_component_tooltip:before,.__react_component_tooltip:after{content:"";width:0;height:0;position:absolute}.__react_component_tooltip.show{opacity:0.9;margin-top:0px;margin-left:0px;visibility:visible}.__react_component_tooltip.type-dark{color:#fff;background-color:#222}.__react_component_tooltip.type-dark.place-top:after{border-top-color:#222;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-dark.place-bottom:after{border-bottom-color:#222;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-dark.place-left:after{border-left-color:#222;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-dark.place-right:after{border-right-color:#222;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-dark.border{border:1px solid #fff}.__react_component_tooltip.type-dark.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-dark.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-dark.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-dark.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-success{color:#fff;background-color:#8DC572}.__react_component_tooltip.type-success.place-top:after{border-top-color:#8DC572;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-success.place-bottom:after{border-bottom-color:#8DC572;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-success.place-left:after{border-left-color:#8DC572;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-success.place-right:after{border-right-color:#8DC572;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-success.border{border:1px solid #fff}.__react_component_tooltip.type-success.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-success.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-success.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-success.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-warning{color:#fff;background-color:#F0AD4E}.__react_component_tooltip.type-warning.place-top:after{border-top-color:#F0AD4E;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-warning.place-bottom:after{border-bottom-color:#F0AD4E;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-warning.place-left:after{border-left-color:#F0AD4E;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-warning.place-right:after{border-right-color:#F0AD4E;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-warning.border{border:1px solid #fff}.__react_component_tooltip.type-warning.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-warning.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-warning.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-warning.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-error{color:#fff;background-color:#BE6464}.__react_component_tooltip.type-error.place-top:after{border-top-color:#BE6464;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-error.place-bottom:after{border-bottom-color:#BE6464;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-error.place-left:after{border-left-color:#BE6464;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-error.place-right:after{border-right-color:#BE6464;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-error.border{border:1px solid #fff}.__react_component_tooltip.type-error.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-error.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-error.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-error.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-info{color:#fff;background-color:#337AB7}.__react_component_tooltip.type-info.place-top:after{border-top-color:#337AB7;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-info.place-bottom:after{border-bottom-color:#337AB7;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-info.place-left:after{border-left-color:#337AB7;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-info.place-right:after{border-right-color:#337AB7;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-info.border{border:1px solid #fff}.__react_component_tooltip.type-info.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-info.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-info.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-info.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-light{color:#222;background-color:#fff}.__react_component_tooltip.type-light.place-top:after{border-top-color:#fff;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-light.place-bottom:after{border-bottom-color:#fff;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-light.place-left:after{border-left-color:#fff;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-light.place-right:after{border-right-color:#fff;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-light.border{border:1px solid #222}.__react_component_tooltip.type-light.border.place-top:before{border-top:8px solid #222}.__react_component_tooltip.type-light.border.place-bottom:before{border-bottom:8px solid #222}.__react_component_tooltip.type-light.border.place-left:before{border-left:8px solid #222}.__react_component_tooltip.type-light.border.place-right:before{border-right:8px solid #222}.__react_component_tooltip.place-top{margin-top:-10px}.__react_component_tooltip.place-top:before{border-left:10px solid transparent;border-right:10px solid transparent;bottom:-8px;left:50%;margin-left:-10px}.__react_component_tooltip.place-top:after{border-left:8px solid transparent;border-right:8px solid transparent;bottom:-6px;left:50%;margin-left:-8px}.__react_component_tooltip.place-bottom{margin-top:10px}.__react_component_tooltip.place-bottom:before{border-left:10px solid transparent;border-right:10px solid transparent;top:-8px;left:50%;margin-left:-10px}.__react_component_tooltip.place-bottom:after{border-left:8px solid transparent;border-right:8px solid transparent;top:-6px;left:50%;margin-left:-8px}.__react_component_tooltip.place-left{margin-left:-10px}.__react_component_tooltip.place-left:before{border-top:6px solid transparent;border-bottom:6px solid transparent;right:-8px;top:50%;margin-top:-5px}.__react_component_tooltip.place-left:after{border-top:5px solid transparent;border-bottom:5px solid transparent;right:-6px;top:50%;margin-top:-4px}.__react_component_tooltip.place-right{margin-left:10px}.__react_component_tooltip.place-right:before{border-top:6px solid transparent;border-bottom:6px solid transparent;left:-8px;top:50%;margin-top:-5px}.__react_component_tooltip.place-right:after{border-top:5px solid transparent;border-bottom:5px solid transparent;left:-6px;top:50%;margin-top:-4px}.__react_component_tooltip .multi-line{display:block;padding:2px 0px;text-align:center}';

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.parseAria = parseAria;
  /**
   * Support aria- and role in ReactTooltip
   *
   * @params props {Object}
   * @return {Object}
   */
  function parseAria(props) {
    var ariaObj = {};
    Object.keys(props).filter(function (prop) {
      // aria-xxx and role is acceptable
      return (/(^aria-\w+$|^role$)/.test(prop)
      );
    }).forEach(function (prop) {
      ariaObj[prop] = props[prop];
    });
  
    return ariaObj;
  }

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (e, target, node, place, desiredPlace, effect, offset) {
    var _getDimensions = getDimensions(node),
        tipWidth = _getDimensions.width,
        tipHeight = _getDimensions.height;
  
    var _getDimensions2 = getDimensions(target),
        targetWidth = _getDimensions2.width,
        targetHeight = _getDimensions2.height;
  
    var _getCurrentOffset = getCurrentOffset(e, target, effect),
        mouseX = _getCurrentOffset.mouseX,
        mouseY = _getCurrentOffset.mouseY;
  
    var defaultOffset = getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight);
  
    var _calculateOffset = calculateOffset(offset),
        extraOffset_X = _calculateOffset.extraOffset_X,
        extraOffset_Y = _calculateOffset.extraOffset_Y;
  
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
  
    var _getParent = getParent(node),
        parentTop = _getParent.parentTop,
        parentLeft = _getParent.parentLeft;
  
    // Get the edge offset of the tooltip
  
  
    var getTipOffsetLeft = function getTipOffsetLeft(place) {
      var offset_X = defaultOffset[place].l;
      return mouseX + offset_X + extraOffset_X;
    };
    var getTipOffsetRight = function getTipOffsetRight(place) {
      var offset_X = defaultOffset[place].r;
      return mouseX + offset_X + extraOffset_X;
    };
    var getTipOffsetTop = function getTipOffsetTop(place) {
      var offset_Y = defaultOffset[place].t;
      return mouseY + offset_Y + extraOffset_Y;
    };
    var getTipOffsetBottom = function getTipOffsetBottom(place) {
      var offset_Y = defaultOffset[place].b;
      return mouseY + offset_Y + extraOffset_Y;
    };
  
    //
    // Functions to test whether the tooltip's sides are inside
    // the client window for a given orientation p
    //
    //  _____________
    // |             | <-- Right side
    // | p = 'left'  |\
    // |             |/  |\
    // |_____________|   |_\  <-- Mouse
    //      / \           |
    //       |
    //       |
    //  Bottom side
    //
    var outsideLeft = function outsideLeft(p) {
      return getTipOffsetLeft(p) < 0;
    };
    var outsideRight = function outsideRight(p) {
      return getTipOffsetRight(p) > windowWidth;
    };
    var outsideTop = function outsideTop(p) {
      return getTipOffsetTop(p) < 0;
    };
    var outsideBottom = function outsideBottom(p) {
      return getTipOffsetBottom(p) > windowHeight;
    };
  
    // Check whether the tooltip with orientation p is completely inside the client window
    var outside = function outside(p) {
      return outsideLeft(p) || outsideRight(p) || outsideTop(p) || outsideBottom(p);
    };
    var inside = function inside(p) {
      return !outside(p);
    };
  
    var placesList = ['top', 'bottom', 'left', 'right'];
    var insideList = [];
    for (var i = 0; i < 4; i++) {
      var p = placesList[i];
      if (inside(p)) {
        insideList.push(p);
      }
    }
  
    var isNewState = false;
    var newPlace = void 0;
    if (inside(desiredPlace) && desiredPlace !== place) {
      isNewState = true;
      newPlace = desiredPlace;
    } else if (insideList.length > 0 && outside(desiredPlace) && outside(place)) {
      isNewState = true;
      newPlace = insideList[0];
    }
  
    if (isNewState) {
      return {
        isNewState: true,
        newState: { place: newPlace }
      };
    }
  
    return {
      isNewState: false,
      position: {
        left: parseInt(getTipOffsetLeft(place) - parentLeft, 10),
        top: parseInt(getTipOffsetTop(place) - parentTop, 10)
      }
    };
  };
  
  var getDimensions = function getDimensions(node) {
    var _node$getBoundingClie = node.getBoundingClientRect(),
        height = _node$getBoundingClie.height,
        width = _node$getBoundingClie.width;
  
    return {
      height: parseInt(height, 10),
      width: parseInt(width, 10)
    };
  };
  
  // Get current mouse offset
  /**
   * Calculate the position of tooltip
   *
   * @params
   * - `e` {Event} the event of current mouse
   * - `target` {Element} the currentTarget of the event
   * - `node` {DOM} the react-tooltip object
   * - `place` {String} top / right / bottom / left
   * - `effect` {String} float / solid
   * - `offset` {Object} the offset to default position
   *
   * @return {Object}
   * - `isNewState` {Bool} required
   * - `newState` {Object}
   * - `position` {Object} {left: {Number}, top: {Number}}
   */
  var getCurrentOffset = function getCurrentOffset(e, currentTarget, effect) {
    var boundingClientRect = currentTarget.getBoundingClientRect();
    var targetTop = boundingClientRect.top;
    var targetLeft = boundingClientRect.left;
  
    var _getDimensions3 = getDimensions(currentTarget),
        targetWidth = _getDimensions3.width,
        targetHeight = _getDimensions3.height;
  
    if (effect === 'float') {
      return {
        mouseX: e.clientX,
        mouseY: e.clientY
      };
    }
    return {
      mouseX: targetLeft + targetWidth / 2,
      mouseY: targetTop + targetHeight / 2
    };
  };
  
  // List all possibility of tooltip final offset
  // This is useful in judging if it is necessary for tooltip to switch position when out of window
  var getDefaultPosition = function getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight) {
    var top = void 0;
    var right = void 0;
    var bottom = void 0;
    var left = void 0;
    var disToMouse = 3;
    var triangleHeight = 2;
    var cursorHeight = 12; // Optimize for float bottom only, cause the cursor will hide the tooltip
  
    if (effect === 'float') {
      top = {
        l: -(tipWidth / 2),
        r: tipWidth / 2,
        t: -(tipHeight + disToMouse + triangleHeight),
        b: -disToMouse
      };
      bottom = {
        l: -(tipWidth / 2),
        r: tipWidth / 2,
        t: disToMouse + cursorHeight,
        b: tipHeight + disToMouse + triangleHeight + cursorHeight
      };
      left = {
        l: -(tipWidth + disToMouse + triangleHeight),
        r: -disToMouse,
        t: -(tipHeight / 2),
        b: tipHeight / 2
      };
      right = {
        l: disToMouse,
        r: tipWidth + disToMouse + triangleHeight,
        t: -(tipHeight / 2),
        b: tipHeight / 2
      };
    } else if (effect === 'solid') {
      top = {
        l: -(tipWidth / 2),
        r: tipWidth / 2,
        t: -(targetHeight / 2 + tipHeight + triangleHeight),
        b: -(targetHeight / 2)
      };
      bottom = {
        l: -(tipWidth / 2),
        r: tipWidth / 2,
        t: targetHeight / 2,
        b: targetHeight / 2 + tipHeight + triangleHeight
      };
      left = {
        l: -(tipWidth + targetWidth / 2 + triangleHeight),
        r: -(targetWidth / 2),
        t: -(tipHeight / 2),
        b: tipHeight / 2
      };
      right = {
        l: targetWidth / 2,
        r: tipWidth + targetWidth / 2 + triangleHeight,
        t: -(tipHeight / 2),
        b: tipHeight / 2
      };
    }
  
    return { top: top, bottom: bottom, left: left, right: right };
  };
  
  // Consider additional offset into position calculation
  var calculateOffset = function calculateOffset(offset) {
    var extraOffset_X = 0;
    var extraOffset_Y = 0;
  
    if (Object.prototype.toString.apply(offset) === '[object String]') {
      offset = JSON.parse(offset.toString().replace(/\'/g, '\"'));
    }
    for (var key in offset) {
      if (key === 'top') {
        extraOffset_Y -= parseInt(offset[key], 10);
      } else if (key === 'bottom') {
        extraOffset_Y += parseInt(offset[key], 10);
      } else if (key === 'left') {
        extraOffset_X -= parseInt(offset[key], 10);
      } else if (key === 'right') {
        extraOffset_X += parseInt(offset[key], 10);
      }
    }
  
    return { extraOffset_X: extraOffset_X, extraOffset_Y: extraOffset_Y };
  };
  
  // Get the offset of the parent elements
  var getParent = function getParent(currentTarget) {
    var currentParent = currentTarget;
    while (currentParent) {
      if (window.getComputedStyle(currentParent).getPropertyValue('transform') !== 'none') break;
      currentParent = currentParent.parentElement;
    }
  
    var parentTop = currentParent && currentParent.getBoundingClientRect().top || 0;
    var parentLeft = currentParent && currentParent.getBoundingClientRect().left || 0;
  
    return { parentTop: parentTop, parentLeft: parentLeft };
  };

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (tip, children, getContent, multiline) {
    if (children) return children;
    if (getContent !== undefined && getContent !== null) return getContent; // getContent can be 0, '', etc.
    if (getContent === null) return null; // Tip not exist and childern is null or undefined
  
    var regexp = /<br\s*\/?>/;
    if (!multiline || multiline === 'false' || !regexp.test(tip)) {
      // No trim(), so that user can keep their input
      return tip;
    }
  
    // Multiline tooltip content
    return tip.split(regexp).map(function (d, i) {
      return _react2.default.createElement(
        'span',
        { key: i, className: 'multi-line' },
        d
      );
    });
  };
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (nodeList) {
    var length = nodeList.length;
    if (nodeList.hasOwnProperty) {
      return Array.prototype.slice.call(nodeList);
    }
    return new Array(length).fill().map(function (index) {
      return nodeList[index];
    });
  };

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

  module.exports = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&")
  }


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

  /* eslint-disable node/no-deprecated-api */
  var buffer = __webpack_require__(14)
  var Buffer = buffer.Buffer
  
  // alternative to using Object.keys for old browsers
  function copyProps (src, dst) {
    for (var key in src) {
      dst[key] = src[key]
    }
  }
  if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer
  } else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports)
    exports.Buffer = SafeBuffer
  }
  
  function SafeBuffer (arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length)
  }
  
  // Copy static methods from Buffer
  copyProps(Buffer, SafeBuffer)
  
  SafeBuffer.from = function (arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
      throw new TypeError('Argument must not be a number')
    }
    return Buffer(arg, encodingOrOffset, length)
  }
  
  SafeBuffer.alloc = function (size, fill, encoding) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number')
    }
    var buf = Buffer(size)
    if (fill !== undefined) {
      if (typeof encoding === 'string') {
        buf.fill(fill, encoding)
      } else {
        buf.fill(fill)
      }
    } else {
      buf.fill(0)
    }
    return buf
  }
  
  SafeBuffer.allocUnsafe = function (size) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number')
    }
    return Buffer(size)
  }
  
  SafeBuffer.allocUnsafeSlow = function (size) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number')
    }
    return buffer.SlowBuffer(size)
  }


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

  var htmlparser = __webpack_require__(3);
  var extend = __webpack_require__(78);
  var quoteRegexp = __webpack_require__(73);
  
  function each(obj, cb) {
    if (obj) Object.keys(obj).forEach(function (key) {
      cb(obj[key], key);
    });
  }
  
  // Avoid false positives with .__proto__, .hasOwnProperty, etc.
  function has(obj, key) {
    return ({}).hasOwnProperty.call(obj, key);
  }
  
  module.exports = sanitizeHtml;
  
  // Ignore the _recursing flag; it's there for recursive
  // invocation as a guard against this exploit:
  // https://github.com/fb55/htmlparser2/issues/105
  
  function sanitizeHtml(html, options, _recursing) {
    var result = '';
  
    function Frame(tag, attribs) {
      var that = this;
      this.tag = tag;
      this.attribs = attribs || {};
      this.tagPosition = result.length;
      this.text = ''; // Node inner text
  
      this.updateParentNodeText = function() {
        if (stack.length) {
            var parentFrame = stack[stack.length - 1];
            parentFrame.text += that.text;
        }
      };
    }
  
    if (!options) {
      options = sanitizeHtml.defaults;
      options.parser = htmlParserDefaults;
    } else {
      options = extend(sanitizeHtml.defaults, options);
      if (options.parser) {
        options.parser = extend(htmlParserDefaults, options.parser);
      } else {
        options.parser = htmlParserDefaults;
      }
    }
  
    // Tags that contain something other than HTML, or where discarding
    // the text when the tag is disallowed makes sense for other reasons.
    // If we are not allowing these tags, we should drop their content too.
    // For other tags you would drop the tag but keep its content.
    var nonTextTagsArray = options.nonTextTags || [ 'script', 'style', 'textarea' ];
    var allowedAttributesMap;
    var allowedAttributesGlobMap;
    if(options.allowedAttributes) {
      allowedAttributesMap = {};
      allowedAttributesGlobMap = {};
      each(options.allowedAttributes, function(attributes, tag) {
        allowedAttributesMap[tag] = [];
        var globRegex = [];
        attributes.forEach(function(name) {
          if(name.indexOf('*') >= 0) {
            globRegex.push(quoteRegexp(name).replace(/\\\*/g, '.*'));
          } else {
            allowedAttributesMap[tag].push(name);
          }
        });
        allowedAttributesGlobMap[tag] = new RegExp('^(' + globRegex.join('|') + ')$');
      });
    }
    var allowedClassesMap = {};
    each(options.allowedClasses, function(classes, tag) {
      // Implicitly allows the class attribute
      if(allowedAttributesMap) {
        if (!has(allowedAttributesMap, tag)) {
          allowedAttributesMap[tag] = [];
        }
        allowedAttributesMap[tag].push('class');
      }
  
      allowedClassesMap[tag] = classes;
    });
  
    var transformTagsMap = {};
    var transformTagsAll;
    each(options.transformTags, function(transform, tag) {
      var transFun;
      if (typeof transform === 'function') {
        transFun = transform;
      } else if (typeof transform === "string") {
        transFun = sanitizeHtml.simpleTransform(transform);
      }
      if (tag === '*') {
        transformTagsAll = transFun;
      } else {
        transformTagsMap[tag] = transFun;
      }
    });
  
    var depth = 0;
    var stack = [];
    var skipMap = {};
    var transformMap = {};
    var skipText = false;
    var skipTextDepth = 0;
  
    var parser = new htmlparser.Parser({
      onopentag: function(name, attribs) {
        if (skipText) {
          skipTextDepth++;
          return;
        }
        var frame = new Frame(name, attribs);
        stack.push(frame);
  
        var skip = false;
        var hasText = frame.text ? true : false;
        var transformedTag;
        if (has(transformTagsMap, name)) {
          transformedTag = transformTagsMap[name](name, attribs);
  
          frame.attribs = attribs = transformedTag.attribs;
  
          if (transformedTag.text !== undefined) {
            frame.innerText = transformedTag.text;
          }
  
          if (name !== transformedTag.tagName) {
            frame.name = name = transformedTag.tagName;
            transformMap[depth] = transformedTag.tagName;
          }
        }
        if (transformTagsAll) {
          transformedTag = transformTagsAll(name, attribs);
  
          frame.attribs = attribs = transformedTag.attribs;
          if (name !== transformedTag.tagName) {
            frame.name = name = transformedTag.tagName;
            transformMap[depth] = transformedTag.tagName;
          }
        }
  
        if (options.allowedTags && options.allowedTags.indexOf(name) === -1) {
          skip = true;
          if (nonTextTagsArray.indexOf(name) !== -1) {
            skipText = true;
            skipTextDepth = 1;
          }
          skipMap[depth] = true;
        }
        depth++;
        if (skip) {
          // We want the contents but not this tag
          return;
        }
        result += '<' + name;
        if (!allowedAttributesMap || has(allowedAttributesMap, name) || allowedAttributesMap['*']) {
          each(attribs, function(value, a) {
            if (!allowedAttributesMap ||
                (has(allowedAttributesMap, name) && allowedAttributesMap[name].indexOf(a) !== -1 ) ||
                (allowedAttributesMap['*'] && allowedAttributesMap['*'].indexOf(a) !== -1 ) ||
                (has(allowedAttributesGlobMap, name) && allowedAttributesGlobMap[name].test(a)) ||
                (allowedAttributesGlobMap['*'] && allowedAttributesGlobMap['*'].test(a))) {
              if ((a === 'href') || (a === 'src')) {
                if (naughtyHref(name, value)) {
                  delete frame.attribs[a];
                  return;
                }
              }
              if (a === 'class') {
                value = filterClasses(value, allowedClassesMap[name]);
                if (!value.length) {
                  delete frame.attribs[a];
                  return;
                }
              }
              result += ' ' + a;
              if (value.length) {
                result += '="' + value + '"';
              }
            } else {
              delete frame.attribs[a];
            }
          });
        }
        if (options.selfClosing.indexOf(name) !== -1) {
          result += " />";
        } else {
          result += ">";
          if (frame.innerText && !hasText && !options.textFilter) {
            result += frame.innerText;
          }
        }
      },
      ontext: function(text) {
        if (skipText) {
          return;
        }
        var lastFrame = stack[stack.length-1];
        var tag;
  
        if (lastFrame) {
          tag = lastFrame.tag;
          // If inner text was set by transform function then let's use it
          text = lastFrame.innerText !== undefined ? lastFrame.innerText : text;
        }
  
        if ((tag === 'script') || (tag === 'style')) {
          // htmlparser2 gives us these as-is. Escaping them ruins the content. Allowing
          // script tags is, by definition, game over for XSS protection, so if that's
          // your concern, don't allow them. The same is essentially true for style tags
          // which have their own collection of XSS vectors.
          result += text;
        } else {
          if (options.textFilter) {
            result += options.textFilter(text);
          } else {
            result += text;
          }
        }
        if (stack.length) {
             var frame = stack[stack.length - 1];
             frame.text += text;
        }
      },
      onclosetag: function(name) {
  
        if (skipText) {
          skipTextDepth--;
          if (!skipTextDepth) {
            skipText = false;
          } else {
            return;
          }
        }
  
        var frame = stack.pop();
        if (!frame) {
          // Do not crash on bad markup
          return;
        }
        skipText = false;
        depth--;
        if (skipMap[depth]) {
          delete skipMap[depth];
          frame.updateParentNodeText();
          return;
        }
  
        if (transformMap[depth]) {
          name = transformMap[depth];
          delete transformMap[depth];
        }
  
        if (options.exclusiveFilter && options.exclusiveFilter(frame)) {
           result = result.substr(0, frame.tagPosition);
           return;
        }
  
        frame.updateParentNodeText();
  
        if (options.selfClosing.indexOf(name) !== -1) {
           // Already output />
           return;
        }
  
        result += "</" + name + ">";
      }
    }, options.parser);
    parser.write(html);
    parser.end();
  
    return result;
  
    function naughtyHref(name, href) {
      // Browsers ignore character codes of 32 (space) and below in a surprising
      // number of situations. Start reading here:
      // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet#Embedded_tab
      href = href.replace(/[\x00-\x20]+/g, '');
      // Clobber any comments in URLs, which the browser might
      // interpret inside an XML data island, allowing
      // a javascript: URL to be snuck through
      href = href.replace(/<\!\-\-.*?\-\-\>/g, '');
      // Case insensitive so we don't get faked out by JAVASCRIPT #1
      var matches = href.match(/^([a-zA-Z]+)\:/);
      if (!matches) {
        // No scheme = no way to inject js (right?)
        return false;
      }
      var scheme = matches[1].toLowerCase();
  
      if (has(options.allowedSchemesByTag, name)) {
        return options.allowedSchemesByTag[name].indexOf(scheme) === -1;
      }
  
      return !options.allowedSchemes || options.allowedSchemes.indexOf(scheme) === -1;
    }
  
    function filterClasses(classes, allowed) {
      if (!allowed) {
        // The class attribute is allowed without filtering on this tag
        return classes;
      }
      classes = classes.split(/\s+/);
      return classes.filter(function(clss) {
        return allowed.indexOf(clss) !== -1;
      }).join(' ');
    }
  }
  
  // Defaults are accessible to you so that you can use them as a starting point
  // programmatically if you wish
  
  var htmlParserDefaults = {
    decodeEntities: true
  };
  sanitizeHtml.defaults = {
    allowedTags: [ 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
      'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
      'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
    allowedAttributes: {
      a: [ 'href', 'name', 'target' ],
      // We don't currently allow img itself by default, but this
      // would make sense if we did
      img: [ 'src' ]
    },
    // Lots of these won't come up by default because we don't allow them
    selfClosing: [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' ],
    // URL schemes we permit
    allowedSchemes: [ 'http', 'https', 'ftp', 'mailto' ],
    allowedSchemesByTag: {}
  };
  
  sanitizeHtml.simpleTransform = function(newTagName, newAttribs, merge) {
    merge = (merge === undefined) ? true : merge;
    newAttribs = newAttribs || {};
  
    return function(tagName, attribs) {
      var attrib;
      if (merge) {
        for (attrib in newAttribs) {
          attribs[attrib] = newAttribs[attrib];
        }
      } else {
        attribs = newAttribs;
      }
  
      return {
        tagName: newTagName,
        attribs: attribs
      };
    };
  };


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  'use strict';
  
  /*<replacement>*/
  
  var Buffer = __webpack_require__(74).Buffer;
  /*</replacement>*/
  
  var isEncoding = Buffer.isEncoding || function (encoding) {
    encoding = '' + encoding;
    switch (encoding && encoding.toLowerCase()) {
      case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
        return true;
      default:
        return false;
    }
  };
  
  function _normalizeEncoding(enc) {
    if (!enc) return 'utf8';
    var retried;
    while (true) {
      switch (enc) {
        case 'utf8':
        case 'utf-8':
          return 'utf8';
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return 'utf16le';
        case 'latin1':
        case 'binary':
          return 'latin1';
        case 'base64':
        case 'ascii':
        case 'hex':
          return enc;
        default:
          if (retried) return; // undefined
          enc = ('' + enc).toLowerCase();
          retried = true;
      }
    }
  };
  
  // Do not cache `Buffer.isEncoding` when checking encoding names as some
  // modules monkey-patch it to support additional encodings
  function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
    return nenc || enc;
  }
  
  // StringDecoder provides an interface for efficiently splitting a series of
  // buffers into a series of JS strings without breaking apart multi-byte
  // characters.
  exports.StringDecoder = StringDecoder;
  function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch (this.encoding) {
      case 'utf16le':
        this.text = utf16Text;
        this.end = utf16End;
        nb = 4;
        break;
      case 'utf8':
        this.fillLast = utf8FillLast;
        nb = 4;
        break;
      case 'base64':
        this.text = base64Text;
        this.end = base64End;
        nb = 3;
        break;
      default:
        this.write = simpleWrite;
        this.end = simpleEnd;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
  }
  
  StringDecoder.prototype.write = function (buf) {
    if (buf.length === 0) return '';
    var r;
    var i;
    if (this.lastNeed) {
      r = this.fillLast(buf);
      if (r === undefined) return '';
      i = this.lastNeed;
      this.lastNeed = 0;
    } else {
      i = 0;
    }
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || '';
  };
  
  StringDecoder.prototype.end = utf8End;
  
  // Returns only complete characters in a Buffer
  StringDecoder.prototype.text = utf8Text;
  
  // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
  StringDecoder.prototype.fillLast = function (buf) {
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
  };
  
  // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
  // continuation byte. If an invalid byte is detected, -2 is returned.
  function utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
  }
  
  // Checks at most 3 bytes at the end of a Buffer in order to detect an
  // incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
  // needed to complete the UTF-8 character (if applicable) are returned.
  function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
      if (nb > 0) self.lastNeed = nb - 1;
      return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
      if (nb > 0) self.lastNeed = nb - 2;
      return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
      if (nb > 0) {
        if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
      }
      return nb;
    }
    return 0;
  }
  
  // Validates as many continuation bytes for a multi-byte UTF-8 character as
  // needed or are available. If we see a non-continuation byte where we expect
  // one, we "replace" the validated continuation bytes we've seen so far with
  // a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
  // behavior. The continuation byte check is included three times in the case
  // where all of the continuation bytes for a character exist in the same buffer.
  // It is also done this way as a slight performance increase instead of using a
  // loop.
  function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
      self.lastNeed = 0;
      return '\ufffd';
    }
    if (self.lastNeed > 1 && buf.length > 1) {
      if ((buf[1] & 0xC0) !== 0x80) {
        self.lastNeed = 1;
        return '\ufffd';
      }
      if (self.lastNeed > 2 && buf.length > 2) {
        if ((buf[2] & 0xC0) !== 0x80) {
          self.lastNeed = 2;
          return '\ufffd';
        }
      }
    }
  }
  
  // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
  function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, p, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
  }
  
  // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
  // partial character, the character's bytes are buffered until the required
  // number of bytes are available.
  function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString('utf8', i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString('utf8', i, end);
  }
  
  // For UTF-8, a replacement character is added when ending on a partial
  // character.
  function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + '\ufffd';
    return r;
  }
  
  // UTF-16LE typically needs two bytes per character, but even if we have an even
  // number of bytes available, we need to check if we end on a leading/high
  // surrogate. In that case, we need to wait for the next two bytes in order to
  // decode the last character properly.
  function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
      var r = buf.toString('utf16le', i);
      if (r) {
        var c = r.charCodeAt(r.length - 1);
        if (c >= 0xD800 && c <= 0xDBFF) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
          return r.slice(0, -1);
        }
      }
      return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString('utf16le', i, buf.length - 1);
  }
  
  // For UTF-16LE we do not explicitly append special replacement characters if we
  // end on a partial character, we simply let v8 handle that.
  function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) {
      var end = this.lastTotal - this.lastNeed;
      return r + this.lastChar.toString('utf16le', 0, end);
    }
    return r;
  }
  
  function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString('base64', i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
      this.lastChar[0] = buf[buf.length - 1];
    } else {
      this.lastChar[0] = buf[buf.length - 2];
      this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString('base64', i, buf.length - n);
  }
  
  function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
    return r;
  }
  
  // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
  function simpleWrite(buf) {
    return buf.toString(this.encoding);
  }
  
  function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : '';
  }

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(39);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(24)(content, {});
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

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

  module.exports = extend
  
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  
  function extend() {
      var target = {}
  
      for (var i = 0; i < arguments.length; i++) {
          var source = arguments[i]
  
          for (var key in source) {
              if (hasOwnProperty.call(source, key)) {
                  target[key] = source[key]
              }
          }
      }
  
      return target
  }


/***/ }),

/***/ 79:
/***/ (function(module, exports) {

  /* (ignored) */

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _Appuri = __webpack_require__(209);
  
  var _Appuri2 = _interopRequireDefault(_Appuri);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = _Appuri2.default;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(5);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(6);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(7);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(9);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(8);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ArticleLayout = __webpack_require__(36);
  
  var _ArticleLayout2 = _interopRequireDefault(_ArticleLayout);
  
  var _Appuri = __webpack_require__(321);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var AppuriPage = function (_React$Component) {
    (0, _inherits3.default)(AppuriPage, _React$Component);
  
    function AppuriPage() {
      (0, _classCallCheck3.default)(this, AppuriPage);
      return (0, _possibleConstructorReturn3.default)(this, (AppuriPage.__proto__ || (0, _getPrototypeOf2.default)(AppuriPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(AppuriPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = _Appuri.title;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _ArticleLayout2.default,
          { title: _Appuri.title, url: _Appuri.url },
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _Appuri.html } })
        );
      }
    }]);
    return AppuriPage;
  }(_react2.default.Component);
  
  exports.default = AppuriPage;

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

  module.exports = {"title":"appuri.com","subtitle":2017,"url":"https://appuri.com","html":"<p>The team at <a href=\"//appuri.com\">Appuri</a> was awesome, so awesome that they are now part of <a href=\"//docusign.com\">DocuSign</a>!</p>\n<p>My time working with Appuri was rewarding and challenging. Feel absolutely humbled and honored to be a part of their story. I would describe my role with the company as a solutions engineer. I was tasked with working closely with different vendors/contractors to deliver solutions to our customers. Dealt with managing a lot of network calls and authentication issues, while connecting to different data sources.</p>\n<p><b>Salesforce Challenges</b></p>\n<p>\nI knew nothing about Salesforce going into this role and was presented with some tasks and features that needed to live within the Salesforce ecosystem. If you have ever even opened up the Salesforce dashboard, it is insanity. So many tabs and options. I had to quickly learn the interface, and the semantics of the Salesforce ecosystem (had to ask questiosn and get some help here) while also delivering Appuri features. The importance of isolating and creating a proper test harness was crucial here.\n</p>\n<p><b>Defensive Coding</b></p>\n<p>\nWorking with an older and slighlty \"under documented\" codebase written by engineers who had previously left the company is inherently very difficult. I needed to understand how to add features and make an impact without trashing everything in my wake. My experience with defensive coding came in very handy, starting with removing code and breaking up files in smaller more understandable components was one of the first things I did which allowed me to move forward! I was also able to do some work to clean up and improve our CI with CircleCI to make test run faster and more accurately.\n</p>\n<p>\nWorking at Appuri brought back fantastic memories from the very first startup I worked for. The hustle and drive everyday was great to see and be a part of.\n</p>\n"};

/***/ })

});
//# sourceMappingURL=13.js.map?06a360635728298fcc99