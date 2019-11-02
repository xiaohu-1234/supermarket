<template>
  <el-container>
    <el-header class="home-header-contanier">
      <div class="title">xxxx超市管理系统</div>
      <div class="right-box">
        <div><img @click="clickUpload" :src="imagePath" height="40px" width="40px"></div>
        <span @click="clickBtn">{{username}}</span>
      </div>
    </el-header>
    <el-container>
      <el-aside style="width:205px">
        <el-menu
          :default-active="isSelected"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
        >
          <el-submenu :index="item.index" v-for="(item,index) in menulist" :key="index">
            <template slot="title">
              <i :class="item.class"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(val,i) in item.children"
                :key="i"
                :index="val.index"
              >{{val.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view @changeSelect="changeSelect"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import menulist from "../json/menulist.json";
import {getToken,IP} from '../apis/apis'
export default {
  data() {
    return {
      menulist: [],
      // path:'/home/picman'
      isSelected: "/home/picman",
      username:'未登录',
      imagePath:'',
    };
  },
  created() {
    // this.menulist = menulist;
    //实现每次刷新
    let hash = location.hash.substring(1);
    this.$store.commit("setPath", hash);
    //动态改变用户登录信息并进行token认证
    getToken(localStorage.getItem('token')).then(res => {
      if(res.data.code == '1'){
        this.username = '未登录';
      }else{
        this.menulist = menulist.filter(val => val.userGroup.indexOf(localStorage.getItem('userGroup'))!=-1)
        this.username = localStorage.getItem('acc');
        this.imagePath =localStorage.getItem('imgPath') != 'null' ? IP+"/"+ localStorage.getItem('imgPath') : require('../assets/imgs/20170719211350_4PnBt.jpeg')
      }
    })
  },
  methods: {
    changeSelect(hash) {
      // console.log(hash)
      this.$store.commit("setPath", hash);
    },
    getNavType() {
      // console.log(1)
      this.isSelected = this.$store.state.path;
    },
    clickBtn(){
      if(this.username === "未登录"){
        this.$router.history.push('/')
      }
    },
    clickUpload(){
      this.$router.history.push('/home/upload')
    },
    getImgPath(){
      // console.log(this.$store.state.imgPath)
      this.imagePath = IP+"/"+ this.$store.state.imgPath;
      //每次更新头像都存入本地保证刷新之后依然是修改后的头像
      localStorage.setItem('imgPath',this.$store.state.imgPath)
    }
  },
  watch: {
    "$store.state.path": "getNavType",
    "$store.state.imgPath" : "getImgPath"
  }
};
</script>

<style lang="less" scoped>
.home-header-contanier {
  background: black;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    color: #fff;
    font-size: 24px;
    //  height: 50px;
    line-height: 60px;
    // text-align: center;
  }
  .right-box{
    padding: 0 20px;
    display: flex;
    align-items: center;
    div{
      height: 40px;
      width: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
    }
    span{
      color: #fff;
      cursor: pointer;
    }
  }
}
.el-container {
  height: 100%;
}
.el-aside {
  height: 100%;
  background: #545c64;
}
.el-menu {
  border: none;
}
</style>