;(function(){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../icon', '../_style/global.css', './style/index.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../icon'), require('../_style/global.css'), require('./style/index.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.icon, global.global, global.index);
    global.index = mod.exports;
  }
})(this, function (exports, _icon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _icon2 = _interopRequireDefault(_icon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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
    name: 'md-agree',

    components: _defineProperty({}, _icon2.default.name, _icon2.default),

    props: {
      value: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'md'
      }
    },

    data: function data() {
      return {};
    },


    methods: {
      $_onChange: function $_onChange(event) {
        if (this.disabled) {
          return;
        }
        this.$emit('input', !this.value);
        this.$emit('change', event);
      }
    }
  };
});
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md-agree",class:[
    _vm.disabled ? 'disabled' : ''
  ]},[_c('div',{staticClass:"md-agree-icon",class:[
      _vm.value ? 'checked' : ''
    ],on:{"click":function($event){return _vm.$_onChange($event)}}},[_c('div',{staticClass:"md-agree-icon-container"},[_c('md-icon',{attrs:{"name":"checked","size":_vm.size}}),_vm._v(" "),_c('md-icon',{attrs:{"name":"check","size":_vm.size}})],1)]),_vm._v(" "),_c('div',{staticClass:"md-agree-content"},[_vm._t("default")],2)])}
__vue__options__.staticRenderFns = []
