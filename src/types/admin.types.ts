/**
 * Admin Dashboard related types
 * Represents admin operations, analytics, and system settings
 */

import { User } from './auth.types';
import { Bet } from './bet.types';

/**
 * Dashboard statistics
 */
export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  newUsersToday: number;
  totalBets: number;
  activeBets: number;
  betsToday: number;
  totalRevenue: number;
  revenueToday: number;
  totalDeposits: number;
  totalWithdrawals: number;
  platformBalance: number;
}

/**
 * Revenue analytics
 */
export interface RevenueAnalytics {
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  data: {
    date: string;
    revenue: number;
    deposits: number;
    withdrawals: number;
    netProfit: number;
  }[];
  total: {
    revenue: number;
    deposits: number;
    withdrawals: number;
    netProfit: number;
  };
}

/**
 * User analytics
 */
export interface UserAnalytics {
  period: 'daily' | 'weekly' | 'monthly';
  data: {
    date: string;
    newUsers: number;
    activeUsers: number;
    returningUsers: number;
  }[];
}

/**
 * Betting analytics
 */
export interface BettingAnalytics {
  period: 'daily' | 'weekly' | 'monthly';
  data: {
    date: string;
    totalBets: number;
    totalStaked: number;
    totalPayout: number;
    averageBetAmount: number;
  }[];
  topBets: Bet[];
  popularGames: {
    gameId: string;
    gameName: string;
    betCount: number;
    totalStaked: number;
  }[];
}

/**
 * System settings
 */
export interface SystemSettings {
  id: string;
  category: 'general' | 'betting' | 'financial' | 'security' | 'email';
  key: string;
  value: string | number | boolean;
  description?: string;
  updatedAt: string;
  updatedBy: string;
}

/**
 * Admin action log
 */
export interface AdminLog {
  id: string;
  adminId: string;
  admin: User;
  action: string;
  entity: 'user' | 'bet' | 'game' | 'odds' | 'transaction' | 'settings';
  entityId: string;
  details: Record<string, unknown>;
  ipAddress?: string;
  createdAt: string;
}

/**
 * Bulk action result
 */
export interface BulkActionResult {
  success: number;
  failed: number;
  total: number;
  errors?: {
    id: string;
    error: string;
  }[];
}

/**
 * Admin filters for data tables
 */
export interface AdminFilters {
  search?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Report export options
 */
export interface ExportOptions {
  format: 'csv' | 'excel' | 'pdf';
  dateFrom: string;
  dateTo: string;
  includeFields?: string[];
}

