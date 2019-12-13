<template>
  <div class="md-example-child md-example-child-single-component">
    <md-form-fn :render="renderFn"></md-form-fn>
  </div>
</template>

<script>
import { FormFn } from 'mand-mobile';

export default {
  name: 'form-fn-demo',
  title: '样例一',
  describe: '样例一说明备注',
  components: {
    [FormFn.name]: FormFn,
  },
  data() {
    return {
      renderFn: function(createElement) {
        console.log('parnt-this', this);
        return createElement('div', '你好');
      },
    };
  },
};
</script>

<style lang="stylus" scoped></style>
