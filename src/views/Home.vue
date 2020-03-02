<template>
  <div class="home">
    <h1>这是Home</h1>
    <Button type="primary" @click="btnClick">退出</Button>
  </div>
</template>

<script>
  // @ is an alias to /src

  import { logout } from "@/api/user";

  export default {
    methods: {
      btnClick() {
        this.$Modal.confirm({
          title: "提示",
          content: "确认注销登录吗?",
          onOk: () => {
            return (
              logout()
                // .then(this.$router.push("login"))
                .then()
                .catch(error => {
                  console.log(error);
                })
            );
          }
        });
      }
    }
  };
</script>
