<template>
    <div>
        <div class="faceLogin">
            <div class="faceLogin__img">
                <a href="">  <img src="./../assets/imgs/face-login.png" alt=""></a>
            </div>
            <div class="faceLogin__title">
                <span>点击进行人脸识别登录</span>
            </div>
            <div class="faceLogin__tip" >
                <div v-show="!ifcheck" class="content">
                    <span>请先阅读并勾选同意用户协议</span>
                </div>
            </div>
            <div class="faceLogin__footer">
                <input type="radio"   @click="changeradio"  :checked="ifcheck" class="radio" > <span>同意</span><a href="javascript:;">《华泰APP服务协议》、《用户隐私政策》</a>
            </div>
        </div>
        <login-footer @changePassword="changePassword" facemsg="切换账号密码登陆" ></login-footer>
    </div>
</template>

<script>
    import LoginFooter from "../components/LoginFooter";
    export default {
        name: "FaceLogin",
        data(){
            return{
                ifcheck:false,
            }
        },
        components:{
            LoginFooter,
        },
        methods:{
            changePassword(){
                
                this.$router.push('./passwordLogin')
            },
            changeradio(){
                this.ifcheck=!this.ifcheck;
            },
    }
    }
</script>

<style lang="scss">
.faceLogin{

    width: 694px;
    height: 700px;
    margin: 0 auto 0 auto;
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.06);
    padding-bottom: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    .faceLogin__img{
        margin-top: 120px;
    }
    .faceLogin__title{
        margin-top: 50px;
        span{
         font-size: 40px;
            color:#ADB0B8 ;
        }
    }
    .faceLogin__tip{
        width: 600px;
        height: 80px;
        line-height: 80px;  
        margin: auto;
        text-align: center;
        .content{
            position: relative;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 10px;
           top: 200px;
            span{
                font-size: 28px;
                color: #ffffff;
            }
        }
    }
    .faceLogin__footer{
        position: relative;
        top: 240px;
        span{
            font-size: 26px;
        }
        a{
            font-size: 28px;
            color: #5E7BDF;
        }
        height: 40px;
        line-height: 40px;
        vertical-align: middle;
    }
}
</style>