<template>
  <router-link :to="path" class="item" active-class="active">
    <span class="icon glyphicon" :class="iconClass">
    </span>
    <div class="tab-label">
      {{ label }}
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    path : '',
    icon : '',
    label : ''
  },
  computed: {
    iconClass(){
      return `glyphicon-${this.icon}`
    }
  }
}
</script>