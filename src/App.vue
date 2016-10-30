<template>
  <div id="app">
    <router-link to="/home">Go to Foo</router-link>
    <router-link to="/demo">Go to Bar</router-link>
    <bar class="home-bar"></bar>
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Hello from './components/Hello'
import Bar from './components/Bar'

export default {
  components: {
    Bar
  }
}
</script>

<style>
html {
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 24px;
}
body {
  display: flex;
  //align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

#app {
  color: #2c3e50;
  margin-top: 10px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
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
