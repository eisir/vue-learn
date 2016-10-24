<template>
  <div class="demo page-header">
    <h3 class="title">{{title}}</h3>
    <input type="text" v-bind:value="title" v-on:input="title = $event.target.value">
    <Cart></Cart>
    <Temp></Temp>
    <directive></directive>
    <div>ming</div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './Demo/Cart'
import Directive from './Demo/Directive'
import Temp from './Demo/Temp'
import Count from './Demo/Count'

export default {
  data () {
    return {
      title: 'Demo'
    }
  },
  components: {
    Cart,
    Directive,
    Temp,
    Count
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.demo{
  text-align:left;
  width:600px
}
</style>
