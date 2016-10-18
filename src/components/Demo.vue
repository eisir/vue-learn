<template>
  <div class="demo">
    <h1>Demo Content</h1>
    <Temp></Temp>
    <directive></directive>
  </div>
</template>

<script>
import Directive from './Demo/Directive'
import Temp from './Demo/Temp'
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: {
    Directive,
    Temp
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo{
  width:400px;
  text-align:left;
}
</style>
