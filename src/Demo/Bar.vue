<template>
  <div class="btn-group">
    <button @click='change(index)'
     v-for="(item,index) in bars"
     class="btn btn-default" type="button">{{item}}</button>
  </div>
</template>

<script>
var data={"text":"ming"};
export default {
  data(){
    return data
  },
  props:['bars'],
  methods:{
    change(index){
      console.log(index)
      this.$emit('inSwitch',index);

    }
  }
}

</script>