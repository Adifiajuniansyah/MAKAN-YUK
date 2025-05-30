<template>
  <div id="app">
    <nav>
      <router-link to="/" exact-active-class="active-link">Home</router-link>
      <router-link to="/menu" exact-active-class="active-link">Menu</router-link>
      <router-link to="/order" exact-active-class="active-link">Order</router-link>
      <router-link to="/history" exact-active-class="active-link">History</router-link>
      <router-link to="/profile" exact-active-class="active-link">Profile</router-link>
      <router-link to="/admin/manage-food" exact-active-class="active-link">Admin</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  color: #333;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

nav a {
  text-decoration: none;
  color: #555;
  font-weight: 600;
  padding: 8px 15px;
  border-radius: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 2px solid transparent;
}

nav a:hover {
  background-color: #ff7043;
  color: white;
}

.active-link {
  background-color: #ff5722;
  color: white;
  border-color: #e64a19;
}

main {
  min-height: 400px;
}
</style>
