<template>
  <div class="panel panel-default">
    <div class="panel-heading">Count</div>
    <div class="panel-body">
      <button @click="m+=1">{{m}}</button>

      <div>通过store修改</div>
      <div>
        {{count}}
      </div>
      <button @click="addCount">add count</button>
    </div>
  </div>
  
</template>

<script>
  export default{
    data(){    
      return {
        m:1,
      }
    },
    computed:{
      count(){
        return this.$store.state.count
      }
    },
    created(){
      this.$on('pas',function(para){
        this.m=para
      })
    },
    methods:{
      addCount(){
        this.$store.commit({type:'increment',amount:3})
      }
    }
  }
</script>