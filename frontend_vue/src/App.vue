<template>
  <div id="app">
    <header-component></header-component>
    
    <div class="main-content">
      <sidebar-component></sidebar-component>

      <div class="content">
        <!-- Các trang sẽ được render tại đây -->
        <router-view></router-view>
      </div>
    </div>
    
    <footer-component></footer-component>
  </div>
</template>

<script>
// Import các component layout
import HeaderComponent from './components/layout/HeaderMain.vue';
import SidebarComponent from './components/layout/SidebarMain.vue';
import FooterComponent from './components/layout/FooterMain.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 0;
}

.main-content {
  display: flex;
}

.content {
  flex-grow: 1;
  padding: 20px;
}

footer {
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
}
</style>
