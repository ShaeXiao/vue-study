<template>
  <div class="grid">
      <h1 class="head">这里是标题</h1>
      <div @click="close">{{ cancelText }}</div>
      <div @click="onSureClick">{{ sureText }}</div>
  </div>
</template>
<script>
export default {
  props:{
    close:{
      type:Function,
      default:()=>{}
    },
    cancelText:{
      type:String,
      default:'取消'
    },
    sureText:{
      type:String,
      default:'确定'
    }
  },
  methods:{
    onSureClick(){
      // 其他逻辑
      this.close()
    }
  }
};
</script>