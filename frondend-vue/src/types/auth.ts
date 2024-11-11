export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'creator' | 'reviewer';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
}