<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" tiele="欢迎光临"></Card>
      <login-form @loginFormSubmit="handleSubmit"> </login-form>
    </div>
  </div>
</template>

<script>
  import LoginForm from "@/components/LoginForm";
  export default {
    components: {
      LoginForm
    },
    methods: {
      handleSubmit(userData) {
        alert(userData.userName + " " + userData.passWord);
      }
    }
  };
</script>

<style>
</style>