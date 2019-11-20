<template>
  <md-field-item
    class="md-input-item"
    :title="label"
    :solid="solid"
    :disabled="readonly"
    :arrow="arrow"
  >
    <template slot="left">
      <slot name="left"></slot>
    </template>
    <template>
      <div @click="showSelector">
        {{ datePickerValue }}
      </div>
    </template>
    <template slot="right">
      <!-- ------------ -->
      <!--  RIGHT SLOT  -->
      <!-- ------------ -->
      <slot name="right"></slot>
    </template>
    <template slot="children">
      <!-- BRIEF/ERROR TIP -->
      <!-- -------------------- -->
      <div v-if="isInputError()" class="md-input-item-msg">
        <p v-if="error !== ''" v-text="error"></p>
        <slot name="error" v-else></slot>
      </div>
      <div v-if="isInputBrief() && !isInputError()" class="md-input-item-brief">
        <p v-if="brief !== ''" v-text="brief"></p>
        <slot name="brief" v-else></slot>
      </div>
      <!-- ------------ -->
    </template>
    <md-date-picker
      ref="datePicker"
      v-model="showSelector"
      :type="type"
      :title="'请选择' + label"
      :custom-types="customTypes"
      :default-date="currentDate"
      :max-date="maxDate"
      :min-date="minDate"
      @change="onDatePickerChange"
      @confirm="onDatePickerConfirm"
    ></md-date-picker>
  </md-field-item>
</template>

<script>
import DatePicker from '../date-picker';
import FieldItem from '../field-item';
import { dateToStr, dateAdd, strFormatToDate,isNull,isString } from '../_util/lang';
const FORMAT = {
  date: 'yyyy-MM-dd',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  time: 'HH:mm:ss',
};
export default {
  name: 'md-form-date',

  components: {
    [FieldItem.name]: FieldItem,
    [DatePicker.name]: DatePicker,
  },
  data() {
    return {
      showSelector: false,
      maxDate: null,
      minDate: null,
      formatStr:'',
      currentDate:'',
      datePickerValue:this.value,
    };
  },
  props: {
    type: {
      type: String,
      default: 'date',
    },
    min: {
      type: [String, Date],
    },
    max: {
      type: [String, Date],
    },
    customTypes: {
      type: Array,
      default: () => ['yyyy', 'MM', 'dd', 'hh', 'mm'],
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    arrow: {
      type: Boolean,
      default: true,
    },
    value: {
      type: [String, Number, Object, Boolean],
    },
    error: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    solid: {
      type: Boolean,
      default: true,
    },
    brief: {
      type: String,
      default: '',
    },
  },
  computed: {},

  watch: {},
  created() {
    let formatStr = FORMAT[this.type];
    if (!formatStr) {
      formatStr = this.customTypes;
    }
    this.$_initMin(this.minDate,this.min,-100);
    this.$_initMin(this.maxDate,this.max,0);
  },
  methods: {
    $_initMin(data,prop,num){
      if (isNull(prop)){
        data = dateAdd('y',num,new Date())
      }else if (isString(prop)){
        data = strFormatToDate(this.formatStr,prop)
      }else {
        data = prop;
      }
    },
    onDatePickerChange(columnIndex, itemIndex, value) {
      console.log(
        `[Mand Mobile] DatePicker Change\ncolumnIndex: ${columnIndex},\nitemIndex:${itemIndex},\nvalue: ${JSON.stringify(
          value
        )}`
      );
    },
    onDatePickerConfirm(columnsValue) {
      console.log(
        `[Mand Mobile] DatePicker Confirm\nvalue: ${JSON.stringify(
          columnsValue
        )}`
      );
      this.datePickerValue = this.$refs.datePicker.getFormatDate(this.formatStr);
    },
  },
};
</script>

<style lang="stylus">
.md-form-date
  color color-gray-1
  -webkit-font-smoothing antialiased
  font-size 28px
  text-align center
  span
    font-style italic
</style>
