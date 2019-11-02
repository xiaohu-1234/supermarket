<template>
  <el-container class="main">
    <el-header class="header" style="height:30px">库存管理</el-header>
    <el-main>
      <el-select v-model="value" placeholder="请选择分类">
        <el-option v-for="item in options" :key="item.value"></el-option>
      </el-select>关键词：
      <el-input v-model="input" placeholder="请输入内容" style="width:200px"></el-input>（商品名称，条形码）
      <el-button type="primary" style="padding:5px">查询</el-button>
      <div class="hr"></div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :header-cell-style="{color:'#555'}"
        :cell-style="tdStyle"
      >
        <el-table-column prop="date" width="120" label="商品条形码"></el-table-column>
        <el-table-column prop="name" label="商品名称"></el-table-column>
        <el-table-column prop="price" label="进价（元）"></el-table-column>
        <el-table-column prop="kuchu" label="入库"></el-table-column>
        <el-table-column prop="allKuchu" label="库存"></el-table-column>
        <el-table-column prop="saleMoney" label="已售"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <i class="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
            <i class="el-icon-delete" @click="handleEdit(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </el-main>
    <el-footer style="border-top:1px solid #ccc;padding-top:20px;font-size:10px;color:#ccc">@Copyright 2018 xxxx超市管理系统</el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      value: "",
      input: "",
      tableData: [
        {
          date: "673u9429743535",
          name: "海飞丝",
          address: "护理",
          price: 10,
          salePrice: "未促销",
          marketPrice: 2.4,
          kuchu: 0,
          allKuchu: 0,
          saleMoney: 0
        }
      ]
    };
  },
  methods: {
    tdStyle({ row, columnIndex }) {
      //console.log({ row, column, rowIndex, columnIndex });
      if (
        columnIndex === 2 ||
        columnIndex === 4
      )
        return "color:red;font-size:10px";
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
  .block{
      margin-top: 20px;
      text-align: center;
  }
}
</style>