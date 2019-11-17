<template>
  <div class="md-example-child md-example-child-single-component">
    <md-form-input></md-form-input>
	</div>
</template>

<script>
import  SingleComponent  from '../../selector2.vue'

export default {
  name: 'form-input-demo',
  title: '样例一',
  describe: '样例一说明备注',
  components: {
    [SingleComponent.name]: SingleComponent
  }
}
</script>

<style lang="stylus" scoped>
</style>
