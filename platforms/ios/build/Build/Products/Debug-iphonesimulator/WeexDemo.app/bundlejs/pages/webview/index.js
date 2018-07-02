// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint-disable */
var stream = weex.requireModule('stream');
var utilFunc = {
    jump: function jump(to) {
        if (this.$router) {
            this.$router.push(to);
        }
    },
    isIpx: function isIpx() {
        return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
    },
    GET: function GET(api, callback) {
        return stream.fetch({
            method: 'GET',
            type: 'json',
            url: 'https://api-m.okooo.com/' + api
            // url: 'http://cdn.zwwill.com/yanxuan/' + api
            // url: 'http://10.242.69.181:8089/yanxuan/' + api
        }, callback);
    },
    initIconFont: function initIconFont() {
        var domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
        });
    },
    setBundleUrl: function setBundleUrl(url, jsFile) {
        var bundleUrl = url;
        var host = '';
        var path = '';
        var nativeBase = void 0;
        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist';
        } else if (isiOSAssets) {
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            var matchFirstPath = /\/\/[^\/]+\/([^\/\s]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
        }
        var h5Base = './index.html?page=';
        // in Native
        var base = nativeBase;
        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
            // check if in weexpack project
            if (path === 'web' || path === 'dist') {
                base = h5Base + '/dist/';
            } else {
                base = h5Base + '';
            }
        } else {
            base = nativeBase + (!!path ? path + '/' : '');
        }

        var newUrl = base + jsFile;
        return newUrl;
    },
    getUrlSearch: function getUrlSearch(url, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.slice(url.indexOf('?') + 1).match(reg);
        if (r != null) {
            try {
                return decodeURIComponent(r[2]);
            } catch (_e) {
                return null;
            }
        }
        return null;
    }
};

exports.default = utilFunc;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(57);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(58)
)

/* script */
__vue_exports__ = __webpack_require__(59)

/* template */
var __vue_template__ = __webpack_require__(60)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/lee/Desktop/Weex_test/awesome-app/src/pages/webview/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-271316de"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "top": 0
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "toolbar": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "114",
    "paddingTop": "44",
    "backgroundColor": "#fafafa",
    "opacity": 0.99,
    "zIndex": 101,
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "borderBottomWidth": "1",
    "borderBottomColor": "#d9d9d9"
  },
  "t-ipx": {
    "height": "154",
    "paddingTop": "84"
  },
  "tlt": {
    "flex": 1,
    "fontSize": "36",
    "paddingTop": "10",
    "color": "#333333",
    "textAlign": "center"
  },
  "left": {
    "height": "68",
    "width": "150",
    "paddingTop": "10",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "flex-start",
    "paddingLeft": "20"
  },
  "right": {
    "height": "68",
    "width": "150",
    "paddingTop": "10",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "flex-end",
    "paddingRight": "20"
  },
  "btnTxt": {
    "fontSize": "40",
    "width": "70",
    "color": "#666666",
    "textAlign": "center"
  },
  "webview-box": {
    "position": "absolute",
    "top": "114",
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "web-ipx": {
    "top": "154"
  },
  "webview": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  }
}

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var webview = weex.requireModule('webview');
exports.default = {
    components: {},
    data: function data() {
        return {
            url0: 'http://m.you.163.com'
        };
    },
    created: function created(_e) {
        _util2.default.initIconFont();
        this.url = _util2.default.getUrlSearch(weex.config.bundleUrl, 'weburl') || this.url0;
        //            console.log('webPageURL', this.url )
    },

    computed: {
        isipx: function isipx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        }
    },
    methods: {
        back: function back(event) {
            webview.goBack(this.$refs.wv);
        },
        close: function close(event) {
            navigator.pop({
                animated: "true"
            });
        },
        reload: function reload(event) {
            webview.reload(this.$refs.wv);
        },
        error: function error(event) {
            //                console.log('error', event)
        }
    }
};

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    class: ['toolbar', _vm.isipx ? 't-ipx' : '']
  }, [_c('div', {
    staticClass: ["left"]
  }, [_c('text', {
    staticClass: ["btnTxt", "iconfont"],
    on: {
      "click": _vm.back
    }
  }, [_vm._v("")]), _c('text', {
    staticClass: ["btnTxt", "iconfont"],
    on: {
      "click": _vm.close
    }
  }, [_vm._v("")])]), _c('text', {
    staticClass: ["tlt"]
  }), _c('div', {
    staticClass: ["right"]
  }, [_c('text', {
    staticClass: ["btnTxt", "iconfont"],
    on: {
      "click": _vm.reload
    }
  }, [_vm._v("")])])]), _c('div', {
    class: ['webview-box', _vm.isipx ? 'web-ipx' : '']
  }, [_c('web', {
    ref: "wv",
    staticClass: ["webview"],
    attrs: {
      "src": _vm.url
    },
    on: {
      "error": _vm.error
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });