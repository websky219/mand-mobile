;(function(){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../field-item', '../input-item', '../selector', '../_style/global.css', './style/form-item.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../field-item'), require('../input-item'), require('../selector'), require('../_style/global.css'), require('./style/form-item.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fieldItem, global.inputItem, global.selector, global.global, global.formItem);
    global.formItem = mod.exports;
  }
})(this, function (exports, _fieldItem, _inputItem, _selector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _fieldItem2 = _interopRequireDefault(_fieldItem);

  var _inputItem2 = _interopRequireDefault(_inputItem);

  var _selector2 = _interopRequireDefault(_selector);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _components;

  function _defineProperty(obj, key, value) {
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

  exports.default = {
    components: (_components = {}, _defineProperty(_components, _fieldItem2.default.name, _fieldItem2.default), _defineProperty(_components, _inputItem2.default.name, _inputItem2.default), _defineProperty(_components, _selector2.default.name, _selector2.default), _components),
    props: {}
  };
});
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-item"})}
__vue__options__.staticRenderFns = []
