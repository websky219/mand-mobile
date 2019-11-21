<template>
  <div class="md-example-child md-example-child-single-component">
    <md-form-city label="地址"></md-form-city>
  </div>
</template>

<script>
import { FormCity } from 'mand-mobile';

export default {
  name: 'form-city-demo',
  title: '样例一',
  describe: '样例一说明备注',
  components: {
    [FormCity.name]: FormCity,
  },
};
</script>

<style lang="stylus" scoped></style>
