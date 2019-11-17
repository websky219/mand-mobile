<template>
  <div class="md-form-select">
    Hello <span>form-select</span>, <br>Please Read <a href="https://didi.github.io/mand-mobile/#/en-US/docs/development" target="_blank"> development.md </a>Carefully<br>Before Development and Enjoy It
  </div>
</template>

<script>
export default {
  name: 'md-form-select',

  components: {
  },

  props: {
  },

  data () {
    return {
    }
  },

  computed: {
  },

  watch: {
  },

  // LiftCircle Hook
  /*
  beforeCreate
  created
  beforeMount
  mounted
  beforeUpdate
  updated
  activated
  deactivated
  beforeDestroy
  destroyed
  errorCaptured
   */

  methods: {
    // MARK: private methods
    $_privateMethod () {

    },

    // MARK: events handler, 如 $_onButtonClick
    $_onSthEvent (event) {
      this.$emit('active', 'hello')
    },

    // MARK: public methods
    publicMethod () {

    }
  }
}
</script>

<style lang="stylus">
.md-form-select
  color color-gray-1
  -webkit-font-smoothing antialiased
  font-size 28px
  text-align center
  span
    font-style italic
</style>
