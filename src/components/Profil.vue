<template>
  <div class="profile-page">
    <h2>Profil Pengguna</h2>
    <div class="profile-info">
      <p><strong>Nama:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Nomor Telepon:</strong> {{ user.phone }}</p>
    </div>

    <h3>Edit Profil</h3>
    <form @submit.prevent="updateProfile" class="profile-form">
      <label for="name">Nama:</label>
      <input type="text" id="name" v-model="user.name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="user.email" required />

      <label for="phone">Nomor Telepon:</label>
      <input type="tel" id="phone" v-model="user.phone" />

      <button type="submit">Simpan Perubahan</button>
    </form>

    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      user: {
        name: 'Budi Santoso',
        email: 'budi@example.com',
        phone: '08123456789'
      },
      message: ''
    }
  },
  methods: {
    updateProfile() {
      // Contoh sederhana update data (biasanya disimpan ke server)
      this.message = 'Profil berhasil diperbarui!'
      setTimeout(() => (this.message = ''), 3000)
    }
  }
}
</script>

<style scoped>
.profile-page {
  max-width: 500px;
  margin: 0 auto;
  padding: 15px;
}

h2, h3 {
  color: #ff5722;
  margin-bottom: 12px;
  text-align: center;
}

.profile-info p {
  font-size: 1rem;
  color: #5d4037;
  margin: 6px 0;
}

.profile-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.profile-form label {
  font-weight: 600;
  color: #6d4c41;
}

.profile-form input {
  padding: 8px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1.5px solid #ddd;
  transition: border-color 0.3s ease;
}

.profile-form input:focus {
  outline: none;
  border-color: #ff7043;
}

.profile-form button {
  padding: 12px;
  background-color: #ff5722;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

.profile-form button:hover {
  background-color: #e64a19;
}

.message {
  margin-top: 15px;
  text-align: center;
  color: green;
  font-weight: 600;
}
</style>
