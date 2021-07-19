<template>
    <div>
        <div class="loginForm">
            <div class="loginForm__body">
                <div class="loginForm__body--inputBox">
                    <div class="logo-box">
                        <img src="./../assets/imgs/user.png" alt="">
                    </div>
                    <input type="username" placeholder="请输入账号" v-model="username">
                </div>
                <div class="loginForm__body--inputBox">
                    <div class="logo-box">
                        <img src="./../assets/imgs/password.png" alt="">
                    </div>
                    <input  :type="inputPsw" placeholder="请输入密码" v-model="password" @input="check" >
                    <div class="logo-eyes" >
                        <img src="./../assets/imgs/password-eyes.png" alt="" @click="showText" >
                    </div>
                </div>
                <div class="loginForm__body--inputBox">
                    <div class="logo-box">
                        <img src="./../assets/imgs/check.png" alt="">
                    </div>
                    <input type="password" placeholder="请输入验证码" v-model="code">
                    <div class="logo-test">
                        <img src="./../assets/imgs/code.png" alt="">
                    </div>
                </div>
                <div class="loginForm__body--inputBox">
                    <button @click="login">
                        登 陆
                    </button>
                </div>
                <div class="loginForm__forget">
                    <div class="rejester">
                        <a href="javascript:;"> 忘记密码</a>
                    </div>
                    <div class="forget">
                        <a>注册</a>
                    </div>
                </div>
                <div class="loginForm__tip" >
                    <div v-show="!ifcheck" class="content">
                    <span>请先阅读并勾选同意用户协议</span>
                    </div>
                </div>
                <div class="loginForm__footer">
                    <input type="radio"   @click="changeradio"  :checked="ifcheck" class="radio" > <span>同意</span><a href="javascript:;">《华泰APP服务协议》、《用户隐私政策》</a>
                </div>
            </div>
        </div>
    <login-footer @changePassword="changeFace" facemsg="切换人脸识别登陆" ></login-footer></div>
</template>

<script>
    import LoginFooter from "../components/LoginFooter";

    export default {
        name: "PasswordLogin",
        components:{
          LoginFooter
        },
        data(){
            return{
                username:'',
                password:'',
                code:'',
                // inputType:['password','text'],數組方法
                ifcheck:false,
                inputPsw:'password'
            }
        },
        computed:{

        },
        methods:{
            check(){
                if(this.password.length>8)
                    this.$toast.fail('密码长度不能超过8位！');
                    return this.password.slice(0,8);
            },
            changeFace(){
                this.$router.push('./faceLogin')
            },
            changeradio(){
                this.ifcheck=!this.ifcheck;
            },
            showText(){
                this.inputPsw=this.inputPsw==='password'?'text':'password';
            },
            login(){
                let { username,password,ifcheck,code} = this;
                if(!username || !password){
                    this.$toast('请输入用户名或密码！');
                }
                if(username === 'cyh' && password=== '123'){
                    if(code==='0413'){
                        if(ifcheck){
                            this.$router.push('/home');
                            this.$toast.success('欢迎您'+this.username);
                        }
                        else {
                            this.$toast.fail('请先阅读并勾选同意用户协议！');
                        }
                    }
                    else{
                        this.$toast.fail('驗證碼輸入錯誤！');
                    }
                }
                else {
                    this.$toast.fail('用户名或密码错误！');
                }
            }
        }
    }
</script>

<style lang="scss">
        .loginForm{
            width: 694px;
            height: 60%;
            margin: auto;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.06);
            background-color: #ffffff;
            text-align: center;
            .loginForm__body{
                padding-bottom: 30px;
                margin: 0 auto 0px auto ;
                width: 93%;
                .loginForm__body--inputBox{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 96px;
                    border-radius: 48px;
                    margin-top:40px;
                    background-color:#E5e5e6;
                    .logo-box{
                        width:35px;
                        height:35px;
                        display: inline-block;
                        img{
                            margin-left: 40px;
                            width: 100%;
                            height: 100%;
                         }
                     }
                    input{
                        box-sizing: border-box;
                        margin-right: 100px;
                        width: 68%;
                        background-color:#E5e5e6;
                        border: none;
                    }
                    &:nth-child(2){
                        input{
                            width: 60%;
                            margin-right: 10px;
                        }
                        .logo-eyes{
                            display: flex;
                            width: 36px;
                            height: 36px;
                            margin-right: 40px;
                            align-items: center;
                        }
                    }
                    &:nth-child(3){
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        input{
                           width: 280px;
                           margin: 0;
                           display: flex;
                        }
                        .logo-test{
                           width: 196px;
                           height: 96px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    &:nth-child(4){
                        display: flex;
                        justify-content: center;
                        background-image: linear-gradient(to top, #6E89F7 0%, #5E7BDF 100%);
                        button{
                            color: #ffffff;
                            font-size:30px;
                        }
                    }
                }
                .loginForm__forget{
                    display: flex;
                    padding: 0 10px 0 10px;
                    justify-content: space-between;
                    margin:20px 0 20px 0;
                    .rejester{
                        a{
                            color: #999999;
                            font-size:18px;
                        }
                    }
                    .forget{
                        color:#999999;
                        font-size: 18px;
                    }
                    }
                }
            .loginForm__tip{
                width: 600px;
                margin: auto;
                height: 80px;
                line-height: 80px;
                text-align: center;
                .content{
                    position: relative;
                    background: rgba(0, 0, 0, 0.4);
                    border-radius: 10px;
                   top: 0px;
                    span{
                        font-size: 28px;
                        color: #ffffff;
                    }
                }
            }
                .loginForm__footer{
                    margin-top: 40px;
                    margin-bottom: 0px;
                    span{
                        font-size: 26px;
                    }
                    a{
                        font-size: 28px;
                        color: #5E7BDF;
                    }
                    height: 40px;
                    line-height: 40px;
                }
            }
</style>