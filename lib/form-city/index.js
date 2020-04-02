;(function(){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../field-item', '../tab-picker', '../input-item', '../_util/form_mixins', '../_style/global.css', './style/index.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../field-item'), require('../tab-picker'), require('../input-item'), require('../_util/form_mixins'), require('../_style/global.css'), require('./style/index.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fieldItem, global.tabPicker, global.inputItem, global.form_mixins, global.global, global.index);
    global.index = mod.exports;
  }
})(this, function (exports, _fieldItem, _tabPicker, _inputItem, _form_mixins) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _fieldItem2 = _interopRequireDefault(_fieldItem);

  var _tabPicker2 = _interopRequireDefault(_tabPicker);

  var _inputItem2 = _interopRequireDefault(_inputItem);

  var _form_mixins2 = _interopRequireDefault(_form_mixins);

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
    name: 'md-form-city',
    mixins: [_form_mixins2.default],
    components: (_components = {}, _defineProperty(_components, _fieldItem2.default.name, _fieldItem2.default), _defineProperty(_components, _tabPicker2.default.name, _tabPicker2.default), _defineProperty(_components, _inputItem2.default.name, _inputItem2.default), _components),
    data: function data() {
      return {
        inputValue: '',
        arrow: true,
        address: '',
        options: this.list,
        rootObj: this.root
      };
    },

    props: {
      root: Object,
      plabel: {
        type: String,
        default: '所在地区'
      },
      hasinput: {
        type: Boolean,
        default: true
      },
      value: [String, Number],
      list: Object,
      branch: String,
      codes: Array,
      maxlength: {
        type: Number,
        default: 64
      },
      preadonly: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      pvalue: {
        type: String,
        default: ''
      },
      ivalue: {
        type: String,
        default: ''
      }
    },
    created: function created() {
      this.selectValue = this.pvalue;
      this.inputValue = this.ivalue;
      this.$_emitValue();
    },

    watch: {
      inputValue: function inputValue(val) {
        if (this.selectValue === '') {
          this.error = '请选择省市区';
        }
        this.$_emitValue(val);
      }
    },
    methods: {
      $_emitValue: function $_emitValue() {
        var v = this.selectValue + (this.hasinput ? this.inputValue : '');
        this.$emit('input', v);
      },
      showSelector: function showSelector() {
        if (this.preadonly) {
          return;
        }
        this.show = true;
      },
      handleChange: function handleChange(data) {
        console.log('change', data);
        this.selectValue = data.options.map(function (item) {
          return item.label;
        }).join(' ');
        this.error = '';
        this.$_emitValue();
        this.$emit('on-change', {
          branch: data.options[1].c,
          codes: data.values
        });

        if (this.rootObj) {
          this.rootObj.city = this.selectValue;
          this.rootObj.branch = data.options[1].c;
          this.rootObj.codes = data.values;
        }
      }
    }
  };
});
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md-input-item"},[_c('md-field-item',{staticClass:"md-input-item",attrs:{"solid":_vm.solid,"disabled":_vm.readonly,"arrow":_vm.arrow}},[_c('div',{staticClass:"md-form-item-left",attrs:{"slot":"left"},slot:"left"},[_c('span',{staticClass:"md-form-item-text"},[_vm._v(_vm._s(_vm.plabel))])]),_vm._v(" "),(_vm.selectValue)?_c('p',{staticClass:"md-form-content",on:{"click":_vm.showSelector}},[_vm._v("\n      "+_vm._s(_vm.selectValue)+"\n    ")]):_c('p',{staticClass:"md-form-content-placeholder",on:{"click":_vm.showSelector}},[_vm._v("\n      "+_vm._s('请选择' + _vm.plabel)+"\n    ")]),_vm._v(" "),_c('template',{slot:"right"},[_vm._t("right",[(_vm.suffix)?_c('span',{staticClass:"md-form-date-suffix"},[_vm._v("\n          "+_vm._s(_vm.suffix)+"\n        ")]):_vm._e()])],2),_vm._v(" "),_c('md-tab-picker',{attrs:{"title":'请选择' + _vm.label,"describe":"请选择您所在的省份、城市、区县","data":_vm.options},on:{"change":_vm.handleChange},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}})],2),_vm._v(" "),(_vm.hasinput)?_c('md-input-item',{attrs:{"placeholder":_vm.placeholder,"maxlength":_vm.maxlength,"clearable":!_vm.readonly,"readonly":_vm.readonly},model:{value:(_vm.inputValue),callback:function ($$v) {_vm.inputValue=$$v},expression:"inputValue"}},[_c('template',{slot:"left"},[_vm._t("left")],2),_vm._v(" "),_c('template',{slot:"error"},[(_vm.isInputError())?_c('div',{staticClass:"md-input-item-msg"},[(_vm.error !== '')?_c('p',{domProps:{"textContent":_vm._s(_vm.error)}}):_vm._t("error")],2):_vm._e()])],2):_vm._e()],1)}
__vue__options__.staticRenderFns = []
