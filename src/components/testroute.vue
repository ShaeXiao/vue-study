<template>
  <div>组件路由守卫</div>
</template>

<script>
export default {
  beforeEnter: (to, from, next) => {
    // ...
    // console.log(from, to, "组件路由守卫");
    next();
  },
  beforeRouteLeave(to, from, next) {
    // console.log("leave /home/foo");
    next();
  },
  created(){
      // console.log('testroute')
  }
};
</script>