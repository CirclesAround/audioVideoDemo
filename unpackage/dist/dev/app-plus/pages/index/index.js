"use weex:vue";
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!***************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/main.js?{"type":"appStyle"} ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/HBuilderX/audioVideoDemo/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 11 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 12 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 17);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 17 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 12)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 18);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 12)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 19 */
/*!***************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCIndex.native.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) {\n    if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n  }\n};\nexports.__esModule = true;\nvar RTCEngine_1 = __webpack_require__(/*! ./class/RTCEngine */ 20);\nexports[\"default\"] = RTCEngine_1[\"default\"];\n__exportStar(__webpack_require__(/*! ./enum/RTCEnum */ 23), exports);\n__exportStar(__webpack_require__(/*! ./interface/RTCInterface */ 36), exports);\n__exportStar(__webpack_require__(/*! ./RTCEvent */ 37), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCClient */ 24), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCCameraVideoTrack */ 30), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCLocalAudioTrack */ 33), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCLocalTrack */ 29), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCLocalVideoTrack */ 31), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCMicrophoneAudioTrack */ 32), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCRemoteAudioTrack */ 28), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCRemoteTrack */ 26), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCRemoteVideoTrack */ 25), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCScreenVideoTrack */ 35), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCTrack */ 27), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCAudioMixer */ 34), exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvUlRDSW5kZXgubmF0aXZlLmpzIl0sIm5hbWVzIjpbIl9fY3JlYXRlQmluZGluZyIsIk9iamVjdCIsImNyZWF0ZSIsIm8iLCJtIiwiayIsImsyIiwidW5kZWZpbmVkIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX19leHBvcnRTdGFyIiwiZXhwb3J0cyIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfX2VzTW9kdWxlIiwiUlRDRW5naW5lXzEiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFDYixJQUFJQSxlQUFlLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsZUFBZSxLQUFNQyxNQUFNLENBQUNDLE1BQU0sR0FBSSxVQUFTQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxFQUFFLEVBQUU7RUFDNUYsSUFBSUEsRUFBRSxLQUFLQyxTQUFTLEVBQUVELEVBQUUsR0FBR0QsQ0FBQztFQUM1QkosTUFBTSxDQUFDTyxjQUFjLENBQUNMLENBQUMsRUFBRUcsRUFBRSxFQUFFO0lBQUVHLFVBQVUsRUFBRSxJQUFJO0lBQUVDLEdBQUcsRUFBRSxlQUFXO01BQUUsT0FBT04sQ0FBQyxDQUFDQyxDQUFDLENBQUM7SUFBRTtFQUFFLENBQUMsQ0FBQztBQUN4RixDQUFDLEdBQUssVUFBU0YsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsRUFBRSxFQUFFO0VBQ3hCLElBQUlBLEVBQUUsS0FBS0MsU0FBUyxFQUFFRCxFQUFFLEdBQUdELENBQUM7RUFDNUJGLENBQUMsQ0FBQ0csRUFBRSxDQUFDLEdBQUdGLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDO0FBQ2hCLENBQUUsQ0FBQztBQUNILElBQUlNLFlBQVksR0FBSSxJQUFJLElBQUksSUFBSSxDQUFDQSxZQUFZLElBQUssVUFBU1AsQ0FBQyxFQUFFUSxPQUFPLEVBQUU7RUFDbkUsS0FBSyxJQUFJQyxDQUFDLElBQUlULENBQUM7SUFBRSxJQUFJUyxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUNaLE1BQU0sQ0FBQ2EsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ0osT0FBTyxFQUFFQyxDQUFDLENBQUMsRUFBRWIsZUFBZSxDQUFDWSxPQUFPLEVBQUVSLENBQUMsRUFBRVMsQ0FBQyxDQUFDO0VBQUM7QUFDOUgsQ0FBQztBQUNERCxPQUFPLENBQUNLLFVBQVUsR0FBRyxJQUFJO0FBQ3pCLElBQUlDLFdBQVcsR0FBR0MsbUJBQU8sQ0FBQywyQkFBbUIsQ0FBQztBQUM5Q1AsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHTSxXQUFXLENBQUMsU0FBUyxDQUFDO0FBQzNDUCxZQUFZLENBQUNRLG1CQUFPLENBQUMsd0JBQWdCLENBQUMsRUFBRVAsT0FBTyxDQUFDO0FBQ2hERCxZQUFZLENBQUNRLG1CQUFPLENBQUMsa0NBQTBCLENBQUMsRUFBRVAsT0FBTyxDQUFDO0FBQzFERCxZQUFZLENBQUNRLG1CQUFPLENBQUMsb0JBQVksQ0FBQyxFQUFFUCxPQUFPLENBQUM7QUFDNUNELFlBQVksQ0FBQ1EsbUJBQU8sQ0FBQywyQkFBbUIsQ0FBQyxFQUFFUCxPQUFPLENBQUM7QUFDbkRELFlBQVksQ0FBQ1EsbUJBQU8sQ0FBQyxxQ0FBNkIsQ0FBQyxFQUFFUCxPQUFPLENBQUM7QUFDN0RELFlBQVksQ0FBQ1EsbUJBQU8sQ0FBQyxvQ0FBNEIsQ0FBQyxFQUFFUCxPQUFPLENBQUM7QUFDNURELFlBQVksQ0FBQ1EsbUJBQU8sQ0FBQywrQkFBdUIsQ0FBQyxFQUFFUCxPQUFPLENBQUM7QUFDdkRELFlBQVksQ0FBQ1EsbUJBQU8sQ0FBQyxvQ0FBNEIsQ0FBQyxFQUFFUCxPQUFPLENBQUM7QUFDNURELFlBQVksQ0FBQ1EsbUJBQU8sQ0FBQyx5Q0FBaUMsQ0FBQyxFQUFFUCxPQUFPLENBQUM7QUFDakVELFlBQVksQ0FBQ1EsbUJBQU8sQ0FBQyxxQ0FBNkIsQ0FBQyxFQUFFUCxPQUFPLENBQUM7QUFDN0RELFlBQVksQ0FBQ1EsbUJBQU8sQ0FBQyxnQ0FBd0IsQ0FBQyxFQUFFUCxPQUFPLENBQUM7QUFDeERELFlBQVksQ0FBQ1EsbUJBQU8sQ0FBQyxxQ0FBNkIsQ0FBQyxFQUFFUCxPQUFPLENBQUM7QUFDN0RELFlBQVksQ0FBQ1EsbUJBQU8sQ0FBQyxxQ0FBNkIsQ0FBQyxFQUFFUCxPQUFPLENBQUM7QUFDN0RELFlBQVksQ0FBQ1EsbUJBQU8sQ0FBQywwQkFBa0IsQ0FBQyxFQUFFUCxPQUFPLENBQUM7QUFDbERELFlBQVksQ0FBQ1EsbUJBQU8sQ0FBQywrQkFBdUIsQ0FBQyxFQUFFUCxPQUFPLENBQUMiLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBSVENFbmdpbmVfMSA9IHJlcXVpcmUoXCIuL2NsYXNzL1JUQ0VuZ2luZVwiKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUlRDRW5naW5lXzFbXCJkZWZhdWx0XCJdO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2VudW0vUlRDRW51bVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaW50ZXJmYWNlL1JUQ0ludGVyZmFjZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vUlRDRXZlbnRcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzL1JUQ0NsaWVudFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xhc3MvUlRDQ2FtZXJhVmlkZW9UcmFja1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xhc3MvUlRDTG9jYWxBdWRpb1RyYWNrXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENMb2NhbFRyYWNrXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENMb2NhbFZpZGVvVHJhY2tcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzL1JUQ01pY3JvcGhvbmVBdWRpb1RyYWNrXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENSZW1vdGVBdWRpb1RyYWNrXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENSZW1vdGVUcmFja1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xhc3MvUlRDUmVtb3RlVmlkZW9UcmFja1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xhc3MvUlRDU2NyZWVuVmlkZW9UcmFja1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xhc3MvUlRDVHJhY2tcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzL1JUQ0F1ZGlvTWl4ZXJcIiksIGV4cG9ydHMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!***************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCEngine.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n    return t;\n  };\n  return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nvar RTCPreset_1 = __webpack_require__(/*! ../RTCPreset */ 22);\nvar RTCClient_1 = __webpack_require__(/*! ./RTCClient */ 24);\nvar RTCCameraVideoTrack_1 = __webpack_require__(/*! ./RTCCameraVideoTrack */ 30);\nvar RTCMicrophoneAudioTrack_1 = __webpack_require__(/*! ./RTCMicrophoneAudioTrack */ 32);\nvar RTCScreenVideoTrack_1 = __webpack_require__(/*! ./RTCScreenVideoTrack */ 35);\nvar RTCTrack_1 = __webpack_require__(/*! ./RTCTrack */ 27);\nvar QNRtcEngine = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcEngine');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRTCClientPlugin = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');\nvar QNRtcAudioMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer');\nvar QNRTC = function () {\n  function QNRTC() {}\n  QNRTC.on = function (name, listener) {\n    QNEvent.addEventListener(name, listener);\n  };\n  QNRTC.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNRTC.requestPermission = function (callback) {\n    return QNRtcTrack.requestPermission(callback);\n  };\n  QNRTC.isScreenCaptureSupported = function () {\n    return QNRtcTrack.isScreenCaptureSupported();\n  };\n  QNRTC.configRTC = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNRTCConfigurationPreset), config);\n    try {\n      QNRtcEngine.initDelegate();\n    } catch (e) {}\n    QNRtcTrack.initDelegate();\n    QNRTCClientPlugin.initDelegate();\n    QNRtcAudioMixer.initDelegate();\n    return QNRtcEngine.configRTC(_config);\n  };\n  QNRTC.deinit = function () {\n    return QNRtcEngine.deinit();\n  };\n  QNRTC.createClient = function () {\n    QNRtcEngine.createRTCClient();\n    return new RTCClient_1.QNRTCClient();\n  };\n  QNRTC.createMicrophoneAudioTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNMicrophoneAudioTrackConfigPreset), config);\n    var result = QNRtcEngine.createMicrophoneAudioTrack(_config);\n    return new RTCMicrophoneAudioTrack_1.QNMicrophoneAudioTrack(__assign({\n      trackID: '',\n      raw: result,\n      userID: ''\n    }, result));\n  };\n  QNRTC.createCameraVideoTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNCameraVideoTrackConfigPreset), config);\n    var result = QNRtcEngine.createCameraVideoTrack(_config);\n    return new RTCCameraVideoTrack_1.QNCameraVideoTrack(__assign({\n      trackID: '',\n      raw: result,\n      userID: ''\n    }, result));\n  };\n  QNRTC.createScreenVideoTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNScreenVideoTrackConfigPreset), config);\n    var result = QNRtcEngine.createScreenVideoTrack(_config);\n    return new RTCScreenVideoTrack_1.QNScreenVideoTrack(__assign({\n      trackID: '',\n      raw: result,\n      userID: ''\n    }, result));\n  };\n  QNRTC.createCustomAudioTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNCustomAudioTrackConfigPreset), config);\n    var result = QNRtcEngine.createCustomAudioTrack(_config);\n    return new RTCTrack_1.QNTrack(__assign({\n      trackID: '',\n      raw: result,\n      userID: ''\n    }, result));\n  };\n  QNRTC.createCustomVideoTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNCustomVideoTrackConfigPreset), config);\n    var result = QNRtcEngine.createCustomVideoTrack(_config);\n    return new RTCTrack_1.QNTrack(__assign({\n      trackID: '',\n      raw: result,\n      userID: ''\n    }, result));\n  };\n  QNRTC.setAudioRouteToSpeakerphone = function (audioRouteToSpeakerphone) {\n    return QNRtcEngine.setAudioRouteToSpeakerphone(audioRouteToSpeakerphone);\n  };\n  QNRTC.enableFileLogging = function () {\n    return QNRtcEngine.enableFileLogging();\n  };\n  return QNRTC;\n}();\nexports[\"default\"] = QNRTC;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDRW5naW5lLmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUlRDUHJlc2V0XzEiLCJyZXF1aXJlIiwiUlRDQ2xpZW50XzEiLCJSVENDYW1lcmFWaWRlb1RyYWNrXzEiLCJSVENNaWNyb3Bob25lQXVkaW9UcmFja18xIiwiUlRDU2NyZWVuVmlkZW9UcmFja18xIiwiUlRDVHJhY2tfMSIsIlFOUnRjRW5naW5lIiwidW5pIiwiUU5FdmVudCIsIlFOUnRjVHJhY2siLCJRTlJUQ0NsaWVudFBsdWdpbiIsIlFOUnRjQXVkaW9NaXhlciIsIlFOUlRDIiwib24iLCJuYW1lIiwibGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RQZXJtaXNzaW9uIiwiY2FsbGJhY2siLCJpc1NjcmVlbkNhcHR1cmVTdXBwb3J0ZWQiLCJjb25maWdSVEMiLCJjb25maWciLCJfY29uZmlnIiwiUU5SVENDb25maWd1cmF0aW9uUHJlc2V0IiwiaW5pdERlbGVnYXRlIiwiZSIsImRlaW5pdCIsImNyZWF0ZUNsaWVudCIsImNyZWF0ZVJUQ0NsaWVudCIsIlFOUlRDQ2xpZW50IiwiY3JlYXRlTWljcm9waG9uZUF1ZGlvVHJhY2siLCJRTk1pY3JvcGhvbmVBdWRpb1RyYWNrQ29uZmlnUHJlc2V0IiwicmVzdWx0IiwiUU5NaWNyb3Bob25lQXVkaW9UcmFjayIsInRyYWNrSUQiLCJyYXciLCJ1c2VySUQiLCJjcmVhdGVDYW1lcmFWaWRlb1RyYWNrIiwiUU5DYW1lcmFWaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5DYW1lcmFWaWRlb1RyYWNrIiwiY3JlYXRlU2NyZWVuVmlkZW9UcmFjayIsIlFOU2NyZWVuVmlkZW9UcmFja0NvbmZpZ1ByZXNldCIsIlFOU2NyZWVuVmlkZW9UcmFjayIsImNyZWF0ZUN1c3RvbUF1ZGlvVHJhY2siLCJRTkN1c3RvbUF1ZGlvVHJhY2tDb25maWdQcmVzZXQiLCJRTlRyYWNrIiwiY3JlYXRlQ3VzdG9tVmlkZW9UcmFjayIsIlFOQ3VzdG9tVmlkZW9UcmFja0NvbmZpZ1ByZXNldCIsInNldEF1ZGlvUm91dGVUb1NwZWFrZXJwaG9uZSIsImF1ZGlvUm91dGVUb1NwZWFrZXJwaG9uZSIsImVuYWJsZUZpbGVMb2dnaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxRQUFRLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsUUFBUSxJQUFLLFlBQVk7RUFDbERBLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLElBQUksVUFBU0MsQ0FBQyxFQUFFO0lBQ3BDLEtBQUssSUFBSUMsQ0FBQyxFQUFFQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFSCxDQUFDLEdBQUdDLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDakRELENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFDLENBQUM7TUFDaEIsS0FBSyxJQUFJSSxDQUFDLElBQUlMLENBQUM7UUFBRSxJQUFJSCxNQUFNLENBQUNTLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQzNETixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztNQUFDO0lBQ3BCO0lBQ0EsT0FBT04sQ0FBQztFQUNaLENBQUM7RUFDRCxPQUFPSCxRQUFRLENBQUNhLEtBQUssQ0FBQyxJQUFJLEVBQUVOLFNBQVMsQ0FBQztBQUMxQyxDQUFDO0FBQ0RPLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHLElB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Q0FBQyxFQUFHO0FBQ0pmLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBR2UsS0FBSyxDIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBSVENQcmVzZXRfMSA9IHJlcXVpcmUoXCIuLi9SVENQcmVzZXRcIik7XG52YXIgUlRDQ2xpZW50XzEgPSByZXF1aXJlKFwiLi9SVENDbGllbnRcIik7XG52YXIgUlRDQ2FtZXJhVmlkZW9UcmFja18xID0gcmVxdWlyZShcIi4vUlRDQ2FtZXJhVmlkZW9UcmFja1wiKTtcbnZhciBSVENNaWNyb3Bob25lQXVkaW9UcmFja18xID0gcmVxdWlyZShcIi4vUlRDTWljcm9waG9uZUF1ZGlvVHJhY2tcIik7XG52YXIgUlRDU2NyZWVuVmlkZW9UcmFja18xID0gcmVxdWlyZShcIi4vUlRDU2NyZWVuVmlkZW9UcmFja1wiKTtcbnZhciBSVENUcmFja18xID0gcmVxdWlyZShcIi4vUlRDVHJhY2tcIik7XG52YXIgUU5SdGNFbmdpbmUgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjRW5naW5lJyk7XG52YXIgUU5FdmVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdnbG9iYWxFdmVudCcpO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTlJUQ0NsaWVudFBsdWdpbiA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNDbGllbnQnKTtcbnZhciBRTlJ0Y0F1ZGlvTWl4ZXIgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjQXVkaW9NaXhlcicpO1xudmFyIFFOUlRDID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRTlJUQygpIHtcbiAgICB9XG4gICAgUU5SVEMub24gPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgUU5FdmVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIFFOUlRDLm9mZiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBRTkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgUU5SVEMucmVxdWVzdFBlcm1pc3Npb24gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sucmVxdWVzdFBlcm1pc3Npb24oY2FsbGJhY2spO1xuICAgIH07XG4gICAgUU5SVEMuaXNTY3JlZW5DYXB0dXJlU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5pc1NjcmVlbkNhcHR1cmVTdXBwb3J0ZWQoKTtcbiAgICB9O1xuICAgIFFOUlRDLmNvbmZpZ1JUQyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgdmFyIF9jb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgUlRDUHJlc2V0XzEuUU5SVENDb25maWd1cmF0aW9uUHJlc2V0KSwgY29uZmlnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFFOUnRjRW5naW5lLmluaXREZWxlZ2F0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgUU5SdGNUcmFjay5pbml0RGVsZWdhdGUoKTtcbiAgICAgICAgUU5SVENDbGllbnRQbHVnaW4uaW5pdERlbGVnYXRlKCk7XG4gICAgICAgIFFOUnRjQXVkaW9NaXhlci5pbml0RGVsZWdhdGUoKTtcbiAgICAgICAgcmV0dXJuIFFOUnRjRW5naW5lLmNvbmZpZ1JUQyhfY29uZmlnKTtcbiAgICB9O1xuICAgIFFOUlRDLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjRW5naW5lLmRlaW5pdCgpO1xuICAgIH07XG4gICAgUU5SVEMuY3JlYXRlQ2xpZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBRTlJ0Y0VuZ2luZS5jcmVhdGVSVENDbGllbnQoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSVENDbGllbnRfMS5RTlJUQ0NsaWVudCgpO1xuICAgIH07XG4gICAgUU5SVEMuY3JlYXRlTWljcm9waG9uZUF1ZGlvVHJhY2sgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHZhciBfY29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIFJUQ1ByZXNldF8xLlFOTWljcm9waG9uZUF1ZGlvVHJhY2tDb25maWdQcmVzZXQpLCBjb25maWcpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gUU5SdGNFbmdpbmUuY3JlYXRlTWljcm9waG9uZUF1ZGlvVHJhY2soX2NvbmZpZyk7XG4gICAgICAgIHJldHVybiBuZXcgUlRDTWljcm9waG9uZUF1ZGlvVHJhY2tfMS5RTk1pY3JvcGhvbmVBdWRpb1RyYWNrKF9fYXNzaWduKHsgdHJhY2tJRDogJycsIHJhdzogcmVzdWx0LCB1c2VySUQ6ICcnIH0sIHJlc3VsdCkpO1xuICAgIH07XG4gICAgUU5SVEMuY3JlYXRlQ2FtZXJhVmlkZW9UcmFjayA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgdmFyIF9jb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgUlRDUHJlc2V0XzEuUU5DYW1lcmFWaWRlb1RyYWNrQ29uZmlnUHJlc2V0KSwgY29uZmlnKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFFOUnRjRW5naW5lLmNyZWF0ZUNhbWVyYVZpZGVvVHJhY2soX2NvbmZpZyk7XG4gICAgICAgIHJldHVybiBuZXcgUlRDQ2FtZXJhVmlkZW9UcmFja18xLlFOQ2FtZXJhVmlkZW9UcmFjayhfX2Fzc2lnbih7IHRyYWNrSUQ6ICcnLCByYXc6IHJlc3VsdCwgdXNlcklEOiAnJyB9LCByZXN1bHQpKTtcbiAgICB9O1xuICAgIFFOUlRDLmNyZWF0ZVNjcmVlblZpZGVvVHJhY2sgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHZhciBfY29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIFJUQ1ByZXNldF8xLlFOU2NyZWVuVmlkZW9UcmFja0NvbmZpZ1ByZXNldCksIGNvbmZpZyk7XG4gICAgICAgIHZhciByZXN1bHQgPSBRTlJ0Y0VuZ2luZS5jcmVhdGVTY3JlZW5WaWRlb1RyYWNrKF9jb25maWcpO1xuICAgICAgICByZXR1cm4gbmV3IFJUQ1NjcmVlblZpZGVvVHJhY2tfMS5RTlNjcmVlblZpZGVvVHJhY2soX19hc3NpZ24oeyB0cmFja0lEOiAnJywgcmF3OiByZXN1bHQsIHVzZXJJRDogJycgfSwgcmVzdWx0KSk7XG4gICAgfTtcbiAgICBRTlJUQy5jcmVhdGVDdXN0b21BdWRpb1RyYWNrID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB2YXIgX2NvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBSVENQcmVzZXRfMS5RTkN1c3RvbUF1ZGlvVHJhY2tDb25maWdQcmVzZXQpLCBjb25maWcpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gUU5SdGNFbmdpbmUuY3JlYXRlQ3VzdG9tQXVkaW9UcmFjayhfY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSVENUcmFja18xLlFOVHJhY2soX19hc3NpZ24oeyB0cmFja0lEOiAnJywgcmF3OiByZXN1bHQsIHVzZXJJRDogJycgfSwgcmVzdWx0KSk7XG4gICAgfTtcbiAgICBRTlJUQy5jcmVhdGVDdXN0b21WaWRlb1RyYWNrID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB2YXIgX2NvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBSVENQcmVzZXRfMS5RTkN1c3RvbVZpZGVvVHJhY2tDb25maWdQcmVzZXQpLCBjb25maWcpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gUU5SdGNFbmdpbmUuY3JlYXRlQ3VzdG9tVmlkZW9UcmFjayhfY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSVENUcmFja18xLlFOVHJhY2soX19hc3NpZ24oeyB0cmFja0lEOiAnJywgcmF3OiByZXN1bHQsIHVzZXJJRDogJycgfSwgcmVzdWx0KSk7XG4gICAgfTtcbiAgICBRTlJUQy5zZXRBdWRpb1JvdXRlVG9TcGVha2VycGhvbmUgPSBmdW5jdGlvbiAoYXVkaW9Sb3V0ZVRvU3BlYWtlcnBob25lKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0VuZ2luZS5zZXRBdWRpb1JvdXRlVG9TcGVha2VycGhvbmUoYXVkaW9Sb3V0ZVRvU3BlYWtlcnBob25lKTtcbiAgICB9O1xuICAgIFFOUlRDLmVuYWJsZUZpbGVMb2dnaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNFbmdpbmUuZW5hYmxlRmlsZUxvZ2dpbmcoKTtcbiAgICB9O1xuICAgIHJldHVybiBRTlJUQztcbn0oKSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFFOUlRDO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireNativePlugin;
function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 22 */
/*!*********************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCPreset.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.QNCustomVideoTrackConfigPreset = exports.QNScreenVideoTrackConfigPreset = exports.QNCameraVideoTrackConfigPreset = exports.QNCustomAudioTrackConfigPreset = exports.QNMicrophoneAudioTrackConfigPreset = exports.QNRTCConfigurationPreset = void 0;\nvar RTCEnum_1 = __webpack_require__(/*! ./enum/RTCEnum */ 23);\nexports.QNRTCConfigurationPreset = {\n  policy: RTCEnum_1.QNRTCPolicy.forceUDP,\n  stereo: false,\n  logLevel: RTCEnum_1.QNRTCLogLevel.info,\n  bwePolicy: RTCEnum_1.QNRTCBwePolicy.TCC,\n  allowAudioMixWithOthers: true,\n  hWCodecEnabled: true,\n  maintainResolution: false,\n  fieldTrials: '',\n  encoderQualityMode: false,\n  isAEC3Enabled: true\n};\nexports.QNMicrophoneAudioTrackConfigPreset = {\n  tag: '',\n  bitrate: 24,\n  BitsPerSample: 16,\n  ChannelCount: 1,\n  SampleRate: 16000,\n  communicationModeOn: true\n};\nexports.QNCustomAudioTrackConfigPreset = {\n  tag: '',\n  bitrate: 24,\n  BitsPerSample: 16,\n  ChannelCount: 1,\n  SampleRate: 16000\n};\nexports.QNCameraVideoTrackConfigPreset = {\n  tag: '',\n  bitrate: 800,\n  width: 640,\n  height: 480,\n  multiStreamEnable: false,\n  cameraFacing: RTCEnum_1.QNRTCCameraFacing.front,\n  frameRate: 20,\n  captureWidth: 640,\n  captureHeight: 480,\n  captureFrameRate: 20,\n  sessionPreset: RTCEnum_1.QNSessionPresetType.AVCaptureSessionPreset640x480\n};\nexports.QNScreenVideoTrackConfigPreset = {\n  tag: '',\n  bitrate: 800,\n  width: 640,\n  height: 480,\n  multiStreamEnable: false,\n  frameRate: 20\n};\nexports.QNCustomVideoTrackConfigPreset = {\n  tag: '',\n  bitrate: 800,\n  width: 640,\n  height: 480,\n  multiStreamEnable: false,\n  frameRate: 20\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvUlRDUHJlc2V0LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5DdXN0b21WaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5TY3JlZW5WaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5DYW1lcmFWaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5DdXN0b21BdWRpb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5NaWNyb3Bob25lQXVkaW9UcmFja0NvbmZpZ1ByZXNldCIsIlFOUlRDQ29uZmlndXJhdGlvblByZXNldCIsIlJUQ0VudW1fMSIsInJlcXVpcmUiLCJwb2xpY3kiLCJRTlJUQ1BvbGljeSIsImZvcmNlVURQIiwic3RlcmVvIiwibG9nTGV2ZWwiLCJRTlJUQ0xvZ0xldmVsIiwiaW5mbyIsImJ3ZVBvbGljeSIsIlFOUlRDQndlUG9saWN5IiwiVENDIiwiYWxsb3dBdWRpb01peFdpdGhPdGhlcnMiLCJoV0NvZGVjRW5hYmxlZCIsIm1haW50YWluUmVzb2x1dGlvbiIsImZpZWxkVHJpYWxzIiwiZW5jb2RlclF1YWxpdHlNb2RlIiwiaXNBRUMzRW5hYmxlZCIsInRhZyIsImJpdHJhdGUiLCJCaXRzUGVyU2FtcGxlIiwiQ2hhbm5lbENvdW50IiwiU2FtcGxlUmF0ZSIsImNvbW11bmljYXRpb25Nb2RlT24iLCJ3aWR0aCIsImhlaWdodCIsIm11bHRpU3RyZWFtRW5hYmxlIiwiY2FtZXJhRmFjaW5nIiwiUU5SVENDYW1lcmFGYWNpbmciLCJmcm9udCIsImZyYW1lUmF0ZSIsImNhcHR1cmVXaWR0aCIsImNhcHR1cmVIZWlnaHQiLCJjYXB0dXJlRnJhbWVSYXRlIiwic2Vzc2lvblByZXNldCIsIlFOU2Vzc2lvblByZXNldFR5cGUiLCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0NjQweDQ4MCJdLCJtYXBwaW5ncyI6IkFBQWE7O0FBQ2JBLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHLElBQUk7QUFDekJELE9BQU8sQ0FBQ0UsOEJBQThCLEdBQUdGLE9BQU8sQ0FBQ0csOEJBQThCLEdBQUdILE9BQU8sQ0FBQ0ksOEJBQThCLEdBQUdKLE9BQU8sQ0FBQ0ssOEJBQThCLEdBQUdMLE9BQU8sQ0FBQ00sa0NBQWtDLEdBQUdOLE9BQU8sQ0FBQ08sd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0FBQzFQLElBQUlDLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyx3QkFBZ0IsQ0FBQztBQUN6Q1QsT0FBTyxDQUFDTyx3QkFBd0IsR0FBRztFQUMvQkcsTUFBTSxFQUFFRixTQUFTLENBQUNHLFdBQVcsQ0FBQ0MsUUFBUTtFQUN0Q0MsTUFBTSxFQUFFLEtBQUs7RUFDYkMsUUFBUSxFQUFFTixTQUFTLENBQUNPLGFBQWEsQ0FBQ0MsSUFBSTtFQUN0Q0MsU0FBUyxFQUFFVCxTQUFTLENBQUNVLGNBQWMsQ0FBQ0MsR0FBRztFQUN2Q0MsdUJBQXVCLEVBQUUsSUFBSTtFQUM3QkMsY0FBYyxFQUFFLElBQUk7RUFDcEJDLGtCQUFrQixFQUFFLEtBQUs7RUFDekJDLFdBQVcsRUFBRSxFQUFFO0VBQ2ZDLGtCQUFrQixFQUFFLEtBQUs7RUFDekJDLGFBQWEsRUFBRTtBQUNuQixDQUFDO0FBQ0R6QixPQUFPLENBQUNNLGtDQUFrQyxHQUFHO0VBQ3pDb0IsR0FBRyxFQUFFLEVBQUU7RUFDUEMsT0FBTyxFQUFFLEVBQUU7RUFDWEMsYUFBYSxFQUFFLEVBQUU7RUFDakJDLFlBQVksRUFBRSxDQUFDO0VBQ2ZDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxtQkFBbUIsRUFBRTtBQUN6QixDQUFDO0FBQ0QvQixPQUFPLENBQUNLLDhCQUE4QixHQUFHO0VBQ3JDcUIsR0FBRyxFQUFFLEVBQUU7RUFDUEMsT0FBTyxFQUFFLEVBQUU7RUFDWEMsYUFBYSxFQUFFLEVBQUU7RUFDakJDLFlBQVksRUFBRSxDQUFDO0VBQ2ZDLFVBQVUsRUFBRTtBQUNoQixDQUFDO0FBQ0Q5QixPQUFPLENBQUNJLDhCQUE4QixHQUFHO0VBQ3JDc0IsR0FBRyxFQUFFLEVBQUU7RUFDUEMsT0FBTyxFQUFFLEdBQUc7RUFDWkssS0FBSyxFQUFFLEdBQUc7RUFDVkMsTUFBTSxFQUFFLEdBQUc7RUFDWEMsaUJBQWlCLEVBQUUsS0FBSztFQUN4QkMsWUFBWSxFQUFFM0IsU0FBUyxDQUFDNEIsaUJBQWlCLENBQUNDLEtBQUs7RUFDL0NDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFlBQVksRUFBRSxHQUFHO0VBQ2pCQyxhQUFhLEVBQUUsR0FBRztFQUNsQkMsZ0JBQWdCLEVBQUUsRUFBRTtFQUNwQkMsYUFBYSxFQUFFbEMsU0FBUyxDQUFDbUMsbUJBQW1CLENBQUNDO0FBQ2pELENBQUM7QUFDRDVDLE9BQU8sQ0FBQ0csOEJBQThCLEdBQUc7RUFDckN1QixHQUFHLEVBQUUsRUFBRTtFQUNQQyxPQUFPLEVBQUUsR0FBRztFQUNaSyxLQUFLLEVBQUUsR0FBRztFQUNWQyxNQUFNLEVBQUUsR0FBRztFQUNYQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCSSxTQUFTLEVBQUU7QUFDZixDQUFDO0FBQ0R0QyxPQUFPLENBQUNFLDhCQUE4QixHQUFHO0VBQ3JDd0IsR0FBRyxFQUFFLEVBQUU7RUFDUEMsT0FBTyxFQUFFLEdBQUc7RUFDWkssS0FBSyxFQUFFLEdBQUc7RUFDVkMsTUFBTSxFQUFFLEdBQUc7RUFDWEMsaUJBQWlCLEVBQUUsS0FBSztFQUN4QkksU0FBUyxFQUFFO0FBQ2YsQ0FBQyIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5DdXN0b21WaWRlb1RyYWNrQ29uZmlnUHJlc2V0ID0gZXhwb3J0cy5RTlNjcmVlblZpZGVvVHJhY2tDb25maWdQcmVzZXQgPSBleHBvcnRzLlFOQ2FtZXJhVmlkZW9UcmFja0NvbmZpZ1ByZXNldCA9IGV4cG9ydHMuUU5DdXN0b21BdWRpb1RyYWNrQ29uZmlnUHJlc2V0ID0gZXhwb3J0cy5RTk1pY3JvcGhvbmVBdWRpb1RyYWNrQ29uZmlnUHJlc2V0ID0gZXhwb3J0cy5RTlJUQ0NvbmZpZ3VyYXRpb25QcmVzZXQgPSB2b2lkIDA7XG52YXIgUlRDRW51bV8xID0gcmVxdWlyZShcIi4vZW51bS9SVENFbnVtXCIpO1xuZXhwb3J0cy5RTlJUQ0NvbmZpZ3VyYXRpb25QcmVzZXQgPSB7XG4gICAgcG9saWN5OiBSVENFbnVtXzEuUU5SVENQb2xpY3kuZm9yY2VVRFAsXG4gICAgc3RlcmVvOiBmYWxzZSxcbiAgICBsb2dMZXZlbDogUlRDRW51bV8xLlFOUlRDTG9nTGV2ZWwuaW5mbyxcbiAgICBid2VQb2xpY3k6IFJUQ0VudW1fMS5RTlJUQ0J3ZVBvbGljeS5UQ0MsXG4gICAgYWxsb3dBdWRpb01peFdpdGhPdGhlcnM6IHRydWUsXG4gICAgaFdDb2RlY0VuYWJsZWQ6IHRydWUsXG4gICAgbWFpbnRhaW5SZXNvbHV0aW9uOiBmYWxzZSxcbiAgICBmaWVsZFRyaWFsczogJycsXG4gICAgZW5jb2RlclF1YWxpdHlNb2RlOiBmYWxzZSxcbiAgICBpc0FFQzNFbmFibGVkOiB0cnVlXG59O1xuZXhwb3J0cy5RTk1pY3JvcGhvbmVBdWRpb1RyYWNrQ29uZmlnUHJlc2V0ID0ge1xuICAgIHRhZzogJycsXG4gICAgYml0cmF0ZTogMjQsXG4gICAgQml0c1BlclNhbXBsZTogMTYsXG4gICAgQ2hhbm5lbENvdW50OiAxLFxuICAgIFNhbXBsZVJhdGU6IDE2MDAwLFxuICAgIGNvbW11bmljYXRpb25Nb2RlT246IHRydWVcbn07XG5leHBvcnRzLlFOQ3VzdG9tQXVkaW9UcmFja0NvbmZpZ1ByZXNldCA9IHtcbiAgICB0YWc6ICcnLFxuICAgIGJpdHJhdGU6IDI0LFxuICAgIEJpdHNQZXJTYW1wbGU6IDE2LFxuICAgIENoYW5uZWxDb3VudDogMSxcbiAgICBTYW1wbGVSYXRlOiAxNjAwMFxufTtcbmV4cG9ydHMuUU5DYW1lcmFWaWRlb1RyYWNrQ29uZmlnUHJlc2V0ID0ge1xuICAgIHRhZzogJycsXG4gICAgYml0cmF0ZTogODAwLFxuICAgIHdpZHRoOiA2NDAsXG4gICAgaGVpZ2h0OiA0ODAsXG4gICAgbXVsdGlTdHJlYW1FbmFibGU6IGZhbHNlLFxuICAgIGNhbWVyYUZhY2luZzogUlRDRW51bV8xLlFOUlRDQ2FtZXJhRmFjaW5nLmZyb250LFxuICAgIGZyYW1lUmF0ZTogMjAsXG4gICAgY2FwdHVyZVdpZHRoOiA2NDAsXG4gICAgY2FwdHVyZUhlaWdodDogNDgwLFxuICAgIGNhcHR1cmVGcmFtZVJhdGU6IDIwLFxuICAgIHNlc3Npb25QcmVzZXQ6IFJUQ0VudW1fMS5RTlNlc3Npb25QcmVzZXRUeXBlLkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQ2NDB4NDgwXG59O1xuZXhwb3J0cy5RTlNjcmVlblZpZGVvVHJhY2tDb25maWdQcmVzZXQgPSB7XG4gICAgdGFnOiAnJyxcbiAgICBiaXRyYXRlOiA4MDAsXG4gICAgd2lkdGg6IDY0MCxcbiAgICBoZWlnaHQ6IDQ4MCxcbiAgICBtdWx0aVN0cmVhbUVuYWJsZTogZmFsc2UsXG4gICAgZnJhbWVSYXRlOiAyMFxufTtcbmV4cG9ydHMuUU5DdXN0b21WaWRlb1RyYWNrQ29uZmlnUHJlc2V0ID0ge1xuICAgIHRhZzogJycsXG4gICAgYml0cmF0ZTogODAwLFxuICAgIHdpZHRoOiA2NDAsXG4gICAgaGVpZ2h0OiA0ODAsXG4gICAgbXVsdGlTdHJlYW1FbmFibGU6IGZhbHNlLFxuICAgIGZyYW1lUmF0ZTogMjBcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/enum/RTCEnum.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.QNVideoFrameType = exports.QNAudioMixerState = exports.QNSessionPresetType = exports.QNVideoFillModeType = exports.QNAVCaptureVideoOrientation = exports.QNVideoWaterMarkSize = exports.QNAudioDevice = exports.QNLiveStreamingErrorInfoCode = exports.QNLiveStreamingErrorInfoType = exports.QNConnectionDisconnectedReason = exports.QNNetworkGrade = exports.QNTrackProfile = exports.QNRenderMode = exports.QNConnectionState = exports.QNRTCLogLevel = exports.QNRTCTrackKind = exports.QNRTCBwePolicy = exports.QNRTCPolicy = exports.QNRTCCameraFacing = void 0;\nvar QNRTCCameraFacing;\n(function (QNRTCCameraFacing) {\n  QNRTCCameraFacing[\"back\"] = \"back\";\n  QNRTCCameraFacing[\"front\"] = \"front\";\n})(QNRTCCameraFacing = exports.QNRTCCameraFacing || (exports.QNRTCCameraFacing = {}));\nvar QNRTCPolicy;\n(function (QNRTCPolicy) {\n  QNRTCPolicy[\"forceUDP\"] = \"forceUDP\";\n  QNRTCPolicy[\"forceTCP\"] = \"forceTCP\";\n  QNRTCPolicy[\"preferUDP\"] = \"preferUDP\";\n})(QNRTCPolicy = exports.QNRTCPolicy || (exports.QNRTCPolicy = {}));\nvar QNRTCBwePolicy;\n(function (QNRTCBwePolicy) {\n  QNRTCBwePolicy[\"TCC\"] = \"TCC\";\n  QNRTCBwePolicy[\"GCC\"] = \"GCC\";\n})(QNRTCBwePolicy = exports.QNRTCBwePolicy || (exports.QNRTCBwePolicy = {}));\nvar QNRTCTrackKind;\n(function (QNRTCTrackKind) {\n  QNRTCTrackKind[\"audio\"] = \"audio\";\n  QNRTCTrackKind[\"video\"] = \"video\";\n})(QNRTCTrackKind = exports.QNRTCTrackKind || (exports.QNRTCTrackKind = {}));\nvar QNRTCLogLevel;\n(function (QNRTCLogLevel) {\n  QNRTCLogLevel[\"verbose\"] = \"verbose\";\n  QNRTCLogLevel[\"info\"] = \"info\";\n  QNRTCLogLevel[\"warning\"] = \"warning\";\n  QNRTCLogLevel[\"error\"] = \"error\";\n  QNRTCLogLevel[\"none\"] = \"none\";\n})(QNRTCLogLevel = exports.QNRTCLogLevel || (exports.QNRTCLogLevel = {}));\nvar QNConnectionState;\n(function (QNConnectionState) {\n  QNConnectionState[\"DISCONNECTED\"] = \"DISCONNECTED\";\n  QNConnectionState[\"CONNECTING\"] = \"CONNECTING\";\n  QNConnectionState[\"CONNECTED\"] = \"CONNECTED\";\n  QNConnectionState[\"RECONNECTING\"] = \"RECONNECTING\";\n  QNConnectionState[\"RECONNECTED\"] = \"RECONNECTED\";\n})(QNConnectionState = exports.QNConnectionState || (exports.QNConnectionState = {}));\nvar QNRenderMode;\n(function (QNRenderMode) {\n  QNRenderMode[\"FILL\"] = \"FILL\";\n  QNRenderMode[\"ASPECT_FILL\"] = \"ASPECT_FILL\";\n  QNRenderMode[\"ASPECT_FIT\"] = \"ASPECT_FIT\";\n})(QNRenderMode = exports.QNRenderMode || (exports.QNRenderMode = {}));\nvar QNTrackProfile;\n(function (QNTrackProfile) {\n  QNTrackProfile[\"LOW\"] = \"LOW\";\n  QNTrackProfile[\"MEDIUM\"] = \"MEDIUM\";\n  QNTrackProfile[\"HIGH\"] = \"HIGH\";\n})(QNTrackProfile = exports.QNTrackProfile || (exports.QNTrackProfile = {}));\nvar QNNetworkGrade;\n(function (QNNetworkGrade) {\n  QNNetworkGrade[\"INVALID\"] = \"INVALID\";\n  QNNetworkGrade[\"EXCELLENT\"] = \"EXCELLENT\";\n  QNNetworkGrade[\"GOOD\"] = \"GOOD\";\n  QNNetworkGrade[\"FAIR\"] = \"FAIR\";\n  QNNetworkGrade[\"POOR\"] = \"POOR\";\n})(QNNetworkGrade = exports.QNNetworkGrade || (exports.QNNetworkGrade = {}));\nvar QNConnectionDisconnectedReason;\n(function (QNConnectionDisconnectedReason) {\n  QNConnectionDisconnectedReason[\"LEAVE\"] = \"LEAVE\";\n  QNConnectionDisconnectedReason[\"KICKED_OUT\"] = \"KICKED_OUT\";\n  QNConnectionDisconnectedReason[\"ROOM_CLOSED\"] = \"ROOM_CLOSED\";\n  QNConnectionDisconnectedReason[\"ROOM_FULL\"] = \"ROOM_FULL\";\n  QNConnectionDisconnectedReason[\"ERROR\"] = \"ERROR\";\n})(QNConnectionDisconnectedReason = exports.QNConnectionDisconnectedReason || (exports.QNConnectionDisconnectedReason = {}));\nvar QNLiveStreamingErrorInfoType;\n(function (QNLiveStreamingErrorInfoType) {\n  QNLiveStreamingErrorInfoType[\"START\"] = \"START\";\n  QNLiveStreamingErrorInfoType[\"STOP\"] = \"STOP\";\n  QNLiveStreamingErrorInfoType[\"UPDATE\"] = \"UPDATE\";\n})(QNLiveStreamingErrorInfoType = exports.QNLiveStreamingErrorInfoType || (exports.QNLiveStreamingErrorInfoType = {}));\nvar QNLiveStreamingErrorInfoCode;\n(function (QNLiveStreamingErrorInfoCode) {\n  QNLiveStreamingErrorInfoCode[\"ERROR_NO_PERMISSION\"] = \"ERROR_NO_PERMISSION\";\n  QNLiveStreamingErrorInfoCode[\"ERROR_INVALID_STATE\"] = \"ERROR_INVALID_STATE\";\n  QNLiveStreamingErrorInfoCode[\"ERROR_INVALID_PARAMETER\"] = \"ERROR_INVALID_PARAMETER\";\n  QNLiveStreamingErrorInfoCode[\"ERROR_SIGNAL_TIMEOUT\"] = \"ERROR_SIGNAL_TIMEOUT\";\n  QNLiveStreamingErrorInfoCode[\"SERVER_ERROR\"] = \"SERVER_ERROR\";\n})(QNLiveStreamingErrorInfoCode = exports.QNLiveStreamingErrorInfoCode || (exports.QNLiveStreamingErrorInfoCode = {}));\nvar QNAudioDevice;\n(function (QNAudioDevice) {\n  QNAudioDevice[\"SPEAKER_PHONE\"] = \"SPEAKER_PHONE\";\n  QNAudioDevice[\"EARPIECE\"] = \"EARPIECE\";\n  QNAudioDevice[\"WIRED_HEADSET\"] = \"WIRED_HEADSET\";\n  QNAudioDevice[\"BLUETOOTH\"] = \"BLUETOOTH\";\n  QNAudioDevice[\"NONE\"] = \"NONE\";\n})(QNAudioDevice = exports.QNAudioDevice || (exports.QNAudioDevice = {}));\nvar QNVideoWaterMarkSize;\n(function (QNVideoWaterMarkSize) {\n  QNVideoWaterMarkSize[\"LARGE\"] = \"LARGE\";\n  QNVideoWaterMarkSize[\"MEDIUM\"] = \"MEDIUM\";\n  QNVideoWaterMarkSize[\"SMALL\"] = \"SMALL\";\n})(QNVideoWaterMarkSize = exports.QNVideoWaterMarkSize || (exports.QNVideoWaterMarkSize = {}));\nvar QNAVCaptureVideoOrientation;\n(function (QNAVCaptureVideoOrientation) {\n  QNAVCaptureVideoOrientation[\"AVCaptureVideoOrientationPortrait\"] = \"AVCaptureVideoOrientationPortrait\";\n  QNAVCaptureVideoOrientation[\"AVCaptureVideoOrientationLandscapeRight\"] = \"AVCaptureVideoOrientationLandscapeRight\";\n  QNAVCaptureVideoOrientation[\"AVCaptureVideoOrientationLandscapeLeft\"] = \"AVCaptureVideoOrientationLandscapeLeft\";\n})(QNAVCaptureVideoOrientation = exports.QNAVCaptureVideoOrientation || (exports.QNAVCaptureVideoOrientation = {}));\nvar QNVideoFillModeType;\n(function (QNVideoFillModeType) {\n  QNVideoFillModeType[\"QNVideoFillModeNone\"] = \"QNVideoFillModeNone\";\n  QNVideoFillModeType[\"QNVideoFillModeStretch\"] = \"QNVideoFillModeStretch\";\n  QNVideoFillModeType[\"QNVideoFillModePreserveAspectRatio\"] = \"QNVideoFillModePreserveAspectRatio\";\n  QNVideoFillModeType[\"QNVideoFillModePreserveAspectRatioAndFill\"] = \"QNVideoFillModePreserveAspectRatioAndFill\";\n})(QNVideoFillModeType = exports.QNVideoFillModeType || (exports.QNVideoFillModeType = {}));\nvar QNSessionPresetType;\n(function (QNSessionPresetType) {\n  QNSessionPresetType[\"AVCaptureSessionPreset352x288\"] = \"AVCaptureSessionPreset352x288\";\n  QNSessionPresetType[\"AVCaptureSessionPreset640x480\"] = \"AVCaptureSessionPreset640x480\";\n  QNSessionPresetType[\"AVCaptureSessionPreset1280x720\"] = \"AVCaptureSessionPreset1280x720\";\n  QNSessionPresetType[\"AVCaptureSessionPreset1920x1080\"] = \"AVCaptureSessionPreset1920x1080\";\n  QNSessionPresetType[\"AVCaptureSessionPreset3840x2160\"] = \"AVCaptureSessionPreset3840x2160\";\n  QNSessionPresetType[\"AVCaptureSessionPresetiFrame960x540\"] = \"AVCaptureSessionPresetiFrame960x540\";\n  QNSessionPresetType[\"AVCaptureSessionPresetiFrame1280x720\"] = \"AVCaptureSessionPresetiFrame1280x720\";\n})(QNSessionPresetType = exports.QNSessionPresetType || (exports.QNSessionPresetType = {}));\nvar QNAudioMixerState;\n(function (QNAudioMixerState) {\n  QNAudioMixerState[\"MIXING\"] = \"MIXING\";\n  QNAudioMixerState[\"PAUSED\"] = \"PAUSED\";\n  QNAudioMixerState[\"STOPPED\"] = \"STOPPED\";\n  QNAudioMixerState[\"COMPLETED\"] = \"COMPLETED\";\n})(QNAudioMixerState = exports.QNAudioMixerState || (exports.QNAudioMixerState = {}));\nvar QNVideoFrameType;\n(function (QNVideoFrameType) {\n  QNVideoFrameType[\"YUV_NV21\"] = \"YUV_NV21\";\n  QNVideoFrameType[\"TEXTURE_RGB\"] = \"TEXTURE_RGB\";\n  QNVideoFrameType[\"TEXTURE_OES\"] = \"TEXTURE_OES\";\n})(QNVideoFrameType = exports.QNVideoFrameType || (exports.QNVideoFrameType = {}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvZW51bS9SVENFbnVtLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5WaWRlb0ZyYW1lVHlwZSIsIlFOQXVkaW9NaXhlclN0YXRlIiwiUU5TZXNzaW9uUHJlc2V0VHlwZSIsIlFOVmlkZW9GaWxsTW9kZVR5cGUiLCJRTkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb24iLCJRTlZpZGVvV2F0ZXJNYXJrU2l6ZSIsIlFOQXVkaW9EZXZpY2UiLCJRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlIiwiUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvVHlwZSIsIlFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbiIsIlFOTmV0d29ya0dyYWRlIiwiUU5UcmFja1Byb2ZpbGUiLCJRTlJlbmRlck1vZGUiLCJRTkNvbm5lY3Rpb25TdGF0ZSIsIlFOUlRDTG9nTGV2ZWwiLCJRTlJUQ1RyYWNrS2luZCIsIlFOUlRDQndlUG9saWN5IiwiUU5SVENQb2xpY3kiLCJRTlJUQ0NhbWVyYUZhY2luZyJdLCJtYXBwaW5ncyI6IkFBQWE7O0FBQ2JBLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHLElBQUk7QUFDekJELE9BQU8sQ0FBQ0UsZ0JBQWdCLEdBQUdGLE9BQU8sQ0FBQ0csaUJBQWlCLEdBQUdILE9BQU8sQ0FBQ0ksbUJBQW1CLEdBQUdKLE9BQU8sQ0FBQ0ssbUJBQW1CLEdBQUdMLE9BQU8sQ0FBQ00sMkJBQTJCLEdBQUdOLE9BQU8sQ0FBQ08sb0JBQW9CLEdBQUdQLE9BQU8sQ0FBQ1EsYUFBYSxHQUFHUixPQUFPLENBQUNTLDRCQUE0QixHQUFHVCxPQUFPLENBQUNVLDRCQUE0QixHQUFHVixPQUFPLENBQUNXLDhCQUE4QixHQUFHWCxPQUFPLENBQUNZLGNBQWMsR0FBR1osT0FBTyxDQUFDYSxjQUFjLEdBQUdiLE9BQU8sQ0FBQ2MsWUFBWSxHQUFHZCxPQUFPLENB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QUFDO0FBQ3JGLElBQUlELGdCQUFnQjtBQUNwQixDQUFDLFVBQVVBLGdCQUFnQixFQUFFO0VBQ3pCQSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVO0VBQ3pDQSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxhQUFhO0VBQy9DQSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxhQUFhO0FBQ25ELENBQUMsRUFBRUEsZ0JBQWdCLEdBQUdGLE9BQU8sQ0FBQ0UsZ0JBQWdCLEtBQUtGLE9BQU8sQ0FBQ0UsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5WaWRlb0ZyYW1lVHlwZSA9IGV4cG9ydHMuUU5BdWRpb01peGVyU3RhdGUgPSBleHBvcnRzLlFOU2Vzc2lvblByZXNldFR5cGUgPSBleHBvcnRzLlFOVmlkZW9GaWxsTW9kZVR5cGUgPSBleHBvcnRzLlFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbiA9IGV4cG9ydHMuUU5WaWRlb1dhdGVyTWFya1NpemUgPSBleHBvcnRzLlFOQXVkaW9EZXZpY2UgPSBleHBvcnRzLlFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb0NvZGUgPSBleHBvcnRzLlFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUgPSBleHBvcnRzLlFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbiA9IGV4cG9ydHMuUU5OZXR3b3JrR3JhZGUgPSBleHBvcnRzLlFOVHJhY2tQcm9maWxlID0gZXhwb3J0cy5RTlJlbmRlck1vZGUgPSBleHBvcnRzLlFOQ29ubmVjdGlvblN0YXRlID0gZXhwb3J0cy5RTlJUQ0xvZ0xldmVsID0gZXhwb3J0cy5RTlJUQ1RyYWNrS2luZCA9IGV4cG9ydHMuUU5SVENCd2VQb2xpY3kgPSBleHBvcnRzLlFOUlRDUG9saWN5ID0gZXhwb3J0cy5RTlJUQ0NhbWVyYUZhY2luZyA9IHZvaWQgMDtcbnZhciBRTlJUQ0NhbWVyYUZhY2luZztcbihmdW5jdGlvbiAoUU5SVENDYW1lcmFGYWNpbmcpIHtcbiAgICBRTlJUQ0NhbWVyYUZhY2luZ1tcImJhY2tcIl0gPSBcImJhY2tcIjtcbiAgICBRTlJUQ0NhbWVyYUZhY2luZ1tcImZyb250XCJdID0gXCJmcm9udFwiO1xufSkoUU5SVENDYW1lcmFGYWNpbmcgPSBleHBvcnRzLlFOUlRDQ2FtZXJhRmFjaW5nIHx8IChleHBvcnRzLlFOUlRDQ2FtZXJhRmFjaW5nID0ge30pKTtcbnZhciBRTlJUQ1BvbGljeTtcbihmdW5jdGlvbiAoUU5SVENQb2xpY3kpIHtcbiAgICBRTlJUQ1BvbGljeVtcImZvcmNlVURQXCJdID0gXCJmb3JjZVVEUFwiO1xuICAgIFFOUlRDUG9saWN5W1wiZm9yY2VUQ1BcIl0gPSBcImZvcmNlVENQXCI7XG4gICAgUU5SVENQb2xpY3lbXCJwcmVmZXJVRFBcIl0gPSBcInByZWZlclVEUFwiO1xufSkoUU5SVENQb2xpY3kgPSBleHBvcnRzLlFOUlRDUG9saWN5IHx8IChleHBvcnRzLlFOUlRDUG9saWN5ID0ge30pKTtcbnZhciBRTlJUQ0J3ZVBvbGljeTtcbihmdW5jdGlvbiAoUU5SVENCd2VQb2xpY3kpIHtcbiAgICBRTlJUQ0J3ZVBvbGljeVtcIlRDQ1wiXSA9IFwiVENDXCI7XG4gICAgUU5SVENCd2VQb2xpY3lbXCJHQ0NcIl0gPSBcIkdDQ1wiO1xufSkoUU5SVENCd2VQb2xpY3kgPSBleHBvcnRzLlFOUlRDQndlUG9saWN5IHx8IChleHBvcnRzLlFOUlRDQndlUG9saWN5ID0ge30pKTtcbnZhciBRTlJUQ1RyYWNrS2luZDtcbihmdW5jdGlvbiAoUU5SVENUcmFja0tpbmQpIHtcbiAgICBRTlJUQ1RyYWNrS2luZFtcImF1ZGlvXCJdID0gXCJhdWRpb1wiO1xuICAgIFFOUlRDVHJhY2tLaW5kW1widmlkZW9cIl0gPSBcInZpZGVvXCI7XG59KShRTlJUQ1RyYWNrS2luZCA9IGV4cG9ydHMuUU5SVENUcmFja0tpbmQgfHwgKGV4cG9ydHMuUU5SVENUcmFja0tpbmQgPSB7fSkpO1xudmFyIFFOUlRDTG9nTGV2ZWw7XG4oZnVuY3Rpb24gKFFOUlRDTG9nTGV2ZWwpIHtcbiAgICBRTlJUQ0xvZ0xldmVsW1widmVyYm9zZVwiXSA9IFwidmVyYm9zZVwiO1xuICAgIFFOUlRDTG9nTGV2ZWxbXCJpbmZvXCJdID0gXCJpbmZvXCI7XG4gICAgUU5SVENMb2dMZXZlbFtcIndhcm5pbmdcIl0gPSBcIndhcm5pbmdcIjtcbiAgICBRTlJUQ0xvZ0xldmVsW1wiZXJyb3JcIl0gPSBcImVycm9yXCI7XG4gICAgUU5SVENMb2dMZXZlbFtcIm5vbmVcIl0gPSBcIm5vbmVcIjtcbn0pKFFOUlRDTG9nTGV2ZWwgPSBleHBvcnRzLlFOUlRDTG9nTGV2ZWwgfHwgKGV4cG9ydHMuUU5SVENMb2dMZXZlbCA9IHt9KSk7XG52YXIgUU5Db25uZWN0aW9uU3RhdGU7XG4oZnVuY3Rpb24gKFFOQ29ubmVjdGlvblN0YXRlKSB7XG4gICAgUU5Db25uZWN0aW9uU3RhdGVbXCJESVNDT05ORUNURURcIl0gPSBcIkRJU0NPTk5FQ1RFRFwiO1xuICAgIFFOQ29ubmVjdGlvblN0YXRlW1wiQ09OTkVDVElOR1wiXSA9IFwiQ09OTkVDVElOR1wiO1xuICAgIFFOQ29ubmVjdGlvblN0YXRlW1wiQ09OTkVDVEVEXCJdID0gXCJDT05ORUNURURcIjtcbiAgICBRTkNvbm5lY3Rpb25TdGF0ZVtcIlJFQ09OTkVDVElOR1wiXSA9IFwiUkVDT05ORUNUSU5HXCI7XG4gICAgUU5Db25uZWN0aW9uU3RhdGVbXCJSRUNPTk5FQ1RFRFwiXSA9IFwiUkVDT05ORUNURURcIjtcbn0pKFFOQ29ubmVjdGlvblN0YXRlID0gZXhwb3J0cy5RTkNvbm5lY3Rpb25TdGF0ZSB8fCAoZXhwb3J0cy5RTkNvbm5lY3Rpb25TdGF0ZSA9IHt9KSk7XG52YXIgUU5SZW5kZXJNb2RlO1xuKGZ1bmN0aW9uIChRTlJlbmRlck1vZGUpIHtcbiAgICBRTlJlbmRlck1vZGVbXCJGSUxMXCJdID0gXCJGSUxMXCI7XG4gICAgUU5SZW5kZXJNb2RlW1wiQVNQRUNUX0ZJTExcIl0gPSBcIkFTUEVDVF9GSUxMXCI7XG4gICAgUU5SZW5kZXJNb2RlW1wiQVNQRUNUX0ZJVFwiXSA9IFwiQVNQRUNUX0ZJVFwiO1xufSkoUU5SZW5kZXJNb2RlID0gZXhwb3J0cy5RTlJlbmRlck1vZGUgfHwgKGV4cG9ydHMuUU5SZW5kZXJNb2RlID0ge30pKTtcbnZhciBRTlRyYWNrUHJvZmlsZTtcbihmdW5jdGlvbiAoUU5UcmFja1Byb2ZpbGUpIHtcbiAgICBRTlRyYWNrUHJvZmlsZVtcIkxPV1wiXSA9IFwiTE9XXCI7XG4gICAgUU5UcmFja1Byb2ZpbGVbXCJNRURJVU1cIl0gPSBcIk1FRElVTVwiO1xuICAgIFFOVHJhY2tQcm9maWxlW1wiSElHSFwiXSA9IFwiSElHSFwiO1xufSkoUU5UcmFja1Byb2ZpbGUgPSBleHBvcnRzLlFOVHJhY2tQcm9maWxlIHx8IChleHBvcnRzLlFOVHJhY2tQcm9maWxlID0ge30pKTtcbnZhciBRTk5ldHdvcmtHcmFkZTtcbihmdW5jdGlvbiAoUU5OZXR3b3JrR3JhZGUpIHtcbiAgICBRTk5ldHdvcmtHcmFkZVtcIklOVkFMSURcIl0gPSBcIklOVkFMSURcIjtcbiAgICBRTk5ldHdvcmtHcmFkZVtcIkVYQ0VMTEVOVFwiXSA9IFwiRVhDRUxMRU5UXCI7XG4gICAgUU5OZXR3b3JrR3JhZGVbXCJHT09EXCJdID0gXCJHT09EXCI7XG4gICAgUU5OZXR3b3JrR3JhZGVbXCJGQUlSXCJdID0gXCJGQUlSXCI7XG4gICAgUU5OZXR3b3JrR3JhZGVbXCJQT09SXCJdID0gXCJQT09SXCI7XG59KShRTk5ldHdvcmtHcmFkZSA9IGV4cG9ydHMuUU5OZXR3b3JrR3JhZGUgfHwgKGV4cG9ydHMuUU5OZXR3b3JrR3JhZGUgPSB7fSkpO1xudmFyIFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbjtcbihmdW5jdGlvbiAoUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uKSB7XG4gICAgUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uW1wiTEVBVkVcIl0gPSBcIkxFQVZFXCI7XG4gICAgUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uW1wiS0lDS0VEX09VVFwiXSA9IFwiS0lDS0VEX09VVFwiO1xuICAgIFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbltcIlJPT01fQ0xPU0VEXCJdID0gXCJST09NX0NMT1NFRFwiO1xuICAgIFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbltcIlJPT01fRlVMTFwiXSA9IFwiUk9PTV9GVUxMXCI7XG4gICAgUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uW1wiRVJST1JcIl0gPSBcIkVSUk9SXCI7XG59KShRTkNvbm5lY3Rpb25EaXNjb25uZWN0ZWRSZWFzb24gPSBleHBvcnRzLlFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbiB8fCAoZXhwb3J0cy5RTkNvbm5lY3Rpb25EaXNjb25uZWN0ZWRSZWFzb24gPSB7fSkpO1xudmFyIFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGU7XG4oZnVuY3Rpb24gKFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUpIHtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9UeXBlW1wiU1RBUlRcIl0gPSBcIlNUQVJUXCI7XG4gICAgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvVHlwZVtcIlNUT1BcIl0gPSBcIlNUT1BcIjtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9UeXBlW1wiVVBEQVRFXCJdID0gXCJVUERBVEVcIjtcbn0pKFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUgPSBleHBvcnRzLlFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUgfHwgKGV4cG9ydHMuUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvVHlwZSA9IHt9KSk7XG52YXIgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZTtcbihmdW5jdGlvbiAoUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZSkge1xuICAgIFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb0NvZGVbXCJFUlJPUl9OT19QRVJNSVNTSU9OXCJdID0gXCJFUlJPUl9OT19QRVJNSVNTSU9OXCI7XG4gICAgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZVtcIkVSUk9SX0lOVkFMSURfU1RBVEVcIl0gPSBcIkVSUk9SX0lOVkFMSURfU1RBVEVcIjtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlW1wiRVJST1JfSU5WQUxJRF9QQVJBTUVURVJcIl0gPSBcIkVSUk9SX0lOVkFMSURfUEFSQU1FVEVSXCI7XG4gICAgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZVtcIkVSUk9SX1NJR05BTF9USU1FT1VUXCJdID0gXCJFUlJPUl9TSUdOQUxfVElNRU9VVFwiO1xuICAgIFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb0NvZGVbXCJTRVJWRVJfRVJST1JcIl0gPSBcIlNFUlZFUl9FUlJPUlwiO1xufSkoUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZSA9IGV4cG9ydHMuUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZSB8fCAoZXhwb3J0cy5RTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlID0ge30pKTtcbnZhciBRTkF1ZGlvRGV2aWNlO1xuKGZ1bmN0aW9uIChRTkF1ZGlvRGV2aWNlKSB7XG4gICAgUU5BdWRpb0RldmljZVtcIlNQRUFLRVJfUEhPTkVcIl0gPSBcIlNQRUFLRVJfUEhPTkVcIjtcbiAgICBRTkF1ZGlvRGV2aWNlW1wiRUFSUElFQ0VcIl0gPSBcIkVBUlBJRUNFXCI7XG4gICAgUU5BdWRpb0RldmljZVtcIldJUkVEX0hFQURTRVRcIl0gPSBcIldJUkVEX0hFQURTRVRcIjtcbiAgICBRTkF1ZGlvRGV2aWNlW1wiQkxVRVRPT1RIXCJdID0gXCJCTFVFVE9PVEhcIjtcbiAgICBRTkF1ZGlvRGV2aWNlW1wiTk9ORVwiXSA9IFwiTk9ORVwiO1xufSkoUU5BdWRpb0RldmljZSA9IGV4cG9ydHMuUU5BdWRpb0RldmljZSB8fCAoZXhwb3J0cy5RTkF1ZGlvRGV2aWNlID0ge30pKTtcbnZhciBRTlZpZGVvV2F0ZXJNYXJrU2l6ZTtcbihmdW5jdGlvbiAoUU5WaWRlb1dhdGVyTWFya1NpemUpIHtcbiAgICBRTlZpZGVvV2F0ZXJNYXJrU2l6ZVtcIkxBUkdFXCJdID0gXCJMQVJHRVwiO1xuICAgIFFOVmlkZW9XYXRlck1hcmtTaXplW1wiTUVESVVNXCJdID0gXCJNRURJVU1cIjtcbiAgICBRTlZpZGVvV2F0ZXJNYXJrU2l6ZVtcIlNNQUxMXCJdID0gXCJTTUFMTFwiO1xufSkoUU5WaWRlb1dhdGVyTWFya1NpemUgPSBleHBvcnRzLlFOVmlkZW9XYXRlck1hcmtTaXplIHx8IChleHBvcnRzLlFOVmlkZW9XYXRlck1hcmtTaXplID0ge30pKTtcbnZhciBRTkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb247XG4oZnVuY3Rpb24gKFFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbikge1xuICAgIFFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbltcIkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb25Qb3J0cmFpdFwiXSA9IFwiQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvblBvcnRyYWl0XCI7XG4gICAgUU5BVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uW1wiQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbkxhbmRzY2FwZVJpZ2h0XCJdID0gXCJBVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uTGFuZHNjYXBlUmlnaHRcIjtcbiAgICBRTkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb25bXCJBVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uTGFuZHNjYXBlTGVmdFwiXSA9IFwiQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbkxhbmRzY2FwZUxlZnRcIjtcbn0pKFFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbiA9IGV4cG9ydHMuUU5BVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uIHx8IChleHBvcnRzLlFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbiA9IHt9KSk7XG52YXIgUU5WaWRlb0ZpbGxNb2RlVHlwZTtcbihmdW5jdGlvbiAoUU5WaWRlb0ZpbGxNb2RlVHlwZSkge1xuICAgIFFOVmlkZW9GaWxsTW9kZVR5cGVbXCJRTlZpZGVvRmlsbE1vZGVOb25lXCJdID0gXCJRTlZpZGVvRmlsbE1vZGVOb25lXCI7XG4gICAgUU5WaWRlb0ZpbGxNb2RlVHlwZVtcIlFOVmlkZW9GaWxsTW9kZVN0cmV0Y2hcIl0gPSBcIlFOVmlkZW9GaWxsTW9kZVN0cmV0Y2hcIjtcbiAgICBRTlZpZGVvRmlsbE1vZGVUeXBlW1wiUU5WaWRlb0ZpbGxNb2RlUHJlc2VydmVBc3BlY3RSYXRpb1wiXSA9IFwiUU5WaWRlb0ZpbGxNb2RlUHJlc2VydmVBc3BlY3RSYXRpb1wiO1xuICAgIFFOVmlkZW9GaWxsTW9kZVR5cGVbXCJRTlZpZGVvRmlsbE1vZGVQcmVzZXJ2ZUFzcGVjdFJhdGlvQW5kRmlsbFwiXSA9IFwiUU5WaWRlb0ZpbGxNb2RlUHJlc2VydmVBc3BlY3RSYXRpb0FuZEZpbGxcIjtcbn0pKFFOVmlkZW9GaWxsTW9kZVR5cGUgPSBleHBvcnRzLlFOVmlkZW9GaWxsTW9kZVR5cGUgfHwgKGV4cG9ydHMuUU5WaWRlb0ZpbGxNb2RlVHlwZSA9IHt9KSk7XG52YXIgUU5TZXNzaW9uUHJlc2V0VHlwZTtcbihmdW5jdGlvbiAoUU5TZXNzaW9uUHJlc2V0VHlwZSkge1xuICAgIFFOU2Vzc2lvblByZXNldFR5cGVbXCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0MzUyeDI4OFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDM1MngyODhcIjtcbiAgICBRTlNlc3Npb25QcmVzZXRUeXBlW1wiQVZDYXB0dXJlU2Vzc2lvblByZXNldDY0MHg0ODBcIl0gPSBcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQ2NDB4NDgwXCI7XG4gICAgUU5TZXNzaW9uUHJlc2V0VHlwZVtcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxMjgweDcyMFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDEyODB4NzIwXCI7XG4gICAgUU5TZXNzaW9uUHJlc2V0VHlwZVtcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxOTIweDEwODBcIl0gPSBcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxOTIweDEwODBcIjtcbiAgICBRTlNlc3Npb25QcmVzZXRUeXBlW1wiQVZDYXB0dXJlU2Vzc2lvblByZXNldDM4NDB4MjE2MFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDM4NDB4MjE2MFwiO1xuICAgIFFOU2Vzc2lvblByZXNldFR5cGVbXCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0aUZyYW1lOTYweDU0MFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldGlGcmFtZTk2MHg1NDBcIjtcbiAgICBRTlNlc3Npb25QcmVzZXRUeXBlW1wiQVZDYXB0dXJlU2Vzc2lvblByZXNldGlGcmFtZTEyODB4NzIwXCJdID0gXCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0aUZyYW1lMTI4MHg3MjBcIjtcbn0pKFFOU2Vzc2lvblByZXNldFR5cGUgPSBleHBvcnRzLlFOU2Vzc2lvblByZXNldFR5cGUgfHwgKGV4cG9ydHMuUU5TZXNzaW9uUHJlc2V0VHlwZSA9IHt9KSk7XG52YXIgUU5BdWRpb01peGVyU3RhdGU7XG4oZnVuY3Rpb24gKFFOQXVkaW9NaXhlclN0YXRlKSB7XG4gICAgUU5BdWRpb01peGVyU3RhdGVbXCJNSVhJTkdcIl0gPSBcIk1JWElOR1wiO1xuICAgIFFOQXVkaW9NaXhlclN0YXRlW1wiUEFVU0VEXCJdID0gXCJQQVVTRURcIjtcbiAgICBRTkF1ZGlvTWl4ZXJTdGF0ZVtcIlNUT1BQRURcIl0gPSBcIlNUT1BQRURcIjtcbiAgICBRTkF1ZGlvTWl4ZXJTdGF0ZVtcIkNPTVBMRVRFRFwiXSA9IFwiQ09NUExFVEVEXCI7XG59KShRTkF1ZGlvTWl4ZXJTdGF0ZSA9IGV4cG9ydHMuUU5BdWRpb01peGVyU3RhdGUgfHwgKGV4cG9ydHMuUU5BdWRpb01peGVyU3RhdGUgPSB7fSkpO1xudmFyIFFOVmlkZW9GcmFtZVR5cGU7XG4oZnVuY3Rpb24gKFFOVmlkZW9GcmFtZVR5cGUpIHtcbiAgICBRTlZpZGVvRnJhbWVUeXBlW1wiWVVWX05WMjFcIl0gPSBcIllVVl9OVjIxXCI7XG4gICAgUU5WaWRlb0ZyYW1lVHlwZVtcIlRFWFRVUkVfUkdCXCJdID0gXCJURVhUVVJFX1JHQlwiO1xuICAgIFFOVmlkZW9GcmFtZVR5cGVbXCJURVhUVVJFX09FU1wiXSA9IFwiVEVYVFVSRV9PRVNcIjtcbn0pKFFOVmlkZW9GcmFtZVR5cGUgPSBleHBvcnRzLlFOVmlkZW9GcmFtZVR5cGUgfHwgKGV4cG9ydHMuUU5WaWRlb0ZyYW1lVHlwZSA9IHt9KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!***************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCClient.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n    return t;\n  };\n  return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nexports.QNRTCClient = void 0;\nvar RTCEnum_1 = __webpack_require__(/*! ../enum/RTCEnum */ 23);\nvar RTCRemoteVideoTrack_1 = __webpack_require__(/*! ./RTCRemoteVideoTrack */ 25);\nvar RTCRemoteAudioTrack_1 = __webpack_require__(/*! ./RTCRemoteAudioTrack */ 28);\nvar RTCLocalTrack_1 = __webpack_require__(/*! ./RTCLocalTrack */ 29);\nvar RTCClient = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNRTCClient = function () {\n  function QNRTCClient() {\n    this.variationList = ['onUserPublished', 'onUserUnpublished', 'onVideoSubscribed', 'onAudioSubscribed'];\n  }\n  QNRTCClient.prototype.transformRemoteRTCTrack = function (trackList) {\n    var result = [];\n    for (var _i = 0, trackList_1 = trackList; _i < trackList_1.length; _i++) {\n      var i = trackList_1[_i];\n      var config = __assign({\n        identifyID: i.trackID,\n        raw: i\n      }, i);\n      if (i.kind === RTCEnum_1.QNRTCTrackKind.audio) {\n        result.push(new RTCRemoteAudioTrack_1.QNRemoteAudioTrack(config));\n      } else {\n        result.push(new RTCRemoteVideoTrack_1.QNRemoteVideoTrack(config));\n      }\n    }\n    return result;\n  };\n  QNRTCClient.prototype.transformLocalRTCTrack = function (trackList) {\n    var result = [];\n    for (var _i = 0, trackList_2 = trackList; _i < trackList_2.length; _i++) {\n      var i = trackList_2[_i];\n      var config = __assign({\n        identifyID: i.trackID,\n        userID: '',\n        raw: i\n      }, i);\n      if (i.kind === RTCEnum_1.QNRTCTrackKind.audio) {\n        result.push(new RTCLocalTrack_1.QNLocalTrack(config));\n      } else {\n        result.push(new RTCLocalTrack_1.QNLocalTrack(config));\n      }\n    }\n    return result;\n  };\n  QNRTCClient.prototype.createRemoteTrackDataCallback = function (listener) {\n    var _this = this;\n    var variationCallback = function variationCallback(params) {\n      var result = _this.transformRemoteRTCTrack(params.trackList);\n      var callbackData = {\n        remoteUserID: params.remoteUserID,\n        trackList: result\n      };\n      var callback = listener;\n      callback(callbackData);\n    };\n    return variationCallback;\n  };\n  QNRTCClient.prototype.on = function (name, listener) {\n    if (this.variationList.some(function (item) {\n      return item === name;\n    })) {\n      var callback = this.createRemoteTrackDataCallback(listener);\n      QNEvent.addEventListener(name, callback);\n    } else {\n      QNEvent.addEventListener(name, listener);\n    }\n  };\n  QNRTCClient.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNRTCClient.prototype.join = function (token, userData) {\n    return RTCClient.join(token, userData);\n  };\n  QNRTCClient.prototype.leave = function () {\n    return RTCClient.leave();\n  };\n  QNRTCClient.prototype.publish = function (tracks, callback) {\n    return RTCClient.publish(tracks, function (_a) {\n      var onPublished = _a.onPublished,\n        data = _a.data,\n        error = _a.error;\n      if (onPublished) {\n        var _loop_1 = function _loop_1(key) {\n          var index = tracks.findIndex(function (item) {\n            return item.identifyID === key;\n          });\n          if (index >= 0) {\n            tracks[index].trackID = data[key];\n          }\n        };\n        for (var key in data) {\n          _loop_1(key);\n        }\n      }\n      callback(onPublished, error);\n    });\n  };\n  QNRTCClient.prototype.unpublish = function (tracks) {\n    return RTCClient.unpublish(tracks);\n  };\n  QNRTCClient.prototype.subscribe = function (tracks) {\n    return RTCClient.subscribe(tracks);\n  };\n  QNRTCClient.prototype.unsubscribe = function (tracks) {\n    return RTCClient.unsubscribe(tracks);\n  };\n  QNRTCClient.prototype.getSubscribedTracks = function (userID) {\n    var remoteTrack = RTCClient.getSubscribedTracks(userID);\n    return this.transformRemoteRTCTrack(remoteTrack);\n  };\n  QNRTCClient.prototype.getLocalAudioTrackStats = function () {\n    return RTCClient.getLocalAudioTrackStats();\n  };\n  QNRTCClient.prototype.getLocalVideoTrackStats = function () {\n    return RTCClient.getLocalVideoTrackStats();\n  };\n  QNRTCClient.prototype.getRemoteAudioTrackStats = function () {\n    return RTCClient.getRemoteAudioTrackStats();\n  };\n  QNRTCClient.prototype.getRemoteVideoTrackStats = function () {\n    return RTCClient.getRemoteVideoTrackStats();\n  };\n  QNRTCClient.prototype.getUserNetworkQuality = function (userID) {\n    return RTCClient.getUserNetworkQuality(userID);\n  };\n  QNRTCClient.prototype.getRemoteUsers = function () {\n    var remoteUser = RTCClient.getRemoteUsers();\n    var result = [];\n    for (var _i = 0, remoteUser_1 = remoteUser; _i < remoteUser_1.length; _i++) {\n      var i = remoteUser_1[_i];\n      var audioTracks = this.transformRemoteRTCTrack(i.audioTracks);\n      var videoTracks = this.transformRemoteRTCTrack(i.videoTracks);\n      result.push({\n        userID: i.userID,\n        videoTracks: videoTracks,\n        audioTracks: audioTracks,\n        userData: i.userData\n      });\n    }\n    return result;\n  };\n  QNRTCClient.prototype.getPublishedTracks = function () {\n    var locakTrack = RTCClient.getPublishedTracks();\n    return this.transformLocalRTCTrack(locakTrack);\n  };\n  QNRTCClient.prototype.sendMessage = function (message, users, messageId) {\n    return RTCClient.sendMessage(message, users, messageId);\n  };\n  QNRTCClient.prototype.getConnectionState = function () {\n    return RTCClient.getConnectionState();\n  };\n  QNRTCClient.prototype.setAutoSubscribe = function (autoSubscribe) {\n    return RTCClient.setAutoSubscribe(autoSubscribe);\n  };\n  QNRTCClient.prototype.startLiveStreamingWithDirect = function (config) {\n    return RTCClient.startLiveStreamingWithDirect(config);\n  };\n  QNRTCClient.prototype.startLiveStreamingWithTranscoding = function (config) {\n    !config.watermarks && (config.watermarks = []);\n    !config.background && (config.background = {});\n    return RTCClient.startLiveStreamingWithTranscoding(config);\n  };\n  QNRTCClient.prototype.stopLiveStreamingWithDirect = function (config) {\n    return RTCClient.stopLiveStreamingWithDirect(config);\n  };\n  QNRTCClient.prototype.stopLiveStreamingWithTranscoding = function (config) {\n    return RTCClient.stopLiveStreamingWithTranscoding(config);\n  };\n  QNRTCClient.prototype.setTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {\n    return RTCClient.setTranscodingLiveStreamingTracks(streamID, transcodingTracks);\n  };\n  QNRTCClient.prototype.removeTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {\n    return RTCClient.removeTranscodingLiveStreamingTracks(streamID, transcodingTracks);\n  };\n  return QNRTCClient;\n}();\nexports.QNRTCClient = QNRTCClient;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQ2xpZW50LmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5SVENDbGllbnQiLCJSVENFbnVtXzEiLCJyZXF1aXJlIiwiUlRDUmVtb3RlVmlkZW9UcmFja18xIiwiUlRDUmVtb3RlQXVkaW9UcmFja18xIiwiUlRDTG9jYWxUcmFja18xIiwiUlRDQ2xpZW50IiwidW5pIiwiUU5FdmVudCIsInZhcmlhdGlvbkxpc3QiLCJ0cmFuc2Zvcm1SZW1vdGVSVENUcmFjayIsInRyYWNrTGlzdCIsInJlc3VsdCIsIl9pIiwidHJhY2tMaXN0XzEiLCJjb25maWciLCJpZGVudGlmeUlEIiwidHJhY2tJRCIsInJhdyIsImtpbmQiLCJRTlJUQ1RyYWNrS2luZCIsImF1ZGlvIiwicHVzaCIsIlFOUmVtb3RlQXVkaW9UcmFjayIsIlFOUmVtb3RlVmlkZW9UcmFjayIsInRyYW5zZm9ybUxvY2FsUlRDVHJhY2siLCJ0cmFja0xpc3RfMiIsInVzZXJJRCIsIlFOTG9jYWxUcmFjayIsImNyZWF0ZVJlbW90ZVRyYWNrRGF0YUNhbGxiYWNrIiwibGlzdGVuZXIiLCJfdGhpcyIsInZhcmlhdGlvbkNhbGxiYWNrIiwicGFyYW1zIiwiY2FsbGJhY2tEYXRhIiwicmVtb3RlVXNlcklEIiwiY2FsbGJhY2siLCJvbiIsIm5hbWUiLCJzb21lIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbiIsInRva2VuIiwidXNlckRhdGEiLCJsZWF2ZSIsInB1Ymxpc2giLCJ0cmFja3MiLCJfYSIsIm9uUHVibGlzaGVkIiwiZGF0YSIsImVycm9yIiwiX2xvb3BfMSIsImtleSIsImluZGV4IiwiZmluZEluZGV4IiwidW5wdWJsaXNoIiwic3Vic2NyaWJlIiwidW5zdWJzY3JpYmUiLCJnZXRTdWJzY3JpYmVkVHJhY2tzIiwicmVtb3RlVHJhY2siLCJnZXRMb2NhbEF1ZGlvVHJhY2tTdGF0cyIsImdldExvY2FsVmlkZW9UcmFja1N0YXRzIiwiZ2V0UmVtb3RlQXVkaW9UcmFja1N0YXRzIiwiZ2V0UmVtb3RlVmlkZW9UcmFja1N0YXRzIiwiZ2V0VXNlck5ldHdvcmtRdWFsaXR5IiwiZ2V0UmVtb3RlVXNlcnMiLCJyZW1vdGVVc2VyIiwicmVtb3RlVXNlcl8xIiwiYXVkaW9UcmFja3MiLCJ2aWRlb1RyYWNrcyIsImdldFB1Ymxpc2hlZFRyYWNrcyIsImxvY2FrVHJhY2siLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJ1c2VycyIsIm1lc3NhZ2VJZCIsImdldENvbm5lY3Rpb25TdGF0ZSIsInNldEF1dG9TdWJzY3JpYmUiLCJhdXRvU3Vic2NyaWJlIiwic3RhcnRMaXZlU3RyZWFtaW5nV2l0aERpcmVjdCIsInN0YXJ0TGl2ZVN0cmVhbWluZ1dpdGhUcmFuc2NvZGluZyIsIndhdGVybWFya3MiLCJiYWNrZ3JvdW5kIiwic3RvcExpdmVTdHJlYW1pbmdXaXRoRGlyZWN0Iiwic3RvcExpdmVTdHJlYW1pbmdXaXRoVHJhbnNjb2RpbmciLCJzZXRUcmFuc2NvZGluZ0xpdmVTdHJlYW1pbmdUcmFja3MiLCJzdHJlYW1JRCIsInRyYW5zY29kaW5nVHJhY2tzIiwicmVtb3ZlVHJhbnNjb2RpbmdMaXZlU3RyZWFtaW5nVHJhY2tzIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxRQUFRLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsUUFBUSxJQUFLLFlBQVk7RUFDbERBLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLElBQUksVUFBU0MsQ0FBQyxFQUFFO0lBQ3BDLEtBQUssSUFBSUMsQ0FBQyxFQUFFQyxD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QUFLckUsTUFBTSxDQUFDcUUsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUM5QyxDQUFDckUsTUFBTSxDQUFDc0UsVUFBVSxLQUFLdEUsTUFBTSxDQUFDc0UsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlDLE9BQU8vRSxTQUFTLENBQUM2RSxpQ0FBaUMsQ0FBQ3BFLE1BQU0sQ0FBQztFQUM5RCxDQUFDO0VBQ0RmLFdBQVcsQ0FBQ04sU0FBUyxDQUFDNEYsMkJBQTJCLEdBQUcsVUFBVXZFLE1BQU0sRUFBRTtJQUNsRSxPQUFPVCxTQUFTLENBQUNnRiwyQkFBMkIsQ0FBQ3ZFLE1BQU0sQ0FBQztFQUN4RCxDQUFDO0VBQ0RmLFdBQVcsQ0FBQ04sU0FBUyxDQUFDNkYsZ0NBQWdDLEdBQUcsVUFBVXhFLE1BQU0sRUFBRTtJQUN2RSxPQUFPVCxTQUFTLENBQUNpRixnQ0FBZ0MsQ0FBQ3hFLE1BQU0sQ0FBQztFQUM3RCxDQUFDO0VBQ0RmLFdBQVcsQ0FBQ04sU0FBUyxDQUFDOEYsaUNBQWlDLEdBQUcsVUFBVUMsUUFBUSxFQUFFQyxpQkFBaUIsRUFBRTtJQUM3RixPQUFPcEYsU0FBUyxDQUFDa0YsaUNBQWlDLENBQUNDLFFBQVEsRUFBRUMsaUJBQWlCLENBQUM7RUFDbkYsQ0FBQztFQUNEMUYsV0FBVyxDQUFDTixTQUFTLENBQUNpRyxvQ0FBb0MsR0FBRyxVQUFVRixRQUFRLEVBQUVDLGlCQUFpQixFQUFFO0lBQ2hHLE9BQU9wRixTQUFTLENBQUNxRixvQ0FBb0MsQ0FBQ0YsUUFBUSxFQUFFQyxpQkFBaUIsQ0FBQztFQUN0RixDQUFDO0VBQ0QsT0FBTzFGLFdBQVc7QUFDdEIsQ0FBQyxFQUFHO0FBQ0pGLE9BQU8sQ0FBQ0UsV0FBVyxHQUFHQSxXQUFXLEMiLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5RTlJUQ0NsaWVudCA9IHZvaWQgMDtcbnZhciBSVENFbnVtXzEgPSByZXF1aXJlKFwiLi4vZW51bS9SVENFbnVtXCIpO1xudmFyIFJUQ1JlbW90ZVZpZGVvVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ1JlbW90ZVZpZGVvVHJhY2tcIik7XG52YXIgUlRDUmVtb3RlQXVkaW9UcmFja18xID0gcmVxdWlyZShcIi4vUlRDUmVtb3RlQXVkaW9UcmFja1wiKTtcbnZhciBSVENMb2NhbFRyYWNrXzEgPSByZXF1aXJlKFwiLi9SVENMb2NhbFRyYWNrXCIpO1xudmFyIFJUQ0NsaWVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNDbGllbnQnKTtcbnZhciBRTkV2ZW50ID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2dsb2JhbEV2ZW50Jyk7XG52YXIgUU5SVENDbGllbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFFOUlRDQ2xpZW50KCkge1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkxpc3QgPSBbJ29uVXNlclB1Ymxpc2hlZCcsICdvblVzZXJVbnB1Ymxpc2hlZCcsICdvblZpZGVvU3Vic2NyaWJlZCcsICdvbkF1ZGlvU3Vic2NyaWJlZCddO1xuICAgIH1cbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUudHJhbnNmb3JtUmVtb3RlUlRDVHJhY2sgPSBmdW5jdGlvbiAodHJhY2tMaXN0KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB0cmFja0xpc3RfMSA9IHRyYWNrTGlzdDsgX2kgPCB0cmFja0xpc3RfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdHJhY2tMaXN0XzFbX2ldO1xuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IF9fYXNzaWduKHsgaWRlbnRpZnlJRDogaS50cmFja0lELCByYXc6IGkgfSwgaSk7XG4gICAgICAgICAgICBpZiAoaS5raW5kID09PSBSVENFbnVtXzEuUU5SVENUcmFja0tpbmQuYXVkaW8pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgUlRDUmVtb3RlQXVkaW9UcmFja18xLlFOUmVtb3RlQXVkaW9UcmFjayhjb25maWcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBSVENSZW1vdGVWaWRlb1RyYWNrXzEuUU5SZW1vdGVWaWRlb1RyYWNrKGNvbmZpZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUudHJhbnNmb3JtTG9jYWxSVENUcmFjayA9IGZ1bmN0aW9uICh0cmFja0xpc3QpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHRyYWNrTGlzdF8yID0gdHJhY2tMaXN0OyBfaSA8IHRyYWNrTGlzdF8yLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGkgPSB0cmFja0xpc3RfMltfaV07XG4gICAgICAgICAgICB2YXIgY29uZmlnID0gX19hc3NpZ24oeyBpZGVudGlmeUlEOiBpLnRyYWNrSUQsIHVzZXJJRDogJycsIHJhdzogaSB9LCBpKTtcbiAgICAgICAgICAgIGlmIChpLmtpbmQgPT09IFJUQ0VudW1fMS5RTlJUQ1RyYWNrS2luZC5hdWRpbykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBSVENMb2NhbFRyYWNrXzEuUU5Mb2NhbFRyYWNrKGNvbmZpZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IFJUQ0xvY2FsVHJhY2tfMS5RTkxvY2FsVHJhY2soY29uZmlnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5jcmVhdGVSZW1vdGVUcmFja0RhdGFDYWxsYmFjayA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdmFyaWF0aW9uQ2FsbGJhY2sgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gX3RoaXMudHJhbnNmb3JtUmVtb3RlUlRDVHJhY2socGFyYW1zLnRyYWNrTGlzdCk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tEYXRhID0ge1xuICAgICAgICAgICAgICAgIHJlbW90ZVVzZXJJRDogcGFyYW1zLnJlbW90ZVVzZXJJRCxcbiAgICAgICAgICAgICAgICB0cmFja0xpc3Q6IHJlc3VsdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGxpc3RlbmVyO1xuICAgICAgICAgICAgY2FsbGJhY2soY2FsbGJhY2tEYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHZhcmlhdGlvbkNhbGxiYWNrO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnZhcmlhdGlvbkxpc3Quc29tZShmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbSA9PT0gbmFtZTsgfSkpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuY3JlYXRlUmVtb3RlVHJhY2tEYXRhQ2FsbGJhY2sobGlzdGVuZXIpO1xuICAgICAgICAgICAgUU5FdmVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgUU5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5qb2luID0gZnVuY3Rpb24gKHRva2VuLCB1c2VyRGF0YSkge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LmpvaW4odG9rZW4sIHVzZXJEYXRhKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5sZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5sZWF2ZSgpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAodHJhY2tzLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LnB1Ymxpc2godHJhY2tzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvblB1Ymxpc2hlZCA9IF9hLm9uUHVibGlzaGVkLCBkYXRhID0gX2EuZGF0YSwgZXJyb3IgPSBfYS5lcnJvcjtcbiAgICAgICAgICAgIGlmIChvblB1Ymxpc2hlZCkge1xuICAgICAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0cmFja3MuZmluZEluZGV4KGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmlkZW50aWZ5SUQgPT09IGtleTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFja3NbaW5kZXhdLnRyYWNrSUQgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIF9sb29wXzEoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhvblB1Ymxpc2hlZCwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS51bnB1Ymxpc2ggPSBmdW5jdGlvbiAodHJhY2tzKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQudW5wdWJsaXNoKHRyYWNrcyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHRyYWNrcykge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LnN1YnNjcmliZSh0cmFja3MpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHRyYWNrcykge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LnVuc3Vic2NyaWJlKHRyYWNrcyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuZ2V0U3Vic2NyaWJlZFRyYWNrcyA9IGZ1bmN0aW9uICh1c2VySUQpIHtcbiAgICAgICAgdmFyIHJlbW90ZVRyYWNrID0gUlRDQ2xpZW50LmdldFN1YnNjcmliZWRUcmFja3ModXNlcklEKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtUmVtb3RlUlRDVHJhY2socmVtb3RlVHJhY2spO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmdldExvY2FsQXVkaW9UcmFja1N0YXRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LmdldExvY2FsQXVkaW9UcmFja1N0YXRzKCk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuZ2V0TG9jYWxWaWRlb1RyYWNrU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuZ2V0TG9jYWxWaWRlb1RyYWNrU3RhdHMoKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5nZXRSZW1vdGVBdWRpb1RyYWNrU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuZ2V0UmVtb3RlQXVkaW9UcmFja1N0YXRzKCk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuZ2V0UmVtb3RlVmlkZW9UcmFja1N0YXRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LmdldFJlbW90ZVZpZGVvVHJhY2tTdGF0cygpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmdldFVzZXJOZXR3b3JrUXVhbGl0eSA9IGZ1bmN0aW9uICh1c2VySUQpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5nZXRVc2VyTmV0d29ya1F1YWxpdHkodXNlcklEKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5nZXRSZW1vdGVVc2VycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlbW90ZVVzZXIgPSBSVENDbGllbnQuZ2V0UmVtb3RlVXNlcnMoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHJlbW90ZVVzZXJfMSA9IHJlbW90ZVVzZXI7IF9pIDwgcmVtb3RlVXNlcl8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGkgPSByZW1vdGVVc2VyXzFbX2ldO1xuICAgICAgICAgICAgdmFyIGF1ZGlvVHJhY2tzID0gdGhpcy50cmFuc2Zvcm1SZW1vdGVSVENUcmFjayhpLmF1ZGlvVHJhY2tzKTtcbiAgICAgICAgICAgIHZhciB2aWRlb1RyYWNrcyA9IHRoaXMudHJhbnNmb3JtUmVtb3RlUlRDVHJhY2soaS52aWRlb1RyYWNrcyk7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgdXNlcklEOiBpLnVzZXJJRCxcbiAgICAgICAgICAgICAgICB2aWRlb1RyYWNrczogdmlkZW9UcmFja3MsXG4gICAgICAgICAgICAgICAgYXVkaW9UcmFja3M6IGF1ZGlvVHJhY2tzLFxuICAgICAgICAgICAgICAgIHVzZXJEYXRhOiBpLnVzZXJEYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmdldFB1Ymxpc2hlZFRyYWNrcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxvY2FrVHJhY2sgPSBSVENDbGllbnQuZ2V0UHVibGlzaGVkVHJhY2tzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUxvY2FsUlRDVHJhY2sobG9jYWtUcmFjayk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc2VuZE1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSwgdXNlcnMsIG1lc3NhZ2VJZCkge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHVzZXJzLCBtZXNzYWdlSWQpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmdldENvbm5lY3Rpb25TdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5nZXRDb25uZWN0aW9uU3RhdGUoKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5zZXRBdXRvU3Vic2NyaWJlID0gZnVuY3Rpb24gKGF1dG9TdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5zZXRBdXRvU3Vic2NyaWJlKGF1dG9TdWJzY3JpYmUpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnN0YXJ0TGl2ZVN0cmVhbWluZ1dpdGhEaXJlY3QgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuc3RhcnRMaXZlU3RyZWFtaW5nV2l0aERpcmVjdChjb25maWcpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnN0YXJ0TGl2ZVN0cmVhbWluZ1dpdGhUcmFuc2NvZGluZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgIWNvbmZpZy53YXRlcm1hcmtzICYmIChjb25maWcud2F0ZXJtYXJrcyA9IFtdKTtcbiAgICAgICAgIWNvbmZpZy5iYWNrZ3JvdW5kICYmIChjb25maWcuYmFja2dyb3VuZCA9IHt9KTtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5zdGFydExpdmVTdHJlYW1pbmdXaXRoVHJhbnNjb2RpbmcoY29uZmlnKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5zdG9wTGl2ZVN0cmVhbWluZ1dpdGhEaXJlY3QgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuc3RvcExpdmVTdHJlYW1pbmdXaXRoRGlyZWN0KGNvbmZpZyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc3RvcExpdmVTdHJlYW1pbmdXaXRoVHJhbnNjb2RpbmcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuc3RvcExpdmVTdHJlYW1pbmdXaXRoVHJhbnNjb2RpbmcoY29uZmlnKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5zZXRUcmFuc2NvZGluZ0xpdmVTdHJlYW1pbmdUcmFja3MgPSBmdW5jdGlvbiAoc3RyZWFtSUQsIHRyYW5zY29kaW5nVHJhY2tzKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuc2V0VHJhbnNjb2RpbmdMaXZlU3RyZWFtaW5nVHJhY2tzKHN0cmVhbUlELCB0cmFuc2NvZGluZ1RyYWNrcyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUucmVtb3ZlVHJhbnNjb2RpbmdMaXZlU3RyZWFtaW5nVHJhY2tzID0gZnVuY3Rpb24gKHN0cmVhbUlELCB0cmFuc2NvZGluZ1RyYWNrcykge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LnJlbW92ZVRyYW5zY29kaW5nTGl2ZVN0cmVhbWluZ1RyYWNrcyhzdHJlYW1JRCwgdHJhbnNjb2RpbmdUcmFja3MpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOUlRDQ2xpZW50O1xufSgpKTtcbmV4cG9ydHMuUU5SVENDbGllbnQgPSBRTlJUQ0NsaWVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*************************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCRemoteVideoTrack.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n      label: 0,\n      sent: function sent() {\n        if (t[0] & 1) throw t[1];\n        return t[1];\n      },\n      trys: [],\n      ops: []\n    },\n    f,\n    y,\n    t,\n    g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n    while (_) {\n      try {\n        if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n        if (y = 0, t) op = [op[0] & 2, t.value];\n        switch (op[0]) {\n          case 0:\n          case 1:\n            t = op;\n            break;\n          case 4:\n            _.label++;\n            return {\n              value: op[1],\n              done: false\n            };\n          case 5:\n            _.label++;\n            y = op[1];\n            op = [0];\n            continue;\n          case 7:\n            op = _.ops.pop();\n            _.trys.pop();\n            continue;\n          default:\n            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n              _ = 0;\n              continue;\n            }\n            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n              _.label = op[1];\n              break;\n            }\n            if (op[0] === 6 && _.label < t[1]) {\n              _.label = t[1];\n              t = op;\n              break;\n            }\n            if (t && _.label < t[2]) {\n              _.label = t[2];\n              _.ops.push(op);\n              break;\n            }\n            if (t[2]) _.ops.pop();\n            _.trys.pop();\n            continue;\n        }\n        op = body.call(thisArg, _);\n      } catch (e) {\n        op = [6, e];\n        y = 0;\n      } finally {\n        f = t = 0;\n      }\n    }\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\nexports.__esModule = true;\nexports.QNRemoteVideoTrack = void 0;\nvar RTCRemoteTrack_1 = __webpack_require__(/*! ./RTCRemoteTrack */ 26);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNRemoteVideoTrack = function (_super) {\n  __extends(QNRemoteVideoTrack, _super);\n  function QNRemoteVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNRemoteVideoTrack.prototype.setProfile = function (profile) {\n    return QNRtcTrack.setProfile(this.identifyID, profile);\n  };\n  QNRemoteVideoTrack.prototype.isMultiProfileEnabled = function () {\n    return QNRtcTrack.isMultiProfileEnabled(this.identifyID);\n  };\n  QNRemoteVideoTrack.prototype.getProfile = function () {\n    return QNRtcTrack.getProfile(this.identifyID);\n  };\n  QNRemoteVideoTrack.prototype.takeVideoSnapshot = function () {\n    return __awaiter(this, void 0, void 0, function () {\n      var platform;\n      var _this = this;\n      return __generator(this, function (_a) {\n        platform = uni.getSystemInfoSync().platform;\n        if (platform === \"ios\") {\n          return [2, new Promise(function (resolve, reject) {\n            QNRtcTrack.takeVideoSnapshot(_this.identifyID);\n            var listener = function listener(param) {\n              QNEvent.removeEventListener(\"onLocalVideoFrame\", listener);\n              resolve({\n                base64: _this.trimBase64(param.data)\n              });\n            };\n            QNEvent.addEventListener(\"onLocalVideoFrame\", listener);\n            setTimeout(function () {\n              QNEvent.removeEventListener(\"onLocalVideoFrame\", listener);\n              reject();\n            }, 5000);\n          })];\n        } else if (platform === \"android\") {\n          return [2, new Promise(function (resolve, reject) {\n            QNRtcTrack.takeVideoSnapshot(_this.trackID, function (data) {\n              resolve(data);\n            });\n          })];\n        }\n        return [2];\n      });\n    });\n  };\n  QNRemoteVideoTrack.prototype.trimBase64 = function (base64) {\n    if (!base64) {\n      return \"\";\n    }\n    return base64.replace(/\\r|\\n/g, \"\");\n  };\n  return QNRemoteVideoTrack;\n}(RTCRemoteTrack_1.QNRemoteTrack);\nexports.QNRemoteVideoTrack = QNRemoteVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDUmVtb3RlVmlkZW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuIiwidiIsIm9wIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5SZW1vdGVWaWRlb1RyYWNrIiwiUlRDUmVtb3RlVHJhY2tfMSIsInJlcXVpcmUiLCJRTlJ0Y1RyYWNrIiwidW5pIiwiUU5FdmVudCIsIl9zdXBlciIsImFyZ3VtZW50cyIsInNldFByb2ZpbGUiLCJwcm9maWxlIiwiaWRlbnRpZnlJRCIsImlzTXVsdGlQcm9maWxlRW5hYmxlZCIsImdldFByb2ZpbGUiLCJ0YWtlVmlkZW9TbmFwc2hvdCIsInBsYXRmb3JtIiwiX3RoaXMiLCJfYSIsImdldFN5c3RlbUluZm9TeW5jIiwibGlzdGVuZXIiLCJwYXJhbSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiYXNlNjQiLCJ0cmltQmFzZTY0IiwiZGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwidHJhY2tJRCIsInJlcGxhY2UiLCJRTlJlbW90ZVRyYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxTQUFTLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsU0FBUyxJQUFNLFlBQVk7RUFDckQsSUFBSUMsY0FBYSxHQUFHLHVCQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNoQ0YsY0FBYSxHQUFHRyxNQUFNLENBQUNDLGNBQWMsSUFDaEM7TUFBRUMsU0FBUyxFQUFFO0lBQUcsQ0FBQyxZQUFZQyxLQUFLLElBQUksVUFBVUwsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRUQsQ0FBQyxDQUFDSSxTQUFTLEdBQUdILENBQUM7SUFBRSxDQUFFLElBQzVFLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJSyxDQUFDLElBQUlMLENBQUM7UUFBRSxJQUFJQyxNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQUVOLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO01BQUM7SUFBQyxDQUFDO0lBQ3JHLE9BQU9QLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7RUFDOUIsQ0FBQztFQUNELE9BQU8sVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDbkIsSUFBSSxPQUFPQSxDQUFDLEtBQUssVUFBVSxJQUFJQSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUlTLFNBQVMsQ0FBQyxzQkFBc0IsR0FBR0MsTUFBTSxDQUFDVixDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RkYsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztJQUNuQixTQUFTVyxFQUFFLEdBQUc7TUFBRSxJQUFJLENBQUNDLFdBQVcsR0FBR2IsQ0FBQztJ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RCxNQUFNLEVBQUU7SUFDeEQsSUFBSSxDQUFDQSxNQUFNLEVBQUU7TUFDVCxPQUFPLEVBQUU7SUFDYjtJQUNBLE9BQU9BLE1BQU0sQ0FBQ00sT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7RUFDdkMsQ0FBQztFQUNELE9BQU8zQixrQkFBa0I7QUFDN0IsQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQzJCLGFBQWEsQ0FBRTtBQUNsQzlCLE9BQU8sQ0FBQ0Usa0JBQWtCLEdBQUdBLGtCQUFrQixDIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOUmVtb3RlVmlkZW9UcmFjayA9IHZvaWQgMDtcbnZhciBSVENSZW1vdGVUcmFja18xID0gcmVxdWlyZShcIi4vUlRDUmVtb3RlVHJhY2tcIik7XG52YXIgUU5SdGNUcmFjayA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNUcmFjaycpO1xudmFyIFFORXZlbnQgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignZ2xvYmFsRXZlbnQnKTtcbnZhciBRTlJlbW90ZVZpZGVvVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTlJlbW90ZVZpZGVvVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5SZW1vdGVWaWRlb1RyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOUmVtb3RlVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0UHJvZmlsZSA9IGZ1bmN0aW9uIChwcm9maWxlKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFByb2ZpbGUodGhpcy5pZGVudGlmeUlELCBwcm9maWxlKTtcbiAgICB9O1xuICAgIFFOUmVtb3RlVmlkZW9UcmFjay5wcm90b3R5cGUuaXNNdWx0aVByb2ZpbGVFbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5pc011bHRpUHJvZmlsZUVuYWJsZWQodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOUmVtb3RlVmlkZW9UcmFjay5wcm90b3R5cGUuZ2V0UHJvZmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0UHJvZmlsZSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5SZW1vdGVWaWRlb1RyYWNrLnByb3RvdHlwZS50YWtlVmlkZW9TbmFwc2hvdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBsYXRmb3JtO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtO1xuICAgICAgICAgICAgICAgIGlmIChwbGF0Zm9ybSA9PT0gXCJpb3NcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRTlJ0Y1RyYWNrLnRha2VWaWRlb1NuYXBzaG90KF90aGlzLmlkZW50aWZ5SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRTkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbkxvY2FsVmlkZW9GcmFtZVwiLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBiYXNlNjQ6IF90aGlzLnRyaW1CYXNlNjQocGFyYW0uZGF0YSkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRTkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvbkxvY2FsVmlkZW9GcmFtZVwiLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFORXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uTG9jYWxWaWRlb0ZyYW1lXCIsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBsYXRmb3JtID09PSBcImFuZHJvaWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRTlJ0Y1RyYWNrLnRha2VWaWRlb1NuYXBzaG90KF90aGlzLnRyYWNrSUQsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRTlJlbW90ZVZpZGVvVHJhY2sucHJvdG90eXBlLnRyaW1CYXNlNjQgPSBmdW5jdGlvbiAoYmFzZTY0KSB7XG4gICAgICAgIGlmICghYmFzZTY0KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFzZTY0LnJlcGxhY2UoL1xccnxcXG4vZywgXCJcIik7XG4gICAgfTtcbiAgICByZXR1cm4gUU5SZW1vdGVWaWRlb1RyYWNrO1xufShSVENSZW1vdGVUcmFja18xLlFOUmVtb3RlVHJhY2spKTtcbmV4cG9ydHMuUU5SZW1vdGVWaWRlb1RyYWNrID0gUU5SZW1vdGVWaWRlb1RyYWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!********************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCRemoteTrack.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNRemoteTrack = void 0;\nvar RTCTrack_1 = __webpack_require__(/*! ./RTCTrack */ 27);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRemoteTrack = function (_super) {\n  __extends(QNRemoteTrack, _super);\n  function QNRemoteTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNRemoteTrack.prototype.isSubscribed = function () {\n    return QNRtcTrack.isSubscribed(this.identifyID);\n  };\n  return QNRemoteTrack;\n}(RTCTrack_1.QNTrack);\nexports.QNRemoteTrack = QNRemoteTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDUmVtb3RlVHJhY2suanMiXSwibmFtZXMiOlsiX19leHRlbmRzIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJRTlJlbW90ZVRyYWNrIiwiUlRDVHJhY2tfMSIsInJlcXVpcmUiLCJRTlJ0Y1RyYWNrIiwidW5pIiwiX3N1cGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJpc1N1YnNjcmliZWQiLCJpZGVudGlmeUlEIiwiUU5UcmFjayJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7O0FBQ2IsSUFBSUEsU0FBUyxHQUFJLElBQUksSUFBSSxJQUFJLENBQUNBLFNBQVMsSUFBTSxZQUFZO0VBQ3JELElBQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDaENGLGNBQWEsR0FBR0csTUFBTSxDQUFDQyxjQUFjLElBQ2hDO01BQUVDLFNBQVMsRUFBRTtJQUFHLENBQUMsWUFBWUMsS0FBSyxJQUFJLFVBQVVMLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUVELENBQUMsQ0FBQ0ksU0FBUyxHQUFHSCxDQUFDO0lBQUUsQ0FBRSxJQUM1RSxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFLEtBQUssSUFBSUssQ0FBQyxJQUFJTCxDQUFDO1FBQUUsSUFBSUMsTUFBTSxDQUFDSyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUFFTixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztNQUFDO0lBQUMsQ0FBQztJQUNyRyxPQUFPUCxjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ25CLElBQUksT0FBT0EsQ0FBQyxLQUFLLFVBQVUsSUFBSUEsQ0FBQyxLQUFLLElBQUksRUFDckMsTUFBTSxJQUFJUyxTQUFTLENBQUMsc0JBQXNCLEdBQUdDLE1BQU0sQ0FBQ1YsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUM7SUFDN0ZGLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7SUFDbkIsU0FBU1csRUFBRSxHQUFHO01BQUUsSUFBSSxDQUFDQyxXQUFXLEdBQUdiLENBQUM7SUFBRTtJQUN0Q0EsQ0FBQyxDQUFDTyxTQUFTLEdBQUdOLENBQUMsS0FBSyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDYixDQUFDLENBQUMsSUFBSVcsRUFBRSxDQUFDTCxTQUFTLEdBQUdOLENBQUMsQ0FBQ00sU0FBUyxFQUFFLElBQUlLLEVBQUUsRUFBRSxDQUFDO0VBQ3hGLENBQUM7QUFDTCxDQUFDLEVBQUc7QUFDSkcsT0FBTyxDQUFDQyxVQUFVLEdBQUcsSUFBSTtBQUN6QkQsT0FBTyxDQUFDRSxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQzlCLElBQUlDLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyxvQkFBWSxDQUFDO0FBQ3RDLElBQUlDLFVBQVUsR0FBR0MsOENBQXVCLENBQUMsNEJBQTRCLENBQUM7QUFDdEUsSUFBSUosYUFBYSxHQUFJLFVBQVVLLE1BQU0sRUFBRTtFQUNuQ3hCLFNBQVMsQ0FBQ21CLGFBQWEsRUFBRUssTUFBTSxDQUFDO0VBQ2hDLFNBQVNMLGFBQWEsR0FBRztJQUNyQixPQUFPSyxNQUFNLEtBQUssSUFBSSxJQUFJQSxNQUFNLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUVDLFNBQVMsQ0FBQyxJQUFJLElBQUk7RUFDbkU7RUFDQVAsYUFBYSxDQUFDVixTQUFTLENBQUNrQixZQUFZLEdBQUcsWUFBWTtJQUMvQyxPQUFPTCxVQUFVLENBQUNLLFlBQVksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQztFQUNuRCxDQUFDO0VBQ0QsT0FBT1QsYUFBYTtBQUN4QixDQUFDLENBQUNDLFVBQVUsQ0FBQ1MsT0FBTyxDQUFFO0FBQ3RCWixPQUFPLENBQUNFLGFBQWEsR0FBR0EsYUFBYSxDIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5SZW1vdGVUcmFjayA9IHZvaWQgMDtcbnZhciBSVENUcmFja18xID0gcmVxdWlyZShcIi4vUlRDVHJhY2tcIik7XG52YXIgUU5SdGNUcmFjayA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNUcmFjaycpO1xudmFyIFFOUmVtb3RlVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTlJlbW90ZVRyYWNrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFFOUmVtb3RlVHJhY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUU5SZW1vdGVUcmFjay5wcm90b3R5cGUuaXNTdWJzY3JpYmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5pc1N1YnNjcmliZWQodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIHJldHVybiBRTlJlbW90ZVRyYWNrO1xufShSVENUcmFja18xLlFOVHJhY2spKTtcbmV4cG9ydHMuUU5SZW1vdGVUcmFjayA9IFFOUmVtb3RlVHJhY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!**************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCTrack.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __rest = this && this.__rest || function (s, e) {\n  var t = {};\n  for (var p in s) {\n    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];\n  }\n  if (s != null && typeof Object.getOwnPropertySymbols === \"function\") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];\n  }\n  return t;\n};\nexports.__esModule = true;\nexports.QNTrack = void 0;\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNTrack = function () {\n  function QNTrack(_a) {\n    var identifyID = _a.identifyID,\n      kind = _a.kind,\n      tag = _a.tag,\n      trackID = _a.trackID,\n      raw = _a.raw,\n      userID = _a.userID;\n    this.identifyID = identifyID;\n    this.kind = kind;\n    this.tag = tag;\n    this.trackID = trackID;\n    this.raw = raw;\n    this.userID = userID;\n  }\n  QNTrack.prototype.on = function (name, listener) {\n    var _this = this;\n    var _listener = function _listener(params) {\n      var trackID = params.trackID,\n        arguv = __rest(params, [\"trackID\"]);\n      if (trackID && trackID === _this.trackID) {\n        listener(arguv);\n      }\n    };\n    QNEvent.addEventListener(name, _listener);\n  };\n  QNTrack.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNTrack.prototype.getMuted = function () {\n    return QNRtcTrack.getMuted(this.identifyID);\n  };\n  return QNTrack;\n}();\nexports.QNTrack = QNTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDVHJhY2suanMiXSwibmFtZXMiOlsiX19yZXN0IiwicyIsImUiLCJ0IiwicCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwibGVuZ3RoIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOVHJhY2siLCJRTlJ0Y1RyYWNrIiwidW5pIiwiUU5FdmVudCIsIl9hIiwiaWRlbnRpZnlJRCIsImtpbmQiLCJ0YWciLCJ0cmFja0lEIiwicmF3IiwidXNlcklEIiwib24iLCJuYW1lIiwibGlzdGVuZXIiLCJfdGhpcyIsIl9saXN0ZW5lciIsInBhcmFtcyIsImFyZ3V2IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRNdXRlZCJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7O0FBQ2IsSUFBSUEsTUFBTSxHQUFJLElBQUksSUFBSSxJQUFJLENBQUNBLE1BQU0sSUFBSyxVQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtFQUNsRCxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxJQUFJQyxDQUFDLElBQUlILENBQUM7SUFBRSxJQUFJSSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNQLENBQUMsRUFBRUcsQ0FBQyxDQUFDLElBQUlGLENBQUMsQ0FBQ08sT0FBTyxDQUFDTCxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQy9FRCxDQUFDLENBQUNDLENBQUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNHLENBQUMsQ0FBQztFQUFDO0VBQ2hCLElBQUlILENBQUMsSUFBSSxJQUFJLElBQUksT0FBT0ksTUFBTSxDQUFDSyxxQkFBcUIsS0FBSyxV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dHJpY3RcIjtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOVHJhY2sgPSB2b2lkIDA7XG52YXIgUU5SdGNUcmFjayA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNUcmFjaycpO1xudmFyIFFORXZlbnQgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignZ2xvYmFsRXZlbnQnKTtcbnZhciBRTlRyYWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRTlRyYWNrKF9hKSB7XG4gICAgICAgIHZhciBpZGVudGlmeUlEID0gX2EuaWRlbnRpZnlJRCwga2luZCA9IF9hLmtpbmQsIHRhZyA9IF9hLnRhZywgdHJhY2tJRCA9IF9hLnRyYWNrSUQsIHJhdyA9IF9hLnJhdywgdXNlcklEID0gX2EudXNlcklEO1xuICAgICAgICB0aGlzLmlkZW50aWZ5SUQgPSBpZGVudGlmeUlEO1xuICAgICAgICB0aGlzLmtpbmQgPSBraW5kO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy50cmFja0lEID0gdHJhY2tJRDtcbiAgICAgICAgdGhpcy5yYXcgPSByYXc7XG4gICAgICAgIHRoaXMudXNlcklEID0gdXNlcklEO1xuICAgIH1cbiAgICBRTlRyYWNrLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2xpc3RlbmVyID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgdmFyIHRyYWNrSUQgPSBwYXJhbXMudHJhY2tJRCwgYXJndXYgPSBfX3Jlc3QocGFyYW1zLCBbXCJ0cmFja0lEXCJdKTtcbiAgICAgICAgICAgIGlmICh0cmFja0lEICYmIHRyYWNrSUQgPT09IF90aGlzLnRyYWNrSUQpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcihhcmd1dik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBfbGlzdGVuZXIpO1xuICAgIH07XG4gICAgUU5UcmFjay5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIFFORXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBRTlRyYWNrLnByb3RvdHlwZS5nZXRNdXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0TXV0ZWQodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIHJldHVybiBRTlRyYWNrO1xufSgpKTtcbmV4cG9ydHMuUU5UcmFjayA9IFFOVHJhY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*************************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCRemoteAudioTrack.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNRemoteAudioTrack = void 0;\nvar RTCRemoteTrack_1 = __webpack_require__(/*! ./RTCRemoteTrack */ 26);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRemoteAudioTrack = function (_super) {\n  __extends(QNRemoteAudioTrack, _super);\n  function QNRemoteAudioTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNRemoteAudioTrack.prototype.setRemoteVolume = function (volume) {\n    return QNRtcTrack.setRemoteVolume(this.identifyID, volume);\n  };\n  QNRemoteAudioTrack.prototype.getRemoteVolume = function () {\n    return QNRtcTrack.getRemoteVolume(this.identifyID);\n  };\n  return QNRemoteAudioTrack;\n}(RTCRemoteTrack_1.QNRemoteTrack);\nexports.QNRemoteAudioTrack = QNRemoteAudioTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDUmVtb3RlQXVkaW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOUmVtb3RlQXVkaW9UcmFjayIsIlJUQ1JlbW90ZVRyYWNrXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0UmVtb3RlVm9sdW1lIiwidm9sdW1lIiwiaWRlbnRpZnlJRCIsImdldFJlbW90ZVZvbHVtZSIsIlFOUmVtb3RlVHJhY2siXSwibWFwcGluZ3MiOiJBQUFBLHNGQUFhOztBQUNiLElBQUlBLFNBQVMsR0FBSSxJQUFJLElBQUksSUFBSSxDQUFDQSxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJQyxjQUFhLEdBQUcsdUJBQVVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ2hDRixjQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBYyxJQUNoQztNQUFFQyxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVlDLEtBQUssSUFBSSxVQUFVTCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFRCxDQUFDLENBQUNJLFNBQVMsR0FBR0gsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRSxLQUFLLElBQUlLLENBQUMsSUFBSUwsQ0FBQztRQUFFLElBQUlDLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFBRU4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7TUFBQztJQUFDLENBQUM7SUFDckcsT0FBT1AsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztFQUM5QixDQUFDO0VBQ0QsT0FBTyxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNuQixJQUFJLE9BQU9BLENBQUMsS0FBSyxVQUFVLElBQUlBLENBQUMsS0FBSyxJQUFJLEVBQ3JDLE1BQU0sSUFBSVMsU0FBUyxDQUFDLHNCQUFzQixHQUFHQyxNQUFNLENBQUNWLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDO0lBQzdGRixjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0lBQ25CLFNBQVNXLEVBQUUsR0FBRztNQUFFLElBQUksQ0FBQ0MsV0FBVyxHQUFHYixDQUFDO0lBQUU7SUFDdENBLENBQUMsQ0FBQ08sU0FBUyxHQUFHTixDQUFDLEtBQUssSUFBSSxHQUFHQyxNQUFNLENBQUNZLE1BQU0sQ0FBQ2IsQ0FBQyxDQUFDLElBQUlXLEVBQUUsQ0FBQ0wsU0FBUyxHQUFHTixDQUFDLENBQUNNLFNBQVMsRUFBRSxJQUFJSyxFQUFFLEVBQUUsQ0FBQztFQUN4RixDQUFDO0FBQ0wsQ0FBQyxFQUFHO0FBQ0pHLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHLElBQUk7QUFDekJELE9BQU8sQ0FBQ0Usa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0FBQ25DLElBQUlDLGdCQUFnQixHQUFHQyxtQkFBTyxDQUFDLDBCQUFrQixDQUFDO0FBQ2xELElBQUlDLFVBQVUsR0FBR0MsOENBQXVCLENBQUMsNEJBQTRCLENBQUM7QUFDdEUsSUFBSUosa0JBQWtCLEdBQUksVUFBVUssTUFBTSxFQUFFO0VBQ3hDeEIsU0FBUyxDQUFDbUIsa0JBQWtCLEVBQUVLLE1BQU0sQ0FBQztFQUNyQyxTQUFTTCxrQkFBa0IsR0FBRztJQUMxQixPQUFPSyxNQUFNLEtBQUssSUFBSSxJQUFJQSxNQUFNLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUVDLFNBQVMsQ0FBQyxJQUFJLElBQUk7RUFDbkU7RUFDQVAsa0JBQWtCLENBQUNWLFNBQVMsQ0FBQ2tCLGVBQWUsR0FBRyxVQUFVQyxNQUFNLEVBQUU7SUFDN0QsT0FBT04sVUFBVSxDQUFDSyxlQUFlLENBQUMsSUFBSSxDQUFDRSxVQUFVLEVBQUVELE1BQU0sQ0FBQztFQUM5RCxDQUFDO0VBQ0RULGtCQUFrQixDQUFDVixTQUFTLENBQUNxQixlQUFlLEdBQUcsWUFBWTtJQUN2RCxPQUFPUixVQUFVLENBQUNRLGVBQWUsQ0FBQyxJQUFJLENBQUNELFVBQVUsQ0FBQztFQUN0RCxDQUFDO0VBQ0QsT0FBT1Ysa0JBQWtCO0FBQzdCLENBQUMsQ0FBQ0MsZ0JBQWdCLENBQUNXLGFBQWEsQ0FBRTtBQUNsQ2QsT0FBTyxDQUFDRSxrQkFBa0IsR0FBR0Esa0JBQWtCLEMiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5RTlJlbW90ZUF1ZGlvVHJhY2sgPSB2b2lkIDA7XG52YXIgUlRDUmVtb3RlVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ1JlbW90ZVRyYWNrXCIpO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTlJlbW90ZUF1ZGlvVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTlJlbW90ZUF1ZGlvVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5SZW1vdGVBdWRpb1RyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOUmVtb3RlQXVkaW9UcmFjay5wcm90b3R5cGUuc2V0UmVtb3RlVm9sdW1lID0gZnVuY3Rpb24gKHZvbHVtZSkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zZXRSZW1vdGVWb2x1bWUodGhpcy5pZGVudGlmeUlELCB2b2x1bWUpO1xuICAgIH07XG4gICAgUU5SZW1vdGVBdWRpb1RyYWNrLnByb3RvdHlwZS5nZXRSZW1vdGVWb2x1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLmdldFJlbW90ZVZvbHVtZSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOUmVtb3RlQXVkaW9UcmFjaztcbn0oUlRDUmVtb3RlVHJhY2tfMS5RTlJlbW90ZVRyYWNrKSk7XG5leHBvcnRzLlFOUmVtb3RlQXVkaW9UcmFjayA9IFFOUmVtb3RlQXVkaW9UcmFjaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*******************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCLocalTrack.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNLocalTrack = void 0;\nvar RTCTrack_1 = __webpack_require__(/*! ./RTCTrack */ 27);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNLocalTrack = function (_super) {\n  __extends(QNLocalTrack, _super);\n  function QNLocalTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNLocalTrack.prototype.setMuted = function (muted) {\n    return QNRtcTrack.setMuted(this.identifyID, muted);\n  };\n  return QNLocalTrack;\n}(RTCTrack_1.QNTrack);\nexports.QNLocalTrack = QNLocalTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTG9jYWxUcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOTG9jYWxUcmFjayIsIlJUQ1RyYWNrXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0TXV0ZWQiLCJtdXRlZCIsImlkZW50aWZ5SUQiLCJRTlRyYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxTQUFTLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsU0FBUyxJQUFNLFlBQVk7RUFDckQsSUFBSUMsY0FBYSxHQUFHLHVCQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNoQ0YsY0FBYSxHQUFHRyxNQUFNLENBQUNDLGNBQWMsSUFDaEM7TUFBRUMsU0FBUyxFQUFFO0lBQUcsQ0FBQyxZQUFZQyxLQUFLLElBQUksVUFBVUwsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRUQsQ0FBQyxDQUFDSSxTQUFTLEdBQUdILENBQUM7SUFBRSxDQUFFLElBQzVFLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJSyxDQUFDLElBQUlMLENBQUM7UUFBRSxJQUFJQyxNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQUVOLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO01BQUM7SUFBQyxDQUFDO0lBQ3JHLE9BQU9QLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7RUFDOUIsQ0FBQztFQUNELE9BQU8sVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDbkIsSUFBSSxPQUFPQSxDQUFDLEtBQUssVUFBVSxJQUFJQSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUlTLFNBQVMsQ0FBQyxzQkFBc0IsR0FBR0MsTUFBTSxDQUFDVixDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RkYsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztJQUNuQixTQUFTVyxFQUFFLEdBQUc7TUFBRSxJQUFJLENBQUNDLFdBQVcsR0FBR2IsQ0FBQztJQUFFO0lBQ3RDQSxDQUFDLENBQUNPLFNBQVMsR0FBR04sQ0FBQyxLQUFLLElBQUksR0FBR0MsTUFBTSxDQUFDWSxNQUFNLENBQUNiLENBQUMsQ0FBQyxJQUFJVyxFQUFFLENBQUNMLFNBQVMsR0FBR04sQ0FBQyxDQUFDTSxTQUFTLEVBQUUsSUFBSUssRUFBRSxFQUFFLENBQUM7RUFDeEYsQ0FBQztBQUNMLENBQUMsRUFBRztBQUNKRyxPQUFPLENBQUNDLFVBQVUsR0FBRyxJQUFJO0FBQ3pCRCxPQUFPLENBQUNFLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDN0IsSUFBSUMsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLG9CQUFZLENBQUM7QUFDdEMsSUFBSUMsVUFBVSxHQUFHQyw4Q0FBdUIsQ0FBQyw0QkFBNEIsQ0FBQztBQUN0RSxJQUFJSixZQUFZLEdBQUksVUFBVUssTUFBTSxFQUFFO0VBQ2xDeEIsU0FBUyxDQUFDbUIsWUFBWSxFQUFFSyxNQUFNLENBQUM7RUFDL0IsU0FBU0wsWUFBWSxHQUFHO0lBQ3BCLE9BQU9LLE1BQU0sS0FBSyxJQUFJLElBQUlBLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLElBQUksRUFBRUMsU0FBUyxDQUFDLElBQUksSUFBSTtFQUNuRTtFQUNBUCxZQUFZLENBQUNWLFNBQVMsQ0FBQ2tCLFFBQVEsR0FBRyxVQUFVQyxLQUFLLEVBQUU7SUFDL0MsT0FBT04sVUFBVSxDQUFDSyxRQUFRLENBQUMsSUFBSSxDQUFDRSxVQUFVLEVBQUVELEtBQUssQ0FBQztFQUN0RCxDQUFDO0VBQ0QsT0FBT1QsWUFBWTtBQUN2QixDQUFDLENBQUNDLFVBQVUsQ0FBQ1UsT0FBTyxDQUFFO0FBQ3RCYixPQUFPLENBQUNFLFlBQVksR0FBR0EsWUFBWSxDIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5Mb2NhbFRyYWNrID0gdm9pZCAwO1xudmFyIFJUQ1RyYWNrXzEgPSByZXF1aXJlKFwiLi9SVENUcmFja1wiKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5Mb2NhbFRyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5Mb2NhbFRyYWNrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFFOTG9jYWxUcmFjaygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRTkxvY2FsVHJhY2sucHJvdG90eXBlLnNldE11dGVkID0gZnVuY3Rpb24gKG11dGVkKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldE11dGVkKHRoaXMuaWRlbnRpZnlJRCwgbXV0ZWQpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOTG9jYWxUcmFjaztcbn0oUlRDVHJhY2tfMS5RTlRyYWNrKSk7XG5leHBvcnRzLlFOTG9jYWxUcmFjayA9IFFOTG9jYWxUcmFjaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*************************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCCameraVideoTrack.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n      label: 0,\n      sent: function sent() {\n        if (t[0] & 1) throw t[1];\n        return t[1];\n      },\n      trys: [],\n      ops: []\n    },\n    f,\n    y,\n    t,\n    g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n    while (_) {\n      try {\n        if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n        if (y = 0, t) op = [op[0] & 2, t.value];\n        switch (op[0]) {\n          case 0:\n          case 1:\n            t = op;\n            break;\n          case 4:\n            _.label++;\n            return {\n              value: op[1],\n              done: false\n            };\n          case 5:\n            _.label++;\n            y = op[1];\n            op = [0];\n            continue;\n          case 7:\n            op = _.ops.pop();\n            _.trys.pop();\n            continue;\n          default:\n            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n              _ = 0;\n              continue;\n            }\n            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n              _.label = op[1];\n              break;\n            }\n            if (op[0] === 6 && _.label < t[1]) {\n              _.label = t[1];\n              t = op;\n              break;\n            }\n            if (t && _.label < t[2]) {\n              _.label = t[2];\n              _.ops.push(op);\n              break;\n            }\n            if (t[2]) _.ops.pop();\n            _.trys.pop();\n            continue;\n        }\n        op = body.call(thisArg, _);\n      } catch (e) {\n        op = [6, e];\n        y = 0;\n      } finally {\n        f = t = 0;\n      }\n    }\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\nexports.__esModule = true;\nexports.QNCameraVideoTrack = void 0;\nvar RTCLocalVideoTrack_1 = __webpack_require__(/*! ./RTCLocalVideoTrack */ 31);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNCameraVideoTrack = function (_super) {\n  __extends(QNCameraVideoTrack, _super);\n  function QNCameraVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNCameraVideoTrack.prototype.destroy = function () {\n    return QNRtcTrack.destroy(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setSessionPreset = function (sessionPreset) {\n    return QNRtcTrack.setSessionPreset(this.identifyID, sessionPreset);\n  };\n  QNCameraVideoTrack.prototype.startCapture = function () {\n    return QNRtcTrack.startCapture(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.stopCapture = function () {\n    return QNRtcTrack.stopCapture(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.switchCamera = function () {\n    return QNRtcTrack.switchCamera(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.turnLightOn = function () {\n    return QNRtcTrack.turnLightOn(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.turnLightOff = function () {\n    return QNRtcTrack.turnLightOff(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.manualFocus = function (x, y) {\n    return QNRtcTrack.manualFocus(this.identifyID, x, y);\n  };\n  QNCameraVideoTrack.prototype.setExposureCompensation = function (value) {\n    return QNRtcTrack.setExposureCompensation(this.identifyID, value);\n  };\n  QNCameraVideoTrack.prototype.getMaxExposureCompensation = function () {\n    return QNRtcTrack.getMaxExposureCompensation(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.getMinExposureCompensation = function () {\n    return QNRtcTrack.getMinExposureCompensation(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setVideoOrientation = function (videoOrientation) {\n    return QNRtcTrack.setVideoOrientation(this.identifyID, videoOrientation);\n  };\n  QNCameraVideoTrack.prototype.getVideoOrientation = function () {\n    return QNRtcTrack.getVideoOrientation(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setZoom = function (zoom) {\n    return QNRtcTrack.setZoom(this.identifyID, zoom);\n  };\n  QNCameraVideoTrack.prototype.getZooms = function () {\n    return QNRtcTrack.getZooms(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setPreviewEnabled = function (isEnabled) {\n    return QNRtcTrack.setPreviewEnabled(this.identifyID, isEnabled);\n  };\n  QNCameraVideoTrack.prototype.setBeauty = function (beautySetting) {\n    return QNRtcTrack.setBeauty(this.identifyID, beautySetting);\n  };\n  QNCameraVideoTrack.prototype.previewMirrorFrontFacing = function (previewMirrorFrontFacing) {\n    return QNRtcTrack.previewMirrorFrontFacing(this.identifyID, previewMirrorFrontFacing);\n  };\n  QNCameraVideoTrack.prototype.previewMirrorRearFacing = function (previewMirrorRearFacing) {\n    return QNRtcTrack.previewMirrorRearFacing(this.identifyID, previewMirrorRearFacing);\n  };\n  QNCameraVideoTrack.prototype.encodeMirrorFrontFacing = function (encodeMirrorFrontFacing) {\n    return QNRtcTrack.encodeMirrorFrontFacing(this.identifyID, encodeMirrorFrontFacing);\n  };\n  QNCameraVideoTrack.prototype.encodeMirrorRearFacing = function (encodeMirrorRearFacing) {\n    return QNRtcTrack.encodeMirrorRearFacing(this.identifyID, encodeMirrorRearFacing);\n  };\n  QNCameraVideoTrack.prototype.pushImage = function (image) {\n    return QNRtcTrack.pushImage(this.identifyID, image);\n  };\n  QNCameraVideoTrack.prototype.setWaterMark = function (waterMark) {\n    return QNRtcTrack.setWaterMark(this.identifyID, waterMark);\n  };\n  QNCameraVideoTrack.prototype.clearWaterMark = function () {\n    return QNRtcTrack.clearWaterMark(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.takeVideoSnapshot = function () {\n    return __awaiter(this, void 0, void 0, function () {\n      var platform;\n      var _this = this;\n      return __generator(this, function (_a) {\n        platform = uni.getSystemInfoSync().platform;\n        if (platform === \"ios\") {\n          return [2, new Promise(function (resolve, reject) {\n            QNRtcTrack.takeVideoSnapshot(_this.identifyID);\n            var listener = function listener(param) {\n              QNEvent.removeEventListener(\"onLocalVideoFrame\", listener);\n              resolve({\n                base64: _this.trimBase64(param.data)\n              });\n            };\n            QNEvent.addEventListener(\"onLocalVideoFrame\", listener);\n            setTimeout(function () {\n              QNEvent.removeEventListener(\"onLocalVideoFrame\", listener);\n              reject();\n            }, 5000);\n          })];\n        } else if (platform === \"android\") {\n          return [2, new Promise(function (resolve, reject) {\n            QNRtcTrack.takeVideoSnapshot(_this.trackID, function (data) {\n              resolve(data);\n            });\n          })];\n        }\n        return [2];\n      });\n    });\n  };\n  QNCameraVideoTrack.prototype.trimBase64 = function (base64) {\n    if (!base64) {\n      return \"\";\n    }\n    return base64.replace(/\\r|\\n/g, \"\");\n  };\n  return QNCameraVideoTrack;\n}(RTCLocalVideoTrack_1.QNLocalVideoTrack);\nexports.QNCameraVideoTrack = QNCameraVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQ2FtZXJhVmlkZW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuIiwidiIsIm9wIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5DYW1lcmFWaWRlb1RyYWNrIiwiUlRDTG9jYWxWaWRlb1RyYWNrXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIlFORXZlbnQiLCJfc3VwZXIiLCJhcmd1bWVudHMiLCJkZXN0cm95IiwiaWRlbnRpZnlJRCIsInNldFNlc3Npb25QcmVzZXQiLCJzZXNzaW9uUHJlc2V0Iiwic3RhcnRDYXB0dXJlIiwic3RvcENhcHR1cmUiLCJzd2l0Y2hDYW1lcmEiLCJ0dXJuTGlnaHRPbiIsInR1cm5MaWdodE9mZiIsIm1hbnVhbEZvY3VzIiwieCIsInNldEV4cG9zdXJlQ29tcGVuc2F0aW9uIiwiZ2V0TWF4RXhwb3N1cmVDb21wZW5zYXRpb24iLCJnZXRNaW5FeHBvc3VyZUNvbXBlbnNhdGlvbiIsInNldFZpZGVvT3JpZW50YXRpb24iLCJ2aWRlb09yaWVudGF0aW9uIiwiZ2V0VmlkZW9PcmllbnRhdGlvbiIsInNldFpvb20iLCJ6b29tIiwiZ2V0Wm9vbXMiLCJzZXRQcmV2aWV3RW5hYmxlZCIsImlzRW5hYmxlZCIsInNldEJlYXV0eSIsImJlYXV0eVNldHRpbmciLCJwcmV2aWV3TWlycm9yRnJvbnRGYWNpbmciLCJwcmV2aWV3TWlycm9yUmVhckZhY2luZyIsImVuY29kZU1pcnJvckZyb250RmFjaW5nIiwiZW5jb2RlTWlycm9yUmVhckZhY2luZyIsInB1c2hJbWFnZSIsImltYWdlIiwic2V0V2F0ZXJNYXJrIiwid2F0ZXJNYXJrIiwiY2xlYXJXYXRlck1hcmsiLCJ0YWtlVmlkZW9TbmFwc2hvdCIsInBsYXRmb3JtIiwiX3RoaXMiLCJfYSIsImdldFN5c3RlbUluZm9TeW5jIiwibGlzdGVuZXIiLCJwYXJhbSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiYXNlNjQiLCJ0cmltQmFzZTY0IiwiZGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwidHJhY2tJRCIsInJlcGxhY2UiLCJRTkxvY2FsVmlkZW9UcmFjayJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7O0FBQ2IsSUFBSUEsU0FBUyxHQUFJLElBQUksSUFBSSxJQUFJLENBQUNBLFNBQVMsSUFBTSxZQUFZO0VBQ3JELElBQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDaENGLGNBQWEsR0FBR0csTUFBTSxDQUFDQyxjQUFjLElBQ2hDO01BQUVDLFNBQVMsRUFBRTtJQUFHLENBQUMsWUFBWUMsS0FBSyxJQUFJLFVBQVVMLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUVELENBQUMsQ0FBQ0ksU0FBUyxHQUFHSCxDQUFDO0lBQUUsQ0FBRSxJQUM1RSxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFLEtB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QUM7WUFDRDlDLE9BQU8sQ0FBQytDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFTixRQUFRLENBQUM7WUFDdkRPLFVBQVUsQ0FBQyxZQUFZO2NBQ25CaEQsT0FBTyxDQUFDMkMsbUJBQW1CLENBQUMsbUJBQW1CLEVBQUVGLFFBQVEsQ0FBQztjQUMxRDlFLE1BQU0sRUFBRTtZQUNaLENBQUMsRUFBRSxJQUFJLENBQUM7VUFDWixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsTUFDSSxJQUFJMEUsUUFBUSxLQUFLLFNBQVMsRUFBRTtVQUM3QixPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUkzRSxPQUFPLENBQUMsVUFBVUQsT0FBTyxFQUFFRSxNQUFNLEVBQUU7WUFDMUNtQyxVQUFVLENBQUNzQyxpQkFBaUIsQ0FBQ0UsS0FBSyxDQUFDVyxPQUFPLEVBQUUsVUFBVUgsSUFBSSxFQUFFO2NBQ3hEckYsT0FBTyxDQUFDcUYsSUFBSSxDQUFDO1lBQ2pCLENBQUMsQ0FBQztVQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1g7UUFDQSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ2QsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUNEbkQsa0JBQWtCLENBQUNqRCxTQUFTLENBQUNtRyxVQUFVLEdBQUcsVUFBVUQsTUFBTSxFQUFFO0lBQ3hELElBQUksQ0FBQ0EsTUFBTSxFQUFFO01BQ1QsT0FBTyxFQUFFO0lBQ2I7SUFDQSxPQUFPQSxNQUFNLENBQUNNLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO0VBQ3ZDLENBQUM7RUFDRCxPQUFPdkQsa0JBQWtCO0FBQzdCLENBQUMsQ0FBQ0Msb0JBQW9CLENBQUN1RCxpQkFBaUIsQ0FBRTtBQUMxQzFELE9BQU8sQ0FBQ0Usa0JBQWtCLEdBQUdBLGtCQUFrQixDIiwiZmlsZSI6IjMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOQ2FtZXJhVmlkZW9UcmFjayA9IHZvaWQgMDtcbnZhciBSVENMb2NhbFZpZGVvVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ0xvY2FsVmlkZW9UcmFja1wiKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5FdmVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdnbG9iYWxFdmVudCcpO1xudmFyIFFOQ2FtZXJhVmlkZW9UcmFjayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFFOQ2FtZXJhVmlkZW9UcmFjaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRTkNhbWVyYVZpZGVvVHJhY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5kZXN0cm95KHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnNldFNlc3Npb25QcmVzZXQgPSBmdW5jdGlvbiAoc2Vzc2lvblByZXNldCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zZXRTZXNzaW9uUHJlc2V0KHRoaXMuaWRlbnRpZnlJRCwgc2Vzc2lvblByZXNldCk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnN0YXJ0Q2FwdHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc3RhcnRDYXB0dXJlKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnN0b3BDYXB0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zdG9wQ2FwdHVyZSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zd2l0Y2hDYW1lcmEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnN3aXRjaENhbWVyYSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS50dXJuTGlnaHRPbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sudHVybkxpZ2h0T24odGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUudHVybkxpZ2h0T2ZmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay50dXJuTGlnaHRPZmYodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUubWFudWFsRm9jdXMgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5tYW51YWxGb2N1cyh0aGlzLmlkZW50aWZ5SUQsIHgsIHkpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRFeHBvc3VyZUNvbXBlbnNhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zZXRFeHBvc3VyZUNvbXBlbnNhdGlvbih0aGlzLmlkZW50aWZ5SUQsIHZhbHVlKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuZ2V0TWF4RXhwb3N1cmVDb21wZW5zYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLmdldE1heEV4cG9zdXJlQ29tcGVuc2F0aW9uKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLmdldE1pbkV4cG9zdXJlQ29tcGVuc2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5nZXRNaW5FeHBvc3VyZUNvbXBlbnNhdGlvbih0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRWaWRlb09yaWVudGF0aW9uID0gZnVuY3Rpb24gKHZpZGVvT3JpZW50YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0VmlkZW9PcmllbnRhdGlvbih0aGlzLmlkZW50aWZ5SUQsIHZpZGVvT3JpZW50YXRpb24pO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5nZXRWaWRlb09yaWVudGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5nZXRWaWRlb09yaWVudGF0aW9uKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnNldFpvb20gPSBmdW5jdGlvbiAoem9vbSkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zZXRab29tKHRoaXMuaWRlbnRpZnlJRCwgem9vbSk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLmdldFpvb21zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5nZXRab29tcyh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRQcmV2aWV3RW5hYmxlZCA9IGZ1bmN0aW9uIChpc0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0UHJldmlld0VuYWJsZWQodGhpcy5pZGVudGlmeUlELCBpc0VuYWJsZWQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRCZWF1dHkgPSBmdW5jdGlvbiAoYmVhdXR5U2V0dGluZykge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zZXRCZWF1dHkodGhpcy5pZGVudGlmeUlELCBiZWF1dHlTZXR0aW5nKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUucHJldmlld01pcnJvckZyb250RmFjaW5nID0gZnVuY3Rpb24gKHByZXZpZXdNaXJyb3JGcm9udEZhY2luZykge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5wcmV2aWV3TWlycm9yRnJvbnRGYWNpbmcodGhpcy5pZGVudGlmeUlELCBwcmV2aWV3TWlycm9yRnJvbnRGYWNpbmcpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5wcmV2aWV3TWlycm9yUmVhckZhY2luZyA9IGZ1bmN0aW9uIChwcmV2aWV3TWlycm9yUmVhckZhY2luZykge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5wcmV2aWV3TWlycm9yUmVhckZhY2luZyh0aGlzLmlkZW50aWZ5SUQsIHByZXZpZXdNaXJyb3JSZWFyRmFjaW5nKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuZW5jb2RlTWlycm9yRnJvbnRGYWNpbmcgPSBmdW5jdGlvbiAoZW5jb2RlTWlycm9yRnJvbnRGYWNpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZW5jb2RlTWlycm9yRnJvbnRGYWNpbmcodGhpcy5pZGVudGlmeUlELCBlbmNvZGVNaXJyb3JGcm9udEZhY2luZyk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLmVuY29kZU1pcnJvclJlYXJGYWNpbmcgPSBmdW5jdGlvbiAoZW5jb2RlTWlycm9yUmVhckZhY2luZykge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5lbmNvZGVNaXJyb3JSZWFyRmFjaW5nKHRoaXMuaWRlbnRpZnlJRCwgZW5jb2RlTWlycm9yUmVhckZhY2luZyk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnB1c2hJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5wdXNoSW1hZ2UodGhpcy5pZGVudGlmeUlELCBpbWFnZSk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnNldFdhdGVyTWFyayA9IGZ1bmN0aW9uICh3YXRlck1hcmspIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0V2F0ZXJNYXJrKHRoaXMuaWRlbnRpZnlJRCwgd2F0ZXJNYXJrKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuY2xlYXJXYXRlck1hcmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLmNsZWFyV2F0ZXJNYXJrKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnRha2VWaWRlb1NuYXBzaG90ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGxhdGZvcm07XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm07XG4gICAgICAgICAgICAgICAgaWYgKHBsYXRmb3JtID09PSBcImlvc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFOUnRjVHJhY2sudGFrZVZpZGVvU25hcHNob3QoX3RoaXMuaWRlbnRpZnlJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFORXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uTG9jYWxWaWRlb0ZyYW1lXCIsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGJhc2U2NDogX3RoaXMudHJpbUJhc2U2NChwYXJhbS5kYXRhKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9uTG9jYWxWaWRlb0ZyYW1lXCIsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUU5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwib25Mb2NhbFZpZGVvRnJhbWVcIiwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGxhdGZvcm0gPT09IFwiYW5kcm9pZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFOUnRjVHJhY2sudGFrZVZpZGVvU25hcHNob3QoX3RoaXMudHJhY2tJRCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUudHJpbUJhc2U2NCA9IGZ1bmN0aW9uIChiYXNlNjQpIHtcbiAgICAgICAgaWYgKCFiYXNlNjQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYXNlNjQucmVwbGFjZSgvXFxyfFxcbi9nLCBcIlwiKTtcbiAgICB9O1xuICAgIHJldHVybiBRTkNhbWVyYVZpZGVvVHJhY2s7XG59KFJUQ0xvY2FsVmlkZW9UcmFja18xLlFOTG9jYWxWaWRlb1RyYWNrKSk7XG5leHBvcnRzLlFOQ2FtZXJhVmlkZW9UcmFjayA9IFFOQ2FtZXJhVmlkZW9UcmFjaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!************************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCLocalVideoTrack.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNLocalVideoTrack = void 0;\nvar RTCLocalTrack_1 = __webpack_require__(/*! ./RTCLocalTrack */ 29);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNLocalVideoTrack = function (_super) {\n  __extends(QNLocalVideoTrack, _super);\n  function QNLocalVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNLocalVideoTrack.prototype.sendSEI = function (message, repeatCount, uuid) {\n    return QNRtcTrack.sendSEI(this.identifyID, message, repeatCount, uuid);\n  };\n  return QNLocalVideoTrack;\n}(RTCLocalTrack_1.QNLocalTrack);\nexports.QNLocalVideoTrack = QNLocalVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTG9jYWxWaWRlb1RyYWNrLmpzIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5Mb2NhbFZpZGVvVHJhY2siLCJSVENMb2NhbFRyYWNrXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2VuZFNFSSIsIm1lc3NhZ2UiLCJyZXBlYXRDb3VudCIsInV1aWQiLCJpZGVudGlmeUlEIiwiUU5Mb2NhbFRyYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxTQUFTLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsU0FBUyxJQUFNLFlBQVk7RUFDckQsSUFBSUMsY0FBYSxHQUFHLHVCQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNoQ0YsY0FBYSxHQUFHRyxNQUFNLENBQUNDLGNBQWMsSUFDaEM7TUFBRUMsU0FBUyxFQUFFO0lBQUcsQ0FBQyxZQUFZQyxLQUFLLElBQUksVUFBVUwsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRUQsQ0FBQyxDQUFDSSxTQUFTLEdBQUdILENBQUM7SUFBRSxDQUFFLElBQzVFLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJSyxDQUFDLElBQUlMLENBQUM7UUFBRSxJQUFJQyxNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQUVOLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO01BQUM7SUFBQyxDQUFDO0lBQ3JHLE9BQU9QLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7RUFDOUIsQ0FBQztFQUNELE9BQU8sVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDbkIsSUFBSSxPQUFPQSxDQUFDLEtBQUssVUFBVSxJQUFJQSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUlTLFNBQVMsQ0FBQyxzQkFBc0IsR0FBR0MsTUFBTSxDQUFDVixDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RkYsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztJQUNuQixTQUFTVyxFQUFFLEdBQUc7TUFBRSxJQUFJLENBQUNDLFdBQVcsR0FBR2IsQ0FBQztJQUFFO0lBQ3RDQSxDQUFDLENBQUNPLFNBQVMsR0FBR04sQ0FBQyxLQUFLLElBQUksR0FBR0MsTUFBTSxDQUFDWSxNQUFNLENBQUNiLENBQUMsQ0FBQyxJQUFJVyxFQUFFLENBQUNMLFNBQVMsR0FBR04sQ0FBQyxDQUFDTSxTQUFTLEVBQUUsSUFBSUssRUFBRSxFQUFFLENBQUM7RUFDeEYsQ0FBQztBQUNMLENBQUMsRUFBRztBQUNKRyxPQUFPLENBQUNDLFVBQVUsR0FBRyxJQUFJO0FBQ3pCRCxPQUFPLENBQUNFLGlCQUFpQixHQUFHLEtBQUssQ0FBQztBQUNsQyxJQUFJQyxlQUFlLEdBQUdDLG1CQUFPLENBQUMseUJBQWlCLENBQUM7QUFDaEQsSUFBSUMsVUFBVSxHQUFHQyw4Q0FBdUIsQ0FBQyw0QkFBNEIsQ0FBQztBQUN0RSxJQUFJSixpQkFBaUIsR0FBSSxVQUFVSyxNQUFNLEVBQUU7RUFDdkN4QixTQUFTLENBQUNtQixpQkFBaUIsRUFBRUssTUFBTSxDQUFDO0VBQ3BDLFNBQVNMLGlCQUFpQixHQUFHO0lBQ3pCLE9BQU9LLE1BQU0sS0FBSyxJQUFJLElBQUlBLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLElBQUksRUFBRUMsU0FBUyxDQUFDLElBQUksSUFBSTtFQUNuRTtFQUNBUCxpQkFBaUIsQ0FBQ1YsU0FBUyxDQUFDa0IsT0FBTyxHQUFHLFVBQVVDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxJQUFJLEVBQUU7SUFDeEUsT0FBT1IsVUFBVSxDQUFDSyxPQUFPLENBQUMsSUFBSSxDQUFDSSxVQUFVLEVBQUVILE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxJQUFJLENBQUM7RUFDMUUsQ0FBQztFQUNELE9BQU9YLGlCQUFpQjtBQUM1QixDQUFDLENBQUNDLGVBQWUsQ0FBQ1ksWUFBWSxDQUFFO0FBQ2hDZixPQUFPLENBQUNFLGlCQUFpQixHQUFHQSxpQkFBaUIsQyIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOTG9jYWxWaWRlb1RyYWNrID0gdm9pZCAwO1xudmFyIFJUQ0xvY2FsVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ0xvY2FsVHJhY2tcIik7XG52YXIgUU5SdGNUcmFjayA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNUcmFjaycpO1xudmFyIFFOTG9jYWxWaWRlb1RyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5Mb2NhbFZpZGVvVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5Mb2NhbFZpZGVvVHJhY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUU5Mb2NhbFZpZGVvVHJhY2sucHJvdG90eXBlLnNlbmRTRUkgPSBmdW5jdGlvbiAobWVzc2FnZSwgcmVwZWF0Q291bnQsIHV1aWQpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2VuZFNFSSh0aGlzLmlkZW50aWZ5SUQsIG1lc3NhZ2UsIHJlcGVhdENvdW50LCB1dWlkKTtcbiAgICB9O1xuICAgIHJldHVybiBRTkxvY2FsVmlkZW9UcmFjaztcbn0oUlRDTG9jYWxUcmFja18xLlFOTG9jYWxUcmFjaykpO1xuZXhwb3J0cy5RTkxvY2FsVmlkZW9UcmFjayA9IFFOTG9jYWxWaWRlb1RyYWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!*****************************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCMicrophoneAudioTrack.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNMicrophoneAudioTrack = void 0;\nvar RTCLocalAudioTrack_1 = __webpack_require__(/*! ./RTCLocalAudioTrack */ 33);\nvar RTCAudioMixer_1 = __webpack_require__(/*! ../class/RTCAudioMixer */ 34);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNMicrophoneAudioTrack = function (_super) {\n  __extends(QNMicrophoneAudioTrack, _super);\n  function QNMicrophoneAudioTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNMicrophoneAudioTrack.prototype.setVolume = function (volume) {\n    return QNRtcTrack.setVolume(this.identifyID, volume);\n  };\n  QNMicrophoneAudioTrack.prototype.createAudioMixer = function (url) {\n    QNRtcTrack.createAudioMixer(this.identifyID, url);\n    return new RTCAudioMixer_1.QNAudioMixer(this.identifyID, url);\n  };\n  return QNMicrophoneAudioTrack;\n}(RTCLocalAudioTrack_1.QNLocalAudioTrack);\nexports.QNMicrophoneAudioTrack = QNMicrophoneAudioTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTWljcm9waG9uZUF1ZGlvVHJhY2suanMiXSwibmFtZXMiOlsiX19leHRlbmRzIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJRTk1pY3JvcGhvbmVBdWRpb1RyYWNrIiwiUlRDTG9jYWxBdWRpb1RyYWNrXzEiLCJyZXF1aXJlIiwiUlRDQXVkaW9NaXhlcl8xIiwiUU5SdGNUcmFjayIsInVuaSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0Vm9sdW1lIiwidm9sdW1lIiwiaWRlbnRpZnlJRCIsImNyZWF0ZUF1ZGlvTWl4ZXIiLCJ1cmwiLCJRTkF1ZGlvTWl4ZXIiLCJRTkxvY2FsQXVkaW9UcmFjayJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7O0FBQ2IsSUFBSUEsU0FBUyxHQUFJLElBQUksSUFBSSxJQUFJLENBQUNBLFNBQVMsSUFBTSxZQUFZO0VBQ3JELElBQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDaENGLGNBQWEsR0FBR0csTUFBTSxDQUFDQyxjQUFjLElBQ2hDO01BQUVDLFNBQVMsRUFBRTtJQUFHLENBQUMsWUFBWUMsS0FBSyxJQUFJLFVBQVVMLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUVELENBQUMsQ0FBQ0ksU0FBUyxHQUFHSCxDQUFDO0lBQUUsQ0FBRSxJQUM1RSxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFLEtBQUssSUFBSUssQ0FBQyxJQUFJTCxDQUFDO1FBQUUsSUFBSUMsTUFBTSxDQUFDSyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUFFTixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztNQUFDO0lBQUMsQ0FBQztJQUNyRyxPQUFPUCxjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ25CLElBQUksT0FBT0EsQ0FBQyxLQUFLLFVBQVUsSUFBSUEsQ0FBQyxLQUFLLElBQUksRUFDckMsTUFBTSxJQUFJUyxTQUFTLENBQUMsc0JBQXNCLEdBQUdDLE1BQU0sQ0FBQ1YsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUM7SUFDN0ZGLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7SUFDbkIsU0FBU1csRUFBRSxHQUFHO01BQUUsSUFBSSxDQUFDQyxXQUFXLEdBQUdiLENBQUM7SUFBRTtJQUN0Q0EsQ0FBQyxDQUFDTyxTQUFTLEdBQUdOLENBQUMsS0FBSyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDYixDQUFDLENBQUMsSUFBSVcsRUFBRSxDQUFDTCxTQUFTLEdBQUdOLENBQUMsQ0FBQ00sU0FBUyxFQUFFLElBQUlLLEVBQUUsRUFBRSxDQUFDO0VBQ3hGLENBQUM7QUFDTCxDQUFDLEVBQUc7QUFDSkcsT0FBTyxDQUFDQyxVQUFVLEdBQUcsSUFBSTtBQUN6QkQsT0FBTyxDQUFDRSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFDdkMsSUFBSUMsb0JBQW9CLEdBQUdDLG1CQUFPLENBQUMsOEJBQXNCLENBQUM7QUFDMUQsSUFBSUMsZUFBZSxHQUFHRCxtQkFBTyxDQUFDLGdDQUF3QixDQUFDO0FBQ3ZELElBQUlFLFVBQVUsR0FBR0MsOENBQXVCLENBQUMsNEJBQTRCLENBQUM7QUFDdEUsSUFBSUwsc0JBQXNCLEdBQUksVUFBVU0sTUFBTSxFQUFFO0VBQzVDekIsU0FBUyxDQUFDbUIsc0JBQXNCLEVBQUVNLE1BQU0sQ0FBQztFQUN6QyxTQUFTTixzQkFBc0IsR0FBRztJQUM5QixPQUFPTSxNQUFNLEtBQUssSUFBSSxJQUFJQSxNQUFNLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUVDLFNBQVMsQ0FBQyxJQUFJLElBQUk7RUFDbkU7RUFDQVIsc0JBQXNCLENBQUNWLFNBQVMsQ0FBQ21CLFNBQVMsR0FBRyxVQUFVQyxNQUFNLEVBQUU7SUFDM0QsT0FBT04sVUFBVSxDQUFDSyxTQUFTLENBQUMsSUFBSSxDQUFDRSxVQUFVLEVBQUVELE1BQU0sQ0FBQztFQUN4RCxDQUFDO0VBQ0RWLHNCQUFzQixDQUFDVixTQUFTLENBQUNzQixnQkFBZ0IsR0FBRyxVQUFVQyxHQUFHLEVBQUU7SUFDL0RULFVBQVUsQ0FBQ1EsZ0JBQWdCLENBQUMsSUFBSSxDQUFDRCxVQUFVLEVBQUVFLEdBQUcsQ0FBQztJQUNqRCxPQUFPLElBQUlWLGVBQWUsQ0FBQ1csWUFBWSxDQUFDLElBQUksQ0FBQ0gsVUFBVSxFQUFFRSxHQUFHLENBQUM7RUFDakUsQ0FBQztFQUNELE9BQU9iLHNCQUFzQjtBQUNqQyxDQUFDLENBQUNDLG9CQUFvQixDQUFDYyxpQkFBaUIsQ0FBRTtBQUMxQ2pCLE9BQU8sQ0FBQ0Usc0JBQXNCLEdBQUdBLHNCQUFzQixDIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5NaWNyb3Bob25lQXVkaW9UcmFjayA9IHZvaWQgMDtcbnZhciBSVENMb2NhbEF1ZGlvVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ0xvY2FsQXVkaW9UcmFja1wiKTtcbnZhciBSVENBdWRpb01peGVyXzEgPSByZXF1aXJlKFwiLi4vY2xhc3MvUlRDQXVkaW9NaXhlclwiKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5NaWNyb3Bob25lQXVkaW9UcmFjayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFFOTWljcm9waG9uZUF1ZGlvVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5NaWNyb3Bob25lQXVkaW9UcmFjaygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRTk1pY3JvcGhvbmVBdWRpb1RyYWNrLnByb3RvdHlwZS5zZXRWb2x1bWUgPSBmdW5jdGlvbiAodm9sdW1lKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFZvbHVtZSh0aGlzLmlkZW50aWZ5SUQsIHZvbHVtZSk7XG4gICAgfTtcbiAgICBRTk1pY3JvcGhvbmVBdWRpb1RyYWNrLnByb3RvdHlwZS5jcmVhdGVBdWRpb01peGVyID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICBRTlJ0Y1RyYWNrLmNyZWF0ZUF1ZGlvTWl4ZXIodGhpcy5pZGVudGlmeUlELCB1cmwpO1xuICAgICAgICByZXR1cm4gbmV3IFJUQ0F1ZGlvTWl4ZXJfMS5RTkF1ZGlvTWl4ZXIodGhpcy5pZGVudGlmeUlELCB1cmwpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOTWljcm9waG9uZUF1ZGlvVHJhY2s7XG59KFJUQ0xvY2FsQXVkaW9UcmFja18xLlFOTG9jYWxBdWRpb1RyYWNrKSk7XG5leHBvcnRzLlFOTWljcm9waG9uZUF1ZGlvVHJhY2sgPSBRTk1pY3JvcGhvbmVBdWRpb1RyYWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!************************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCLocalAudioTrack.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNLocalAudioTrack = void 0;\nvar RTCLocalTrack_1 = __webpack_require__(/*! ./RTCLocalTrack */ 29);\nvar QNLocalAudioTrack = function (_super) {\n  __extends(QNLocalAudioTrack, _super);\n  function QNLocalAudioTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  return QNLocalAudioTrack;\n}(RTCLocalTrack_1.QNLocalTrack);\nexports.QNLocalAudioTrack = QNLocalAudioTrack;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTG9jYWxBdWRpb1RyYWNrLmpzIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5Mb2NhbEF1ZGlvVHJhY2siLCJSVENMb2NhbFRyYWNrXzEiLCJyZXF1aXJlIiwiX3N1cGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJRTkxvY2FsVHJhY2siXSwibWFwcGluZ3MiOiJBQUFhOztBQUNiLElBQUlBLFNBQVMsR0FBSSxJQUFJLElBQUksSUFBSSxDQUFDQSxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJQyxjQUFhLEdBQUcsdUJBQVVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ2hDRixjQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBYyxJQUNoQztNQUFFQyxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVlDLEtBQUssSUFBSSxVQUFVTCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFRCxDQUFDLENBQUNJLFNBQVMsR0FBR0gsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRSxLQUFLLElBQUlLLENBQUMsSUFBSUwsQ0FBQztRQUFFLElBQUlDLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFBRU4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7TUFBQztJQUFDLENBQUM7SUFDckcsT0FBT1AsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztFQUM5QixDQUFDO0VBQ0QsT0FBTyxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNuQixJQUFJLE9BQU9BLENBQUMsS0FBSyxVQUFVLElBQUlBLENBQUMsS0FBSyxJQUFJLEVBQ3JDLE1BQU0sSUFBSVMsU0FBUyxDQUFDLHNCQUFzQixHQUFHQyxNQUFNLENBQUNWLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDO0lBQzdGRixjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0lBQ25CLFNBQVNXLEVBQUUsR0FBRztNQUFFLElBQUksQ0FBQ0MsV0FBVyxHQUFHYixDQUFDO0lBQUU7SUFDdENBLENBQUMsQ0FBQ08sU0FBUyxHQUFHTixDQUFDLEtBQUssSUFBSSxHQUFHQyxNQUFNLENBQUNZLE1BQU0sQ0FBQ2IsQ0FBQyxDQUFDLElBQUlXLEVBQUUsQ0FBQ0wsU0FBUyxHQUFHTixDQUFDLENBQUNNLFNBQVMsRUFBRSxJQUFJSyxFQUFFLEVBQUUsQ0FBQztFQUN4RixDQUFDO0FBQ0wsQ0FBQyxFQUFHO0FBQ0pHLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHLElBQUk7QUFDekJELE9BQU8sQ0FBQ0UsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLElBQUlDLGVBQWUsR0FBR0MsbUJBQU8sQ0FBQyx5QkFBaUIsQ0FBQztBQUNoRCxJQUFJRixpQkFBaUIsR0FBSSxVQUFVRyxNQUFNLEVBQUU7RUFDdkN0QixTQUFTLENBQUNtQixpQkFBaUIsRUFBRUcsTUFBTSxDQUFDO0VBQ3BDLFNBQVNILGlCQUFpQixHQUFHO0lBQ3pCLE9BQU9HLE1BQU0sS0FBSyxJQUFJLElBQUlBLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLElBQUksRUFBRUMsU0FBUyxDQUFDLElBQUksSUFBSTtFQUNuRTtFQUNBLE9BQU9MLGlCQUFpQjtBQUM1QixDQUFDLENBQUNDLGVBQWUsQ0FBQ0ssWUFBWSxDQUFFO0FBQ2hDUixPQUFPLENBQUNFLGlCQUFpQixHQUFHQSxpQkFBaUIiLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5RTkxvY2FsQXVkaW9UcmFjayA9IHZvaWQgMDtcbnZhciBSVENMb2NhbFRyYWNrXzEgPSByZXF1aXJlKFwiLi9SVENMb2NhbFRyYWNrXCIpO1xudmFyIFFOTG9jYWxBdWRpb1RyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5Mb2NhbEF1ZGlvVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5Mb2NhbEF1ZGlvVHJhY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFFOTG9jYWxBdWRpb1RyYWNrO1xufShSVENMb2NhbFRyYWNrXzEuUU5Mb2NhbFRyYWNrKSk7XG5leHBvcnRzLlFOTG9jYWxBdWRpb1RyYWNrID0gUU5Mb2NhbEF1ZGlvVHJhY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!*******************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCAudioMixer.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nexports.__esModule = true;\nexports.QNAudioMixer = void 0;\nvar QNRtcAudioMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNAudioMixer = function () {\n  function QNAudioMixer(identifyID, url) {\n    this.variationList = [\"onStateChanged\"];\n    this.identifyID = identifyID;\n    this.url = url;\n  }\n  QNAudioMixer.prototype.createAudioMixerCallback = function (name, listener) {\n    if (name === \"onStateChanged\") {\n      var variationCallback = function variationCallback(params) {\n        if (params.state) {\n          listener(params);\n        }\n      };\n      return variationCallback;\n    }\n  };\n  QNAudioMixer.prototype.on = function (name, listener) {\n    if (this.variationList.some(function (item) {\n      return item === name;\n    })) {\n      var callback = this.createAudioMixerCallback(name, listener);\n      QNEvent.addEventListener(name, callback);\n    } else {\n      QNEvent.addEventListener(name, listener);\n    }\n  };\n  QNAudioMixer.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNAudioMixer.prototype.start = function (loopTimes) {\n    QNRtcAudioMixer.start(this.identifyID, loopTimes);\n  };\n  QNAudioMixer.prototype.stop = function () {\n    QNRtcAudioMixer.stop(this.identifyID);\n  };\n  QNAudioMixer.prototype.resume = function () {\n    QNRtcAudioMixer.resume(this.identifyID);\n  };\n  QNAudioMixer.prototype.pause = function () {\n    QNRtcAudioMixer.pause(this.identifyID);\n  };\n  QNAudioMixer.prototype.seekTo = function (timeUs) {\n    QNRtcAudioMixer.seekTo(this.identifyID, timeUs);\n  };\n  QNAudioMixer.prototype.setMixingVolume = function (microphoneVolume, musicVolume) {\n    QNRtcAudioMixer.setMixingVolume(this.identifyID, microphoneVolume, musicVolume);\n  };\n  QNAudioMixer.prototype.setPlayingVolume = function (volume) {\n    QNRtcAudioMixer.setPlayingVolume(this.identifyID, volume);\n  };\n  QNAudioMixer.prototype.getDuration = function () {\n    return QNRtcAudioMixer.getDuration(this.identifyID);\n  };\n  QNAudioMixer.prototype.getCurrentPosition = function () {\n    return QNRtcAudioMixer.getCurrentPosition(this.identifyID);\n  };\n  QNAudioMixer.prototype.setPlayBack = function (playBack) {\n    QNRtcAudioMixer.setPlayBack(this.identifyID, playBack);\n  };\n  return QNAudioMixer;\n}();\nexports.QNAudioMixer = QNAudioMixer;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQXVkaW9NaXhlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOQXVkaW9NaXhlciIsIlFOUnRjQXVkaW9NaXhlciIsInVuaSIsIlFORXZlbnQiLCJpZGVudGlmeUlEIiwidXJsIiwidmFyaWF0aW9uTGlzdCIsInByb3RvdHlwZSIsImNyZWF0ZUF1ZGlvTWl4ZXJDYWxsYmFjayIsIm5hbWUiLCJsaXN0ZW5lciIsInZhcmlhdGlvbkNhbGxiYWNrIiwicGFyYW1zIiwic3RhdGUiLCJvbiIsInNvbWUiLCJpdGVtIiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXJ0IiwibG9vcFRpbWVzIiwic3RvcCIsInJlc3VtZSIsInBhdXNlIiwic2Vla1RvIiwidGltZVVzIiwic2V0TWl4aW5nVm9sdW1lIiwibWljcm9waG9uZVZvbHVtZSIsIm11c2ljVm9sdW1lIiwic2V0UGxheWluZ1ZvbHVtZSIsInZvbHVtZSIsImdldER1cmF0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic2V0UGxheUJhY2siLCJwbGF5QmFjayJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7O0FBQ2JBLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHLElBQUk7QUFDekJELE9BQU8sQ0FBQ0UsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUM3QixJQUFJQyxlQUFlLEdBQUdDLDhDQUF1QixDQUFDLGlDQUFpQyxDQUFDO0FBQ2hGLElBQUlDLE9BQU8sR0FBR0QsOENBQXVCLENBQUMsYUFBYSxDQUFDO0FBQ3BELElBQUlGLFlBQVksR0FBSSxZQUFZO0VBQzVCLFNBQVNBLFlBQVksQ0FBQ0ksVUFBVSxFQUFFQyxHQUFHLEVBQUU7SUFDbkMsSUFBSSxDQUFDQyxhQUFhLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN2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VUFBVSxDQUFDO0VBQ3ZELENBQUM7RUFDREosWUFBWSxDQUFDTyxTQUFTLENBQUMyQixrQkFBa0IsR0FBRyxZQUFZO0lBQ3BELE9BQU9qQyxlQUFlLENBQUNpQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM5QixVQUFVLENBQUM7RUFDOUQsQ0FBQztFQUNESixZQUFZLENBQUNPLFNBQVMsQ0FBQzRCLFdBQVcsR0FBRyxVQUFVQyxRQUFRLEVBQUU7SUFDckRuQyxlQUFlLENBQUNrQyxXQUFXLENBQUMsSUFBSSxDQUFDL0IsVUFBVSxFQUFFZ0MsUUFBUSxDQUFDO0VBQzFELENBQUM7RUFDRCxPQUFPcEMsWUFBWTtBQUN2QixDQUFDLEVBQUc7QUFDSkYsT0FBTyxDQUFDRSxZQUFZLEdBQUdBLFlBQVksQyIsImZpbGUiOiIzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5BdWRpb01peGVyID0gdm9pZCAwO1xudmFyIFFOUnRjQXVkaW9NaXhlciA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNBdWRpb01peGVyJyk7XG52YXIgUU5FdmVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdnbG9iYWxFdmVudCcpO1xudmFyIFFOQXVkaW9NaXhlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUU5BdWRpb01peGVyKGlkZW50aWZ5SUQsIHVybCkge1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkxpc3QgPSBbXCJvblN0YXRlQ2hhbmdlZFwiXTtcbiAgICAgICAgdGhpcy5pZGVudGlmeUlEID0gaWRlbnRpZnlJRDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfVxuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUuY3JlYXRlQXVkaW9NaXhlckNhbGxiYWNrID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBcIm9uU3RhdGVDaGFuZ2VkXCIpIHtcbiAgICAgICAgICAgIHZhciB2YXJpYXRpb25DYWxsYmFjayA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB2YXJpYXRpb25DYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAodGhpcy52YXJpYXRpb25MaXN0LnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0gPT09IG5hbWU7IH0pKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmNyZWF0ZUF1ZGlvTWl4ZXJDYWxsYmFjayhuYW1lLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICBRTkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUU5FdmVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgUU5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAobG9vcFRpbWVzKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NaXhlci5zdGFydCh0aGlzLmlkZW50aWZ5SUQsIGxvb3BUaW1lcyk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NaXhlci5zdG9wKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLnJlc3VtZSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLnBhdXNlKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLnNlZWtUbyA9IGZ1bmN0aW9uICh0aW1lVXMpIHtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLnNlZWtUbyh0aGlzLmlkZW50aWZ5SUQsIHRpbWVVcyk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLnNldE1peGluZ1ZvbHVtZSA9IGZ1bmN0aW9uIChtaWNyb3Bob25lVm9sdW1lLCBtdXNpY1ZvbHVtZSkge1xuICAgICAgICBRTlJ0Y0F1ZGlvTWl4ZXIuc2V0TWl4aW5nVm9sdW1lKHRoaXMuaWRlbnRpZnlJRCwgbWljcm9waG9uZVZvbHVtZSwgbXVzaWNWb2x1bWUpO1xuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5zZXRQbGF5aW5nVm9sdW1lID0gZnVuY3Rpb24gKHZvbHVtZSkge1xuICAgICAgICBRTlJ0Y0F1ZGlvTWl4ZXIuc2V0UGxheWluZ1ZvbHVtZSh0aGlzLmlkZW50aWZ5SUQsIHZvbHVtZSk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLmdldER1cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb01peGVyLmdldER1cmF0aW9uKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLmdldEN1cnJlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjQXVkaW9NaXhlci5nZXRDdXJyZW50UG9zaXRpb24odGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUuc2V0UGxheUJhY2sgPSBmdW5jdGlvbiAocGxheUJhY2spIHtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLnNldFBsYXlCYWNrKHRoaXMuaWRlbnRpZnlJRCwgcGxheUJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFFOQXVkaW9NaXhlcjtcbn0oKSk7XG5leHBvcnRzLlFOQXVkaW9NaXhlciA9IFFOQXVkaW9NaXhlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!*************************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCScreenVideoTrack.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNScreenVideoTrack = void 0;\nvar RTCLocalVideoTrack_1 = __webpack_require__(/*! ./RTCLocalVideoTrack */ 31);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNScreenVideoTrack = function (_super) {\n  __extends(QNScreenVideoTrack, _super);\n  function QNScreenVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNScreenVideoTrack.prototype.setScreenRecorderFrameRate = function (screenRecorderFrameRate) {\n    return QNRtcTrack.setScreenRecorderFrameRate(this.identifyID, screenRecorderFrameRate);\n  };\n  return QNScreenVideoTrack;\n}(RTCLocalVideoTrack_1.QNLocalVideoTrack);\nexports.QNScreenVideoTrack = QNScreenVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDU2NyZWVuVmlkZW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOU2NyZWVuVmlkZW9UcmFjayIsIlJUQ0xvY2FsVmlkZW9UcmFja18xIiwicmVxdWlyZSIsIlFOUnRjVHJhY2siLCJ1bmkiLCJfc3VwZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsInNldFNjcmVlblJlY29yZGVyRnJhbWVSYXRlIiwic2NyZWVuUmVjb3JkZXJGcmFtZVJhdGUiLCJpZGVudGlmeUlEIiwiUU5Mb2NhbFZpZGVvVHJhY2siXSwibWFwcGluZ3MiOiJBQUFBLHNGQUFhOztBQUNiLElBQUlBLFNBQVMsR0FBSSxJQUFJLElBQUksSUFBSSxDQUFDQSxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJQyxjQUFhLEdBQUcsdUJBQVVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ2hDRixjQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBYyxJQUNoQztNQUFFQyxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVlDLEtBQUssSUFBSSxVQUFVTCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFRCxDQUFDLENBQUNJLFNBQVMsR0FBR0gsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRSxLQUFLLElBQUlLLENBQUMsSUFBSUwsQ0FBQztRQUFFLElBQUlDLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFBRU4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7TUFBQztJQUFDLENBQUM7SUFDckcsT0FBT1AsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztFQUM5QixDQUFDO0VBQ0QsT0FBTyxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNuQixJQUFJLE9BQU9BLENBQUMsS0FBSyxVQUFVLElBQUlBLENBQUMsS0FBSyxJQUFJLEVBQ3JDLE1BQU0sSUFBSVMsU0FBUyxDQUFDLHNCQUFzQixHQUFHQyxNQUFNLENBQUNWLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDO0lBQzdGRixjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0lBQ25CLFNBQVNXLEVBQUUsR0FBRztNQUFFLElBQUksQ0FBQ0MsV0FBVyxHQUFHYixDQUFDO0lBQUU7SUFDdENBLENBQUMsQ0FBQ08sU0FBUyxHQUFHTixDQUFDLEtBQUssSUFBSSxHQUFHQyxNQUFNLENBQUNZLE1BQU0sQ0FBQ2IsQ0FBQyxDQUFDLElBQUlXLEVBQUUsQ0FBQ0wsU0FBUyxHQUFHTixDQUFDLENBQUNNLFNBQVMsRUFBRSxJQUFJSyxFQUFFLEVBQUUsQ0FBQztFQUN4RixDQUFDO0FBQ0wsQ0FBQyxFQUFHO0FBQ0pHLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHLElBQUk7QUFDekJELE9BQU8sQ0FBQ0Usa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0FBQ25DLElBQUlDLG9CQUFvQixHQUFHQyxtQkFBTyxDQUFDLDhCQUFzQixDQUFDO0FBQzFELElBQUlDLFVBQVUsR0FBR0MsOENBQXVCLENBQUMsNEJBQTRCLENBQUM7QUFDdEUsSUFBSUosa0JBQWtCLEdBQUksVUFBVUssTUFBTSxFQUFFO0VBQ3hDeEIsU0FBUyxDQUFDbUIsa0JBQWtCLEVBQUVLLE1BQU0sQ0FBQztFQUNyQyxTQUFTTCxrQkFBa0IsR0FBRztJQUMxQixPQUFPSyxNQUFNLEtBQUssSUFBSSxJQUFJQSxNQUFNLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUVDLFNBQVMsQ0FBQyxJQUFJLElBQUk7RUFDbkU7RUFDQVAsa0JBQWtCLENBQUNWLFNBQVMsQ0FBQ2tCLDBCQUEwQixHQUFHLFVBQVVDLHVCQUF1QixFQUFFO0lBQ3pGLE9BQU9OLFVBQVUsQ0FBQ0ssMEJBQTBCLENBQUMsSUFBSSxDQUFDRSxVQUFVLEVBQUVELHVCQUF1QixDQUFDO0VBQzFGLENBQUM7RUFDRCxPQUFPVCxrQkFBa0I7QUFDN0IsQ0FBQyxDQUFDQyxvQkFBb0IsQ0FBQ1UsaUJBQWlCLENBQUU7QUFDMUNiLE9BQU8sQ0FBQ0Usa0JBQWtCLEdBQUdBLGtCQUFrQixDIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5TY3JlZW5WaWRlb1RyYWNrID0gdm9pZCAwO1xudmFyIFJUQ0xvY2FsVmlkZW9UcmFja18xID0gcmVxdWlyZShcIi4vUlRDTG9jYWxWaWRlb1RyYWNrXCIpO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTlNjcmVlblZpZGVvVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTlNjcmVlblZpZGVvVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5TY3JlZW5WaWRlb1RyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOU2NyZWVuVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0U2NyZWVuUmVjb3JkZXJGcmFtZVJhdGUgPSBmdW5jdGlvbiAoc2NyZWVuUmVjb3JkZXJGcmFtZVJhdGUpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0U2NyZWVuUmVjb3JkZXJGcmFtZVJhdGUodGhpcy5pZGVudGlmeUlELCBzY3JlZW5SZWNvcmRlckZyYW1lUmF0ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5TY3JlZW5WaWRlb1RyYWNrO1xufShSVENMb2NhbFZpZGVvVHJhY2tfMS5RTkxvY2FsVmlkZW9UcmFjaykpO1xuZXhwb3J0cy5RTlNjcmVlblZpZGVvVHJhY2sgPSBRTlNjcmVlblZpZGVvVHJhY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!**********************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/interface/RTCInterface.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) {\n    if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n  }\n};\nexports.__esModule = true;\n__exportStar(__webpack_require__(/*! ../enum/RTCEnum */ 23), exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvaW50ZXJmYWNlL1JUQ0ludGVyZmFjZS5qcyJdLCJuYW1lcyI6WyJfX2NyZWF0ZUJpbmRpbmciLCJPYmplY3QiLCJjcmVhdGUiLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIl9fZXhwb3J0U3RhciIsImV4cG9ydHMiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX19lc01vZHVsZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFhOztBQUNiLElBQUlBLGVBQWUsR0FBSSxJQUFJLElBQUksSUFBSSxDQUFDQSxlQUFlLEtBQU1DLE1BQU0sQ0FBQ0MsTUFBTSxHQUFJLFVBQVNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLEVBQUUsRUFBRTtFQUM1RixJQUFJQSxFQUFFLEtBQUtDLFNBQVMsRUFBRUQsRUFBRSxHQUFHRCxDQUFDO0VBQzVCSixNQUFNLENBQUNPLGNBQWMsQ0FBQ0wsQ0FBQyxFQUFFRyxFQUFFLEVBQUU7SUFBRUcsVUFBVSxFQUFFLElBQUk7SUFBRUMsR0FBRyxFQUFFLGVBQVc7TUFBRSxPQUFPTixDQUFDLENBQUNDLENBQUMsQ0FBQztJQUFFO0VBQUUsQ0FBQyxDQUFDO0FBQ3hGLENBQUMsR0FBSyxVQUFTRixDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxFQUFFLEVBQUU7RUFDeEIsSUFBSUEsRUFBRSxLQUFLQyxTQUFTLEVBQUVELEVBQUUsR0FBR0QsQ0FBQztFQUM1QkYsQ0FBQyxDQUFDRyxFQUFFLENBQUMsR0FBR0YsQ0FBQyxDQUFDQyxDQUFDLENBQUM7QUFDaEIsQ0FBRSxDQUFDO0FBQ0gsSUFBSU0sWUFBWSxHQUFJLElBQUksSUFBSSxJQUFJLENBQUNBLFlBQVksSUFBSyxVQUFTUCxDQUFDLEVBQUVRLE9BQU8sRUFBRTtFQUNuRSxLQUFLLElBQUlDLENBQUMsSUFBSVQsQ0FBQztJQUFFLElBQUlTLENBQUMsS0FBSyxTQUFTLElBQUksQ0FBQ1osTUFBTSxDQUFDYSxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDSixPQUFPLEVBQUVDLENBQUMsQ0FBQyxFQUFFYixlQUFlLENBQUNZLE9BQU8sRUFBRVIsQ0FBQyxFQUFFUyxDQUFDLENBQUM7RUFBQztBQUM5SCxDQUFDO0FBQ0RELE9BQU8sQ0FBQ0ssVUFBVSxHQUFHLElBQUk7QUFDekJOLFlBQVksQ0FBQ08sbUJBQU8sQ0FBQyx5QkFBaUIsQ0FBQyxFQUFFTixPQUFPLENBQUMiLCJmaWxlIjoiMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi4vZW51bS9SVENFbnVtXCIpLCBleHBvcnRzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!********************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCEvent.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvUlRDRXZlbnQuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9fZXNNb2R1bGUiXSwibWFwcGluZ3MiOiJBQUFhOztBQUNiQSxPQUFPLENBQUNDLFVBQVUsR0FBRyxJQUFJIiwiZmlsZSI6IjM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = void 0;
exports.createLogger = createLogger;
exports.default = exports.createNamespacedHelpers = void 0;
exports.install = install;
exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 12));
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);
  if (version >= 2) {
    Vue.mixin({
      beforeCreate: vuexInit
    });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};
      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ? options.store() : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}
var target = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function devtoolPlugin(store) {
  if (!devtoolHook) {
    return;
  }
  store._devtoolHook = devtoolHook;
  devtoolHook.emit('vuex:init', store);
  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });
  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, {
    prepend: true
  });
  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, {
    prepend: true
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find(list, f) {
  return list.filter(f)[0];
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy(obj, cache) {
  if (cache === void 0) cache = [];

  // just return if obj is immutable value
  if (obj === null || (0, _typeof2.default)(obj) !== 'object') {
    return obj;
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) {
    return c.original === obj;
  });
  if (hit) {
    return hit.copy;
  }
  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });
  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });
  return copy;
}

/**
 * forEach for object
 */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {
    return fn(obj[key], key);
  });
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPromise(val) {
  return val && typeof val.then === 'function';
}
function assert(condition, msg) {
  if (!condition) {
    throw new Error("[vuex] " + msg);
  }
}
function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};
var prototypeAccessors = {
  namespaced: {
    configurable: true
  }
};
prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};
Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};
Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};
Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};
Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};
Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};
Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};
Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};
Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};
Object.defineProperties(Module.prototype, prototypeAccessors);
var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};
ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};
ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};
ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};
ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;
  if (true) {
    assertRawModule(path, rawModule);
  }
  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};
ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);
  if (!child) {
    if (true) {
      console.warn("[vuex] trying to unregister module '" + key + "', which is " + "not registered");
    }
    return;
  }
  if (!child.runtime) {
    return;
  }
  parent.removeChild(key);
};
ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (parent) {
    return parent.hasChild(key);
  }
  return false;
};
function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " + 'manual reload is needed');
        }
        return;
      }
      update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
    }
  }
}
var functionAssert = {
  assert: function assert(value) {
    return typeof value === 'function';
  },
  expected: 'function'
};
var objectAssert = {
  assert: function assert(value) {
    return typeof value === 'function' || (0, _typeof2.default)(value) === 'object' && typeof value.handler === 'function';
  },
  expected: 'function or object with "handler" function'
};
var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};
function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {
      return;
    }
    var assertOptions = assertTypes[key];
    forEachValue(rawModule[key], function (value, type) {
      assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
    });
  });
}
function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}
var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }
  var plugins = options.plugins;
  if (plugins === void 0) plugins = [];
  var strict = options.strict;
  if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;
  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {
    return plugin(this$1);
  });
  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};
exports.Store = Store;
var prototypeAccessors$1 = {
  state: {
    configurable: true
  }
};
prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};
prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};
Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;
  var mutation = {
    type: type,
    payload: payload
  };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {
    return sub(mutation, this$1.state);
  });
  if ( true && options && options.silent) {
    console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. " + 'Use the filter functionality in the vue-devtools');
  }
};
Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;
  var action = {
    type: type,
    payload: payload
  };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }
  try {
    this._actionSubscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {
      return sub.before;
    }).forEach(function (sub) {
      return sub.before(action, this$1.state);
    });
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }
  var result = entry.length > 1 ? Promise.all(entry.map(function (handler) {
    return handler(payload);
  })) : entry[0](payload);
  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.filter(function (sub) {
          return sub.after;
        }).forEach(function (sub) {
          return sub.after(action, this$1.state);
        });
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.filter(function (sub) {
          return sub.error;
        }).forEach(function (sub) {
          return sub.error(action, this$1.state, error);
        });
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};
Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};
Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? {
    before: fn
  } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};
Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;
  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {
    return getter(this$1.state, this$1.getters);
  }, cb, options);
};
Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;
  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};
Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};
  if (typeof path === 'string') {
    path = [path];
  }
  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};
Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;
  if (typeof path === 'string') {
    path = [path];
  }
  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }
  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};
Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {
    path = [path];
  }
  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }
  return this._modules.isRegistered(path);
};
Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};
Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};
Object.defineProperties(Store.prototype, prototypeAccessors$1);
function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ? subs.unshift(fn) : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}
function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}
function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function get() {
        return store._vm[key];
      },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }
  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {
      return oldVm.$destroy();
    });
  }
}
function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }
  var local = module.context = makeLocalContext(store, namespace, path);
  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });
  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });
  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });
  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';
  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }
      return store.dispatch(type, payload);
    },
    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }
      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function () {
        return store.getters;
      } : function () {
        return makeLocalGetters(store, namespace);
      }
    },
    state: {
      get: function get() {
        return getNestedState(store.state, path);
      }
    }
  });
  return local;
}
function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {
        return;
      }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {
          return store.getters[type];
        },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }
  return store._makeLocalGettersCache[namespace];
}
function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}
function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}
function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(local.state,
    // local state
    local.getters,
    // local getters
    store.state,
    // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {
    return this._data.$$state;
  }, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, {
    deep: true,
    sync: true
  });
}
function getNestedState(state, path) {
  return path.reduce(function (state, key) {
    return state[key];
  }, state);
}
function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }
  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + (0, _typeof2.default)(type) + ".");
  }
  return {
    type: type,
    payload: payload,
    options: options
  };
}
function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');
    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ? val.call(this, state, getters) : state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedMutation() {
      var args = [],
        len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedAction() {
      var args = [],
        len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {
  return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace)
  };
};

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ? map.map(function (key) {
    return {
      key: key,
      val: key
    };
  }) : Object.keys(map).map(function (key) {
    return {
      key: key,
      val: map[key]
    };
  });
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger(ref) {
  if (ref === void 0) ref = {};
  var collapsed = ref.collapsed;
  if (collapsed === void 0) collapsed = true;
  var filter = ref.filter;
  if (filter === void 0) filter = function filter(mutation, stateBefore, stateAfter) {
    return true;
  };
  var transformer = ref.transformer;
  if (transformer === void 0) transformer = function transformer(state) {
    return state;
  };
  var mutationTransformer = ref.mutationTransformer;
  if (mutationTransformer === void 0) mutationTransformer = function mutationTransformer(mut) {
    return mut;
  };
  var actionFilter = ref.actionFilter;
  if (actionFilter === void 0) actionFilter = function actionFilter(action, state) {
    return true;
  };
  var actionTransformer = ref.actionTransformer;
  if (actionTransformer === void 0) actionTransformer = function actionTransformer(act) {
    return act;
  };
  var logMutations = ref.logMutations;
  if (logMutations === void 0) logMutations = true;
  var logActions = ref.logActions;
  if (logActions === void 0) logActions = true;
  var logger = ref.logger;
  if (logger === void 0) logger = console;
  return function (store) {
    var prevState = deepCopy(store.state);
    if (typeof logger === 'undefined') {
      return;
    }
    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);
        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + mutation.type + formattedTime;
          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }
        prevState = nextState;
      });
    }
    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + action.type + formattedTime;
          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  };
}
function startMessage(logger, message, collapsed) {
  var startMessage = collapsed ? logger.groupCollapsed : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}
