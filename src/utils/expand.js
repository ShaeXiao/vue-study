import Vue from 'vue'
export function extendComponents(component,callback){
    const Action = Vue.extend(component)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const ele = new Action({
      propsData:{
        cancelText:'cancel',
        sureText:'sure',
        close:()=>{
          ele.$el.remove()
          callback&&callback()
        }
      }
    }).$mount(div)
  }
  