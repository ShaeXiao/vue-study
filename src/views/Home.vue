<template>
  <div class="home">
    <!-- slot的使用 -->
    <Homec :lists="lists" >
      <template v-slot:test1="slotProps1">
        <div>
          <!-- <span v-if="slotProps1.list.status">test1</span
          > -->
          {{ slotProps1.list.name }}
        </div>
      </template>
      <!-- <template v-slot:test2="slotProps2">
        <span>{{ slotProps2.list.status }}</span>
      </template>
      <template v-slot:default="slotProps3">
        <div>{{ slotProps3.list.name }}</div>
      </template> -->
    </Homec>
    <Homec :lists="lists" >
      <template v-slot:test1="slotProps1">
        <div>
          <span v-if="slotProps1.list.status">test1</span
          >{{ slotProps1.list.name }}
        </div>
      </template>
    </Homec>
    <router-link to="/home/foobar/123">tofoobar</router-link> <br />
    <router-link to="/home/foo">tofoo</router-link>
    <router-view/>
    <router-view name="other"/>
  </div>
</template>

<script>
import Homec from "@/components/homec.vue";

export default {
  name: "Home",
  components: {
    Homec,
  },
  data() {
    return {
      lists: [
        {
          name: "one",
          status: true,
        },
        {
          name:'two',
          status:true
        },
      ],
    };
  },
};
</script>
