/**
 * Authentication and User related types
 * Represents users, authentication, and authorization
 */

export type UserRole = 'user' | 'admin' | 'superadmin';

export type UserStatus = 'active' | 'suspended' | 'pending_verification' | 'banned';

/**
 * User profile
 */
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  isVerified: boolean;
  phoneNumber?: string;
  dateOfBirth?: string;
  country?: string;
  createdAt: string;
  lastLoginAt?: string;
}

/**
 * Login credentials
 */
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Registration data
 */
export interface RegisterData {
  email: string;
  password: string;
  name: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  country?: string;
  acceptTerms: boolean;
}

/**
 * Email verification
 */
export interface EmailVerification {
  email: string;
  code: string; // 6-digit verification code
}

/**
 * Authentication response
 */
export interface AuthResponse {
  user: User;
  token: string; // JWT token
  refreshToken?: string;
  expiresIn: number; // Token expiration in seconds
}

/**
 * Password reset request
 */
export interface PasswordResetRequest {
  email: string;
}

/**
 * Password reset confirmation
 */
export interface PasswordResetConfirmation {
  email: string;
  code: string;
  newPassword: string;
}

/**
 * Token payload (JWT decoded)
 */
export interface TokenPayload {
  userId: string;
  email: string;
  role: UserRole;
  iat: number; // Issued at
  exp: number; // Expiration
}

/**
 * Update profile data
 */
export interface UpdateProfileData {
  name?: string;
  phoneNumber?: string;
  avatar?: string;
  dateOfBirth?: string;
  country?: string;
}

/**
 * Change password data
 */
export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

