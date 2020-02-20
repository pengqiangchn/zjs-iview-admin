<template>
  <div class="ssas">
    <Poptip class="poptip" placement="bottom-end" width="400">
      <Badge :count="100">
        <Icon type="ios-notifications-outline" size="26"></Icon>
      </Badge>
      <div slot="content"></div>
    </Poptip>
    <div class="spin-col">
      <Tabs value="name1">
        <TabPane label="标签一" name="name1"
          ><List>
            <ListItem>
              <ListItemMeta
                avatar="ios-notifications-outline"
                title="This is title"
                description="This is description, this is description."
              >
              </ListItemMeta>
            </ListItem>
            <ListItem>
              <ListItemMeta
                avatar="ios-notifications-outline"
                title="This is title"
                description="This is description, this is description."
              >
              </ListItemMeta> </ListItem
            ><ListItem>
              <ListItemMeta
                avatar="ios-notifications-outline"
                title="This is title"
                description="This is description, this is description."
              >
              </ListItemMeta>
            </ListItem> </List
        ></TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
      </Tabs>
      <Spin fix v-if="spinShow">
        <Icon class="spin-icon-load" type="ios-loading" size="18"></Icon>
      </Spin>

      <!-- <Spin size="large" fix v-if="spinShow"></Spin> -->
    </div>
    切换显示状态：<i-switch @on-change="spinShow = !spinShow"></i-switch>
  </div>
</template>

<script>
  export default {
    methods: {},
    data() {
      return {
        spinShow: true
      };
    }
  };
</script>

<style>
  .poptip {
    padding-top: 15px;
  }
  .ssas {
    width: 400px;
    /* margin-left: -10px;
                                                                margin-right: -10px; */
  }
  .spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
  }
  .spin-col {
    height: 300px;
    position: relative;
    border: 1px solid #eee;
  }
</style>