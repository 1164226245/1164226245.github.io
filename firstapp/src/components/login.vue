<template>
  <div>
    <van-tabs v-model="active">
      <!-- 登录 -->
      <van-tab title="登录">
        <van-cell-group>
          <van-field
            v-model="login.mobile"
            required
            clearable
            label="手机号"
            placeholder="请输入手机号"
            right-icon="question-o"
            left-icon="phone-circle-o"
            @click="success('请输入常见11位手机号')"
          />

          <van-field
            v-model="login.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            clearable
            @click="success('密码包含下划线中英文字符长度6-8')"
            right-icon="question-o"
            left-icon="browsing-history-o"
          />
          <van-button type="info" @click="gotoLogin" size="large">立即登录</van-button>
        </van-cell-group>
      </van-tab>
      <!-- -->
      <!--  -->
      <!-- 注册 -->
      <van-tab title="注册">
        <van-field
          v-model="register.mobile"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
          right-icon="question-o"
          left-icon="phone-circle-o"
           @click="success('请输入常见11位手机号')"
        />
        <!-- @click-right-icon="$toast('请输入常见11位手机号')" -->
        <!--   @click="success('请输入常见11位手机号')" -->
        <span class="form-control-error">{{mobile_span}}</span>
        <van-field
          left-icon="contact"
          v-model="register.username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
          right-icon="question-o"
           @click="success('用户名包含英文数字和下划线')"
        />
        <!-- @click-right-icon="$toast('用户名包含英文数字和下划线')" -->
        <!--   @click="success('用户名包含英文数字和下划线')" -->
        <van-field
          v-model="register.password"
          right-icon="question-o"
          type="password"
          label="密码"
          placeholder="请输入密码"
          @click="success('密码包含下划线中英文字符长度6-8')"
          required
          left-icon="browsing-history-o"
        />
        <van-field
          v-model="register.dbpwd"
          type="password"
          label="确认密码"
          placeholder="请确认密码"
          right-icon="question-o"
          required
          left-icon="browsing-history-o"
        />
        <van-button @click="gotoRegister" type="warning" size="large">立即注册</van-button>
        <!--  @click="success('请确认密码')" -->
      </van-tab>
      <!-- 验证码 -->
      <van-tab title="验证码" v-if="false">
        <van-cell-group>
          <van-field v-model="mobile" center clearable label="手机号" placeholder="请输入手机号"></van-field>
          <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  mounted() {
    //this.$route  是路由【参数对象】
    this.active = this.$route.query.active == "login" ? 0 : 1;
  },
  data() {
    return {
      active: 1,
      login: {},
      register: {},
      sms: "",
      mobile: "",
      mobile_span: "",
      value: ""
    };
  },
  methods: {
    success(msg) {
      Toast.clear();
      Toast.success({
        message: msg,
        duration: 500
      });
    },
    //注册请求
    gotoRegister() {
      //vue/register
      var mobileReg = /^1[3,5,6,7,8,9][0-9]{9}$/gi;
      var mobile = this.register.mobile;
      // 用户名正则，4到16位（字母，数字，下划线，减号）
      var usernameReg = /^[a-zA-Z0-9_-]{4,16}$/;
      // 密码正则，4到16位（字母，数字）
      var pwdReg = /^[a-zA-Z0-9]{4,9}$/;
      if (mobileReg.test(mobile)) {
        if (usernameReg.test(this.register.username)) {
          if (pwdReg.test(this.register.password)) {
            if (this.register.dbpwd == this.register.password) {
              this.$axios.post("/vue/register", this.register).then(res => {
                if (!!res.data.type) {
                  this.active = 0;
                  this.login.mobile = res.data.result[0].mobile; //把注册的手机号发给等路由与页面
                }
              });
            } else {
              Toast.fail("两次密码输入不一致");
            }
          } else {
            Toast.fail("密码4到16位包含(字母,数字)");
          }
        } else {
          Toast.fail("用户名4到16位包含(字母，数字，下划线，减号)");
        }
      } else {
        Toast.fail("请输入常见手机号");
      }
    },
    //登录请求
    gotoLogin() {
      this.$axios.post("/vue/login", this.login).then(res => {
        if (!!res.data.type) {
          this.$router.push({ name: "mine" });
          sessionStorage.token = res.data.token;
          //前端存token
          console.log(this.login.mobile);
          sessionStorage.mobile = this.login.mobile;
        } else {
          sessionStorage.token = "";
        }
      });
    }
  }
};
</script>
<style scoped>
.form-control-error {
  color: #e31939;
  vertical-align: middle;
}
</style>