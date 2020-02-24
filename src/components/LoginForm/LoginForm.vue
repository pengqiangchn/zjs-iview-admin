<template>
  <Form ref="loginForm" :model="userData" :rules="loginRules" inline>
    <FormItem prop="userName">
      <Input type="text" v-model="userData.userName" placeholder="用户名">
      </Input>
    </FormItem>
    <FormItem prop="passWord">
      <Input type="password" v-model="userData.passWord" placeholder="密码">
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('loginForm')">登录</Button>
    </FormItem>
  </Form>
</template>

<script>
  export default {
    data() {
      return {
        userData: {
          userName: "",
          passWord: ""
        },
        loginRules: {
          userName: [
            {
              required: true,
              message: "请输入用户名",
              trigger: "blur"
            }
          ],
          passWord: [
            { required: true, message: "请输入密码!", trigger: "blur" },
            {
              type: "string",
              min: 6,
              message: "密码位数最少6位数"
            }
          ]
        }
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            alert("返回数据");
            this.UserSubmit();
          } else {
            alert("登录失败");
          }
        });
      },
      UserSubmit() {
        this.$emit("loginFormSubmit", this.userData);
      }
    }
  };
</script>

<style>
</style>