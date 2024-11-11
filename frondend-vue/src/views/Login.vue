<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import type { LoginCredentials } from '../types/auth';

const router = useRouter();
const authStore = useAuthStore();

const credentials = ref<LoginCredentials>({
  email: '',
  password: '',
});

const error = ref('');

async function handleLogin() {
  try {
    const success = await authStore.login(credentials.value);
    if (success) {
      router.push('/dashboard');
    } else {
      error.value = 'Invalid credentials';
    }
  } catch (e) {
    error.value = 'An error occurred during login';
  }
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center align-items-center min-vh-100">
      <div class="col-md-6 col-lg-4">
        <div class="card shadow">
          <div class="card-body p-5">
            <h2 class="text-center mb-4">Login</h2>
            <form @submit.prevent="handleLogin">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  v-model="credentials.email"
                  required
                />
                <label for="email">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  v-model="credentials.password"
                  required
                />
                <label for="password">Password</label>
              </div>
              <div v-if="error" class="alert alert-danger" role="alert">
                {{ error }}
              </div>
              <button type="submit" class="btn btn-primary w-100 py-2">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none;
  border-radius: 1rem;
}

.form-floating input {
  border-radius: 0.5rem;
}

.btn-primary {
  border-radius: 0.5rem;
}
</style>