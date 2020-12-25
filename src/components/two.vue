<template>
  <div>
    two
    <div @click="changeAge">{{ person.age }}</div>
  </div>
</template>

<script>
export default {
  props: {
    age: Number,
    person: Object,
  },
  methods: {
    changeAge() {
      this.$emit("update:person", { age: 20 });
    },
  },
};
</script>