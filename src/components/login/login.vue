<template>
  <div class="login">
    <div class="box">
      <h2>用户登录</h2>
      <el-form
        label-position="top"
        :model="loginObj"
        status-icon
        label-width="100px"
        ref="myform"
        class="demo-ruleForm"
        :rules="myrules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="loginObj.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginObj.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="mybtn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginObj: {
        username: '',
        password: ''
      },
      myrules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
  }
}
</script>

<style>
/* * {
  margin: 0;
  padding: 0;
} */
 .login {
  width: 100%;
  height: 100%;
  background: #2c3742;
  position: relative;
}
.login .box {
  width: 500px;
  padding: 40px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 50%);
}
.login .box h2 {
  margin-bottom: 20px;
}
.login .box .mybtn {
  width: 100%;
}
</style>
