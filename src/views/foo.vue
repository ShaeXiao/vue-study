<template>
  <div>home-foo
      <TestR></TestR>
  </div>
  
</template>

<script>
import TestR from "@/components/testroute.vue";
export default {
  props: {
    id: String,
  },
  components:{
      TestR
  },
  beforeEnter: (to, from, next) => {
    // ...
    // console.log(from, to, "组件路由守卫");
    next();
  },
  beforeRouteUpdate(to, from, next){
      // console.log('update /home/foo')
      next()
  },
  beforeRouteLeave(to, from, next) {
    // console.log("leave /home/foo");
    next();
  },
  created() {
    // console.log(this.$route);
    // console.log(this.id, "idididid");
  },
};
</script>