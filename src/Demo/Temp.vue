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
    <ul>
      <li v-for="n in evenNumbers">{{ n }}</li>
    </ul>
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
      attrDisabled: false,
      numbers: [ 1, 2, 3, 4, 5 ]
    }
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
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