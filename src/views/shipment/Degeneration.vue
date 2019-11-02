<template>
  <el-container class="main">
    <el-header class="header" style="height:30px">销售退货</el-header>
    <el-main>
      <span>订单号：</span>
      <el-input v-model="nameInput" size="small" style="width:200px;margin-right:10px" autosize placeholder="请输入订单号"></el-input>
      <el-button size="small" type="success">查询</el-button>
    
    </el-main>
    <el-footer
      style="border-top:1px solid #ccc;padding-top:20px;font-size:10px;color:#ccc"
    >@Copyright 2018 xxxx超市管理系统</el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      nameInput:''
    };
  },
  methods: {
    tdStyle() {
      return "font-size:10px";
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
</style>