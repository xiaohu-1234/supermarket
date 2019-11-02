<template>
  <div>
    <el-container class="main">
      <el-header class="header" style="height:30px">添加会员</el-header>
      <el-main class="content">
        <p>
          <span>*</span>真实姓名:
        </p>
        <el-input v-model="realNmae" size="small" style="width:200px" autosize></el-input>
        <p>
          <span>*</span>会员卡卡号:
        </p>
        <el-input v-model="password" size="small" autosize style="width:200px"></el-input>
        <p>
          <span>*</span>用户组：
          <el-select v-model="accGroup" size="small" style="width:130px" placeholder="请选择用户组">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </p>
        <p>
          身份证号:
          <el-input v-model="surepwd" size="small" autosize style="width:400px"></el-input>
        </p>
        <p>
          用户状态：
          <el-radio v-model="radio" label="1">启用</el-radio>
          <el-radio v-model="radio" label="2">禁用</el-radio>
        </p>
        <p>
          手机号码:
          <el-input v-model="mobbilePhone" size="small" autosize style="width:200px"></el-input>
        </p>
        <p>
          座机号码:
          <el-input v-model="phoneNum" size="small" autosize style="width:200px"></el-input>
        </p>
        <p>
          邮箱地址:
          <el-input v-model="surepwd" size="small" autosize style="width:200px"></el-input>
        </p>
        <p>
          地区选择:
          <el-select v-model="value1" size="small" multiple placeholder="请选择省份">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <el-select
            v-model="value2"
            multiple
            size="small"
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择城市"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </p>
         <p>
          详细地址:
          <el-input v-model="surepwd" size="small" autosize style="width:200px"></el-input>
        </p>
         <p>
          邮政编码:
          <el-input v-model="surepwd" size="small" autosize style="width:200px"></el-input>
        </p>

        <p>
          <el-button style="padding:5px;background:blue;color:#fff;margin-top:10px">添加</el-button>
        </p>
      </el-main>
      <el-footer
        style="border-top:1px solid #ccc;padding-top:20px;font-size:10px;color:#ccc"
      >@Copyright 2018 xxxx超市管理系统</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1:'',
      value2:'',
      radio: "1",
      realNmae: "",
      mobbilePhone:'',
      phoneNum:'',
      password: "",
      surepwd: "",
      accGroup: "",
      options: []
    };
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