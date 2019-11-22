<template>
  <div class="md-example-child md-example-child-single-component">
    <single-component></single-component>
	</div>
</template>

<script>
import { SingleComponent } from 'mand-mobile'

export default {
  name: 'form-item-demo',
  title: '样例一',
  describe: '样例一说明备注',
  components: {
    [SingleComponent.name]: SingleComponent
  }
}
</script>

<style lang="stylus" scoped>
</style>
