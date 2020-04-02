;(function(){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../selector', '../input-item', '../_style/global.css', './style/selector2.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../selector'), require('../input-item'), require('../_style/global.css'), require('./style/selector2.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.selector, global.inputItem, global.global, global.selector2);
    global.selector2 = mod.exports;
  }
})(this, function (exports, _selector, _inputItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _selector2 = _interopRequireDefault(_selector);

  var _inputItem2 = _interopRequireDefault(_inputItem);

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
    name: 'md-selector2',
    components: (_components = {}, _defineProperty(_components, _selector2.default.name, _selector2.default), _defineProperty(_components, _inputItem2.default.name, _inputItem2.default), _components)
  };
});
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
__vue__options__.staticRenderFns = []
