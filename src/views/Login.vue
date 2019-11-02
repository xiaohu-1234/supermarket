<template>
  <div class="login-container">
    <div class="wrap">
      <div class="main">
        <p>
          用户名:
          <el-input v-model="acc" size="small" style="width:240px" clearable></el-input>
        </p>
        <p>
          密&emsp;码:
          <el-input v-model="pwd" size="samll" style="width:240px" show-password></el-input>
        </p>
        <p v-show="isShow" class="text">用户名或密码错误</p>
        <el-button style="width:100%;background-color:green;color:#fff" @click="clickLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { login,IP } from "../apis/apis";
export default {
  data() {
    return {
      acc: "",
      pwd: "",
      isShow: false,
      flag: true //定义标杆制作防抖节流
    };
  },
  methods: {
    //制作防抖节流
    clickLogin() {
      if (this.flag) {
        // console.log(this.flag);
        login(this.acc, this.pwd).then(res => {
          // console.log(res);
          if (res.data.msg == "ok") {
            // console.log(res.data)
            localStorage.setItem("id", res.data.data[0].id);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("acc", this.acc);
            localStorage.setItem('imgPath',res.data.data[0].avatarUrl);
            localStorage.setItem("userGroup", res.data.data[0].userGroup);
            this.$router.history.push("/home/picman");
          } else {
            this.isShow = true;
          }
        });
        this.flag = false;
        //设置3秒后将flag置为true可以继续发生请求
        setTimeout(() => {
          this.flag = true;
        }, 3000);
      }
    }
  }
};
</script>

<style lang='less' scoped>
.login-container {
  height: 100%;
  width: 100%;
  background-color: #545c64;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.wrap {
  background: #fff;
  margin-right: 50px;
  border-radius: 10px;
  display: flex;
  width: 350px;
  height: 200px;
  justify-content: center;
  .text {
    color: red;
    font-size: 10px;
  }
}
</style>