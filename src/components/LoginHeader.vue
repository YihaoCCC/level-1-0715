<template>
<!--    <div class="loginheader">-->
<!--        <div class="header-bottom">-->
<!--            <div class="title">-->
<!--                <span>欢迎登陆华泰APP</span>-->
<!--            </div>-->
<!--        </div>-->
<!--&lt;!&ndash;    </div>&ndash;&gt;佈局方式一-->
    <div class="header"><!--佈局方式二-->
        <div class="header-close">
            <img src="./../assets/imgs/icon-close.png" alt="">
        </div>
        <div class="header_title">
            <div class="header_title--context">
                欢迎登陆华泰APP</div>
        </div>
    </div>
</template>
<script>
export default{
    name:'LoginHeader',

}
</script>
<style lang='scss'>
    .header{
        width: 100%;
        height: 380px;
        background-image: url("./../assets/imgs/login_bg.png");
        background-size: contain;
        .header-close{
            position: fixed;
            top: 5%;
            left: 3%;
            width: 36px;
            height: 36px;
            cursor: pointer;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .header_title{
            margin: auto;
            transform: translateY(180px);
            height: 220px;
            width: 694px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            background-color: #ffffff;
            .header_title--context{
                transform: translateY(70px);
                box-sizing: border-box;
                color: #252B3A;
                font-weight: bold;
                font-size: 48px;
            }
        }
    }
/*.loginheader{ 佈局方式一*/
/*    box-sizing: border-box;*/
/*    padding-top: 260px;*/
/*    width: 100%;*/
/*    height: 33%;*/
/*    background: url('./../assets/imgs/login_bg.png') no-repeat center;*/
/*    background-size: contain;*/
/*   .header-bottom{*/
/*       margin: 0 auto 0 auto;*/
/*       height: 260px;*/
/*       width: 694px;*/
/*       border-top-left-radius: 20px;*/
/*       border-top-right-radius: 20px;*/
/*       background-color: #ffffff;*/
/*       .title{*/
/*            padding-top: 80px;*/
/*           span{*/
/*               margin: 20px auto 20px auto;*/
/*               color: #252B3A;*/
/*               font-weight: bold;*/
/*               font-size: 48px;*/
/*           }*/
/*       }*/
/*   }*/

/*}*/
</style>