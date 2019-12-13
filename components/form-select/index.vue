<template>
  <md-field-item
    class="md-input-item"
    :solid="solid"
    :disabled="readonly"
    :arrow="arrow"
  >
    <template slot="left">
      <slot name="left">
        <div class="md-form-item-left">
          <span class="md-form-item-required" v-if="required">
            *
          </span>
          <span class="md-form-item-text">{{ label }}</span>
        </div>
      </slot>
    </template>
    <template>
      <p class="md-form-content" @click="showSelector" v-if="selectText">
        {{ selectText }}
      </p>
      <p class="md-form-content" @click="showSelector" v-else>
        {{ '请选择' + label }}
      </p>
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
    <md-selector
      v-model="show"
      :data="options"
      :default-value="selectValue"
      :min-height="minHeight"
      :title="'请选择' + label"
      @choose="onSelectorChoose"
    ></md-selector>
  </md-field-item>
</template>

<script>
import Selctor from '../selector/index';
import FieldItem from '../field-item';
import mixins from '../_util/form_mixins';
export default {
  name: 'md-form-select',
  mixins: [mixins],
  components: {
    [Selctor.name]: Selctor,
    [FieldItem.name]: FieldItem,
  },
  data() {
    return {
      rootObj: this.root,
    };
  },
  props: {
    root: Object,
    arrow: {
      type: Boolean,
      default: true,
    },
    minHeight: {
      type: String,
      default: '320px',
    },
    list: {
      type: Array,
      default: () => [],
    },
    selectList: Array,
  },
  computed: {
    options() {
      if (this.selectList) {
        return this.selectList;
      } else {
        return this.list;
      }
    },
  },
  created() {
    if (this.options.length > 0) {
      for (const i of this.options) {
        if (i.value === this.value) {
          this.selectText = i.text;
          console.log('s-text', this.selectText);
          break;
        }
      }
    }
  },
  watch: {
    selectValue(val) {
      // this.value = val;
      console.log('selectVal', val);
      this.$emit('input', val);
    },
  },

  methods: {
    onSelectorChoose(obj) {
      this.selectText = obj.text;
      this.selectValue = obj.value;
      if (this.rootObj) {
        this.rootObj.current = obj;
      }
    },
  },
};
</script>

<style lang="stylus">
.md-form-content
  width 100%
.md-form-select
  color color-gray-1
  -webkit-font-smoothing antialiased
  font-size 28px
  text-align center
  span
    font-style italic
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
