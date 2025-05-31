<template>
  <div class="orders-container">
    <h1>📦 Order List</h1>

    <table v-if="orders.length" class="orders-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Customer</th>
          <th>Item</th>
          <th>Qty</th>
          <th>Total (Rp)</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.item }}</td>
          <td>{{ order.qty }}</td>
          <td>{{ order.total }}</td>
          <td>
            <span :class="['status', order.status.toLowerCase()]">{{ order.status }}</span>
          </td>
          <td>
            <button @click="updateStatus(index, 'Completed')">✅</button>
            <button @click="removeOrder(index)">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-else class="empty">No orders found.</p>
  </div>
</template>

<script>
export default {
  name: "ViewOrders",
  data() {
    return {
      orders: [
        { customer: "Adi", item: "Nasi Goreng", qty: 2, total: 30000, status: "Pending" },
        { customer: "Rani", item: "Mie Ayam", qty: 1, total: 12000, status: "Completed" }
      ]
    };
  },
  methods: {
    removeOrder(index) {
      this.orders.splice(index, 1);
    },
    updateStatus(index, status) {
      this.orders[index].status = status;
    }
  }
};
</script>

<style scoped>
.orders-container {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  margin-bottom: 1.5rem;
}

.orders-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.orders-table th,
.orders-table td {
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.orders-table th {
  background-color: #f3f4f6;
  font-weight: 600;
}

.status {
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: bold;
}

.status.pending {
  background-color: #fef3c7;
  color: #b45309;
}

.status.completed {
  background-color: #d1fae5;
  color: #065f46;
}

button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.25rem;
}

button:hover {
  opacity: 0.8;
}

.empty {
  text-align: center;
  color: #6b7280;
  margin-top: 2rem;
}
</style>
