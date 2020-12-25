<template>
    <div>
        home-foo {{id}}
    </div>
</template>

<script>
export default {
    props:{
        id:String
    },
    created(){
        console.log(this.$route)
        console.log(this.id,'idididid')
    }
}
</script>