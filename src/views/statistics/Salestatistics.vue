<template>
  <el-container class="main">
    <el-header class="header" style="height:30px">销售数量统计</el-header>
    <el-main>
      时间：
      <el-date-picker v-model="value1" type="date" size="small" placeholder="选择日期"></el-date-picker>--
      <el-date-picker v-model="value1" type="date" size="small" placeholder="选择日期"></el-date-picker>
      <el-select v-model="value" placeholder="销售数量统计" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="success" size="small" style="margin-left:10px;margin-bottom:10px">查询</el-button>

      <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
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
      msg: "Welcome to Your Vue.js App",
      value1:'',
      value:'',
      options:[]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
          title:{
            text:'销售统计(不含退货)',
            textStyle:{
                fontSize:14,
            },
            left:'center'
            // textVerticalAlign:'middle'
          },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      });
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