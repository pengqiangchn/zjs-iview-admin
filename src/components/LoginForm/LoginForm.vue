<template>
  <Form ref="loginForm" :model="userData" :rules="loginRules" inline>
    <FormItem prop="userName">
      <Input type="text" v-model="userData.userName" placeholder="用户名">
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="userData.password" placeholder="密码">
      </Input>
    </FormItem>
    <FormItem>
      <Button
        type="primary"
        :loading="loading"
        @click="handleSubmit('loginForm')"
        >登录</Button
      >
    </FormItem>
  </Form>
</template>

<script>
  export default {
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        userData: {
          userName: "",
          password: ""
        },
        loginRules: {
          userName: [
            {
              required: true,
              message: "请输入用户名",
              trigger: "blur"
            }
          ],
          password: [
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
            this.UserSubmit();
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