<template>
  <div class="home">
    <h1>这是Home</h1>
    <h1><b>123123123</b></h1>
    <Button type="primary" @click="btnClick">退出</Button>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  // @ is an alias to /src

  export default {
    methods: {
      ...mapActions(["Logout"]),
      btnClick() {
        this.$Modal.confirm({
          title: "提示",
          content: "确认注销登录吗?",
          onOk: () => {
            this.Logout()
              .then(() => {
                this.$router.push("login");
              })
              .catch(error => {
                console.log(error);
              });
          }
        });
      }
    }
  };
</script>
