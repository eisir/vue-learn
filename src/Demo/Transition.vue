<template>
  <div class="panel panel-default">
    <div class="panel-heading">Color Transition</div>
    <div class="panel-body">
        <input v-model.number="firstNumber" type="number" step="20"> +
        <input v-model.number="secondNumber" type="number" step="20"> =
        {{ result }}
        <p>
          <animated-integer v-bind:value="firstNumber"></animated-integer> +
          <animated-integer v-bind:value="secondNumber"></animated-integer> =
          <animated-integer v-bind:value="result"></animated-integer>
        </p>
    </div>
  </div>
  
</template>
<script>
import animatedInteger from './animated-integer'

export default{
  data(){
    return {
      firstNumber: 20,
      secondNumber: 40
    }
  },
  computed: {
    result: function () {
      return this.firstNumber + this.secondNumber
    }
  },
  components: {
    animatedInteger
  }
}
</script>