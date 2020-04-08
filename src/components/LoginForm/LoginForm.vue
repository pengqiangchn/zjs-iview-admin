<template>
  <Form ref="loginForm" :model="userData" :rules="loginRules" inline>
    <FormItem prop="userCode">
      <Input
        ref="loginUserCode"
        type="text"
        v-model="userData.userCode"
        @on-enter="userCodeEnter"
        placeholder="用户名"
      >
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input
        ref="loginUserCode"
        type="password"
        v-model="userData.password"
        @on-enter="handleSubmit"
        placeholder="密码"
      >
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" :loading="loading" @click="handleSubmit"
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
          userCode: "",
          password: ""
        },
        loginRules: {
          userCode: [
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
      userCodeEnter() {
        this.$refs.loginUserCode.focus();
      },
      handleSubmit() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.$emit("loginFormSubmit", this.userData);
          }
        });
      }
    }
  };
</script>

<style>
</style>