<template>
  <div class="user">
    this is user page
    <br>
    <router-link :to="{ name:'profile', params:{ userId:123}}" class="item" replace>
      <span class="icon glyphicon glyphicon-profile">
      </span>
      <div class="tab-label">
        User profile
      </div>
    </router-link>
    <router-link :to="{ path:'123'}" class="item" append tag="div">
      <span class="icon glyphicon glyphicon-profile">
      </span>
      <div class="tab-label">
        User profile
      </div>
    </router-link>
  </div>
</template>
<script>
export default{

}
</script>
