<template>
  <div id="app">
    <header-bar>
      {{topTitle}}
    </header-bar>
    <bar class="home-bar">
      <bar-item v-for="item in navs"
       :path="item.path"
       :icon="item.icon"
       :label="item.label">         
      </bar-item>
    </bar>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/base.css'
import Hello from './components/Hello'
import Bar from './components/Bar'
import BarItem from './components/BarItem'
import HeaderBar from './components/HeaderBar'

export default {
  data(){
    return {
      topTitle: "首页",
      navs:[
        {
          path:'/',
          icon:'home',
          label:'首页'
        },
        {
          path:'/list',
          icon:'list',
          label:'列表页'
        },
        {
          path:'/demo',
          icon:'th',
          label:'Demo'
        },
        {
          path:'/user',
          icon:'user',
          label:'个人中心'
        },
      ]
    }
  },
  components: {
    Bar,BarItem,HeaderBar
  },
  watch:{
    '$route'(){
      this.topTitle = this.$route.name;
      // console.log(this.$route.name);
    }
  }
}
</script>

<style scoped>
html {
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
body {
  display: flex;
  /*//align-items: center;*/
  justify-content: center;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}

.container{
  position: relative;
}
#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  position: relative;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px;
}
</style>
