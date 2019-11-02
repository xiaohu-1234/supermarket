<template>
  <el-container class="main">
    <el-header class="header" style="height:30px">商品管理</el-header>
    <el-main>
      <el-select v-model="category" placeholder="请选择分类">
        <el-option v-for="item in options" :key="item.name" :value="item.index" :label="item.name"></el-option>
      </el-select>关键词：
      <el-input v-model="keywords" placeholder="请输入内容" style="width:200px"></el-input>（商品名称）
      <el-button @click="searchBtn" type="primary" style="padding:5px">查询</el-button>
      <div class="hr"></div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :header-cell-style="{color:'#555'}"
        :cell-style="tdStyle"
      >
        <el-table-column prop="barCode" width="150" label="商品条形码"></el-table-column>
        <el-table-column prop="name" label="商品名称"></el-table-column>
        <el-table-column prop="category" label="所属分类"></el-table-column>
        <el-table-column prop="salePrice" label="售价（元）"></el-table-column>
        <el-table-column prop="promotion" label="促销价"></el-table-column>
        <el-table-column prop="marketPrice" width="120" label="市场价（元）"></el-table-column>
        <el-table-column prop="stockCount" label="库存"></el-table-column>
        <el-table-column prop="stockCountMoney" label="库存总额"></el-table-column>
        <el-table-column prop="saleMoney" label="销售总额"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <i class="el-icon-edit" @click="handleEdit(scope.row)"></i>
            <i class="el-icon-delete" @click="handleDel(scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="curpage"
          :page-sizes="[6,12]"
          :page-size="row"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
        <p>
          <span>*</span>选择类别
        </p>
        <el-select v-model="pic.category" size="small" style="width:130px" placeholder="请选择类别">
          <el-option
            v-for="item in options"
            :key="item.index"
            :label="item.name"
            :value="item.index"
          ></el-option>
        </el-select>
        <p>
          <span>*</span>商品名称:
        </p>
        <el-input v-model="pic.name" size="small" style="width:200px" autosize placeholder="请输入名称"></el-input>
        <p>商品条形码:</p>
        <el-input
          disabled
          v-model="pic.barCode"
          size="small"
          style="width:200px"
          autosize
          placeholder="请输入条形码"
        ></el-input>
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
          @click="updatePicBtn"
        >修改</el-button>
      </el-dialog>
    </el-main>
    <el-footer
      style="border-top:1px solid #ccc;padding-top:20px;font-size:10px;color:#ccc"
    >@Copyright 2018 xxxx超市管理系统</el-footer>
  </el-container>
</template>

<script>
import { picList, delPic,updatePic } from "../../apis/apis";
import categoryList from "../../json/category.json";

export default {
  data() {
    return {
      dialogTableVisible: false,
      options: [], //类别列表
      keywords: "", //搜索关键词
      tableData: [], //渲染数组
      total: 0, //总页数
      curpage: 1, //当前页数
      row: 6, //每页显示的条数
      categoryObj: {}, //类别对象
      category: 0, //类别值
      promotion: "",

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
      }
    };
  },
  created() {
    //给类别列表添加全部商品项
    this.options = [{ name: "全部商品", index: 0 }, ...categoryList];
    // console.log(this.options)
    //把类别数组处理成对象 ====> index:name
    for (let val of categoryList) {
      this.categoryObj[val.index] = val.name;
    }
    // console.log(this.categoryObj)

    this.getList(this.curpage); //初始化数据
  },
  methods: {
    tdStyle({ row, columnIndex }) {
      //console.log({ row, column, rowIndex, columnIndex });
      if (
        columnIndex === 3 ||
        columnIndex === 7 ||
        columnIndex === 8 ||
        (columnIndex === 6 && row.kuchu === 0)
      )
        return "color:red;font-size:10px";
      return "font-size:10px";
    },
    //选择几条显示
    handleSizeChange(val) {
      // 控制每页显示几条数据的
      this.row = val;
      this.getList(this.curpage);
    },
    getList(page, category = 0, keywords = "") {
      picList(page, this.row, category, keywords).then(res => {
        for (let val of res.data.data) {
          //改变类别的名称
          val.category = this.categoryObj[val.category];
          //计算库存总额
          val.stockCountMoney = val.stockCount * val.stockPrice;
          //计算销售总额
          val.saleMoney = val.stockCount * val.salePrice;
          //改变是否促销
          val.promotion = val.promotion == "1" ? "促销" : "未促销";
        }
        this.tableData = res.data.data;
        this.total = res.data.total;
      });
    },
    //当前页发生改变
    handleCurrentChange(page) {
      this.curpage = page;
      this.getList(page, this.category, this.keywords);
    },
    searchBtn() {
      this.getList(1, this.category, this.keywords);
    },
    //删除商品
    handleDel(obj) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        delPic(obj.id).then(res => {
          if (res.data === "ok") {
            this.dialogTableVisible = false;
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.getList(this.curpage, this.category, this.keywords);
          }
        });
      });
    },
    //修改商品
    handleEdit(val) {
      this.dialogTableVisible = true;
      // console.log(val);
     

      if (typeof val.category === "string") {
        for(let v of categoryList){
          if(val.category === v.name){
            val.category = v.index;
          }
        }
      }
      val.promotion = val.promotion === "未促销" ? '2' : '1';
      // 
      this.pic = { ...val };
      console.log(this.pic)
    },
    updatePicBtn() {
       updatePic(this.pic).then(res=>{
         this.$message({
           type:'success',
           message:'修改成功'
         })
         this.dialogTableVisible = false;
       })
       this.getList(this.curpage, this.category, this.keywords);
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  .el-main {
    padding: 10px;
  }
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
    margin-top: 10px;
    text-align: center;
  }
}
</style>