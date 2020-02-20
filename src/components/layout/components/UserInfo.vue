<template>
  <Dropdown placement="bottom-end">
    <div>
      <Avatar icon="ios-person" />
      <span class="userName">UserName</span>
    </div>
    <DropdownMenu slot="list">
      <DropdownItem>个人中心</DropdownItem>
      <DropdownItem>设置</DropdownItem>
      <DropdownItem>退出</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
  export default {};
</script>

<style>
</style>