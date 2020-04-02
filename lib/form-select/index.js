;(function(){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../selector/index', '../field-item', '../_util/form_mixins', '../_style/global.css', './style/index.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../selector/index'), require('../field-item'), require('../_util/form_mixins'), require('../_style/global.css'), require('./style/index.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.index, global.fieldItem, global.form_mixins, global.global, global.index);
    global.index = mod.exports;
  }
})(this, function (exports, _index, _fieldItem, _form_mixins) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _index2 = _interopRequireDefault(_index);

  var _fieldItem2 = _interopRequireDefault(_fieldItem);

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
    name: 'md-form-select',
    mixins: [_form_mixins2.default],
    components: (_components = {}, _defineProperty(_components, _index2.default.name, _index2.default), _defineProperty(_components, _fieldItem2.default.name, _fieldItem2.default), _components),
    data: function data() {
      return {
        rootObj: this.root
      };
    },

    props: {
      root: Object,
      arrow: {
        type: Boolean,
        default: true
      },
      minHeight: {
        type: String,
        default: '320px'
      },
      list: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      selectList: Array
    },
    computed: {
      options: function options() {
        if (this.selectList) {
          return this.selectList;
        } else {
          return this.list;
        }
      }
    },
    created: function created() {
      if (this.options.length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            if (i.value === this.value) {
              this.selectText = i.text;
              this.selectValue = this.value;
              console.log('s-text', this.selectText);
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    },

    watch: {
      selectValue: function selectValue(val) {
        console.log('selectVal', val);
        this.$emit('input', val);
      }
    },

    methods: {
      onSelectorChoose: function onSelectorChoose(obj) {
        this.selectText = obj.text;
        this.selectValue = obj.value;
        if (this.rootObj) {
          this.rootObj.current = obj;
        }
      }
    }
  };
});
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('md-field-item',{staticClass:"md-input-item",attrs:{"solid":_vm.solid,"disabled":_vm.readonly,"arrow":_vm.arrow}},[_c('template',{slot:"left"},[_vm._t("left",[_c('div',{staticClass:"md-form-item-left"},[(_vm.required)?_c('span',{staticClass:"md-form-item-required"},[_vm._v("\n          *\n        ")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"md-form-item-text"},[_vm._v(_vm._s(_vm.label))])])])],2),_vm._v(" "),[(_vm.selectText)?_c('p',{staticClass:"md-form-content",on:{"click":_vm.showSelector}},[_vm._v("\n      "+_vm._s(_vm.selectText)+"\n    ")]):_c('p',{staticClass:"md-form-content-placeholder",on:{"click":_vm.showSelector}},[_vm._v("\n      "+_vm._s('请选择' + _vm.label)+"\n    ")])],_vm._v(" "),_c('template',{slot:"right"},[_vm._t("right")],2),_vm._v(" "),_c('template',{slot:"children"},[(_vm.isInputError())?_c('div',{staticClass:"md-input-item-msg"},[(_vm.error !== '')?_c('p',{domProps:{"textContent":_vm._s(_vm.error)}}):_vm._t("error")],2):_vm._e(),_vm._v(" "),(_vm.isInputBrief() && !_vm.isInputError())?_c('div',{staticClass:"md-input-item-brief"},[(_vm.brief !== '')?_c('p',{domProps:{"textContent":_vm._s(_vm.brief)}}):_vm._t("brief")],2):_vm._e()]),_vm._v(" "),_c('md-selector',{attrs:{"data":_vm.options,"default-value":_vm.selectValue,"min-height":_vm.minHeight,"title":'请选择' + _vm.label},on:{"choose":_vm.onSelectorChoose},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}})],2)}
__vue__options__.staticRenderFns = []