function endMessage(logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}
function getFormattedTime() {
  var time = new Date();
  return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
}
function repeat(str, times) {
  return new Array(times + 1).join(str);
}
function pad(num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num;
}
var index = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};
var _default = index;
exports.default = _default;

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 42 */
/*!****************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 43);\n\n        \n        \n        \n        \n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/index/index'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBOEQ7QUFDOUQsUUFBUSwyRUFBRztBQUNYLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsZ0JBQWdCLDJFQUFHIiwiZmlsZSI6IjQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCAndW5pLXBvbHlmaWxsJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvaW5kZXgvaW5kZXgnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!**********************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/pages/index/index.nvue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page */ 44);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 46);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 41);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&id=7b909402&lang=scss&scoped=true&mpType=page */ 48).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&id=7b909402&lang=scss&scoped=true&mpType=page */ 48).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7b909402\",\n  \"1b3a886b\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJGQUFtRjtBQUN2SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkZBQW1GO0FBQzVJOztBQUVBOztBQUVBO0FBQ2dLO0FBQ2hLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjkwOTQwMiZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I5MDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjkwOTQwMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3YjkwOTQwMlwiLFxuICBcIjFiM2E4ODZiXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!****************************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/pages/index/index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page */ 45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 45 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/HBuilderX/audioVideoDemo/pages/index/index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        { staticClass: ["content"] },
        [
          _c("u-image", {
            staticClass: ["logo"],
            attrs: { src: "/static/logo.png" },
          }),
          _c("view", { staticClass: ["text-area"] }, [
            _c(
              "u-text",
              {
                staticClass: ["title"],
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v(_vm._s(_vm.title))]
            ),
          ]),
          _c("view", { staticClass: ["jump"], on: { click: _vm.jumpHome } }, [
            _c(
              "u-text",
              {
                staticClass: ["btn"],
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v("跳转到授权页面进行授权")]
            ),
          ]),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 46 */
/*!**********************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 47);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVhLENBQWdCLHFkQUFHLEVBQUMiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/HBuilderX/audioVideoDemo/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 16));\nvar _RTCIndexNative = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCIndex.native.js */ 19));\nvar _vuex = __webpack_require__(/*! vuex */ 38);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = {\n  data: function data() {\n    return {\n      title: 'Hello world',\n      tabbarHeight: 0\n    };\n  },\n  computed: _objectSpread({}, (0, _vuex.mapState)([\"platform\"])),\n  created: function created() {\n    if (this.platform = \"android\") {\n      this.requestPermission();\n    }\n  },\n  onReady: function onReady() {\n    // 获取 tabBar 的高度\n    this.tabbarHeight = uni.getSystemInfoSync().windowBottom;\n    __f__(\"log\", this.tabbarHeight, '阿收到了卡接收到', \" at pages/index/index.nvue:36\");\n  },\n  methods: {\n    requestPermission: function requestPermission() {\n      var permission = [\"android.permission.CAMERA\", \"android.permission.RECORD_AUDIO\", \"android.permission.WRITE_EXTERNAL_STORAGE\"];\n      if (plus.android) {\n        var _iterator = _createForOfIteratorHelper(permission),\n          _step;\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var i = _step.value;\n            plus.android.requestPermissions([i], function (resultObj) {\n              for (var i = 0; i < resultObj.granted.length; i++) {\n                var grantedPermission = resultObj.granted[i];\n                __f__(\"log\", '已获取的权限：' + grantedPermission, \" at pages/index/index.nvue:50\");\n              }\n              for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n                var deniedPresentPermission = resultObj.deniedPresent[i];\n                __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at pages/index/index.nvue:54\");\n              }\n              for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n                var deniedAlwaysPermission = resultObj.deniedAlways[i];\n                __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at pages/index/index.nvue:58\");\n              }\n            }, function (error) {\n              __f__(\"log\", '申请权限错误：' + error.code + \" = \" + error.message, \" at pages/index/index.nvue:62\");\n            });\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }\n    },\n    /**\n     * 跳转到授权页面\n     */\n    jumpHome: function jumpHome() {\n      uni.navigateTo({\n        url: '/pages/home/home'\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwidGl0bGUiLCJ0YWJiYXJIZWlnaHQiLCJjb21wdXRlZCIsImNyZWF0ZWQiLCJvblJlYWR5IiwibWV0aG9kcyIsInJlcXVlc3RQZXJtaXNzaW9uIiwicGVybWlzc2lvbiIsInBsdXMiLCJqdW1wSG9tZSIsInVuaSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFhQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ0E7RUFDQUE7SUFDQTtNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUMsNEJBQ0Esa0NBQ0E7RUFDQUM7SUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0Esa0ZBQ0EsNENBQ0E7TUFDQTtRQUFBLDJDQUNBQztVQUFBO1FBQUE7VUFBQTtZQUFBO1lBQ0FDLGdDQUNBLEtBQ0E7Y0FDQTtnQkFDQTtnQkFDQTtjQUNBO2NBQ0E7Z0JBQ0E7Z0JBQ0E7Y0FDQTtjQUNBO2dCQUNBO2dCQUNBO2NBQ0E7WUFDQSxHQUNBO2NBQ0E7WUFDQSxFQUNBO1VBQ0E7UUFBQTtVQUFBO1FBQUE7VUFBQTtRQUFBO01BQ0E7SUFFQTtJQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUNBQztRQUNBQztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHQ8aW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRleHQtYXJlYVwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlXCI+e3t0aXRsZX19PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJqdW1wXCIgQGNsaWNrPVwianVtcEhvbWVcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJidG5cIj7ot7PovazliLDmjojmnYPpobXpnaLov5vooYzmjojmnYM8L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgUU5SVEMgZnJvbSBcIkAvanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvUlRDSW5kZXgubmF0aXZlLmpzXCJcclxuXHRpbXBvcnQge1xyXG5cdFx0bWFwU3RhdGVcclxuXHR9IGZyb20gXCJ2dWV4XCJcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRpdGxlOiAnSGVsbG8gd29ybGQnLFxyXG5cdFx0XHRcdHRhYmJhckhlaWdodDogMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Li4ubWFwU3RhdGUoW1wicGxhdGZvcm1cIl0pXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0aWYgKHRoaXMucGxhdGZvcm0gPSBcImFuZHJvaWRcIikge1xyXG5cdFx0XHRcdHRoaXMucmVxdWVzdFBlcm1pc3Npb24oKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0Ly8g6I635Y+WIHRhYkJhciDnmoTpq5jluqZcclxuXHRcdFx0dGhpcy50YWJiYXJIZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dCb3R0b21cclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy50YWJiYXJIZWlnaHQsICfpmL/mlLbliLDkuobljaHmjqXmlLbliLAnKVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0cmVxdWVzdFBlcm1pc3Npb24oKSB7XHJcblx0XHRcdFx0Y29uc3QgcGVybWlzc2lvbiA9IFtcImFuZHJvaWQucGVybWlzc2lvbi5DQU1FUkFcIiwgXCJhbmRyb2lkLnBlcm1pc3Npb24uUkVDT1JEX0FVRElPXCIsXHJcblx0XHRcdFx0XHRcImFuZHJvaWQucGVybWlzc2lvbi5XUklURV9FWFRFUk5BTF9TVE9SQUdFXCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdFx0aWYgKHBsdXMuYW5kcm9pZCkge1xyXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBpIG9mIHBlcm1pc3Npb24pIHtcclxuXHRcdFx0XHRcdFx0cGx1cy5hbmRyb2lkLnJlcXVlc3RQZXJtaXNzaW9ucyhcclxuXHRcdFx0XHRcdFx0XHRbaV0sXHJcblx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0T2JqKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5ncmFudGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBncmFudGVkUGVybWlzc2lvbiA9IHJlc3VsdE9iai5ncmFudGVkW2ldO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5bey6I635Y+W55qE5p2D6ZmQ77yaJyArIGdyYW50ZWRQZXJtaXNzaW9uKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0T2JqLmRlbmllZFByZXNlbnQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGRlbmllZFByZXNlbnRQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZFByZXNlbnRbaV07XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmi5Lnu53mnKzmrKHnlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRPYmouZGVuaWVkQWx3YXlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBkZW5pZWRBbHdheXNQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZEFsd2F5c1tpXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+awuOS5heaLkue7neeUs+ivt+eahOadg+mZkO+8micgKyBkZW5pZWRBbHdheXNQZXJtaXNzaW9uKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55Sz6K+35p2D6ZmQ6ZSZ6K+v77yaJyArIGVycm9yLmNvZGUgKyBcIiA9IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiDot7PovazliLDmjojmnYPpobXpnaJcclxuXHRcdFx0ICovXHJcblx0XHRcdGp1bXBIb21lKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9ob21lL2hvbWUnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuXHR9XHJcblxyXG5cdC5sb2dvIHtcclxuXHRcdGhlaWdodDogMjAwcnB4O1xyXG5cdFx0d2lkdGg6IDIwMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwMHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNTBycHg7XHJcblx0fVxyXG5cclxuXHQudGV4dC1hcmVhIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC50aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0Y29sb3I6ICM4ZjhmOTQ7XHJcblx0fVxyXG5cclxuXHQuanVtcCB7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR3aWR0aDogNjAwcnB4O1xyXG5cdFx0aGVpZ2h0OiA5OHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuXHR9XHJcblxyXG5cdC5idG4ge1xyXG5cdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LnNvcnQge1xyXG5cdFx0Y29sb3I6ICNiZGJkYmQ7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEwMHJweDtcclxuXHR9XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///47\n");

/***/ }),
/* 48 */
/*!*******************************************************************************************************************************!*\
  !*** D:/HBuilderX/audioVideoDemo/pages/index/index.nvue?vue&type=style&index=0&id=7b909402&lang=scss&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&id=7b909402&lang=scss&scoped=true&mpType=page */ 49);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 49 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/HBuilderX/audioVideoDemo/pages/index/index.nvue?vue&type=style&index=0&id=7b909402&lang=scss&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".content": {
    "": {
      "minHeight": [
        100,
        0,
        0,
        16
      ],
      "flexDirection": [
        "column",
        0,
        0,
        16
      ],
      "alignItems": [
        "center",
        0,
        0,
        16
      ],
      "justifyContent": [
        "center",
        0,
        0,
        16
      ],
      "backgroundColor": [
        "#f5f5f5",
        0,
        0,
        16
      ]
    }
  },
  ".logo": {
    "": {
      "height": [
        "200rpx",
        0,
        0,
        17
      ],
      "width": [
        "200rpx",
        0,
        0,
        17
      ],
      "marginTop": [
        "200rpx",
        0,
        0,
        17
      ],
      "marginLeft": [
        0,
        0,
        0,
        17
      ],
      "marginRight": [
        0,
        0,
        0,
        17
      ],
      "marginBottom": [
        "50rpx",
        0,
        0,
        17
      ]
    }
  },
  ".text-area": {
    "": {
      "display": [
        "flex",
        0,
        0,
        18
      ],
      "justifyContent": [
        "center",
        0,
        0,
        18
      ]
    }
  },
  ".title": {
    "": {
      "fontSize": [
        "36rpx",
        0,
        0,
        19
      ],
      "color": [
        "#8f8f94",
        0,
        0,
        19
      ]
    }
  },
  ".jump": {
    "": {
      "alignItems": [
        "center",
        0,
        0,
        20
      ],
      "justifyContent": [
        "center",
        0,
        0,
        20
      ],
      "width": [
        "600rpx",
        0,
        0,
        20
      ],
      "height": [
        "98rpx",
        0,
        0,
        20
      ],
      "marginTop": [
        "20rpx",
        0,
        0,
        20
      ],
      "backgroundColor": [
        "#ededed",
        0,
        0,
        20
      ]
    }
  },
  ".btn": {
    "": {
      "color": [
        "#000000",
        0,
        0,
        21
      ],
      "fontSize": [
        "32rpx",
        0,
        0,
        21
      ]
    }
  },
  ".sort": {
    "": {
      "color": [
        "#bdbdbd",
        0,
        0,
        22
      ],
      "fontSize": [
        "36rpx",
        0,
        0,
        22
      ],
      "lineHeight": [
        "100rpx",
        0,
        0,
        22
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);