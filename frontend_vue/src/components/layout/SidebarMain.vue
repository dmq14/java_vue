<template>
  <aside class="bg-light border-end vh-100">
    <ul class="nav flex-column p-3">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" class="nav-link">Users</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/settings" class="nav-link">Settings</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "SidebarMain",
};
</script>

<style scoped>
/* Sidebar width */
aside {
  width: 250px;
}
</style>
