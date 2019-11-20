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
    </md-field>
  </div>
</template>

<script>
import { FormSelect, Field } from 'mand-mobile';

export default {
  name: 'form-select-demo',
  title: '样例一',
  describe: '样例一说明备注',
  components: {
    [FormSelect.name]: FormSelect,
    [Field.name]: Field,
  },
  data() {
    return {
      value: '2',
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
