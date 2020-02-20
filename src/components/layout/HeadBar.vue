<template>
  <Row>
    <Col span="1">
      <Icon type="md-menu" size="24" />
    </Col>
    <Col span="7">
      <head-breadcrumb></head-breadcrumb>
    </Col>
    <Col span="12" offset="4">
      <head-info-bar></head-info-bar>
    </Col>
  </Row>
</template>

<script>
  import HeadBreadcrumb from "./components/HeadBreadcrumb";
  import HeadInfoBar from "./components/HeadInfoBar";

  export default {
    components: {
      HeadBreadcrumb,
      HeadInfoBar
    }
  };
</script>

<style>
</style>