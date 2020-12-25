import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Foo from '../views/foo.vue'
import Bar from '../views/bar.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      // about:About
    },
    children: [{
        path: '/home/foobar/:id',
        components: {
          // default: Foo,
          other: Bar
        },
        props: true
      },
      {
        path: '/home/foo/:id',
        components: {
          default: Foo
        },
        beforeEnter: (to, from, next) => {
          // ...
          console.log("组件路由守卫");
          next();
        },
        beforeRouteUpdate(to, from, next) {
          console.log('update /home/foo',444444)
          next()
        },
        // redirect: to => {
        //   // console.log(to,'dddddddd')
        //   return '/home/bar'
        // }
      },
      {
        path: '/home/bar',
        components: {
          default: Bar
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   console.log(from, to, '路由全局守卫')
//   next()
// })
// router.beforeResolve((to, from, next) => {
//   console.log(from, to, '路由解析守卫')
//   next()
// })
// router.afterEach((to, from) => {
//   // ...
//   console.log('全局后置钩子')
// })
export default router