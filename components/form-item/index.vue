<template>
  <component
    :is="cName"
    v-show="spe.show === undefined || spe.show"
    class="md-form-item"
    v-slot="{ errors }"
    v-bind="spe.cprop"
  >
    <template>
      <slot name="rowLeft" :data="spe"></slot>
    </template>
    <md-input-item
      v-if="spe.inputType === 'input' || !spe.inputType"
      solid
      :type="spe.type"
      v-model="spe.value"
      :maxlength="spe.length"
      :placeholder="
        spe.placeholder ? spe.placeholder : '请输入' + module + spe.label
      "
      :readonly="spe.readonly"
      :disabled="spe.disabled"
      :is-highlight="spe.highlight"
      :clearable="!spe.readonly"
    >
      <div slot="left" class="md-form-item-left">
        <span class="md-form-item-required" v-if="spe.required">
          *
        </span>
        <span class="md-form-item-text">{{ spe.label }}</span>
      </div>
      <span
        slot="error"
        v-if="errors && errors.length > 0"
        v-text="errors[0]"
      ></span>
      <span slot="right" v-if="spe.suffix">
        {{ spe.suffix }}
      </span>
    </md-input-item>
    <md-form-select
      v-else-if="spe.inputType === 'select'"
      v-model="spe.value"
      :min-height="spe.minHeight"
      :list="spe.list"
      :readonly="spe.readonly"
      :select-list="spe.selectList"
      :root="spe"
      :required="spe.required"
      :label="spe.label"
    >
      <span slot="right" v-if="spe.suffix">
        {{ spe.suffix }}
      </span>
    </md-form-select>
    <md-form-date
      v-else-if="spe.inputType === 'datetime'"
      :type="spe.type"
      :min="spe.startDate"
      :max="spe.endtDate"
      v-model="spe.value"
      :suffix="spe.suffix"
      :readonly="spe.readonly"
      :label="spe.label"
      :required="spe.required"
    >
    </md-form-date>
    <md-form-city
      v-else-if="spe.inputType === 'addressInput'"
      v-model="spe.value"
      :root="spe"
      :plabel="spe.plabel"
      :hasinput="spe.hasinput"
      :list="spe.list"
      :preadonly="spe.preadonly"
      :pvalue="spe.pvalue"
      :ivalue="spe.ivalue"
      :placeholder="spe.placeholder"
      :required="spe.required"
      :readonly="spe.readonly"
    >
      <div slot="left" class="md-form-item-left">
        <span class="md-form-item-required" v-if="spe.required">
          *
        </span>
        <span class="md-form-item-text">{{ spe.label }}</span>
      </div>
    </md-form-city>
    <md-form-fn
      v-else-if="spe.render"
      :errors="errors"
      v-bind="spe"
    ></md-form-fn>
    <template>
      <slot name="rowRight" :data="spe"></slot></template>
  </component>
</template>

<script>
import FieldItem from '../field-item';
import InputItem from '../input-item';
import FormCity from '../form-city';
import FormDate from '../form-date';
import FieldSelect from '../form-select';
import FormFn from '../form-fn/index.js';
import ItemWapper from '../item-wapper';

export default {
  name: 'md-form-item',
  components: {
    [FieldItem.name]: FieldItem,
    [InputItem.name]: InputItem,
    [FormCity.name]: FormCity,
    [FormDate.name]: FormDate,
    [FieldSelect.name]: FieldSelect,
    [FormFn.name]: FormFn,
    [ItemWapper.name]: ItemWapper,
  },
  data() {
    return {
      spe: this.special,
    };
  },
  inject: ['usevee', 'module', 'parentShow'],
  methods: {
    selectTrack(spe) {
      if (spe.track) {
        return spe.track;
      } else {
        return {
          track: 'value',
          label: 'text',
        };
      }
    },
    isHidden(el) {
      return el.offsetParent === null;
    },
    hasSlot(name) {
      return !!(this.$scopedSlots[name] ||
        (this.$parent && this.$parent.$scopedSlots[name]) ||
        (this.$parent &&
          this.$parent.$parent &&
          this.$parent.$parent.$scopedSlots[name]));
    },
  },
  mounted() {
    console.log('scopedSlots', this.$scopedSlots);
    console.log('p', this.$parent);
    console.log('ppp', this.$parent.$parent);
  },
  computed: {
    cName() {
      let tag = 'md-item-wapper';
      console.log('item-show', this.spe.show, this.parentShow);
      if (!this.spe.show || !this.parentShow) {
        tag = 'md-item-wapper';
      } else if (this.usevee) {
        tag = 'validation-provider';
      } else {
        tag = 'md-item-wapper';
      }
      return tag;
    },
  },
  props: {
    usevee: {
      type: Boolean,
      default: true,
    },
    componentName: {
      type: String,
      default: 'div',
    },
    index: [Number, String],
    special: {},
    objkey: {
      default: '',
    },
  },
};
</script>
<style lang="stylus">
.md-form-item-left {
  flex-shrink: 0;
  width: 1.6rem;
  display: flex;

  .md-form-item-required {
    color: red;
    display: flex;
    align-items: center;
  }
}
</style>
