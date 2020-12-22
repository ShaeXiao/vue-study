<template>
  <div :class="$style.content">
    one
    <div @click="add">{{count}}</div>
    <div>{{name}}</div>
    <transition>
      <span :key="text">{{ text }}</span>
    </transition>
  </div>
</template> 

<script>
export default {
    props:{
        name:String
    },
    data(){
        return{
            count:0,
            text:'cc'
        }
    },
    created(){
        console.log('create')
    },
    activated(){
        console.log('add')
    },
    deactivated(){
        console.log('remove')
    },
    methods:{
        add(){
            this.count ++ ;
            this.$emit('result',this.count);
            this.text = 'gg'
        }
    }
}
</script>
  
<style module>
.content{
    color: green;
}
.button-warp {
  display: inline-block;
}
.button {
  padding: 5px 10px;
  font-size: 12px;
  color: blue;
}
</style>
