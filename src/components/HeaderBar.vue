<template>
  <nav class="header-bar">
    <div @click="back" class="back glyphicon glyphicon-chevron-left"></div>
    <slot></slot>
    <div class="menu glyphicon glyphicon-align-justify"></div>
  </nav>
</template>

<script>
  export default {
    data(){
      return {
      }
    },
    methods:{
      back(){
        console.log(this.$route.router)
        history.go(-1)
      }
    }
  }
</script>
<style>
.header-bar{
  height: 40px
}
</style>