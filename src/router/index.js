export default {
  mode: 'history',
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
      name:'个人中心'
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
      },
      name:'Demo'
    },
    {
      path: '*',
        component(resolve){
        require(['../views/notfound'],resolve);
      }
    }
  ]
};