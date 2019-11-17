<template>
  <div class="form-item">

  </div>
</template>

<script>
  import FieldItem from '../field-item'
  import InputItem from '../input-item'
  import Selector from '../selector';


  export default {
    components: {
      [FieldItem.name]: FieldItem,
      [InputItem.name]: InputItem,
      [Selector.name]: Selector

    },
    props: {},
  };
</script>
