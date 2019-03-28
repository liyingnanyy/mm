<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6">
      <div class="slogan">
        学两招-Edu
        <span class="plus">+</span>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="active">
        <a href>线下活动也可以用海报推广功能上线！</a> &nbsp;&nbsp;
        <a href class="more">查看更多</a>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="nickname">
        <img
          src="https://image.xlzhao.com/o_1cum3fvbuhrk1urunbq1rs21v437.png"
          alt
          width="23px"
          height="23px"
        >
        <span>坚持星球 校长</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style>
.slogan,
.active,
.nickname {
  line-height: 60px;
}
.slogan {
  position: absolute;
}
.plus {
  position: relative;
  top: -8px;
  right: 0;
}
.active {
  margin-left: -150px;
}
.active a:first-child {
  color: red;
  font-size: 14px;
}
.active a:last-child {
  color: #576a9a;
  font-size: 14px;
}
a:hover {
  text-decoration: underline;
}
.nickname img {
  border-radius: 50%;
  margin-bottom: 5px;
  vertical-align: middle;
}
</style>
