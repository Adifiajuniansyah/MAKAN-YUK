<template>
  <div class="admin-page">
    <h2>Dashboard Admin</h2>

    <nav class="admin-nav">
      <router-link to="/admin/manage-food" exact-active-class="active-link">Kelola Makanan</router-link>
      <router-link to="/admin/view-orders" exact-active-class="active-link">Lihat Pesanan</router-link>
    </nav>

    <div class="admin-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard'
}
</script>

<style scoped>
.admin-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  color: #ff5722;
  text-align: center;
  margin-bottom: 20px;
}

.admin-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.admin-nav a {
  text-decoration: none;
  color: #666;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid transparent;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.admin-nav a:hover {
  background-color: #ff7043;
  color: white;
}

.admin-nav .active-link {
  background-color: #e64a19;
  color: white;
  border-color: #b43b12;
}

.admin-content {
  min-height: 300px;
  background-color: #fff3e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 6px 12px rgb(255 87 34 / 0.2);
}
</style>
