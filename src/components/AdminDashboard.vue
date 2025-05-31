<template>
  <div class="dashboard-container">
    <aside class="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li @click="navigate('manage')">🍔 Manage Food</li>
        <li @click="navigate('orders')">📦 View Orders</li>
        <li @click="navigate('profile')">👤 Profile</li>
        <li @click="navigate('logout')">🚪 Logout</li>
      </ul>
    </aside>

    <main class="dashboard-content">
      <h1>Welcome, Admin 👋</h1>
      <p>Select an action from the sidebar to get started.</p>
    </main>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
  methods: {
    navigate(target) {
      switch (target) {
        case 'manage':
          this.$router.push('/admin/Managefood')
          break;
        case 'orders':
          this.$router.push('/admin/ViewOrdersTempt')
          break;
        case 'profile':
          this.$router.push('/Profile')
          break;
        case 'logout':
          alert("You have been logged out."); // ganti dengan logika sesungguhnya
          this.$router.push('/login')
          break;
      }
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
  background-color: #f7f8fa;
  font-family: 'Segoe UI', sans-serif;
}

.sidebar {
  width: 220px;
  background-color: #1e293b;
  color: white;
  padding: 1rem;
}

.sidebar h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 0.75rem;
  margin: 0.5rem 0;
  background-color: #334155;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
}

.sidebar li:hover {
  background-color: #475569;
}

.dashboard-content {
  flex: 1;
  padding: 2rem;
}
</style>
