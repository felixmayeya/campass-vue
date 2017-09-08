<template>
    <div class="user-login-5">
        <div class="row bs-reset clearfix">
            <div class="col-md-6 bs-reset mt-login-5-bsfix clearfix">
                <div class="login-bg" v-bind:style="{background: 'url('+slideImg+')'}">
                    <img style="width: 200px;" class="login-logo" src="../img/campass.png" />
                </div>
            </div>
            <div class="col-md-6 login-container bs-reset mt-login-5-bsfix">
                <select class="selectpickerA pull-right" data-style="btn-info" data-width="100px" v-model="selectedLang">
                    <option data-lang="zh" value="zh">简体中文</option>
                    <option data-lang="en" value="en">English</option>
                </select>
                <div class="login-content" style="margin-bottom: 50px;">
                    <h1 data-i18n="string_welcome">欢迎登录</h1>
                    <h2 style="color: #4e5a64" data-i18n="string_langlu">朗录·一站式日志智能管理平台</h2>
                    <form action="javascript:;" class="login-form" method="post">
                        <div class="row">
                            <div class="col-xs-6">
                                <input placeholder="用户名" class="form-control form-control-solid placeholder-no-fix form-group" type="text" autocomplete="off" name="username" id="username" v-model="formData.username" />
                            </div>
                            <div class="col-xs-6">
                                <input placeholder="密码" class="form-control form-control-solid placeholder-no-fix form-group" type="password" autocomplete="off" name="password" id="password" v-model="formData.password" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="rem-password">
                                    <label class="rememberme mt-checkbox mt-checkbox-outline" style="text-indent: 2em; font-size: 13px;">
                                        <input type="checkbox" name="remember" id="savePassword" v-model="isRmbLogin" />
                                        <i data-i18n="string_nextlogin">下次自动登录</i> <span></span>
                                    </label>
                                    <br />
                                </div>
                            </div>
                            <div class="col-sm-8 text-right">
                                <div class="forgot-password">
                                    <a href="javascript:;" id="forget-password" class="forget-password" data-i18n="string_forget">忘记密码</a>
                                </div>
                                <button class="btn green ladda-button" name="logIn" id="loginBtn" data-style="zoom-in" v-on:click="doLogin">
                                    <span class="ladda-label" data-i18n="string_signin">登录</span>
                                </button>
                            </div>
                            <div class="col-sm-12">
                                <label class="mt-checkbox mt-checkbox-outline" style="text-indent: 2em; font-size: 13px;">
                                    <input type="checkbox" id="read" checked="checked" /> <i data-i18n="string_read">我已阅读并同意</i> <a href="/static/agreement.html" target="_blank" data-i18n="string_agreement">《服务协议》</a> <i data-i18n="string_dou">,</i> <a href="/static/license.html" target="_blank" data-i18n="string_license">《软件许可》</a> <i data-i18n="string_dou">,</i> <a href="/static/privacy.html" target="_blank" data-i18n="string_policy">《隐私条款》</a> <span></span>
                                </label>
                            </div>
                        </div>
                    </form>
                    <!-- BEGIN FORGOT PASSWORD FORM -->
                    <form class="forget-form" action="javascript:;" method="post" style="display:none">
                        <h3 class="font-green" data-i18n="string_forget"></h3>
                        <p data-i18n="string_resetpassword">输入您的邮箱地址来重置密码</p>
                        <div class="form-group">
                            <input class="form-control placeholder-no-fix form-group" type="text" id="f_username" name="username" placeholder="用户名" />
                        </div>
                        <div class="form-group">
                            <input class="form-control placeholder-no-fix form-group" type="text" id="f_email" name="email" placeholder="邮箱" />
                        </div>
                        <div class="form-actions">
                            <button type="button" id="back-btn" class="btn green btn-outline" data-i18n="string_back">返回</button>
                            <button type="button" class="btn btn-success uppercase pull-right" id="retrievePasswordBtn" data-i18n="string_submit">提交</button>
                        </div>
                    </form>
                    <!-- END FORGOT PASSWORD FORM -->
                </div>
                <div class="login-footer">
                    <div class="row bs-reset">
                        <div class="col-xs-12 bs-reset">
                            <div class="login-copyright text-center">
                                <p>
                                    <i data-i18n="string_copy">2016-2017 &copy;</i>&nbsp;<a href="http://www.open01.com" target="_blank" data-i18n="strin_company">北京开数科技有限公司</a>&nbsp;<i data-i18n="string_copyright">版权所有&nbsp;京ICP备16025114号</i><i></i> &nbsp;
                                    <img src="../img/icon-police.png" style="vertical-align: middle;margin-top: -3px;margin-right: 3px;" /><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802023241">京公网安备 11010802023241号</a>
                                </p>
                                <p>
                                    <a href="agreement.html" target="_blank" data-i18n="string_agreementQ">服务协议</a>&nbsp;|&nbsp;<a href="license.html" target="_blank" data-i18n="string_licenseQ">软件许可</a>&nbsp;|&nbsp;<a href="privacy.html" target="_blank" data-i18n="string_policyQ">隐私条款</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    requestLogin
} from '../config/api'
import swal from 'sweetalert2'

const bg1 = require('../img/bg1.jpg')
const bg2 = require('../img/bg2.jpg')
const bg3 = require('../img/bg3.jpg')
var bgList = [bg1, bg2, bg3]

export default {
  data: function () {
    return {
      slideImg: bg1,
      formData: {
        username: '',
        password: ''
      },
      isRmbLogin: false,
      selectedLang: 'zh'
    }
  },
  methods: {
    setBgImage: function () {
      var idx = 1
      setInterval(() => {
        this.slideImg = bgList[idx]
        idx++
        if (idx > 2) {
          idx = 0
        }
      }, 3000)
    },
    doLogin: function () {
      if (this.formData.username === '' || this.formData.password === '') {
        swal('用戶名密碼不能空')
        return
      }
      requestLogin(this.formData).then((res) => {
        console.log(res)
        // if (res.statu === 'fail') {

        // } else if (res.statu === 'expire'){

        // } else if (res.statu === 'close'){

        // } else {

        // }
      })
    }
  },
  computed: {

  },
  watch: {
    selectedLang: (val) => {
      localStorage.setItem('LANGUAGE', val)
    }
  },
  mounted () {
    let tempLang = localStorage.getItem('LANGUAGE')
    if (tempLang) {
      this.selectedLang = tempLang
    } else {
      navigator.language === 'zh-CN' ? this.selectedLang = 'zh' : this.selectedLang = 'en'
      localStorage.setItem('LANGUAGE', this.selectedLang)
    }
    this.setBgImage()
  }
}
</script>

<style lang="scss">
@import "../style/scss/login.scss"
</style>
