<template>
  <div class="manage-container">
    <header>
      <h1>🍽️ Manage Food Menu</h1>
      <button @click="showAddForm = !showAddForm">
        {{ showAddForm ? 'Cancel' : '➕ Add New Food' }}
      </button>
    </header>

    <form v-if="showAddForm" @submit.prevent="addFood" class="food-form">
      <input v-model="newFood.name" placeholder="Food name" required />
      <input v-model="newFood.price" type="number" placeholder="Price" required />
      <input v-model="newFood.image" placeholder="Image URL" />
      <button type="submit">✅ Add</button>
    </form>

    <div v-if="foods.length" class="food-list">
      <div class="food-card" v-for="(food, index) in foods" :key="index">
        <img :src="food.image" alt="Food" v-if="food.image" />
        <div class="food-info">
          <h3>{{ food.name }}</h3>
          <p>Rp {{ food.price }}</p>
          <div class="actions">
            <button @click="editFood(index)">✏️ Edit</button>
            <button @click="removeFood(index)">🗑️ Delete</button>
          </div>
        </div>
      </div>
    </div>
    <p v-else class="empty">No food items available.</p>
  </div>
</template>

<script>
export default {
  name: "ManageFood",
  data() {
    return {
      foods: [
        { name: "Nasi Goreng", price: 15000, image: "https://via.placeholder.com/100" },
        { name: "Mie Ayam", price: 12000, image: "https://via.placeholder.com/100" }
      ],
      newFood: { name: "", price: null, image: "" },
      showAddForm: false
    };
  },
  methods: {
    addFood() {
      this.foods.push({ ...this.newFood });
      this.newFood = { name: "", price: null, image: "" };
      this.showAddForm = false;
    },
    removeFood(index) {
      this.foods.splice(index, 1);
    },
    editFood(index) {
      this.newFood = { ...this.foods[index] };
      this.removeFood(index);
      this.showAddForm = true;
    }
  }
};
</script>

<style scoped>
.manage-container {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

button {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #1e40af;
}

.food-form {
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.food-form input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.food-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.food-card {
  display: flex;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
}

.food-card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.food-info {
  padding: 1rem;
  flex-grow: 1;
}

.food-info h3 {
  margin: 0;
}

.actions {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

.empty {
  color: #6b7280;
}
</style>
