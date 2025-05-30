<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin" class="login-form">
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        v-model="username"
        placeholder="Masukkan username"
        required
      />

      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Masukkan password"
        required
      />

      <button type="submit">Masuk</button>

      <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    handleLogin() {
      // Contoh validasi sederhana
      if (this.username === "admin" && this.password === "admin123") {
        this.errorMessage = "";
        alert("Login berhasil!");
        this.$router.push("/admin"); // arahkan ke dashboard admin misalnya
      } else if (this.username === "user" && this.password === "user123") {
        this.errorMessage = "";
        alert("Login berhasil!");
        this.$router.push("/"); // arahkan ke home user biasa
      } else {
        this.errorMessage = "Username atau password salah.";
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px 20px;
  background-color: #fff3e0;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(255, 87, 34, 0.25);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #4e342e;
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #bf360c;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.login-form label {
  font-weight: 600;
}

.login-form input {
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1.5px solid #ddd;
  transition: border-color 0.3s ease;
}

.login-form input:focus {
  outline: none;
  border-color: #ff7043;
}

.login-form button {
  padding: 12px;
  background-color: #ff5722;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-form button:hover {
  background-color: #e64a19;
}

.error-msg {
  color: #d32f2f;
  text-align: center;
  font-weight: 600;
}
</style>
