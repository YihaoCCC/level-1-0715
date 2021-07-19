<template>
    <div class="footer">
       <span v-on:click="$emit('changePassword')" >{{facemsg}}</span>
        <span v-on:click="$emit('changeFace')" >{{passwordmsg}}</span>
    </div>
</template>
<script>
    export default {
        name:'LoginFooter',
        props: {
            facemsg: String,
            passwordmsg:String,
        },
    }
</script>

<style lang="scss">
.footer{
    span{
        font-size: 30px;
    }
    height: 120px;
    line-height: 160px;
    color: #5E7BDF;
}
</style>