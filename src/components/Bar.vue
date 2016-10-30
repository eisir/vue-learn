<template>
  <nav class="bar">
    <router-link to="/home" class="item">
      <span class="icon glyphicon glyphicon-home">
      </span>
      <div class="tab-label">
        首页
      </div>
    </router-link>
    <router-link to="/demo" class="item">
      <span class="icon glyphicon glyphicon-search">
      </span>
      <div class="tab-label">
        Demo
      </div>
    </router-link>
  </nav>
</template>

<script>
  export default {
    data(){
      return {
        home:"/home",
        demo:"/demo"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar{
  position: fixed;
  left: 0;
  bottom: 0;
  width:100%;
  table-layout: fixed;
}
.icon{
  font-size: 1.8rem;
}
.item{
  display: table-cell;
  width: 1%;
  position: relative;
  border-top: 1px solid #eee;
  height: 4rem;
  vertical-align: middle;
}
.tab-label{
  font-size: .8rem
}
</style>
