/**
 * Authentication API
 * Handles all auth-related API calls
 */

import {
  User,
  LoginCredentials,
  RegisterData,
  EmailVerification,
  AuthResponse,
  PasswordResetRequest,
  PasswordResetConfirmation,
} from '@/types';
import { apiClient, useMockData, mockDelay } from './client';

// Mock user for development
const MOCK_USER: User = {
  id: 'user-1',
  email: 'user@nfl.bet',
  name: 'John Doe',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  role: 'user',
  status: 'active',
  isVerified: true,
  createdAt: new Date().toISOString(),
  lastLoginAt: new Date().toISOString(),
};

const MOCK_ADMIN: User = {
  id: 'admin-1',
  email: 'admin@nfl.bet',
  name: 'Admin User',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
  role: 'admin',
  status: 'active',
  isVerified: true,
  createdAt: new Date().toISOString(),
  lastLoginAt: new Date().toISOString(),
};

export const authApi = {
  /**
   * Login user
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    if (useMockData) {
      await mockDelay();
      // Mock login logic
      const user = credentials.email.includes('admin') ? MOCK_ADMIN : MOCK_USER;
      return {
        user,
        token: 'mock-jwt-token-' + Date.now(),
        refreshToken: 'mock-refresh-token-' + Date.now(),
        expiresIn: 3600,
      };
    }
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  },

  /**
   * Register new user
   */
  register: async (data: RegisterData): Promise<AuthResponse> => {
    if (useMockData) {
      await mockDelay();
      const newUser: User = {
        ...MOCK_USER,
        id: 'user-' + Date.now(),
        email: data.email,
        name: data.name,
        isVerified: false,
        status: 'pending_verification',
      };
      return {
        user: newUser,
        token: 'mock-jwt-token-' + Date.now(),
        refreshToken: 'mock-refresh-token-' + Date.now(),
        expiresIn: 3600,
      };
    }
    const response = await apiClient.post('/auth/register', data);
    return response.data;
  },

  /**
   * Verify email with code
   */
  verifyEmail: async (verification: EmailVerification): Promise<void> => {
    if (useMockData) {
      await mockDelay();
      // Mock verification (accept any 6-digit code)
      if (verification.code.length !== 6) {
        throw new Error('Invalid verification code');
      }
      return;
    }
    const response = await apiClient.post('/auth/verify-email', verification);
    return response.data;
  },

  /**
   * Get current user
   */
  getCurrentUser: async (): Promise<User> => {
    if (useMockData) {
      await mockDelay();
      return MOCK_USER;
    }
    const response = await apiClient.get('/auth/me');
    return response.data;
  },

  /**
   * Logout user
   */
  logout: async (): Promise<void> => {
    if (useMockData) {
      await mockDelay();
      return;
    }
    await apiClient.post('/auth/logout');
  },

  /**
   * Request password reset
   */
  requestPasswordReset: async (request: PasswordResetRequest): Promise<void> => {
    if (useMockData) {
      await mockDelay();
      return;
    }
    await apiClient.post('/auth/forgot-password', request);
  },

  /**
   * Reset password with code
   */
  resetPassword: async (confirmation: PasswordResetConfirmation): Promise<void> => {
    if (useMockData) {
      await mockDelay();
      return;
    }
    await apiClient.post('/auth/reset-password', confirmation);
  },

  /**
   * Refresh token
   */
  refreshToken: async (refreshToken: string): Promise<AuthResponse> => {
    if (useMockData) {
      await mockDelay();
      return {
        user: MOCK_USER,
        token: 'mock-jwt-token-' + Date.now(),
        refreshToken: 'mock-refresh-token-' + Date.now(),
        expiresIn: 3600,
      };
    }
    const response = await apiClient.post('/auth/refresh', { refreshToken });
    return response.data;
  },
};

