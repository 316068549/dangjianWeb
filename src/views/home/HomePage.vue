<template>

  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-main class="web-content" id="web-content" :class="{'mt-70':this.$route.path.substr(0,8)=='/product'}">
      <router-view/>
    </el-main>
    <Footer/>
  </el-container>
</template>

<script>
    import Header from './Header'
    import Footer from './Footer.vue'

    export default {
        name: 'web-home',
        components: {
            Header: Header,
            Footer: Footer
        },
        data () {
            return {
                msg: '1',
            }
        },
        methods: {},
        created() {
            document.title='智引党建';
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../styles/global.css";
  @import "../../styles/main.css";
  @media (max-width: 768px){
    .el-header{
      height: 48px !important;
    }
    .el-container{
      background-color: #252525;
    }
  }
  @media (min-width: 768px){
    .el-header{
      height: 50px !important;
    }
    /*.web-content{
       margin-top: -70px;
    }*/
  }

  .el-header{
    /*background-color: #25aad6;*/
    color: #333;
    text-align: center;
    line-height: 50px;
    padding: 0 0px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    color: #333;
    padding: 0 0px;
    /*-webkit-box-flex: none;*/
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
  }


  body > .el-container {
    margin-bottom: 40px;

  }
  .el-container{
    min-height: 100%;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
