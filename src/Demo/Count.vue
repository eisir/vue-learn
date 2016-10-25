<template>
  <div class="panel panel-default">
    <div class="panel-heading">Count</div>
    <div class="panel-body">
      <button @click="m+=1">{{m}}</button>
    </div>
  </div>
  
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