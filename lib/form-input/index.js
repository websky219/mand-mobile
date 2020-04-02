;(function(){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../form-item', '../_util/lang', '../_style/global.css', './style/index.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../form-item'), require('../_util/lang'), require('../_style/global.css'), require('./style/index.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.formItem, global.lang, global.global, global.index);
    global.index = mod.exports;
  }
})(this, function (exports, _formItem, _lang) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _formItem2 = _interopRequireDefault(_formItem);

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
    name: 'md-form-input',
    components: _defineProperty({}, _formItem2.default.name, _formItem2.default),
    data: function data() {
      return _defineProperty({
        dataArr: [],
        keyList: {},
        spe: this.special,
        vProvider: 'div',
        vObserver: 'div'
      }, this.field, this.special);
    },
    provide: function provide() {
      return {
        usevee: this.usevee,
        module: this.module,
        parentShow: this.show
      };
    },

    props: {
      field: {
        type: String,
        default: 'field'
      },
      show: {
        type: Boolean,
        default: true
      },
      module: {
        type: String,
        default: ''
      },
      usevee: {
        type: Boolean,
        default: true
      },
      special: {},
      objkey: {
        default: ''
      },
      randomKey: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'extend'
      },
      rootdata: [Object, Array]
    },
    created: function created() {
      if (this.usevee) {
        this.vObserver = 'validation-observer';
        this.vProvider = 'validation-provider';
      }
      console.log('createdspecial' + this.objkey);
      this.updateData();
    },

    watch: {
      show: function show(val) {
        if (!val) {
          this.vObserver = 'div';
          this.vProvider = 'div';
        } else if (this.usevee) {
          this.vObserver = 'validation-observer';
          this.vProvider = 'validation-provider';
        }
      },
      special: function special(val) {
        console.log('wacspecial' + this.objkey, val);
        this.spe = val;
        this[this.field] = val;
        this.updateData();
      }
    },
    beforeUpdate: function beforeUpdate() {
      console.log('beforeUpdate', this.dataArr);
      console.log('beforeUpdate', this.special);
    },
    updated: function updated() {
      console.log('updated', this.dataArr);
      console.log('updated', this.special);
    },

    methods: {
      isSlot: function isSlot(name) {
        console.log('tagp', this.$scopedSlots[name]);
        return !!this.$scopedSlots[name];
      },
      updateData: function updateData() {
        this.dataArr = [];
        this.coverData(this.spe);
        this.dataArr = (0, _lang.sortBy)(this.dataArr, 'order', 'asc');
      },
      hasVuale: function hasVuale(obj) {
        return obj.hasOwnProperty('value');
      },
      coverData: function coverData(data, key) {
        if (this.hasVuale(data)) {
          if (data.order === undefined) {
            data.order = 0;
          }
          if (this.keyList[key] >= 0) {
            this.keyList[key] += 1;
            key = key + this.keyList[key];
          } else {
            this.keyList[key] = 0;
            key = key + 0;
          }
          data['key'] = this.name + '_' + key;
          this.dataArr.push(data);
        } else {
          for (var _key in data) {
            if (data.hasOwnProperty(_key)) {
              var element = data[_key];
              this.coverData(element, _key);
            }
          }
        }
      }
    }
  };
});
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.vObserver,{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],ref:"form-group",tag:"component",staticClass:"md-form-group",attrs:{"tag":"div"}},[_vm._l((_vm.dataArr),function(obj,index){return _c('md-form-item',{key:index + obj.key,attrs:{"special":obj,"objkey":obj.key,"index":index,"componentName":_vm.vProvider,"usevee":_vm.usevee},scopedSlots:_vm._u([{key:"rowLeft",fn:function(ref){
var data = ref.data;
return [_vm._t("rowLeft",null,{"data":data})]}},{key:"rowRight",fn:function(ref){
var data = ref.data;
return [_vm._t("rowRight",null,{"data":data})]}}],null,true)})}),_vm._v(" "),_c(_vm.vProvider,{tag:"component",staticStyle:{"display":"none"},attrs:{"rules":"","vid":"parent"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.spe),expression:"spe"}],attrs:{"type":"text"},domProps:{"value":(_vm.spe)},on:{"input":function($event){if($event.target.composing){ return; }_vm.spe=$event.target.value}}})]),_vm._v(" "),(_vm.rootdata)?_c(_vm.vProvider,{tag:"component",staticStyle:{"display":"none"},attrs:{"rules":"","vid":"rootData"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rootdata),expression:"rootdata"}],attrs:{"type":"text"},domProps:{"value":(_vm.rootdata)},on:{"input":function($event){if($event.target.composing){ return; }_vm.rootdata=$event.target.value}}})]):_vm._e()],2)}
__vue__options__.staticRenderFns = []
