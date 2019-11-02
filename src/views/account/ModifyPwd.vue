<template>
  <div>
    <el-container class="main">
      <el-header class="header" style="height:30px">修改密码</el-header>
      <el-main class="content">
        <p>
          <span>*</span>原密码:
        </p>
        <el-input
          v-model="pwd"
          size="small"
          style="width:200px"
          autosize
          placeholder="请输入旧密码"
          show-password
        ></el-input>
        <p>
          <span>*</span>新密码:
        </p>
        <el-input v-model="newpwd" size="small" autosize style="width:200px" placeholder="请输入密码" show-password></el-input>
        <p>确认密码:</p>
        <el-input v-model="surepwd" size="small" autosize style="width:200px"  placeholder="确认密码" show-password></el-input> <span v-show="isSure" class="text">输入密码不一致</span>

        <p>
          <el-button style="padding:5px;background:blue;color:#fff;margin-top:10px" @click="modifyPwd">修改</el-button>
        </p>
      </el-main>
      <el-footer
        style="border-top:1px solid #ccc;padding-top:20px;font-size:10px;color:#ccc"
      >@Copyright 2018 xxxx超市管理系统</el-footer>
    </el-container>
  </div>
</template>

<script>
import {modifyPwd} from '../../apis/apis'
export default {
  data() {
    return {
      pwd:'',
      newpwd:'',
      surepwd:'',
      isSure:false,
      isAbled:false,
    };
  },
  created(){
    
  },
  methods:{
    modifyPwd(){
      if(this.surepwd !== this.newpwd){
        this.isSure = true;
      }else{
        this.isSure = false;
        let id = localStorage.getItem('id');
        modifyPwd(id,this.newpwd,this.pwd).then(res => {
          if(res.data === '修改成功!'){
            alert(res.data)
            this.$router.history.push('/')
          }else{
            alert(res.data)
          }
        })
      }
      
       
    }
  }
};
</script>

<style lang="less" scoped>
.text{
  color: red;
  font-size: 10px;
}
.main {
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  // padding-bottom: 50px;
  .header {
    background: #f1f1f1;
    // border-radius: 10px;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
  }
  .hr {
    border: 3px solid #f1f1f1;
    margin-top: 10px;
  }
  .block {
    margin-top: 20px;
    text-align: center;
  }
  p {
    font-weight: bold;
    span {
      color: red;
    }
  }
  .content {
    font-size: 12px;
    padding-bottom: 50px;
  }
}
</style>