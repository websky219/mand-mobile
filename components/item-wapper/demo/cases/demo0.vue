<template>
  <div class="md-example-child md-example-child-single-component">
    <md-item-wapper></md-item-wapper>
  </div>
</template>

<script>
import { ItemWapper } from 'mand-mobile';

export default {
  name: 'item-wapper-demo',
  title: '样例一',
  describe: '样例一说明备注',
  components: {
    [ItemWapper.name]: ItemWapper,
  },
};
</script>

<style lang="stylus" scoped></style>
