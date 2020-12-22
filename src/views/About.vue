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
      <component
        :is="currentView"
        :name="name"
        :age="age"
        @result="result"
      ></component>
      <!-- <One v-if="currentView == 'One'"></One>
        <Two v-if="currentView == 'Two'"></Two> -->
    </keep-alive>
    <button @click="showAlert">alert</button>
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
    };
  },
  created(){
    console.log(this.meMixin)//我是mixin
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
  },
};
</script>

<!--共有样式-->
<style module>
.content .button {
  color: red;
}
</style>


