<template>
  <div class="md-input-item">
    <md-field-item
      class="md-input-item"
      :solid="solid"
      :disabled="readonly"
      :arrow="arrow"
    >
      <div slot="left" class="md-form-item-left">
        <span class="md-form-item-text">{{ plabel }}</span>
      </div>
      <p class="md-form-content" @click="showSelector" v-if="selectValue">
        {{ selectValue }}
      </p>
      <p class="md-form-content-placeholder" @click="showSelector" v-else>
        {{ '请选择' + plabel }}
      </p>
      <template slot="right">
        <!-- ------------ -->
        <!--  RIGHT SLOT  -->
        <!-- ------------ -->
        <slot name="right">
          <span v-if="suffix" class="md-form-date-suffix">
            {{ suffix }}
          </span>
        </slot>
      </template>
      <md-tab-picker
        :title="'请选择' + label"
        describe="请选择您所在的省份、城市、区县"
        :data="options"
        v-model="show"
        @change="handleChange"
      >
      </md-tab-picker>
    </md-field-item>
    <md-input-item
      v-if="hasinput"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :clearable="!readonly"
      :readonly="readonly"
      v-model="inputValue"
    >
      <template slot="left">
        <slot name="left"> </slot>
      </template>
      <template slot="error">
        <div v-if="isInputError()" class="md-input-item-msg">
          <p v-if="error !== ''" v-text="error"></p>
          <slot name="error" v-else></slot>
        </div>
      </template>
    </md-input-item>
  </div>
</template>

<script>
import FieldItem from '../field-item';
import TabPicker from '../tab-picker';
import InputItem from '../input-item';
import mixins from '../_util/form_mixins';
export default {
  name: 'md-form-city',
  mixins: [mixins],
  components: {
    [FieldItem.name]: FieldItem,
    [TabPicker.name]: TabPicker,
    [InputItem.name]: InputItem,
  },
  data() {
    return {
      inputValue: '',
      arrow: true,
      address: '',
      options: this.list,
      rootObj: this.root,
    };
  },
  props: {
    root: Object,
    plabel: {
      type: String,
      default: '所在地区',
    },
    hasinput: {
      type: Boolean,
      default: true,
    },
    value: [String, Number],
    list: Object,
    branch: String,
    codes: Array,
    maxlength: {
      type: Number,
      default: 64,
    },
    preadonly: {
      type: Boolean,
      default: false,
    },
    placeholder: String,
    pvalue: {
      type: String,
      default: '',
    },
    ivalue: {
      type: String,
      default: '',
    },
  },
  created() {
    this.selectValue = this.pvalue;
    this.inputValue = this.ivalue;
    this.$_emitValue();
  },
  watch: {
    inputValue(val) {
      if (this.selectValue === '') {
        this.error = '请选择省市区';
      }
      this.$_emitValue(val);
    },
  },
  methods: {
    $_emitValue() {
      let v = this.selectValue + (this.hasinput ? this.inputValue : '');
      this.$emit('input', v);
    },
    showSelector() {
      //no-unneeded-ternary
      if (this.preadonly) {
        return;
      }
      this.show = true;
    },
    handleChange(data) {
      console.log('change', data);
      this.selectValue = data.options.map(item => item.label).join(' ');
      this.error = '';
      this.$_emitValue();
      this.$emit('on-change', {
        branch: data.options[1].c,
        codes: data.values,
      });
      //no-unneeded-ternary
      if (this.rootObj) {
        this.rootObj.city = this.selectValue;
        this.rootObj.branch = data.options[1].c;
        this.rootObj.codes = data.values;
      }
    },
  },
};
</script>
