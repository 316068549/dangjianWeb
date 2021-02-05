<template>
  <div>

    <div class="head">


      </div>


  </div>
</template>


<script>



  export default {
    name: 'openShop',
    mounted() {
      this.initVideo()
    },
    data() {
      return {
        topButton: [

        ],

        icons: [

        ],
        initVideo() {
          //初始化视频方法
          // let myPlayer = this.$video(myVideo, {
          //   //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          //   controls: true,
          //   //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          //   preload: "auto",
          //   //播放器准备好之后，是否自动播放 【默认false】
          //   autoplay:true,
          //   //true/false 视频播放结束后，是否循环播放
          //   loop:true,
          //   language: 'zh-CN', // 设置语言
          // });
        }
      }
    }

  }
</script>


<style scoped>

</style>
