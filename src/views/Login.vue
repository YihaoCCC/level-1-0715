<template>
    <div class="login">
        <login-header></login-header>
        <router-view></router-view> 
    </div>
</template>
<script>
import LoginHeader from "@/components/LoginHeader";
export default {
    name:'Login',
    components:{
        LoginHeader,
    },
}
</script>
<style lang='scss'>
@import "src/assets/styles/reset.scss";
@import "src/assets/styles/common.scss";
</style>