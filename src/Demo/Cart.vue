<template>
  <div class="panel panel-default">
    <div class="panel-heading">{{title}}</div>
    <div class="panel-body" v-if="items.length>0">
      <div class="select-title">
        <input type="checkbox" v-model="selectAll"/> 全选
      </div>
      <div class="items">
        <div class="item row" v-for="(item, index) in items">
          <div class="col-md-1">
            <input type="checkbox" v-bind:value="item.id" v-model="item.selected" >
          </div>          
          <div class="col-md-7 name">{{ item.name }}</div>
          <div class="col-md-2 time">{{ item.time }}</div>
          <div class="col-md-2 time">
            <button @click="remove(index)">x</button>
          </div>
        </div>
      </div>
      <div class="select-title">
        <input type="checkbox" v-model="selectAll"/> 全选        
      </div>
    </div>
    <div class="panel-body" v-else>
      it has nothing
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'A Cart',
      items:[]
    }
  },
  mounted(){
    this.$http.get('data/list.json')
    .then((res)=>{
      this.items = res.data.data;
    })
  },
  computed:{
    selectAll:{
      get: function(){
        let s = true
        this.items.forEach(function(v){
          if (v.selected == false)
            s = false;   
        })
        return s;
      },
      set: function(val){
       this.items.forEach(v=>{
         v.selected = val;
       });
      }
    }   
  },
  methods:{
    remove(index){
      this.items.splice(index,1)
    }
  }
}
</script>

<style scoped>
.select-title {
  height:30px;
  line-height:30px;
  font-weight:bold;
}

</style>