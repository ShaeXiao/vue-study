<template>
  <div>
    <div v-for="(list, index) in lists" :key="index">
      <!-- {{ list.name }} -->
      <slot name="test1" :list='list'></slot>
      <slot list='list'></slot>
      <slot name="test2" list='list'></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lists: Array,
  },
};
</script>