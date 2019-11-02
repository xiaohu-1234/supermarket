<template>
  <el-container class="main">
    <el-header class="header" style="height:30px">上传头像</el-header>
    <el-main>
      <el-upload
        class="avatar-uploader"
        :action="sendIP"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-main>
    <el-footer
      style="border-top:1px solid #ccc;padding-top:20px;font-size:10px;color:#ccc"
    >@Copyright 2018 xxxx超市管理系统</el-footer>
  </el-container>
</template>

<script>
import { IP } from "../../apis/apis";
export default {
  data() {
    return {
      imageUrl: "" //控制图片显示的
    };
  },
  methods: {
    //上传头像成功后会触发的函数
    handleAvatarSuccess(res, file) {
      this.imageUrl = IP + "/" + res;
      //上传图片预览
      this.$store.commit('setimgPath',res);
      this.$message({
        type:'success',
        message:'头像上传成功'
      })
    }
  },
  computed: {
    sendIP() {
      return IP + "/upload" +"?acc=" + localStorage.getItem('acc');
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
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
    span {
      color: red;
    }
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>