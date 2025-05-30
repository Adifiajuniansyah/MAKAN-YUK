<template>
    <router-link to="/login" class="btn-primary">Login</router-link>

  <div class="home-container">
    <header class="hero-section">
      <div class="hero-content">
        <h1>Selamat Datang di MakanYuk!</h1>
        <p>Temukan dan pesan makanan favoritmu dengan mudah dan cepat.</p>
        <router-link to="/menu" class="btn-primary">Lihat Menu</router-link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
        alt="Makanan Lezat"
        class="hero-image"
      />
    </header>

    <section class="features-section">
      <h2>Mengapa Memilih MakanYuk?</h2>
      <div class="features-cards">
        <div class="card">
          <i class="icon">🍽️</i>
          <h3>Menu Variatif</h3>
          <p>Kami menyediakan berbagai jenis makanan lezat dan berkualitas.</p>
        </div>
        <div class="card">
          <i class="icon">⚡</i>
          <h3>Pesan Cepat</h3>
          <p>Proses pemesanan mudah dan cepat tanpa ribet.</p>
        </div>
        <div class="card">
          <i class="icon">💰</i>
          <h3>Harga Terjangkau</h3>
          <p>Kami menawarkan harga bersahabat untuk semua kalangan.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #4e342e;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.hero-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #fff3e0;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 15px rgba(255, 87, 34, 0.2);
  margin-bottom: 40px;
}

.hero-content {
  flex: 1 1 350px;
}

.hero-content h1 {
  font-size: 2.8rem;
  margin-bottom: 15px;
  color: #bf360c;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 25px;
  color: #6d4c41;
}

.btn-primary {
  display: inline-block;
  padding: 12px 28px;
  background-color: #ff5722;
  color: white;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #e64a19;
}

.hero-image {
  flex: 1 1 400px;
  max-width: 100%;
  border-radius: 12px;
  object-fit: cover;
  margin-left: 20px;
}

.features-section {
  text-align: center;
}

.features-section h2 {
  color: #ff7043;
  margin-bottom: 30px;
  font-size: 2rem;
}

.features-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 25px;
}

.card {
  background-color: #fff3e0;
  border-radius: 12px;
  padding: 25px;
  width: 280px;
  box-shadow: 0 5px 12px rgba(255, 87, 34, 0.15);
  transition: transform 0.25s ease;
}

.card:hover {
  transform: translateY(-8px);
}

.icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.card h3 {
  margin-bottom: 10px;
  color: #bf360c;
}

.card p {
  color: #5d4037;
  font-size: 1rem;
}
</style>
