<template>
  <el-container>
    <div clas="topheadecenter" style="margin:0 auto;max-width: 1190px;min-height: 377px;">
      <div class="left fl xlz">
        <!--            <h1 class="logo"></h1>-->
        <span class="slogan" style="color: #333;">
          学两招-Edu
          <span class="plus">+</span>
        </span>
      </div>
      <!--left-->
      <div class="right fr userinfo" id="user_info">
        <div >
          <img
            src="https://image.xlzhao.com/o_1cum3fvbuhrk1urunbq1rs21v437.png"
            alt
            width="23"
            height="23"
          >
          <span>坚持星球 校长</span>
        </div>
      </div>
      <!--right-->
      <div class="fl bluetxt" id="bluemsg" style="display: block;">
        <span class="msgicon fl"></span>
        <a href="/sms/msg-detail?id=21" id="msgtxt" class="widthxian spanmsg">线下活动也可以用海报推广功能上线！</a>
        <a href="/sms/msg-list" class="spanmsg seemore">查看更多</a>
      </div>
    </div>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
.topheader {
  background: #fff;
  padding: 0 30px;
  height: 80px;
  overflow: hidden;
  -moz-box-shadow: 1px 1px 2px #999;
  -webkit-box-shadow: 1px 1px 2px #999;
  box-shadow: 1px 1px 2px #999;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
