<template>
  <nav class="bar">
    <slot></slot>
    <!-- <router-link to="/home" class="item">
      <span class="icon glyphicon glyphicon-home">
      </span>
      <div class="tab-label">
        首页
      </div>
    </router-link>
    <router-link to="/user" class="item">
      <span class="icon glyphicon glyphicon-user">
      </span>
      <div class="tab-label">
        User
      </div>
    </router-link>
    <router-link to="/demo" class="item">
      <span class="icon glyphicon glyphicon-search">
      </span>
      <div class="tab-label">
        Demo
      </div>
    </router-link> -->
  </nav>
</template>

<script>
  export default {
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
  z-index: 10;
  background-color: #fff
}
.icon{
  font-size: 0.625rem;
}
.item{
  display: table-cell;
  width: 1%;
  position: relative;
  border-top: 1px solid #eee;
  height: 2rem;
  vertical-align: middle;
}
.tab-label{
  font-size: .375rem
}
</style>
