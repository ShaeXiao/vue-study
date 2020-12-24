<template>
  <div :class="$style.content">
    one
    <div @click="add">{{count}}</div>
    <div>{{name}}</div>
    <transition>
      <span :key="text">{{ text | textFilter }}</span>
    </transition>
    <input v-focus>
    <h1>修饰符</h1>
    <div @click.self="fatherNode">父节点
      <div @click="sonNode">子节点
        <div @click="sunNode">孙子节点</div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
    props:{
        name:String
    },
    directives:{
      focus:{
        inserted:function(el){
          console.log(el)
          el.focus()
        }
      }
    },
    filters:{
      textFilter:function(value){
        if(!value) return
        return value +'filter'
      }
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
        },
        fatherNode(){
          console.log('father')
        },
        sonNode(){
          console.log('son')
        },
        sunNode(){
          console.log('sun')
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
