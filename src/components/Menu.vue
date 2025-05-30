<template>
  <div class="menu-page">
    <h2>Daftar Menu Makanan</h2>
    <ul class="menu-list">
      <li v-for="item in menuItems" :key="item.id" class="menu-item">
        <img :src="item.image" alt="item.name" class="menu-img" />
        <div class="menu-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p class="price">Rp {{ formatPrice(item.price) }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: "Nasi Goreng Spesial",
          description: "Nasi goreng dengan telur, ayam, dan sayuran segar.",
          price: 25000,
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
        },
        
        {
          id: 2,
          name: "Sate Ayam Madura",
          description: "Sate ayam dengan bumbu kacang khas Madura.",
          price: 22000,
          image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
        }
      ]
    }
  },
  methods: {
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
}
</script>

<style scoped>
.menu-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 15px;
}

h2 {
  color: #ff5722;
  margin-bottom: 20px;
  text-align: center;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  background: #fff3e0;
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgb(255 87 34 / 0.15);
  transition: transform 0.2s ease;
}

.menu-item:hover {
  transform: scale(1.02);
}

.menu-img {
  width: 120px;
  height: 90px;
  object-fit: cover;
  flex-shrink: 0;
}

.menu-info {
  padding: 15px;
  flex-grow: 1;
}

.menu-info h3 {
  margin: 0 0 6px 0;
  color: #bf360c;
}

.menu-info p {
  margin: 0 0 4px 0;
  color: #5d4037;
  font-size: 0.9rem;
}

.price {
  font-weight: bold;
  color: #d84315;
}
</style>
