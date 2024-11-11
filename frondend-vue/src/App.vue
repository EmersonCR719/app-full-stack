<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  authStore.checkAuth();
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">My App</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li v-if="authStore.isAuthenticated" class="nav-item">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li v-if="!authStore.isAuthenticated" class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li v-else class="nav-item">
            <a class="nav-link" href="#" @click.prevent="authStore.logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<style>
#app {
  text-align: left;
}
</style>