<template>
  <button @click="m+=1">{{m}}</button>
</template>

<script>
export default{
  data(){    
    return {m:1};
  },
  created(){
    this.$on('pas',function(para){
      this.m=para
    })
  }
}
</script>