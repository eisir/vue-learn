<template>
  <div class="panel panel-default">
    <div class="panel-heading">Count</div>
    <div class="panel-body">
      <button @click="update">show data</button>
      <div class="data" v-for="item in items">
        
      </div>
    </div>
  </div>
  
</template>

<script>
import $ from 'jquery'
  export default{
    data(){    
      return {
        items:[]
      }
    },
    methods:{
      update(){
        // this.$http.get('http://qt.gtimg.cn/r=0.9593104682872591q=sh000001,bkqt012063,pt012063_600570' )
        // .then((res)=>{
        //   console.log(res.data);
        //   // this.items = res.data.data;
        // },(res)=>{

        // })
        $.getScript({
          url:"http://web.sqt.gtimg.cn/q=sz000651",
          success:function(data){
            console.log(v_sz000651);
          }
        })

      }
    }
  }
</script>