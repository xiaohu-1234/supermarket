<template>
    <div>
      <el-container class="main">
        <el-header class="header" style="height:30px">添加商品</el-header>
        <el-main class="content">
        
            <p><span>*</span>商品条形码:</p>
            <el-input v-model="nameInput" size="small" style="width:200px" autosize placeholder="请输入名称"></el-input>
            <p><span>*</span>商品数量:</p>
            <el-input v-model="price" size="small" autosize style="width:100px" placeholder="请输入金额"></el-input>&emsp;元
            <div style="color:#ccc">记重商品单位为千克</div>
            <p><span>*</span>进价:</p>
            <el-input v-model="marketPrice" size="small" autosize style="width:100px" placeholder="请输入金额"></el-input>&emsp;元
            <br>
            <el-button style="padding:5px;background:blue;color:#fff;margin-top:10px">入库</el-button>

            
        </el-main>
        <el-footer style="border-top:1px solid #ccc;padding-top:20px;font-size:10px;color:#ccc">@Copyright 2018 xxxx超市管理系统</el-footer>
      </el-container>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            nameInput:'',
            value:'',
            options:[],
            text:'',
            price:'',
            marketPrice:'',
            isFavourable:false,
            isPromote:''
          }
        }
    }
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
  .block{
      margin-top: 20px;
      text-align: center;
  }
  p {
    font-weight: bold;
    span{
    color: red;
  }}
  .content{
    font-size: 12px;
    padding-bottom: 50px;
  }
}

</style>