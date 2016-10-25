<template>
  <div class="panel panel-default">
    <div class="panel-heading">Async</div>
    <div class="panel-body">
      data text: {{message}}
      <br>
      data txts:{{txts}}
      <br>
      <button @click="update">update</button>
      <button @click="update2">update2</button>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      message:"not updata",
      txts:[]
    }
  },
  methods:{
    update(){
      this.message="updated";
      this.txts.push(this.message)

    },
    update2(){
      this.message="updated2";
      this.txts.push(this.message)

    }
  }
}
</script>