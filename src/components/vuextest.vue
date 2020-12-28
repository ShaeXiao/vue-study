<template>
  <div @click="changeCount">点击改变state.count{{count}}</div>
</template>

<script>
export default {
  computed: {
    count: function () {
      return this.$store.state.count;
    },
  },
  methods: {
    changeCount() {
      this.$store.commit("increment");
    },
  },
};
</script>