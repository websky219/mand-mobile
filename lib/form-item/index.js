;(function(){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../field-item', '../input-item', '../form-city', '../form-date', '../form-select', '../form-fn/index.js', '../item-wapper', '../_style/global.css', './style/index.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../field-item'), require('../input-item'), require('../form-city'), require('../form-date'), require('../form-select'), require('../form-fn/index.js'), require('../item-wapper'), require('../_style/global.css'), require('./style/index.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fieldItem, global.inputItem, global.formCity, global.formDate, global.formSelect, global.index, global.itemWapper, global.global, global.index);
    global.index = mod.exports;
  }
})(this, function (exports, _fieldItem, _inputItem, _formCity, _formDate, _formSelect, _index, _itemWapper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _fieldItem2 = _interopRequireDefault(_fieldItem);

  var _inputItem2 = _interopRequireDefault(_inputItem);

  var _formCity2 = _interopRequireDefault(_formCity);

  var _formDate2 = _interopRequireDefault(_formDate);

  var _formSelect2 = _interopRequireDefault(_formSelect);

  var _index2 = _interopRequireDefault(_index);

  var _itemWapper2 = _interopRequireDefault(_itemWapper);

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
    name: 'md-form-item',
    components: (_components = {}, _defineProperty(_components, _fieldItem2.default.name, _fieldItem2.default), _defineProperty(_components, _inputItem2.default.name, _inputItem2.default), _defineProperty(_components, _formCity2.default.name, _formCity2.default), _defineProperty(_components, _formDate2.default.name, _formDate2.default), _defineProperty(_components, _formSelect2.default.name, _formSelect2.default), _defineProperty(_components, _index2.default.name, _index2.default), _defineProperty(_components, _itemWapper2.default.name, _itemWapper2.default), _components),
    data: function data() {
      return {
        spe: this.special
      };
    },

    inject: ['usevee', 'module', 'parentShow'],
    methods: {
      selectTrack: function selectTrack(spe) {
        if (spe.track) {
          return spe.track;
        } else {
          return {
            track: 'value',
            label: 'text'
          };
        }
      },
      isHidden: function isHidden(el) {
        return el.offsetParent === null;
      },
      hasSlot: function hasSlot(name) {
        return !!(this.$scopedSlots[name] || this.$parent && this.$parent.$scopedSlots[name] || this.$parent && this.$parent.$parent && this.$parent.$parent.$scopedSlots[name]);
      }
    },
    mounted: function mounted() {
      console.log('scopedSlots', this.$scopedSlots);
      console.log('p', this.$parent);
      console.log('ppp', this.$parent.$parent);
    },

    computed: {
      cName: function cName() {
        var tag = 'md-item-wapper';
        console.log('item-show', this.spe.show, this.parentShow);
        if (!this.spe.show || !this.parentShow) {
          tag = 'md-item-wapper';
        } else if (this.usevee) {
          tag = 'validation-provider';
        } else {
          tag = 'md-item-wapper';
        }
        return tag;
      }
    },
    props: {
      usevee: {
        type: Boolean,
        default: true
      },
      componentName: {
        type: String,
        default: 'div'
      },
      index: [Number, String],
      special: {},
      objkey: {
        default: ''
      }
    }
  };
});
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.cName,_vm._b({directives:[{name:"show",rawName:"v-show",value:(_vm.spe.show === undefined || _vm.spe.show),expression:"spe.show === undefined || spe.show"}],tag:"component",staticClass:"md-form-item",scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [[_vm._t("rowLeft",null,{"data":_vm.spe})],_vm._v(" "),(_vm.spe.inputType === 'input' || !_vm.spe.inputType)?_c('md-input-item',{attrs:{"solid":"","type":_vm.spe.type,"maxlength":_vm.spe.length,"placeholder":_vm.spe.placeholder ? _vm.spe.placeholder : '请输入' + _vm.module + _vm.spe.label,"readonly":_vm.spe.readonly,"disabled":_vm.spe.disabled,"is-highlight":_vm.spe.highlight,"clearable":!_vm.spe.readonly},model:{value:(_vm.spe.value),callback:function ($$v) {_vm.$set(_vm.spe, "value", $$v)},expression:"spe.value"}},[_c('div',{staticClass:"md-form-item-left",attrs:{"slot":"left"},slot:"left"},[(_vm.spe.required)?_c('span',{staticClass:"md-form-item-required"},[_vm._v("\n        *\n      ")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"md-form-item-text"},[_vm._v(_vm._s(_vm.spe.label))])]),_vm._v(" "),(errors && errors.length > 0)?_c('span',{attrs:{"slot":"error"},domProps:{"textContent":_vm._s(errors[0])},slot:"error"}):_vm._e(),_vm._v(" "),(_vm.spe.suffix)?_c('span',{attrs:{"slot":"right"},slot:"right"},[_vm._v("\n      "+_vm._s(_vm.spe.suffix)+"\n    ")]):_vm._e()]):(_vm.spe.inputType === 'select')?_c('md-form-select',{attrs:{"min-height":_vm.spe.minHeight,"list":_vm.spe.list,"readonly":_vm.spe.readonly,"select-list":_vm.spe.selectList,"root":_vm.spe,"required":_vm.spe.required,"label":_vm.spe.label},model:{value:(_vm.spe.value),callback:function ($$v) {_vm.$set(_vm.spe, "value", $$v)},expression:"spe.value"}},[(_vm.spe.suffix)?_c('span',{attrs:{"slot":"right"},slot:"right"},[_vm._v("\n      "+_vm._s(_vm.spe.suffix)+"\n    ")]):_vm._e()]):(_vm.spe.inputType === 'datetime')?_c('md-form-date',{attrs:{"type":_vm.spe.type,"min":_vm.spe.startDate,"max":_vm.spe.endtDate,"suffix":_vm.spe.suffix,"readonly":_vm.spe.readonly,"label":_vm.spe.label,"required":_vm.spe.required},model:{value:(_vm.spe.value),callback:function ($$v) {_vm.$set(_vm.spe, "value", $$v)},expression:"spe.value"}}):(_vm.spe.inputType === 'addressInput')?_c('md-form-city',{attrs:{"root":_vm.spe,"plabel":_vm.spe.plabel,"hasinput":_vm.spe.hasinput,"list":_vm.spe.list,"preadonly":_vm.spe.preadonly,"pvalue":_vm.spe.pvalue,"ivalue":_vm.spe.ivalue,"placeholder":_vm.spe.placeholder,"required":_vm.spe.required,"readonly":_vm.spe.readonly},model:{value:(_vm.spe.value),callback:function ($$v) {_vm.$set(_vm.spe, "value", $$v)},expression:"spe.value"}},[_c('div',{staticClass:"md-form-item-left",attrs:{"slot":"left"},slot:"left"},[(_vm.spe.required)?_c('span',{staticClass:"md-form-item-required"},[_vm._v("\n        *\n      ")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"md-form-item-text"},[_vm._v(_vm._s(_vm.spe.label))])])]):(_vm.spe.render)?_c('md-form-fn',_vm._b({attrs:{"errors":errors}},'md-form-fn',_vm.spe,false)):_vm._e(),_vm._v(" "),[_vm._t("rowRight",null,{"data":_vm.spe})]]}}],null,true)},'component',_vm.spe.cprop,false))}
__vue__options__.staticRenderFns = []
