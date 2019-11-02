<template>
  <el-container class="main">
    <el-header class="header" style="height:30px">销售列表</el-header>
    <el-main>
      开始时间：
      <el-input v-model="input" placeholder="请输入时间" size="small" style="width:200px"></el-input>
      结束时间：
      <el-input v-model="input" placeholder="请输入时间" size="small" style="width:200px"></el-input>
      (例如：2020-10-1)
      <div style="margin-top:20px">
           关键字：
       <el-input v-model="input" placeholder="请输入内容" size="small" style="width:200px"></el-input>
       <span style="font-size:10px;margin:0 10px">商品名称、订单号、会员卡号、客户名字</span>
       <el-button type="primary" style="padding:5px">查询</el-button>
      </div>
     
      
      <div class="hr"></div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :header-cell-style="{color:'#555'}"
        :cell-style="tdStyle"
      >
        <el-table-column prop="date" width="120" label="订单号"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="address" label="数量"></el-table-column>
        <el-table-column prop="price" label="实际售价（元）"></el-table-column>
        <el-table-column prop="salePrice" label="优惠（促销/会员）"></el-table-column>
        <el-table-column prop="degeneration" label="退款"></el-table-column>
        <el-table-column prop="time" label="销售时间"></el-table-column>
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
          degeneration: 2.4,
          time: '2020-10-1',
        }
      ]
    };
  },
  methods: {
    tdStyle(){
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