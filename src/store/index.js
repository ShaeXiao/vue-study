import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    console.log(mutation,state)
  })
}
export default new Vuex.Store({
  state: {
    count: 0,
    name:'xx',
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  //getter 返回的是过滤后的state数据
  getters:{
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    //一条重要的原则就是要记住 mutation 必须是同步函数，在 mutation 中混合异步调用会导致你的程序很难调试
    increment (state) {
      state.count++
    },
    addname(state){
      state.name = state.name + 'x'
    }
  },
  actions: {
    //Action 类似于 mutation，不同在于：1、Action 提交的是 mutation，而不是直接变更状态 2、Action 可以包含任意异步操作
    //Action 通过 store.dispatch 方法触发：
    increment (context) {
      // console.log(888888)
      setTimeout(()=>{
        context.commit('increment')
      },3000)
    }
  },
  modules: {

  },
  plugins:[myPlugin,createPersistedState()]
})
