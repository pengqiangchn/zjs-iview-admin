<template>
  <div class="home">
    <h1>这是Home</h1>
    <Button type="primary" @click="btnClick">测试</Button>
  </div>
</template>

<script>
  // @ is an alias to /src

  import { login } from "@/api/user";

  const loginData = {
    userName: "test",
    password: "001"
  };

  var sss = null;

  export default {
    methods: {
      btnClick() {
        login(loginData).then(res => {
          console.log(res);
          const data = res.data;
          console.log(data);
          sss = data;

          console.log(sss);
        });
      }
    }
  };
</script>
