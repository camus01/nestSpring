<template>
  <el-container>            <!-- elcon-->
    <el-aside width="200px">
      <el-menu mode="vertical" :default-active="$route.path" router>    <!--elmen-->
        <el-submenu 
          v-for="(item, index) in menu.items"
          :index="index + `1`"
          :key="`menu-item-${index}`"
        >
          <template slot="title">{{item.title}}</template>
          <el-menu-item 
            v-for="(subItem, subIndex) in item.items"
            :index="subItem.path"
            :key="`menu-item-${index}-${subIndex}`"
          >
              {{subItem.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        知识服务平台 - 后台管理
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>   <!-- 子路由容器 -->
      </el-main>
    </el-container>
  </el-container>
  
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({

})
export default class Main extends Vue{
  menu = {
    items: [
      {
        title: '内容管理',
        items: [
          {title: '首页', path: '/'},
          {title: '课程管理', path: '/courses/list'},
          {title: '课时管理', path: '/episodes/list'}
        ]
      },
      {
        title: '运营管理',
        items: [
          {title: '用户管理', path: '/users/list'}
        ]
      }
    ]
  }

}
</script>
<style scoped>
</style>
