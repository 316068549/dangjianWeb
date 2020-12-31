<template>
  <div>
    <div class="head">
      <el-row class="biao">
        <el-col :span="12" class="topHead">
             <span>
              欢迎来到智引党建，
             </span>

          <span v-if="name"  style="margin-right: 20px">
            &nbsp; &nbsp;
              {{name}}
             </span> &nbsp;
          <a @click="logout" v-if="name">退出登录 &nbsp;</a>

          <router-link to='/login' v-else  style="margin-top: -16px;">
            <a>请登录</a>
          </router-link>



          &nbsp; &nbsp;
          <!--<span>-->
              <!--<router-link to='/register' style="margin-top: -16px;">-->
               <!--<a>免费注册</a>-->
              <!--</router-link>-->
            <!--</span>-->
        </el-col>

        <el-col :span="12" class="topHead">
          <!--<a>我的</a>-->
          <router-link to='/home' style="margin-top: -16px;">
          <a>返回首页</a>
          </router-link>
          <!--<a> <i class="el-icon-shopping-cart-2" style="color: red;font-weight:bold;"></i> 购物车</a>-->
          <!--&nbsp; &nbsp;-->
          <!--<a>收藏夹</a>-->
          <!--&nbsp;&nbsp;-->
          <!--<router-link to='/onlineShop' style="margin-top: -16px;">-->
            <!--<a>免费开店</a>-->
          <!--</router-link>-->
        </el-col>
      </el-row>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Layout',
      data(){
          return {
              name:''
          }
      },
      methods:{
          logout(){
              this.$router.push({path: '/login'});
          }
      }
  }
</script>

<style scoped lang="scss">
  .head {
    width: 100%;
    height: 25px;
    background-color: rgb(245, 245, 245);
  }
.biao{
  background: #d50f10;
  a{
    color:#FFF;
  }
  color:#FFF;
}
  a:hover {
    color: #fff;
  }

  .topHead {
    text-align: center;
    line-height: 25px;
    font-size: 10px;
  }
</style>
