<template>
  <div class="home">
    <div class="home__nav-top">
      <span>
        华泰首页
      </span>
    </div>
    <div class="home__nav-img">
        <img src="./../assets/imgs/home-header.png" alt="">
    </div>
    <div class="home__banner">
        <img src="./../assets/imgs/home-banner.png" alt="">
    </div>
    <div class="home__content">
        <img src="./../assets/imgs/home-content.png" alt="">
    </div>
    <div class="home__footer-bar">
      <img src="./../assets/imgs/home-footer.png" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
}
</script>
<style lang="scss" scoped>
@import "src/assets/styles/reset.scss";
@import "src/assets/styles/common.scss";
.home{
  background-color:#EEF0F5 ;
  .home__nav-top{
    height: 80px;
    line-height: 80px;
    background-color:#5E7BDF ;
    span{
      font-size: 34px;
      color: #ffffff;
    }
  }
  .home__nav-img{
     background-color:#5E7BDF ;
    width: 750px;
    height: 288px;
    img{
      width: 99%;
    }
  }
  .home__banner{
    width: 750px;
    height: 210px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .home__content{
     width: 750px;
     height: 768px;
     margin-top: 20px;
     img{
       width: 100%;
     }
  }
  .home__footer-bar{
    width: 750px;
    height: 98px;
    position: absolute;
    bottom: 0;
  }
}

</style>
