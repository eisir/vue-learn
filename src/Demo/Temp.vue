<template>
  <div class="temp">
    <h5>once change</h5>
    <div v-once>This will never change:{{msg}}</div>
    <div>normal msg show: {{msg}}</div>
    <button @click='changeMsg'>changeMsg</button>

    <h5>rawHtml</h5>
    <div v-html="rawHtml"></div>

    <h5>attributes</h5>
    <div v-bind:id="attrId">attributes</div>
    <div v-bind:type="attrType">attributes</div>
    <button v-bind:disabled="attrDisabled" @click="changeDisabled">attr button</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: 'Hello Vue!',
      rawHtml: "<a href='/'>rawHtml</a>",
      attrId: "id12",
      attrType: "0",
      attrDisabled: false
    }
  },
  methods: {
    changeMsg(){
      this.msg ='change msg'
    },
    changeDisabled(){
      this.attrDisabled="disabled"
    }
  }
}
</script>

<style>
.temp{
  margin-bottom: 10px
}
</style>