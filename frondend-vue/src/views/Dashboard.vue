<script setup lang="ts">
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <h1>Dashboard</h1>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Welcome, {{ authStore.user?.username }}!</h5>
            <p class="card-text">Role: {{ authStore.user?.role }}</p>
            
            <!-- Admin Section -->
            <div v-if="authStore.userRole === 'admin'" class="mt-4">
              <h3>Admin Controls</h3>
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">Manage Users</a>
                <a href="#" class="list-group-item list-group-item-action">System Settings</a>
              </div>
            </div>

            <!-- Creator Section -->
            <div v-if="authStore.userRole === 'creator'" class="mt-4">
              <h3>Content Creation</h3>
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">Create New Content</a>
                <a href="#" class="list-group-item list-group-item-action">My Content</a>
              </div>
            </div>

            <!-- Reviewer Section -->
            <div v-if="authStore.userRole === 'reviewer'" class="mt-4">
              <h3>Review Queue</h3>
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">Pending Reviews</a>
                <a href="#" class="list-group-item list-group-item-action">Review History</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>