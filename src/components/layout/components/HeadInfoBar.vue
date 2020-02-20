<template>
  <div>
    <notice-box></notice-box>
    <user-info></user-info>
  </div>
</template>

<script>
  import UserInfo from "./UserInfo";
  import NoticeBox from "./NoticeBox";
  export default {
    components: {
      UserInfo,
      NoticeBox
    }
  };
</script>

<style>
</style>