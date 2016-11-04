export default {
  state: {
    count: 0
  },
  mutations:{
    increment(state,n){ 
      n?state.count += n.amount : state.count ++
    }
  }
}