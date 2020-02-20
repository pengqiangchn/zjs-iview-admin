<template>
  <Breadcrumb>
    <BreadcrumbItem to="/">
      <Icon type="ios-home-outline" /> Home
    </BreadcrumbItem>
    <template v-for="item in breadcrumbs">
      <BreadcrumbItem :key="item.name">
        <Icon :type="item.icon" /> {{ item.name }}
      </BreadcrumbItem>
    </template>
  </Breadcrumb>
</template>

<script>
  export default {
    data() {
      return {
        breadcrumbs: [
          {
            name: "菜单1",
            icon: "logo-buffer"
          },
          {
            name: "菜单1-1",
            icon: "ios-cafe"
          }
        ]
      };
    }
  };
</script>

<style>
</style>