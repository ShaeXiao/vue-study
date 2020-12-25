import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Foo from '../views/foo.vue'
import Bar from '../views/bar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default:Home,
      // about:About
    },
    children:[
      {
        path:'/home/foobar/:id',
        components:{
          default:Foo,
          other:Bar
        },
        props: true
      },
      {
        path:'/home/foo',
        components:{default:Foo},
        redirect: to => {
          // console.log(to,'dddddddd')
          return '/home/bar'
        }
      },
      {
        path:'/home/bar',
        components:{default:Bar}
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
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
