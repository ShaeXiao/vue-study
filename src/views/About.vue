<template>
  <div :class="$style.content">
    <p :class="$style.button">button</p>
    <button
      @click="changeView(item)"
      v-for="(item, index) in views"
      :key="index"
    >
      {{ item.name }}
    </button>
    <!-- <button>two</button> -->
    <keep-alive include="One">
      <!-- <component
        :is="currentView"
        :name="name"
        :age="age"
        @result="result"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      ></component> -->
      <One @click.native="Onezj" v-if="currentView == 'One'" :name="name"></One>
      <Two v-if="currentView == 'Two'" :person.sync="person"></Two>
    </keep-alive>
    <button @click="showAlert">alert</button>
    <div v-if="animal.show">set{{animal.show}}</div>
    <button @click="changeSet">changeSet</button>
    <div v-if="cats.length">
      <span @click="changeName(item)" v-for="(item,index) in cats" :key="index">{{item.name}}</span>
    </div>
    <!-- <One /> -->
  </div>
</template>

<script>
import Vue from 'vue'
import One from "@/components/one.vue";
import Two from "@/components/two.vue";
import Alert from "@/components/alert.vue";
import {extendComponents} from '../utils/expand'
import mixins from '../utils/mixin'
export default {
  components: {
    One,
    Two,
    Alert,
  },
  mixins:[mixins],
  data() {
    return {
      views: [{ name: "One" }, { name: "Two" }],
      currentView: "One",
      name: "ddddd",
      age: 89,
      person:{
        age:18,
        name:'xx'
      },
      animal:{
        type:'cat',
      },
      cats:[]
    };
  },
  created(){
    console.log(this.meMixin)//我是mixin
    // this.animal.show = 'ff';
    this.$set(this.animal,'show','fff')
    this.cats.push({name:'xiaohui1'})
    this.cats[1] = {name:'xiaohui2'}
    console.log(this.$options.data())
    // this.$set(this.cats,0,{name:'xiaohui1'})
    // this.$set(this.cats,1,{name:'xiaohui2'})
  },
  mounted(){
    console.log(this.$options.el)
  },
  methods: {
    changeView(e) {
      this.currentView = e.name;
    },
    result(e) {
      console.log("result is " + e);
    },
    showAlert() {
      extendComponents(Alert)
    },
    changeSet(){
      this.animal.show = 'change',
      this.age = 10
    },
    changeName(item){
      item.name = 'shaexiao'
    },
    Onezj(){
      console.log('我是One组件')
    }
  },
};
</script>

<!--共有样式-->
<style module>
.content .button {
  color: red;
}
</style>


