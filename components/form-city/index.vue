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
    <p class="md-form-content" @click="showSelector" v-if="selectValue">
      {{ selectValue }}
    </p>
    <p class="md-form-content" @click="showSelector" v-else>
      {{ '请选择' + label }}
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
    <md-tab-picker
      :title="'请选择' + label"
      describe="请选择您所在的省份、城市、区县"
      :data="options"
      v-model="show"
      @change="handleChange"
    >
    </md-tab-picker>
  </md-field-item>
</template>

<script>
import FieldItem from '../field-item';
import TabPicker from '../tab-picker';
import mixins from '../_util/form_mixins';
export default {
  name: 'md-form-city',
  mixins: [mixins],
  components: { [FieldItem.name]: FieldItem, [TabPicker.name]: TabPicker },

  props: {
    list: Object,
  },

  data() {
    return {
      address: '',
      options: this.list,
    };
  },

  computed: {},

  watch: {},

  // LiftCircle Hook
  /*
  beforeCreate
  created
  beforeMount
  mounted
  beforeUpdate
  updated
  activated
  deactivated
  beforeDestroy
  destroyed
  errorCaptured
   */

  methods: {
    handleChange({ options }) {
      this.address = options;
    },
  },
};
</script>

<style lang="stylus">
.md-form-city
  color color-gray-1
  -webkit-font-smoothing antialiased
  text-align center
  span
    font-style italic
</style>
