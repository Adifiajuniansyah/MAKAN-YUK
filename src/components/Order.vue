<template>
  <div class="order-page">
    <h2>Form Pemesanan Makanan</h2>

    <form @submit.prevent="submitOrder" class="order-form">
      <label for="food">Pilih Makanan:</label>
      <select id="food" v-model="order.foodId" required>
        <option value="" disabled>-- Pilih Menu --</option>
        <option v-for="item in menuItems" :key="item.id" :value="item.id">
          {{ item.name }} - Rp {{ formatPrice(item.price) }}
        </option>
      </select>

      <label for="name">Nama Pemesan:</label>
      <input
        type="text"
        id="name"
        v-model="order.customerName"
        placeholder="Masukkan nama Anda"
        required
      />

      <label for="quantity">Jumlah Pesanan:</label>
      <input
        type="number"
        id="quantity"
        v-model.number="order.quantity"
        min="1"
        required
      />

      <label for="notes">Catatan Tambahan:</label>
      <textarea
        id="notes"
        v-model="order.notes"
        placeholder="Misal: Tidak pakai pedas, ekstra sambal, dll."
      ></textarea>

      <button type="submit">Pesan Sekarang</button>
    </form>

    <div v-if="confirmation" class="confirmation">
      <h3>Pesanan Anda berhasil dikirim!</h3>
      <p>Nama: {{ confirmation.customerName }}</p>
      <p>
        Makanan: 
        {{
          menuItems.find(item => item.id === confirmation.foodId)?.name || '-'
        }}
      </p>
      <p>Jumlah: {{ confirmation.quantity }}</p>
      <p>Catatan: {{ confirmation.notes || 'Tidak ada' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data() {
    return {
      menuItems: [
        { id: 1, name: "Nasi Goreng Spesial", price: 25000 },
        { id: 2, name: "Sate Ayam Madura", price: 22000 }
      ],
      order: {
        foodId: '',
        customerName: '',
        quantity: 1,
        notes: ''
      },
      confirmation: null
    }
  },
  methods: {
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    submitOrder() {
      // Validasi sederhana (sudah ada required di form)
      this.confirmation = { ...this.order }

      // Reset form
      this.order.foodId = ''
      this.order.customerName = ''
      this.order.quantity = 1
      this.order.notes = ''
    }
  }
}
</script>

<style scoped>
.order-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 15px;
}

h2 {
  color: #ff5722;
  margin-bottom: 20px;
  text-align: center;
}

.order-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.order-form label {
  font-weight: 600;
  color: #5d4037;
}

.order-form input,
.order-form select,
.order-form textarea {
  padding: 8px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1.5px solid #ddd;
  transition: border-color 0.3s ease;
}

.order-form input:focus,
.order-form select:focus,
.order-form textarea:focus {
  outline: none;
  border-color: #ff7043;
}

.order-form button {
  padding: 12px;
  background-color: #ff5722;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

.order-form button:hover {
  background-color: #e64a19;
}

.confirmation {
  margin-top: 30px;
  padding: 20px;
  border: 2px solid #ff7043;
  border-radius: 8px;
  background-color: #fff3e0;
  color: #bf360c;
}

.confirmation h3 {
  margin-top: 0;
}
</style>
