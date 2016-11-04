export default {
  // mode: 'history',
  routes: [    
    {
      path: '/',
        component(resolve){
        require(['../views/Home'],resolve);
      },
      name:'首页'
    },
    {
      path: '/home',
        component(resolve){
        require(['../views/Home'],resolve);
      },
      name:'首页'
    },
    {
      path: '/list',
      component(resolve){
        require(['../views/List'],resolve);
      },
      name:'列表页'
    },
    {
      path: '/user',
      component(resolve){
        require(['../views/user'],resolve);
      },
      name:'user',
    },    
    {
      path: '/user/:userId',
      component(resolve){
        require(['../views/user/profile'],resolve);
      },
      name:'profile'
    },
    {
      path: '/demo',
      component(resolve){
        require(['../views/Demo'],resolve);
      },
      name:'Demo'
    },
    {
      path: '*',
      component(resolve){
        require(['../views/notfound'],resolve);
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
};