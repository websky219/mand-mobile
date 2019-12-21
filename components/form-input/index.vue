<template>
  <component
    class="md-form-group"
    :is="vObserver"
    v-show="show"
    tag="div"
    ref="form-group"
  >
    <md-form-item
      v-for="(obj, index) of dataArr"
      :special="obj"
      :key="index + obj.key"
      :objkey="obj.key"
      :index="index"
      :componentName="vProvider"
      :usevee="usevee"
    >
      <template v-slot:rowleft="{ data }">
        <slot name="rowleft" :data="data"></slot>
      </template>
      <template v-slot:rowright="{ data }">
        <slot name="rowright" :data="data"></slot>
      </template>
    </md-form-item>
    <component style="display:none" :is="vProvider" rules="" vid="parent">
      <input type="text" v-model="spe" />
    </component>
    <component
      v-if="rootdata"
      style="display:none"
      :is="vProvider"
      rules=""
      vid="rootData"
    >
      <input type="text" v-model="rootdata" />
    </component>
  </component>
</template>

<script>
import FormItem from '../form-item';
import { sortBy } from '../_util/lang';
export default {
  name: 'md-form-input',
  components: {
    [FormItem.name]: FormItem,
  },
  data() {
    return {
      dataArr: [],
      keyList: {},
      spe: this.special,
      vProvider: 'div',
      vObserver: 'div',
      [this.field]: this.special,
    };
  },
  provide() {
    return {
      usevee: this.usevee,
      module: this.module,
      parentShow: this.show,
    };
  },
  props: {
    field: {
      type: String,
      default: 'field',
    },
    show: {
      type: Boolean,
      default: true,
    },
    module: {
      type: String,
      default: '',
    },
    usevee: {
      type: Boolean,
      default: true,
    },
    special: {},
    objkey: {
      default: '',
    },
    randomKey: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: 'extend',
    },
    rootdata: [Object, Array],
  },
  created() {
    if (this.usevee) {
      this.vObserver = 'validation-observer';
      this.vProvider = 'validation-provider';
    }
    console.log('createdspecial' + this.objkey);
    this.updateData();
  },
  watch: {
    show(val) {
      if (!val) {
        this.vObserver = 'div';
        this.vProvider = 'div';
      } else if (this.usevee) {
        this.vObserver = 'validation-observer';
        this.vProvider = 'validation-provider';
      }
    },
    special(val) {
      console.log('wacspecial' + this.objkey, val);
      this.spe = val;
      this[this.field] = val;
      this.updateData();
    },
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.dataArr);
    console.log('beforeUpdate', this.special);
  },
  updated() {
    console.log('updated', this.dataArr);
    console.log('updated', this.special);
  },
  methods: {
    isSlot(name) {
      console.log('tagp', this.$scopedSlots[name]);
      return this.$scopedSlots[name] ? true : false;
    },
    updateData() {
      this.dataArr = [];
      this.coverData(this.spe);
      this.dataArr = sortBy(this.dataArr, 'order', 'asc');
    },
    hasVuale(obj) {
      return obj.hasOwnProperty('value');
    },
    coverData(data, key) {
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
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];
            this.coverData(element, key);
          }
        }
      }
    },
  },
};
</script>
<style lang="stylus">
.md-form-group
  .md-field-item
    .md-field-item-control
      font-weight 500
  .md-input-item-msg
    text-align end
</style>
