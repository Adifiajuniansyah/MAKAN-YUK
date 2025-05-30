<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-md p-4">
      <ul class="flex flex-wrap justify-center gap-4 text-gray-700 font-medium">
        <li>
          <router-link 
            to="/" 
            class="px-4 py-2 rounded hover:bg-gray-200 transition"
            :class="{ 'bg-blue-500 text-white': $route.path === '/' }"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link 
            to="/menu" 
            class="px-4 py-2 rounded hover:bg-gray-200 transition"
            :class="{ 'bg-blue-500 text-white': $route.path === '/menu' }"
          >
            Menu
          </router-link>
        </li>
        <li>
          <router-link 
            to="/order" 
            class="px-4 py-2 rounded hover:bg-gray-200 transition"
            :class="{ 'bg-blue-500 text-white': $route.path === '/order' }"
          >
            Order
          </router-link>
        </li>
        <li>
          <router-link 
            to="/history" 
            class="px-4 py-2 rounded hover:bg-gray-200 transition"
            :class="{ 'bg-blue-500 text-white': $route.path === '/history' }"
          >
            History
          </router-link>
        </li>
        <li>
          <router-link 
            to="/profile" 
            class="px-4 py-2 rounded hover:bg-gray-200 transition"
            :class="{ 'bg-blue-500 text-white': $route.path === '/profile' }"
          >
            Profile
          </router-link>
        </li>
        <li>
          <router-link 
            to="/admin/manage-food" 
            class="px-4 py-2 rounded hover:bg-gray-200 transition"
            :class="{ 'bg-blue-500 text-white': $route.path.startsWith('/admin') }"
          >
            Admin
          </router-link>
        </li>
      </ul>
    </nav>
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>
