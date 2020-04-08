<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" tiele="欢迎光临">
        <Alert v-if="isLoginError" type="error" closable>{{
          errorMessage
        }}</Alert>
        <login-form :loading="btnLaoding" @loginFormSubmit="Submit">
        </login-form>
      </Card>
    </div>
  </div>
</template>

<script>
  import LoginForm from "@c/LoginForm";
  import { mapActions } from "vuex";
  import routes from "@/router/router-config";

  export default {
    data() {
      return {
        errorMessage: "账号或密码错误!",
        btnLaoding: false,
        isLoginError: false
      };
    },
    components: {
      LoginForm
    },
    methods: {
      ...mapActions(["Login", "GetUserInfo", "SetUserMenuList"]),
      Submit(userData) {
        this.Login(userData)
          .then(() => {
            this.GetUserInfo(userData)
              .then(res => {
                this.LoginSuccess({
                  routes: routes,
                  roles: res.roles
                });
              })
              .catch(error => {
                this.LoginFail(error);
              })
              .finally(() => {
                this.btnLaoding = false;
              });
          })
          .catch(error => {
            this.LoginFail(error);
          });
        this.btnLaoding = true;
      },
      LoginSuccess(data) {
        this.SetUserMenuList(data);
        this.isLoginError = false;
        //获取用户信息,并跳转
        this.$router.push("home");
      },
      LoginFail(error) {
        const result = error?.response?.data?.result;
        if (result) {
          console.log("LoginFail", error.response);
          this.errorMessage = result.message;

          this.isLoginError = true;
          this.btnLaoding = false;
        }
      }
    }
  };
</script>

<style>
</style>