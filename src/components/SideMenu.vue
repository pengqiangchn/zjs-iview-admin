<template>
  <div id="sideMenu">
    <Menu
      width="150px"
      ref="menu"
      @on-select="menuSelect"
      :open-names="openNames"
      :active-name="activeMenu"
    >
      <template v-for="item in menuList">
        <Submenu :key="item.name" :name="item.name">
          <template slot="title">
            {{ item.title }}
          </template>
          <template v-for="menuItem in item.children">
            <MenuItem :key="menuItem.name" :name="menuItem.name">
              {{ menuItem.title }}
            </MenuItem>
          </template>
        </Submenu>
      </template>

      <br /><br /><br />
      <!-- <Submenu name="1">
        <template slot="title">
          菜单1
        </template>
        <MenuItem name="1">菜单1-1</MenuItem>
        <MenuItem name="2" to="menu2">菜单1-2</MenuItem>
        <MenuItem name="3" to="about">菜单1-3</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          菜单2
        </template>
        <MenuItem name="3">菜单2-1</MenuItem>
      </Submenu> -->
    </Menu>
  </div>
</template>

<script>
  export default {
    props: {
      menuList: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style></style>
