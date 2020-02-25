<template>
  <div>
    <Layout class="_Layout">
      <Sider class="_LayoutSider">
        <side-menu
          class="side-menu"
          :menuList="menuList"
          @menuSelect="menuSelect"
        >
          <div id="logo">
            <img v-show="!collapsed" :src="maxLogo" key="max-logo" />
            <img v-show="collapsed" :src="minLogo" key="min-logo" />
          </div>
        </side-menu>
      </Sider>
      <Layout>
        <!-- <Header class="_LayoutHeader">
          <head-bar> </head-bar>
        </Header> -->
        <Content>
          这是内容
          <!-- 路由出口 -->
          <router-view></router-view>
        </Content>
        <Footer>
          这是页脚
        </Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import mockData from "@/mock/services/menu";
  import SideMenu from "@/components/layout/SideMenu";
  import HeadBar from "@/components/layout/HeadBar";
  import maxLogo from "@/assets/img/logo.jpg";
  import minLogo from "@/assets/img/logo-min.jpg";

  export default {
    components: {
      SideMenu,
      HeadBar
    },
    data() {
      return {
        // openNames: mockData.openNames,
        // activeMenu: mockData.activeMenu,
        collapsed: false,
        maxLogo,
        minLogo,
        menuList: mockData.menuList
      };
    },
    methods: {
      menuSelect: function(name) {
        console.log(name);
        this.$router.push(name);
      },
      openMenu: function() {}
    }
  };
</script>

<style lang="less" scoped>
  ._Layout {
    height: 800px;
  }
  .logo {
    height: 44px;
  }
  ._LayoutSider {
    height: 100%;
    overflow-x: hidden;
    // overflow: auto;
  }
  ._LayoutHeader {
    background: #fff;
    padding: 0;
  }
  .side-menu {
    margin-right: -18px;
    overflow-y: scroll;
  }
</style>