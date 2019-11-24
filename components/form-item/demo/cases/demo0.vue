<template>
  <div class="md-example-child md-example-child-single-component">
    <md-form-item></md-form-item>
  </div>
</template>

<script>
import { FormItem } from 'mand-mobile'

export default {
  name: 'form-item-demo',
  title: '样例一',
  describe: '样例一说明备注',
  components: {
    [FormItem.name]: FormItem
  }
}
</script>

<style lang="stylus" scoped></style>
