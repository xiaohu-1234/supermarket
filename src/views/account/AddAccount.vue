<template>
  <div>
    <el-container class="main">
      <el-header class="header" style="height:30px">添加管理账号</el-header>
      <el-main class="content">
        <p>
          <span>*</span>用户名:
        </p>
        <el-input
          v-model="acc"
          size="small"
          style="width:200px"
          autosize
          placeholder="请输入用户名"
          clearable
        ></el-input>
        <p>
          <span>*</span>密码:
        </p>
        <el-input
          v-model="pwd"
          size="small"
          autosize
          style="width:200px"
          placeholder="请输入密码"
          show-password
        ></el-input>
        <p>确认密码:</p>
        <el-input
          v-model="pwdex"
          size="small"
          autosize
          style="width:200px"
          placeholder="确认密码"
          @blur="pwdSure"
          show-password
        ></el-input>
        <p>
          <span v-show="isShow" class="text">两次输入的密码不一致!</span>
        </p>
        <p>
          <span>*</span>选择用户组
        </p>
        <el-select  v-model="userGroup" size="small" style="width:130px" placeholder="请选择用户组">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.text"
            :value="item.userGroup"
          ></el-option>
        </el-select>
        <span v-show="userGroupText" class="text">必须选择用户组</span>
        <p>
          <el-button
            :disabled="isAbled"
            style="padding:5px;background:blue;color:#fff;margin-top:10px"
            @click="addUserBtn"
          >添加</el-button>
        </p>
      </el-main>
      <el-footer
        style="border-top:1px solid #ccc;padding-top:20px;font-size:10px;color:#ccc"
      >@Copyright 2018 xxxx超市管理系统</el-footer>
    </el-container>
  </div>
</template>

<script>
import { addUser } from "../../apis/apis";
export default {
  data() {
    return {
      acc: "", //用户名
      pwd: "", //密码
      pwdex: "", //确认密码
      userGroup: "", //选择的用户组
      isAbled: true, //是否禁用添加按钮
      isShow: false, //是否显示密码不一致的显示
      userGroupText: false,
      options: [
        { text: "超级管理", userGroup: 0 },
        { text: "管理员", userGroup: 1 },
        { text: "店员", userGroup: 2 }
      ]
    };
  },
  created() {
    let path = location.hash.substring(1);
    this.$store.commit('setPath',path)
  },
  methods: {
    pwdSure() {
      if (this.pwd === this.pwdex) {
        this.isShow = false;
        this.isAbled = false;
      } else {
        this.isShow = true;
        this.isAbled = true;
      }
    },
    addUserBtn() {
      if (this.userGroup === "") {
        this.userGroupText = true;
      } else {
        addUser(this.acc, this.pwd, this.userGroup).then(res => {
          if (res.data == "ok") {
              this.$message('添加成功，跳转到用户列表');
              this.$router.history.push('/home/accountman');
              this.$emit('changeSelect','/home/accountman')
          } else {
            alert("添加失败！");
          }
        });
      }
    }
  },
  watch: {
    userGroup: {
      handler(newVal, oldVal) {
        // console.log(newVal !== '')
        if (newVal !== "") {
          this.userGroupText = false;
        } else {
          this.isAbled = true;
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
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
.text {
  color: red;
  font-size: 10px;
}
</style>