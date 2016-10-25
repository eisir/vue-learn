<template>
  <div class="panel panel-default">
    <div class="panel-heading">{{title}}</div>
    <div class="panel-body" v-if="items.length>0">
      <div class="select-title">
        <input type="checkbox" v-model="selectAll"/> 全选
      </div>
      <div class="items">
        <div class="item row" v-for="(item, index) in items">
          <div class="col-md-2">
            <input type="checkbox" v-bind:value="item.id" v-model="item.selected">
          </div>          
          <div class="col-md-4">{{ item.name }}</div>
          <div class="col-md-3">
            <div class="input-group">
              <span class="input-group-btn"><button class="btn btn-default" :class="{disabled:item.number==1}" :disabled="item.number==1" @click="down(index)">-</button></span>
              <input class="num form-control" type="text" name="" v-model="item.number">            
              <span class="input-group-btn"><button class="btn btn-default" @click="up(index)">+</button></span>
            </div>
          </div>
          <div class="col-md-2">{{ item.price }}</div>
          <div class="col-md-1">
            <button @click="remove(index)">x</button>
          </div>
        </div>
      </div>
      <div class="select-title row">
        <div class="col-md-7"><input type="checkbox" v-model="selectAll"/>全选</div>
        <div class="col-md-5 text-right" v-if="total">
          <div>Total:{{total.toFixed(2)}}</div>
        </div>      
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
  created(){
    this.$http.get('data/list.json')
    .then((res)=>{
      this.items = res.data.data;
    })
  },
  computed:{
    selectAll:{
      get(){
        let s = true
        this.items.forEach(function(v){
          if (v.selected == false)
            s = false;   
        })
        return s;
      },
      set(val){
       this.items.forEach(v=>{
         v.selected = val;
       });
      }
    },
    total:{
      get(){
        var t=0;
        this.items.forEach(function(v){
          if(v.selected==true){
            t += v.price * v.number;
          }
        })
        return t;
      }
    }
  },
  methods:{
    remove(index){
      this.items.splice(index,1)
    },
    up(index){
      this.items[index].number +=1;
    },
    down(index){
      this.items[index].number -=1; 
    }
  }
}
</script>

<style scoped>
button{
  outline: none!important;
}
.select-title {
  height:30px;
  line-height:30px;
  font-weight:bold;
}
.item{
  line-height: 30px;
  margin-bottom: 10px;
}
.num{
  line-height: 24px;
  text-align: center;
}
</style>