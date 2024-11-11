import { defineStore } from 'pinia';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import type { AuthState, LoginCredentials, User } from '../types/auth';

const API_URL = 'http://localhost:5000/api';

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: localStorage.getItem('token'),
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    userRole: (state) => state.user?.role,
  },

  actions: {
    async login(credentials: LoginCredentials) {
      try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        const { token } = response.data;
        
        this.token = token;
        localStorage.setItem('token', token);
        
        const decoded = jwtDecode<User>(token);
        this.user = decoded;
        
        return true;
      } catch (error) {
        console.error('Login error:', error);
        return false;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
    },

    async checkAuth() {
      if (this.token) {
        try {
          const decoded = jwtDecode<User>(this.token);
          this.user = decoded;
        } catch {
          this.logout();
        }
      }
    },
  },
});