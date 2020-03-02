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
      ...mapActions(["Login", "SetUserMenuList"]),
      Submit(userData) {
        this.Login(userData)
          .then(res => {
            console.log("LoginSuccess", res);
            this.LoginSuccess();
          })
          .catch(error => {
            this.LoginFail(error);
          })
          .finally(() => {
            this.btnLaoding = false;
          });
        this.btnLaoding = true;
      },
      LoginSuccess() {
        this.isLoginError = false;
        this.SetUserMenuList({ routes: routes, roles: ["user"] });
        //获取用户信息,并跳转
        this.$router.push("home");
      },
      LoginFail(error) {
        const result = error?.response?.data?.result;
        if (result) {
          console.log("LoginFail", error.response);
          this.errorMessage = result.message;

          this.isLoginError = true;
        }
      }
    }
  };
</script>

<style>
</style>