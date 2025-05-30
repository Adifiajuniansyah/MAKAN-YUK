<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/order">Order</router-link> |
      <router-link to="/history">History</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/admin/manage-food">Admin</router-link>
    </nav>
    <router-view />
  </div>
</template>
