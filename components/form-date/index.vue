<template>
  <md-field-item
    class="md-input-item"
    :title="label"
    :solid="solid"
    :disabled="readonly"
  >
    <template slot="left">
      <slot name="left"></slot>
    </template>
    <p class="md-form-content" @click="showSelector">
      {{ datePickerValue }}
    </p>
    <template slot="right">
      <!-- ------------ -->
      <!--  RIGHT SLOT  -->
      <!-- ------------ -->
      <slot name="right">
        <div class="md-form-date-suffix">
          <md-icon @click="showSelector" name="calendar"></md-icon>
          <span v-if="suffix">
            {{ suffix }}
          </span>
        </div>
      </slot>
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
      v-model="dateShow"
      :type="type"
      :title="'请选择' + label"
      :custom-types="customTypes"
      :default-date="dfvalue"
      :max-date="maxDate"
      :min-date="minDate"
      @change="onDatePickerChange"
      @confirm="onDatePickerConfirm"
      :keep-index="true"
    ></md-date-picker>
  </md-field-item>
</template>

<script>
import DatePicker from '../date-picker';
import FieldItem from '../field-item';
import { dateAdd, strFormatToDate, isNull, isString } from '../_util/lang';
import Icon from '../icon/';
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
    [Icon.name]: Icon,
  },
  data() {
    return {
      dfvalue: null,
      dateShow: false,
      maxDate: null,
      minDate: null,
      formatStr: '',
      datePickerValue: '',
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
    suffix: String,
    value: {
      type: String,
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
    this.formatStr = formatStr;
    if (isNull(this.value) || this.value === '') {
      this.datePickerValue = '请选择' + this.label;
    }
    this.$_initMin('minDate', this.min, -100);
    this.$_initMin('maxDate', this.max, 0);
    this.dfvalue = this.maxDate;
  },
  methods: {
    showSelector() {
      if (this.readonly) {
        return;
      }
      this.dateShow = true;
    },
    $_initMin(data, prop, num) {
      if (isNull(prop)) {
        this[data] = dateAdd('y', num, new Date());
      } else if (isString(prop)) {
        this[data] = strFormatToDate(this.formatStr, prop);
      } else {
        this[data] = prop;
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
      this.datePickerValue = this.$refs.datePicker.getFormatDate(
        this.formatStr
      );
    },
    isInputError() {
      return this.$slots.error || this.error !== '';
    },
    isInputBrief() {
      return this.$slots.brief || this.brief !== '';
    },
  },
};
</script>

<style lang="stylus">
.md-form-date
  color color-gray-1
  -webkit-font-smoothing antialiased
  font-size field-item-font-size
  text-align center
  span
    font-style italic
.md-form-date-suffix
  font-size field-item-font-size
</style>
