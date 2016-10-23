<template>
  <div class="demo page-header">
    <h3 class="title">{{title}}</h3>
    <Bar v-on:inSwitch='switchs' :bars="bars"></Bar>
    <div class="h600">
      <keep-alive>
        <component :is="isCurrent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Bar from './Demo/Bar'
import Cart from './Demo/Cart'
import Directive from './Demo/Directive'
import Temp from './Demo/Temp'
import Count from './Demo/Count'
var ming=123;
export default {
  data () {
    return {
      title: 'Demo',
      bars: ['Cart','Directive','Temp','Count','Bar'],
      isCurrent: ''
    }
  },
  created(){
    this.isCurrent=this.bars[0];
  },
  components: {
    Cart,
    Directive,
    Temp,
    Count,
    Bar
  },
  methods:{
    switchs:function(index){
      console.log(index);
      this.isCurrent=this.bars[index]
    }
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
.h600{
  height:600px;
  padding-top:20px
}
</style>
