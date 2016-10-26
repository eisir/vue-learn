<template>
  <div class="panel panel-default">
    <div class="panel-heading">{{title}}</div>
    <div class="panel-body" ref="panel">
      <div class="event">{{msg}}</div>
      <br>
      <div><button class="btn btn-default" @click="update" ref="btn">update</button></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'event',
      msg: 'event txt',
      backgroundColor:"#FFCC80"
    }
  },
  methods:{
    update(){
      this.msg =  " is update";
      // 用ref 操作dom
      this.$refs.panel.style.backgroundColor=this.backgroundColor
      console.log(this.$refs.btn.textContent);
    }
  }
}
</script>
<style scoped>
  button{
    outline: none!important;
  }
  .select-title {
    height:30px;
    line-height:30px;
    font-weight:bold;
  }
</style>