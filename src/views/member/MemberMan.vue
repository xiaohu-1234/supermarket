<template>
  <el-container class="main">
    <el-header class="header" style="height:30px">会员管理</el-header>
    <el-main>
      <span>搜索：</span>
      <el-input v-model="input" placeholder="请输入内容" size="small" style="width:200px"></el-input>
      <span style="font-size:10px;margin:0 10px">会员卡、会员名、电话、手机</span>
      <el-button type="primary" style="padding:5px">查询</el-button>
      <div class="hr"></div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :header-cell-style="{color:'#555'}"
        :cell-style="tdStyle"
      >
        <el-table-column prop="memberNum" width="120" label="会员卡号"></el-table-column>
        <el-table-column prop="memberName" label="会员姓名"></el-table-column>
        <el-table-column prop="memberGrade" label="会员等级"></el-table-column>
        <el-table-column prop="memberIntegral" label="会员积分"></el-table-column>
        <el-table-column prop="discount" label="折扣"></el-table-column>
        <el-table-column prop="mobbilePhone" label="手机号"></el-table-column>
        <el-table-column prop="phoneNum" label="座机号"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <i class="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
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
      input: "",
      tableData: [
        {
          memberNum: "111",
          memberName: "111",
          memberGrade: "111",
          memberIntegral: "111",
          discount: "11",
          mobbilePhone: "11",
          phoneNum: "11111"
        }
      ]
    };
  },
  methods: {
    tdStyle({ row, columnIndex }) {
      //console.log({ row, column, rowIndex, columnIndex });
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
}
</style>