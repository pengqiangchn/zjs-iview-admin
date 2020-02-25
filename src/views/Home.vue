<template>
  <div class="home">
    <h1>这是Home</h1>
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

  login(loginData).then(res => {
    console.log(res);
    const data = res.data;
    // console.log(login);
    sss = data;
  });

  console.log(sss);
  export default {};
</script>
