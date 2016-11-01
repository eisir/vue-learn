export default {
  mode: 'history',
  routes: [    
    {
      path: '/',
        component(resolve){
        require(['../views/Home'],resolve);
      }
    },
    {
      path: '/home',
        component(resolve){
        require(['../views/Home'],resolve);
      }
    },
    {
      path: '/user',
        component(resolve){
        require(['../views/user'],resolve);
      }
    },
    {
      path: '/user/:id',
        component(resolve){
        require(['../views/user/profile'],resolve);
      }
    },
    {
      path: '/demo',
      component(resolve){
        require(['../views/Demo'],resolve);
      }
    },
    {
      path: '*',
        component(resolve){
        require(['../views/notfound'],resolve);
      }
    }
  ]
};