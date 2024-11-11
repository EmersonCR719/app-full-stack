<script setup lang="ts">
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <div class="container mt-5">
    <div class="jumbotron">
      <h1 class="display-4">Welcome to Our Platform</h1>
      <p class="lead">
        A secure platform with role-based access control and content management.
      </p>
      <hr class="my-4">
      <p>
        {{ authStore.isAuthenticated 
          ? 'Access your dashboard to manage content and reviews.' 
          : 'Please login to access the platform features.' }}
      </p>
      <router-link 
        v-if="!authStore.isAuthenticated"
        to="/login" 
        class="btn btn-primary btn-lg"
      >
        Login
      </router-link>
      <router-link 
        v-else
        to="/dashboard" 
        class="btn btn-primary btn-lg"
      >
        Go to Dashboard
      </router-link>
    </div>
  </div>
</template>