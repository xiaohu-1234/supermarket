<template>
  <div>
    <el-container class="main">
      <el-header class="header" style="height:30px">添加商品</el-header>
      <el-main class="content">
        <p>
          <span>*</span>选择类别
        </p>
        <el-select v-model="pic.category" size="small" style="width:130px" placeholder="请选择类别">
          <el-option v-for="item in options" :key="item.index" :label="item.name" :value="item.index"></el-option>
        </el-select>
        <p>
          <span>*</span>商品名称:
        </p>
        <el-input v-model="pic.name" size="small" style="width:200px" autosize placeholder="请输入名称"></el-input>
        <p>商品条形码:</p>
        <el-input
          v-model="pic.barCode"
          size="small"
          style="width:200px"
          autosize
          placeholder="请输入条形码"
        ></el-input> <el-button style="margin-left:10px;background-color:blue;color:#fff" size="small" @click="makeBarCode">生成条形码</el-button>
        <p>
          <span>*</span>商品售价:
        </p>
        <el-input
          v-model="pic.salePrice"
          size="small"
          autosize
          style="width:100px"
          placeholder="请输入售价"
        ></el-input>&emsp;元
        <p>市场售价:</p>
        <el-input
          v-model="pic.marketPrice"
          size="small"
          autosize
          style="width:100px"
          placeholder="请输入市场价"
        ></el-input>&emsp;元
        <div style="color:#ccc">默认为售价的1.2倍</div>
        <p>商品进价:</p>
        <el-input
          v-model="pic.stockPrice"
          size="small"
          autosize
          style="width:100px"
          placeholder="请输入进价"
        ></el-input>&emsp;元
        <p>入库数量:</p>
        <el-input
          v-model="pic.stockCount"
          size="small"
          autosize
          style="width:100px"
          placeholder="请输入数量"
        ></el-input>
        <div style="color:#ccc">记重商品单位为千克</div>
        <p>商品重量:</p>
        <el-input
          v-model="pic.commodityWeight"
          size="small"
          autosize
          style="width:100px"
          placeholder="请输入重量"
        ></el-input>
        <p>商品单位:</p>
        <el-input
          v-model="pic.commodityUnit"
          size="small"
          autosize
          style="width:100px"
          placeholder="请输入单位"
        ></el-input>
        <p>会员优惠:</p>
        <el-radio v-model="pic.vipDiscount" label="1">享受</el-radio>
        <el-radio v-model="pic.vipDiscount" label="2">不享受</el-radio>
        <p>是否促销:</p>
        <el-radio v-model="pic.promotion" label="1">启用</el-radio>
        <el-radio v-model="pic.promotion" label="2">禁用</el-radio>
        <p>商品简介:</p>
        <el-input type="textarea" v-model="pic.goodsDesc"></el-input>
        <div style="color:#ccc">不超过两百字</div>
        <el-button
          style="padding:5px;background:blue;color:#fff;margin-top:10px"
          @click="addPicBtn"
        >添加</el-button>
      </el-main>
      <el-footer
        style="border-top:1px solid #ccc;padding-top:20px;font-size:10px;color:#ccc"
      >@Copyright 2018 xxxx超市管理系统</el-footer>
    </el-container>
  </div>
</template>

<script>
import { addpic } from "../../apis/apis";
import categoryList from '../../json/category.json'
export default {
  data() {
    return {
      pic: {
        category: "", //商品类别
        name: "", //商品名称
        salePrice: "", //商品售价
        stockPrice: "", //商品进价
        barCode: "", //商品条形码
        goodsDesc: "", //商品简介
        marketPrice: "", //市场价
        stockCount: "", //入库数量
        commodityWeight: "", //商品重量
        commodityUnit: "", //单位
        vipDiscount: "2", //会员优惠
        promotion: "2" //是否促销
      },
      options: [], //商品类别
    };
  },
  created(){
    this.options = categoryList;
  },

  methods: {
    addPicBtn() {
      //给未输入的值设置默认值
      for(let key in this.pic){
        if(key == "barCode" && this.pic[key] == ""){
          this.pic[key] = "暂无条形码"
        }else if(key == "stockPrice" && this.pic[key] == ""){
          this.pic[key] = 0;
        }else if(key == "marketPrice" && this.pic[key] == ""){
          this.pic[key] = this.pic.salePrice * 1.2;
        }else if(key == "commodityWeight" && this.pic[key] == ""){
          this.pic[key] = 0;
        }else if(key == "stockCount" && this.pic[key] == ""){
          this.pic[key] = 0;
        }else if(key == "stockCount" && this.pic[key] == ""){
          this.pic[key] = 0;
        }else if(key == "commodityUnit" && this.pic[key] == ""){
          this.pic[key] = "件";
        }else if(key == "goodsDesc" && this.pic[key] == ""){
          this.pic[key] = "暂无简介";
        }
      }
      console.log(this.pic.category)
      addpic(this.pic).then(res => {
        this.$message({
          type:"success",
          message:res.data
        });
        //添加成功后把所有的字段置为原始状态
        for(let i in this.pic ){
          if(i == "vipDiscount" || i == "promotion"){
            this.pic[i] = '2';
          }else{
            this.pic[i] = '';
          }
        }
      });
    },
    makeBarCode(){
      let str="";
      for(let i = 0;i < 18;i++){
        str += Math.floor(Math.random()*10)
      }
      this.pic.barCode = str;
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
</style>