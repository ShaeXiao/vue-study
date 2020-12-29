<template>
  <div class="home">
    <!-- slot的使用 -->
    <!-- <Homec :lists="lists" >
      <template v-slot:test1="slotProps1">
        <div> -->
    <!-- <span v-if="slotProps1.list.status">test1</span
          > -->
    <!-- {{ slotProps1.list.name }}
        </div>
      </template> -->
    <!-- <template v-slot:test2="slotProps2">
        <span>{{ slotProps2.list.status }}</span>
      </template>
      <template v-slot:default="slotProps3">
        <div>{{ slotProps3.list.name }}</div>
      </template> -->
    <!-- </Homec> -->
    <!-- <Homec :lists="lists" >
      <template v-slot:test1="slotProps1">
        <div>
          <span v-if="slotProps1.list.status">test1</span
          >{{ slotProps1.list.name }}
        </div>
      </template>
    </Homec> -->
    <router-link to="/home/foobar/123">tofoobar</router-link> <br />
    <router-link to="/home/foo">tofoo</router-link><br />
    <router-link to="/bar">tobar</router-link>
    <router-view />
    <router-view name="other" />
    <div>
      ----------------------------- 以下是vuex -------------------------------
    </div>
    <Vuextest></Vuextest>
    <div @click="changeCount">点击改变state.count{{ count }}</div>
    <div>state.name{{ name }}</div>
    <div v-for="(todo, index) in $store.getters.doneTodos" :key="index">
      {{ todo.id + todo.text }}
    </div>
  </div>
</template>

<script>
import Homec from "@/components/homec.vue";
import Vuextest from "@/components/vuextest.vue";
import { mapState } from "vuex";
// import {request} from '../utils/request.js'
// import Axios from "axios";
import axios from 'axios'

export default {
  name: "Home",
  components: {
    Homec,
    Vuextest,
  },
  data() {
    return {
      lists: [
        {
          name: "one",
          status: true,
        },
        {
          name: "two",
          status: true,
        },
      ],
    };
  },
  mounted() {
    // this.$request({
    //   url:'/about',
    //   method:'get',
    //   params:{
    //     name:'xx1'
    //   }
    // })
    // this.$request({
    //   url:'/testpost',
    //   method:'post',
    //   data:{
    //     name:'xx2'
    //   },
    //   isFormdata:true
    // })

    var data = new FormData()

    data.set('age', 18)

    this.$request({
      url: '/user',
      method: 'post',
      data:{
        name:'xxxx'
      },
      isFormdata:true
      // headers: {
      //   'Content-Type': 'multipart/form-data'
      // }
    })
  },
  // computed:{
  //   count(){
  //     return this.$store.state.count
  //   },
  //   name(){
  //     return this.$store.state.name
  //   }
  // },
  computed: mapState(["count", "name"]),
  methods: {
    changeCount() {
      // this.$store.commit('increment')
      this.$store.dispatch("increment");
    },
  },
};
</script>
