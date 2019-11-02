<template>
  <el-container class="main">
    <el-header class="header" style="height:30px">销售出库</el-header>
    <el-main>
      <p>
        <span>*</span>商品条形码:
      </p>
      <el-input v-model="nameInput" size="small" style="width:200px" autosize placeholder="请输入条形码"></el-input>
      <p>
        <span>*</span>数量:
      </p>
      <el-input v-model="price" size="small" autosize style="width:100px" placeholder="请输入数量"></el-input>
      <span style="font-size:10px;color:gray;margin-left:10px">计重商品以千克为单位</span>
      <p>
        <el-button size="small" type="success">加入订单</el-button>
        <span style="color:green;font-size:10px;margin-left:5px">重新出库</span>
      </p>
      <div class="hr"></div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :header-cell-style="{color:'#555'}"
        :cell-style="tdStyle"
      >
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="address" label="数量"></el-table-column>
        <el-table-column prop="price" label="单价（元）"></el-table-column>
        <el-table-column prop="salePrice" label="总价（元）"></el-table-column>
        <el-table-column prop="date" width="120" label="优惠总价(元)"></el-table-column>
      </el-table>
      <div style="font-size:10px;padding:10px;border-bottom:1px solid #eee">
        <span>总价：{{allMoney}}元，</span>
        <span>优惠：{{mmm}}元，</span>
        <span style="color:red">小计：{{mmm}}元</span>
      </div>
      <div class="block" v-show="true">
        <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
      <p>会员卡号：</p>
      <el-input size="small" style="width:200px"></el-input>
      <div style="font-size:10px;color:gray;margin-bottom:10px">输入会员卡号</div>
      <el-button size="small" type="success">确认提交</el-button>
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
      nameInput:'',
      price:'',
      options: [],
      value: "",
      input: "",
      allMoney: 0,
      mmm:0,
      tableData: [
        {
          date: "673u9429743535",
          name: "海飞丝",
          address: "护理",
          price: 10,
          salePrice: "未促销",
          degeneration: 2.4,
          time: "2020-10-1"
        }
      ]
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