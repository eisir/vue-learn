<template>
  <div class="demo">
    <div class="page-header">
    <h3 class="title">{{title}}</h3>
    </div>
    <Bar v-on:inSwitch='switchs' :bars="bars"></Bar>
    <div class="h600">
      <transition name="component-fade" mode="out-in">
        <keep-alive>        
          <component :is="isCurrent"></component>
        </keep-alive>   
      </transition>   
    </div>
  </div>
</template>

<script>
import Bar from '../Demo/Bar'
import Cart from '../Demo/Cart'
import Directive from '../Demo/Directive'
import Temp from '../Demo/Temp'
import Count from '../Demo/Count'
import Forms from '../Demo/Form'
import Async from '../Demo/Async'
import Event from '../Demo/Event'
import Color from '../Demo/Color'
import Trans from '../Demo/Transition'
import Xhr from '../Demo/Xhr'
import Rend from '../Demo/Render'
export default {
  data () {
    return {
      title: 'Demo',
      bars: ['Count','Forms','Cart','Directive','Temp','Async','Event','Color','Trans','Xhr','Rend'],
      isCurrent: ''
      }
  },
  beforeMount(){
    this.isCurrent = this.bars[0];
  },
  components: {
    Cart,
    Directive,
    Temp,
    Count,
    Bar,
    Forms,
    Async,
    Event,
    Trans,
    Xhr,
    Rend,
    Color
  },
  methods:{
    switchs:function(index){
      this.isCurrent=this.bars[index]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html{
  font-size: 24px
}
h1 {
  color: #42b983;
  font-size: 3rem;
}
h3{
  font-size: 1rem;
}
.demo{
  text-align:left;
  /*width:600px;*/
}
.h600{
  height:600px;
  padding-top:20px
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-active {
  opacity: 0;
}
</style>
