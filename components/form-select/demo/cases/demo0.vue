<template>
  <div class="md-example-child md-example-child-single-component">
    <md-field>
      <md-form-select
        v-model="value"
        label="选项"
        :list="list"
      ></md-form-select>
      <md-form-select
        v-model="value"
        :readonly="true"
        label="选项"
        :list="list"
      ></md-form-select>
      <md-field-item solid title="搜索" class="md-input-item">
        <vue-multiselect v-model="value" :options="options"></vue-multiselect>
      </md-field-item>
    </md-field>
  </div>
</template>

<script>
import { FormSelect, Field, FieldItem } from 'mand-mobile';
import MultiSelect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
export default {
  name: 'form-select-demo',
  title: '样例一',
  describe: '样例一说明备注',
  components: {
    [FormSelect.name]: FormSelect,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [MultiSelect.name]: MultiSelect,
  },
  data() {
    return {
      value: '2',
      options: ['2', '3'],
      list: [
        {
          value: '1',
          text: '选项一',
        },
        {
          value: '2',
          text: '选项二',
        },
        {
          value: '3',
          text: '选项三',
        },
        {
          value: '4',
          text: '选项四',
        },
      ],
    };
  },
  watch: {
    value(val) {
      console.log('val', val);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
