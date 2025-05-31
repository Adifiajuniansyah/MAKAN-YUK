<template>
  <div id="app">
    <header class="navbar">
      <h1 class="logo">🍽️ MakanYuk</h1>
      <nav>
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/Menu" exact-active-class="active">Menu</RouterLink>
        <RouterLink to="/Order" exact-active-class="active">Order</RouterLink>
        <RouterLink to="/Profile" exact-active-class="active">Profile</RouterLink>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <p>© 2025 MakanYuk App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
/* Layout */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  background-color: #1e3a8a;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
}

nav a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

nav a:hover {
  text-decoration: underline;
}

.active {
  text-decoration: underline;
}

/* Main Content */
.main-content {
  flex-grow: 1;
  padding: 2rem;
  background-color: #f9fafb;
}

/* Footer */
.footer {
  background-color: #e5e7eb;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  color: #4b5563;
}
</style>
