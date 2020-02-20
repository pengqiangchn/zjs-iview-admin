<template>
  <Poptip class="poptip" placement="bottom-end">
    <Badge :count="100">
      <Icon type="ios-notifications-outline" size="26"></Icon>
    </Badge>
    <div slot="content">
      <List>
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
        </ListItem>
      </List>
    </div>
  </Poptip>
</template>

<script>
  export default {
    methods: {}
  };
</script>

<style>
  .poptip {
    padding-top: 15px;
  }
</style>