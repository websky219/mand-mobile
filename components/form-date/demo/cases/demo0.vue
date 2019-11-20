<template>
  <div class="md-example-child md-example-child-single-component">
    <md-form-date></md-form-date>
  </div>
</template>

<script>
import { FormDate } from 'mand-mobile';

export default {
  name: 'form-date-demo',
  title: '样例一',
  describe: '样例一说明备注',
  components: {
    [FormDate.name]: FormDate,
  },
};
</script>

<style lang="stylus" scoped></style>
