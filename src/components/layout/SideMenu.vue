<template>
  <div id="sideMenu">
    <slot></slot>
    <Menu
      width="150px"
      ref="menu"
      @on-select="menuSelect"
      :open-names="openNames"
      :active-name="activeMenu"
    >
      <template v-for="item in menuList">
        <Submenu v-if="!item.isHide" :key="item.name" :name="item.name">
          <template slot="title">
            {{ item.title }}
          </template>
          <template v-for="menuItem in item.children">
            <MenuItem
              v-if="!menuItem.isHide"
              :key="menuItem.name"
              :name="menuItem.name"
            >
              {{ menuItem.title }}
            </MenuItem>
          </template>
        </Submenu>
      </template>
    </Menu>
  </div>
</template>

<script>
  export default {
    props: {
      menuList: {
        type: Array,
        default: () => []
      },
      openNames: {
        type: Array,
        default: () => []
      },
      activeMenu: {
        type: String,
        default: ""
      }
    },
    methods: {
      menuSelect: function(name) {
        this.$emit("menuSelect", name);
      }
    }
  };
</script>

<style></style>
