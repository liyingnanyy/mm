<template>
  <el-card>
    <div class="contenttitle2">
      <h3>栏目广告位</h3>
    </div>

    <div class="dataTables_wrapper" id="dyntable_wrapper">
      <!-- <div class="coupon-index"> -->
      <div class="searchDiv">
        <span>选择推广链接</span>
        <span>（单选）</span>
      </div>
      <div id="w0" class="grid-view">
        <div class="vip clearfix">
          <div class="left clearfix fl">
            <div class="selection active vip" data-id="1"></div>
            <div class="txt">
              <span>推VIP会员</span>
              <span>（默认）</span>
            </div>
          </div>
          <div class="center fl"><img src="https://static1.xlzhao.com/frontend/images/Advertisement-vip.png" alt=""></div>
          <div class="right fl">
            <a href="ads-vip">编辑</a>
          </div>
        </div>
        <div class="agent clearfix">
          <div class="left clearfix fl">
            <div class="selection agent" data-id="2"></div>
            <div class="txt">
              <span>推代理</span>
            </div>
          </div>
          <div class="center fl"><img src="https://static1.xlzhao.com/frontend/images/Advertisement-vip.png" alt=""></div>
          <div class="right fl">
            <a href="ads-agent">编辑</a>
          </div>
        </div>
        <div class="activity">
          <div class="left clearfix fl">
            <div class="selection activity" data-id="3"></div>
            <div class="txt">
              <span>推活动</span>
            </div>
          </div>
          <div class="center fl">
            <!-- 选择活动后上传活动广告图 -->
            <img src="https://static1.xlzhao.com/frontend/images/Advertisement-vip.png" alt="">
          </div>
          <div class="right fl">
            <a href="ads-activity">编辑</a>
          </div>
        </div>
        <div class="preservation">
          <button class="btn">保存</button>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {}
</script>

<style>
.contenttitle2 h3 {
  height: 40px;
  border-bottom: 1px solid #ccc;
}
.dataTables_wrapper {
  padding: 30px;
}
.searchDiv span {
  font-size: 14px;
}
.searchDiv span:last-child {
  color: #aaa;
}
.searchDiv {
  margin-bottom: 20px;
}
.txt {
  font-size: 14px;
}
.vip .txt span:last-child {
  color: #aaa
}
.grid-view {
  padding-left: 20px;
}
.grid-view > div {
  height: 50px;
  line-height: 50px;
  margin-bottom: 30px;
}
.center img {
  width: 344px;
  height: 50px;
}
.left {
  width: 165px;
  margin-right: 40px;
}
.center {
  margin-right: 60px;
  width: 344px;
}
.right a {
  padding: 3px 16px;
  line-height: 50px;
  text-align: center;
  color: #576A9A;
  width: 60px;
  height: 26px;
  border: 1px solid #576A9A;
  border-radius: 2px;
  text-decoration: none;
}
.preservation {
  width: 160px;
  height: 40px;
  margin-left: 205px;
  padding-top: 10px;
}
.preservation button {
  width: 160px;
  height: 40px;
  background: #FCE76C;
  border-radius: 4px;
  border: none;
  outline: none;
}
</style>
