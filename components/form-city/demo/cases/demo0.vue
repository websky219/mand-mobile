<template>
  <div class="md-example-child md-example-child-single-component">
    <md-form-city
      :label="obj.label"
      v-model="obj.value"
      :plabel="obj.plabel"
      :list="obj.list"
      :root="obj"
    >
      <p slot="error">sdfsdf</p>
    </md-form-city>
  </div>
</template>

<script>
import { FormCity } from 'mand-mobile';
import data from './data2';

export default {
  name: 'form-city-demo',
  title: '样例一',
  data() {
    return {
      obj: {
        plabel: '在的地区',
        label: '详细地址',
        list: data,
        value: '',
      },
    };
  },
  watch: {
    obj: {
      handler: function(val) {
        if (val) {
          console.log('val', val);
        }
      },
      deep: true,
    },
  },
  describe: '样例一说明备注',
  components: {
    [FormCity.name]: FormCity,
  },
};
</script>

<style lang="stylus" scoped></style>
