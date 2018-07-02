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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
            nativeBase = 'file://assets/dist/';
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(2)
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(4)
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
__vue_options__.__file = "/Users/lee/Desktop/Weex_test/awesome-app/src/components/Header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-461aa3a6"
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
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "114",
    "paddingTop": "44",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "zIndex": 101,
    "backgroundColor": "#fafafa",
    "opacity": 0.99
  },
  "w-ipx": {
    "height": "154",
    "paddingTop": "84"
  },
  "scan": {
    "height": "80",
    "width": "96"
  },
  "notice": {
    "height": "80",
    "width": "96"
  },
  "ic": {
    "textAlign": "center",
    "color": "#666666",
    "fontWeight": "300",
    "fontSize": "32"
  },
  "txt": {
    "textAlign": "center",
    "color": "#666666",
    "fontWeight": "300",
    "fontSize": "18"
  },
  "search": {
    "textAlign": "center",
    "color": "#666666",
    "fontWeight": "300",
    "flex": 1,
    "height": "60",
    "fontSize": "26",
    "paddingTop": "13",
    "backgroundColor": "#ededed",
    "borderRadius": "8"
  }
}

/***/ }),
/* 3 */
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
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    data: function data() {
        return {};
    },
    created: function created() {},

    methods: {
        jumpWeb: function jumpWeb(_url) {
            if (!_url) _url = 'http://m.you.163.com/search';
            var url = this.$getConfig().bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "false"
            });
        },
        isIpx: function isIpx() {
            return _util2.default.isIpx();
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_vm._m(0), _c('text', {
    staticClass: ["search", "iconfont"],
    on: {
      "click": function($event) {
        _vm.jumpWeb()
      }
    }
  }, [_vm._v(" 搜索用户/比赛")]), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["scan"]
  }, [_c('text', {
    staticClass: ["ic", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["txt"]
  }, [_vm._v("扫一扫")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["notice"]
  }, [_c('text', {
    staticClass: ["ic", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["txt"]
  }, [_vm._v("消息")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
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
__vue_options__.__file = "/Users/lee/Desktop/Weex_test/awesome-app/src/components/refresh.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f9a9899c"
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
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "u-refresh": {
    "height": "170",
    "width": "750",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "center"
  },
  "loading-bg": {
    "position": "absolute",
    "left": "250",
    "marginTop": "40",
    "width": "250",
    "height": "120"
  },
  "l-txt-box": {
    "height": "106",
    "width": "200",
    "overflow": "hidden"
  },
  "l-txt": {
    "height": "30",
    "width": "30",
    "fontSize": "25",
    "position": "absolute",
    "top": "105",
    "left": "87",
    "color": "#666666"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');
exports.default = {
    props: [],
    data: function data() {
        return {
            refreshing: false,
            loadingAR: [{ ref: 'lTxt1', p: [-77, -75], delay: 0 }, { ref: 'lTxt2', p: [-47, -81], delay: 50 }, { ref: 'lTxt3', p: [-15, -88], delay: 100 }, { ref: 'lTxt4', p: [12, -90], delay: 150 }, { ref: 'lTxt5', p: [-5, -49], delay: 200 }, { ref: 'lTxt6', p: [25, -55], delay: 250 }, { ref: 'lTxt7', p: [55, -61], delay: 300 }, { ref: 'lTxt8', p: [85, -61], delay: 350 }]
        };
    },

    methods: {
        loadingAni: function loadingAni() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], this.loadingAR[i].p[0], this.loadingAR[i].p[1], 3, 1, 200, this.loadingAR[i].delay);
            }
        },
        loadingAniDown: function loadingAniDown() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], 0, 0, 0, 0, 200);
            }
            this.$emit('loadingDown', {
                status: 'loadingDown'
            });
        },
        shake: function shake(_ref, _x, _y, _k, _d, _duration, _delay) {
            animation.transition(_ref, {
                styles: {
                    transform: 'translate(' + (_x - 0) + 'px,' + (_y - _k * _d) + 'px)'
                },
                duration: _duration | 500, //ms
                timingFunction: 'ease-out',
                delay: _delay | 0 //ms
            }, function () {
                this.refreshing && this.shake(_ref, _x, _y, _k, -1 * _d);
            }.bind(this));
        },
        onrefresh: function onrefresh(event) {
            var _this = this;

            //                console.log('is refreshing')
            //                modal.toast({ message: 'refresh', duration: 1 })

            this.loadingAni();
            this.refreshing = true;
            setTimeout(function () {
                _this.refreshing = false;
                _this.loadingAniDown();
            }, 1300);
        },
        onpullingdown: function onpullingdown(event) {}
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('refresh', {
    staticClass: ["u-refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('image', {
    staticClass: ["loading-bg"],
    attrs: {
      "resize": "contain",
      "src": "http://imgv1.okoooimg.com/image/header/okooologo218x40.png?v=20170111"
    }
  }), _c('div', {
    staticClass: ["l-txt-box"]
  }, [_c('text', {
    ref: "lTxt1",
    staticClass: ["l-txt", "l-txt-1"]
  }, [_vm._v("用")]), _c('text', {
    ref: "lTxt2",
    staticClass: ["l-txt", "l-txt-2"]
  }, [_vm._v("户")]), _c('text', {
    ref: "lTxt3",
    staticClass: ["l-txt", "l-txt-3"]
  }, [_vm._v("第")]), _c('text', {
    ref: "lTxt4",
    staticClass: ["l-txt", "l-txt-4"]
  }, [_vm._v("一")]), _c('text', {
    ref: "lTxt5",
    staticClass: ["l-txt", "l-txt-5"]
  }, [_vm._v("数")]), _c('text', {
    ref: "lTxt6",
    staticClass: ["l-txt", "l-txt-6"]
  }, [_vm._v("据")]), _c('text', {
    ref: "lTxt7",
    staticClass: ["l-txt", "l-txt-7"]
  }, [_vm._v("为")]), _c('text', {
    ref: "lTxt8",
    staticClass: ["l-txt", "l-txt-8"]
  }, [_vm._v("王")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
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
__vue_options__.__file = "/Users/lee/Desktop/Weex_test/awesome-app/src/components/YXSlider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7bbe2c19"
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
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "image": {
    "width": "750",
    "height": "430"
  },
  "slider": {
    "width": "750",
    "height": "430"
  },
  "frame": {
    "width": "750",
    "height": "430",
    "position": "relative"
  },
  "indicator": {
    "width": "750",
    "height": "40",
    "itemColor": "#FFFFFF",
    "itemSelectedColor": "#b4282d",
    "itemSize": "12",
    "position": "absolute",
    "bottom": "10",
    "right": "0"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    props: ["imageList"],
    data: function data() {
        return {};
    },

    methods: {
        onchange: function onchange(event) {}
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true",
      "interval": "5000",
      "infinite": "false"
    },
    on: {
      "change": _vm.onchange
    }
  }, [_vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
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
__vue_options__.__file = "/Users/lee/Desktop/Weex_test/awesome-app/src/components/tabBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4c2244b7"
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
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "height": "90",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "borderTopWidth": "1",
    "borderTopColor": "#d9d9d9",
    "backgroundColor": "#fafafa"
  },
  "w-ipx": {
    "height": "140"
  },
  "bar-item": {
    "flex": 1
  },
  "bar-txt": {
    "color": "#666666",
    "textAlign": "center",
    "fontSize": "22",
    "paddingTop": "2"
  },
  "bar-ic": {
    "color": "#666666",
    "textAlign": "center",
    "paddingTop": "14",
    "fontSize": "38"
  },
  "bar-active": {
    "color": "#b4282d"
  },
  "i-notice": {
    "position": "absolute",
    "top": "10",
    "right": "30",
    "height": "30",
    "width": "30",
    "borderRadius": 100,
    "fontSize": "26",
    "lineHeight": "30",
    "textAlign": "center",
    "color": "#ffffff",
    "backgroundColor": "#ff0000"
  },
  "notice-dot": {
    "position": "absolute",
    "top": "15",
    "right": "40",
    "height": "15",
    "width": "15",
    "borderRadius": 100,
    "backgroundColor": "#ff0000"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
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
//
//


exports.default = {
    computed: {},
    data: function data() {
        return {
            pIndexKey: 'home'
        };
    },
    mounted: function mounted() {},

    methods: {
        isActive: function isActive(_c) {
            return this.pIndexKey === _c ? 'bar-active' : '';
        },
        tabTo: function tabTo(_key) {
            if (this.pIndexKey === _key) return;
            this.pIndexKey = _key;
            this.$emit('tabTo', {
                status: 'tabTo',
                data: {
                    key: _key
                }
            });
        },
        isIpx: function isIpx() {
            return _util2.default.isIpx();
        }
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('home')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.isActive('home')]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('home')]
  }, [_vm._v("首页")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('score')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.pIndexKey == 'score' ? 'bar-active' : '']
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.pIndexKey == 'score' ? 'bar-active' : '']
  }, [_vm._v("比分")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('club')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.isActive('club')]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('club')]
  }, [_vm._v("俱乐部")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('find')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.isActive('find')]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('find')]
  }, [_vm._v("发现")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('my')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.isActive('my')]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('my')]
  }, [_vm._v("我的")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(20)
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
__vue_options__.__file = "/Users/lee/Desktop/Weex_test/awesome-app/src/pages/main/home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4971f6ca"
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
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "main-list": {
    "position": "fixed",
    "top": "114",
    "bottom": "90",
    "left": 0,
    "right": 0
  },
  "ml-ipx": {
    "top": "208",
    "bottom": "140",
    "marginBottom": "140"
  },
  "cell-button": {
    "paddingBottom": "18",
    "marginBottom": "18"
  },
  "slogan": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "backgroundColor": "#ffffff"
  },
  "i-slg": {
    "height": "66",
    "fontSize": "26",
    "paddingTop": "16",
    "flex": 1,
    "textAlign": "center",
    "color": "#b4282d"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "fbs": {
    "backgroundColor": "#f4f4f4",
    "paddingBottom": "1000",
    "marginBottom": "-1000"
  },
  "scroller": {
    "marginBottom": "90"
  },
  "header": {
    "height": "380"
  },
  "h-ipx": {
    "height": "420"
  },
  "header-bg": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "500",
    "width": "750"
  },
  "bg2": {
    "top": "500"
  },
  "bg3": {
    "top": "1000"
  },
  "i-photo": {
    "position": "absolute",
    "bottom": "60",
    "left": "30",
    "height": "130",
    "width": "130",
    "borderRadius": "130"
  },
  "i-name": {
    "position": "absolute",
    "bottom": "120",
    "left": "190",
    "height": "50",
    "width": "300",
    "fontSize": "38",
    "color": "#ffffff"
  },
  "b-tlt": {
    "position": "absolute",
    "bottom": "70",
    "left": "190",
    "height": "40",
    "width": "350",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "i-tag": {
    "width": "30",
    "height": "30",
    "fontSize": "24",
    "paddingTop": "2",
    "marginRight": "6",
    "borderRadius": "4"
  },
  "tag-e": {
    "width": "32",
    "height": "32"
  },
  "tag-v8": {
    "color": "#ffffff",
    "backgroundColor": "#b29e75",
    "textAlign": "center"
  },
  "txt-tag": {
    "color": "#b4a078",
    "flex": 1,
    "height": "40",
    "fontSize": "28",
    "overflow": "hidden",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "b-qrcode": {
    "position": "absolute",
    "bottom": "80",
    "right": "40",
    "height": "80",
    "width": "80",
    "borderRadius": "70",
    "textAlign": "center",
    "fontSize": "40",
    "paddingTop": "18",
    "color": "#ffffff",
    "backgroundColor": "rgba(255,255,255,0.3)"
  },
  "s-box": {
    "paddingLeft": "26",
    "backgroundColor": "#ffffff"
  },
  "box-tlt": {
    "height": "94"
  },
  "box-txt": {
    "textAlign": "center",
    "fontSize": "26",
    "paddingTop": "34",
    "color": "#333333"
  },
  "i-box-in": {
    "position": "absolute",
    "top": "34",
    "right": "30",
    "color": "#333333"
  },
  "box-line": {
    "height": "132",
    "display": "flex",
    "paddingRight": "30",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "i-box-l": {
    "width": "130",
    "height": "132"
  },
  "i-box-icon": {
    "fontSize": "50",
    "textAlign": "center",
    "paddingTop": "15",
    "height": "79",
    "paddingBottom": "10",
    "color": "#666666"
  },
  "i-box-tlt": {
    "fontSize": "26",
    "textAlign": "center",
    "color": "#666666"
  },
  "line-serve": {
    "paddingTop": "20",
    "height": "150"
  },
  "border-bottom": {
    "borderBottomWidth": "1",
    "borderBottomColor": "rgba(0,0,0,0.15)"
  },
  "i-c-orange": {
    "color": "#ff744d"
  },
  "i-c-yellow": {
    "color": "#f6a121"
  },
  "i-c-blue": {
    "color": "#689de5"
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _refresh = __webpack_require__(5);

var _refresh2 = _interopRequireDefault(_refresh);

var _YXSlider = __webpack_require__(9);

var _YXSlider2 = _interopRequireDefault(_YXSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
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
//

var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
exports.default = {
    components: {
        'home-header': _Header2.default,
        'refresher': _refresh2.default,
        'yx-slider': _YXSlider2.default
    },
    data: function data() {
        return {
            YXBanners: [],
            goodsList: [],
            goodsListBackup: [],
            showLoading: 'hide'
        };
    },
    created: function created() {
        this.fnInitData();
    },

    methods: {
        fnInitData: function fnInitData() {
            var _this = this;

            _util2.default.GET('system/common/ad/getcarousel', function (res) {
                _this.YXBanners = res.data.data;
            });
            _util2.default.GET('information/news/news/getrecommend?limit=20&page=1', function (res) {
                _this.goodsList = res.data.data;
                _this.goodsListBackup = [].concat(_toConsumableArray(_this.goodsList));
            });
        },
        jumpWeb: function jumpWeb(_url) {
            var url = weex.config.bundleUrl;
            modal.toast({ message: _util2.default.setBundleUrl(url, 'pages/webview/index.js'), duration: 10 });
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'pages/webview/index.js?weburl=' + _url),
                animated: "true"
            }, function (event) {
                modal.toast({ message: 'callback: ' + JSON.stringify(event) });
            });
        },

        // http://cdn.zwwill.com/justdo8/jsbundles/index.js
        jumpNative: function jumpNative(_url) {
            navigator.push({
                url: _url,
                animated: "true"
            });
        },
        onloading: function onloading() {
            var _this2 = this;

            modal.toast({ message: 'loading', duration: 0.3 });
            this.showLoading = 'show';
            setTimeout(function () {
                var _goodsList;

                (_goodsList = _this2.goodsList).push.apply(_goodsList, _toConsumableArray(_this2.recommend.goods1));
                _this2.showLoading = 'hide';
            }, 300);
        },
        onloadmore: function onloadmore() {
            var _this3 = this;

            modal.toast({ message: 'loading', duration: 0.3 });
            setTimeout(function () {
                var _goodsList2;

                (_goodsList2 = _this3.goodsList).push.apply(_goodsList2, _toConsumableArray(_this3.goodsListBackup));
            }, 100);
        },
        loadingDown: function loadingDown() {
            this.fnInitData();
        },
        isIpx: function isIpx() {
            return _util2.default.isIpx();
        }
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('home-header'), _c('scroller', {
    class: ['main-list', _vm.isIpx && _vm.isIpx() ? 'ml-ipx' : ''],
    attrs: {
      "offsetAccuracy": "300",
      "loadmoreoffset": "300"
    },
    on: {
      "loadmore": _vm.onloadmore
    }
  }, [_c('refresher', {
    on: {
      "loadingDown": _vm.loadingDown
    }
  }), _c('div', {
    staticClass: ["cell-button"],
    on: {
      "click": function($event) {
        _vm.jumpWeb('https://wm.okooo.com/jingcai/bet')
      }
    }
  }, [_c('yx-slider', {
    attrs: {
      "imageList": _vm.YXBanners
    }
  })], 1), _c('div', {
    staticClass: ["fbs"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["s-box", "cell-button"]
  }, [_c('div', {
    staticClass: ["box-line", "line-serve", "border-bottom"],
    on: {
      "click": function($event) {
        _vm.jumpWeb('https://wm.okooo.com/jingcai/bet')
      }
    }
  }, [_vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4)]), _c('div', {
    staticClass: ["box-line", "line-serve", "border-bottom"],
    on: {
      "click": function($event) {
        _vm.jumpWeb('https://wm.okooo.com/jingcai/bet')
      }
    }
  }, [_vm._m(5), _vm._m(6), _vm._m(7), _vm._m(8)]), _vm._m(9)])]), _vm._l((_vm.goodsList), function(item, key) {
    return _c('text', {
      key: key
    }, [_vm._v(_vm._s(key) + ": " + _vm._s(item.entity.title))])
  })], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["s-box", "cell-button"]
  }, [_c('div', {
    staticClass: ["box-line"]
  }, [_c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("比赛直播")])]), _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("最新资讯")])]), _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("俱乐部")])]), _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("专家高手")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("竞彩足球")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("竞彩篮球")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("单场")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("传统足彩")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("大乐透")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("双色球")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("3D")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("排列3")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["box-tlt", "border-bottom"]
  }, [_c('text', {
    staticClass: ["box-txt"]
  }, [_vm._v("彩票开奖大厅")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* template */
var __vue_template__ = __webpack_require__(22)
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
__vue_options__.__file = "/Users/lee/Desktop/Weex_test/awesome-app/src/pages/main/score.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', [_vm._v("比分")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* template */
var __vue_template__ = __webpack_require__(24)
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
__vue_options__.__file = "/Users/lee/Desktop/Weex_test/awesome-app/src/pages/main/club.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', [_vm._v("俱乐部")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* template */
var __vue_template__ = __webpack_require__(26)
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
__vue_options__.__file = "/Users/lee/Desktop/Weex_test/awesome-app/src/pages/main/find.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', [_vm._v("发现")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* template */
var __vue_template__ = __webpack_require__(28)
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
__vue_options__.__file = "/Users/lee/Desktop/Weex_test/awesome-app/src/pages/main/my.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', [_vm._v("账户")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)
__vue_styles__.push(__webpack_require__(33)
)

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(35)
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
__vue_options__.__file = "/Users/lee/Desktop/Weex_test/awesome-app/src/pages/main/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-390a25f7"
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
/* 32 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
  "app-wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "r-box": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _home = __webpack_require__(17);

var _home2 = _interopRequireDefault(_home);

var _score = __webpack_require__(21);

var _score2 = _interopRequireDefault(_score);

var _club = __webpack_require__(23);

var _club2 = _interopRequireDefault(_club);

var _find = __webpack_require__(25);

var _find2 = _interopRequireDefault(_find);

var _my = __webpack_require__(27);

var _my2 = _interopRequireDefault(_my);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _tabBar = __webpack_require__(13);

var _tabBar2 = _interopRequireDefault(_tabBar);

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

var modal = weex.requireModule('modal');
exports.default = {
    data: function data() {
        return {
            currentType: 'home'
        };
    },

    components: {
        'tab-bar': _tabBar2.default, LiveHome: _home2.default, LiveClub: _club2.default, LiveAccount: _my2.default, LiveFind: _find2.default, LiveScore: _score2.default
    },
    created: function created() {
        _util2.default.initIconFont();
    },

    methods: {
        onTabTo: function onTabTo(_result) {
            this.currentType = _result.data.key || 'home';
        }
    }
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-wrapper"]
  }, [(_vm.currentType == 'home') ? _c('LiveHome') : _vm._e(), (_vm.currentType == 'score') ? _c('LiveScore') : _vm._e(), (_vm.currentType == 'club') ? _c('LiveClub') : _vm._e(), (_vm.currentType == 'find') ? _c('LiveFind') : _vm._e(), (_vm.currentType == 'my') ? _c('LiveAccount') : _vm._e(), _c('tab-bar', {
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(42);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(43)

/* template */
var __vue_template__ = __webpack_require__(44)
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
__vue_options__.__file = "/Users/lee/Desktop/Weex_test/awesome-app/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(31);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Main: _index2.default
  }
}; //
//
//
//

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Main')
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);