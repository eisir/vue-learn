export default {
  routes: [
    {
      path: '/home',
        component(resolve){
        require(['../views/Home'],resolve);
      }
    },
    {
      path: '/demo',
      component(resolve){
        require(['../views/Demo'],resolve);
      }
    }
  ]
};