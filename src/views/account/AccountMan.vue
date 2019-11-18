<template>
  <el-container class="main">
    <el-header class="header" style="height:30px">账号管理</el-header>
    <el-main>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :header-cell-style="{color:'#555'}"
        :cell-style="tdStyle"
      >
        <el-table-column prop="account" label="账号"></el-table-column>
        <el-table-column prop="userGroup" label="用户组"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <i class="el-icon-edit" title="修改密码" @click="handleEdit(scope.row)"></i>
            <i class="el-icon-delete" title="删除" @click="handleDel(scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer
      style="border-top:1px solid #ccc;padding-top:20px;font-size:10px;color:#ccc"
    >@Copyright 2018 xxxx超市管理系统</el-footer>
  </el-container>
</template>

<script>
import { userList } from "../../apis/apis";
import { delUser } from "../../apis/apis";

export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    userList().then(res => {
      let arr = [];
      for (let v of res.data) {
        if (v.userGroup == 0) {
          v.userGroup = "超级管理";
        } else if (v.userGroup == 1) {
          v.userGroup = "管理员";
        } else {
          v.userGroup = "店员";
        }
        arr.push(v);
      }
      this.tableData = arr;
    });
  },
  methods: {
    tdStyle() {
      return "font-size:10px";
    },
    handleDel(obj) {
      this.$confirm("此操作将永久删除该管理员, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delUser(obj.id).then(res => {
            this.$message({
            type: "success",
            message: "删除成功"
          });
            userList().then(res => {
              let arr = [];
              for (let v of res.data) {
                if (v.userGroup == 0) {
                  v.userGroup = "超级管理";
                } else if (v.userGroup == 1) {
                  v.userGroup = "管理员";
                } else {
                  v.userGroup = "店员";
                }
                arr.push(v);
              }
              this.tableData = arr;
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleEdit(obj) {}
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
}
</style>