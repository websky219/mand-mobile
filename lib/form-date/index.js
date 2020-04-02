;(function(){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../date-picker', '../field-item', '../_util/lang', '../_util/form_mixins', '../icon/', '../_style/global.css', './style/index.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../date-picker'), require('../field-item'), require('../_util/lang'), require('../_util/form_mixins'), require('../icon/'), require('../_style/global.css'), require('./style/index.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.datePicker, global.fieldItem, global.lang, global.form_mixins, global.icon, global.global, global.index);
    global.index = mod.exports;
  }
})(this, function (exports, _datePicker, _fieldItem, _lang, _form_mixins, _icon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _datePicker2 = _interopRequireDefault(_datePicker);

  var _fieldItem2 = _interopRequireDefault(_fieldItem);

  var _form_mixins2 = _interopRequireDefault(_form_mixins);

  var _icon2 = _interopRequireDefault(_icon);

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

  var FORMAT = {
    date: 'yyyy-MM-dd',
    datetime: 'yyyy-MM-dd HH:mm:ss',
    time: 'HH:mm:ss'
  };
  exports.default = {
    mixins: [_form_mixins2.default],
    name: 'md-form-date',

    components: (_components = {}, _defineProperty(_components, _fieldItem2.default.name, _fieldItem2.default), _defineProperty(_components, _datePicker2.default.name, _datePicker2.default), _defineProperty(_components, _icon2.default.name, _icon2.default), _components),
    data: function data() {
      return {
        dfvalue: null,
        maxDate: null,
        minDate: null,
        formatStr: ''
      };
    },

    props: {
      type: {
        type: String,
        default: 'date'
      },
      min: {
        type: [String, Date]
      },
      max: {
        type: [String, Date]
      },
      customTypes: {
        type: Array,
        default: function _default() {
          return ['yyyy', 'MM', 'dd', 'hh', 'mm'];
        }
      }
    },
    computed: {},

    watch: {
      min: function min(val) {
        console.log('up-min', val);
        if ((0, _lang.isDate)(val)) {
          this.minDate = val;
        } else {
          this.minDate = (0, _lang.strFormatToDate)(this.formatStr, val);
        }
      },
      max: function max(val) {
        if ((0, _lang.isDate)(val)) {
          this.maxDate = val;
        } else {
          this.maxDate = (0, _lang.strFormatToDate)(this.formatStr, val);
        }
      }
    },
    created: function created() {
      var formatStr = FORMAT[this.type];
      if (!formatStr) {
        formatStr = this.customTypes;
      }
      this.formatStr = formatStr;
      this.$_initMin('minDate', this.min, -100);
      this.$_initMin('maxDate', this.max, 0);
      this.dfvalue = this.maxDate;
      this.selectValue = this.value;
    },

    methods: {
      $_initMin: function $_initMin(data, prop, num) {
        if ((0, _lang.isNull)(prop)) {
          this[data] = (0, _lang.dateAdd)('y', num, new Date());
        } else if ((0, _lang.isString)(prop)) {
          this[data] = (0, _lang.strFormatToDate)(this.formatStr, prop);
        } else {
          this[data] = prop;
        }
      },
      onDatePickerConfirm: function onDatePickerConfirm(columnsValue) {
        console.log('[Mand Mobile] DatePicker Confirm\nvalue: ' + JSON.stringify(columnsValue));
        this.selectValue = this.$refs.datePicker.getFormatDate(this.formatStr);
        this.$emit('input', this.selectValue);
      }
    }
  };
});
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('md-field-item',{staticClass:"md-input-item",attrs:{"solid":_vm.solid,"disabled":_vm.readonly}},[_c('template',{slot:"left"},[_vm._t("left",[_c('div',{staticClass:"md-form-item-left"},[(_vm.required)?_c('span',{staticClass:"md-form-item-required"},[_vm._v("\n          *\n        ")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"md-form-item-text"},[_vm._v(_vm._s(_vm.label))])])])],2),_vm._v(" "),(_vm.selectValue)?_c('p',{staticClass:"md-form-content",on:{"click":_vm.showSelector}},[_vm._v("\n    "+_vm._s(_vm.selectValue)+"\n  ")]):_c('p',{staticClass:"md-form-content-placeholder",on:{"click":_vm.showSelector}},[_vm._v("\n    "+_vm._s('请选择' + _vm.label)+"\n  ")]),_vm._v(" "),_c('template',{on:{"click":_vm.showSelector},slot:"right"},[_vm._t("right",[_c('div',{staticClass:"md-form-date-suffix"},[_c('md-icon',{attrs:{"name":"calendar"},on:{"click":_vm.showSelector}}),_vm._v(" "),(_vm.suffix)?_c('span',[_vm._v("\n          "+_vm._s(_vm.suffix)+"\n        ")]):_vm._e()],1)])],2),_vm._v(" "),_c('template',{slot:"children"},[(_vm.isInputError())?_c('div',{staticClass:"md-input-item-msg"},[(_vm.error !== '')?_c('p',{domProps:{"textContent":_vm._s(_vm.error)}}):_vm._t("error")],2):_vm._e(),_vm._v(" "),(_vm.isInputBrief() && !_vm.isInputError())?_c('div',{staticClass:"md-input-item-brief"},[(_vm.brief !== '')?_c('p',{domProps:{"textContent":_vm._s(_vm.brief)}}):_vm._t("brief")],2):_vm._e()]),_vm._v(" "),_c('md-date-picker',{ref:"datePicker",attrs:{"type":_vm.type,"title":'请选择' + _vm.label,"custom-types":_vm.customTypes,"default-date":_vm.dfvalue,"max-date":_vm.maxDate,"min-date":_vm.minDate,"keep-index":true},on:{"confirm":_vm.onDatePickerConfirm},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}})],2)}
__vue__options__.staticRenderFns = []
