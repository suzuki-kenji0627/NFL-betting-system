/**
 * Wallet and Transaction related types
 * Represents user wallet, balance, and financial transactions
 */

export type TransactionType = 
  | 'deposit' 
  | 'withdrawal' 
  | 'bet_placed' 
  | 'bet_won' 
  | 'bet_refund'
  | 'admin_adjustment'
  | 'bonus';

export type TransactionStatus = 'pending' | 'completed' | 'failed' | 'cancelled';

export type Currency = 'USD' | 'EUR' | 'GBP' | 'BTC' | 'ETH';

/**
 * User wallet
 */
export interface Wallet {
  id: string;
  userId: string;
  balance: number;
  currency: Currency;
  lockedBalance: number; // Amount locked in pending bets
  availableBalance: number; // balance - lockedBalance
  createdAt: string;
  updatedAt: string;
}

/**
 * Financial transaction
 */
export interface Transaction {
  id: string;
  userId: string;
  walletId: string;
  type: TransactionType;
  amount: number;
  balanceBefore: number;
  balanceAfter: number;
  status: TransactionStatus;
  description: string;
  metadata?: {
    betId?: string;
    gameId?: string;
    paymentMethod?: string;
    transactionHash?: string; // For crypto
    reference?: string;
  };
  createdAt: string;
  completedAt?: string;
}

/**
 * Deposit request
 */
export interface DepositRequest {
  amount: number;
  currency: Currency;
  paymentMethod: 'credit_card' | 'bank_transfer' | 'crypto' | 'paypal';
  metadata?: Record<string, unknown>;
}

/**
 * Withdrawal request
 */
export interface WithdrawalRequest {
  amount: number;
  currency: Currency;
  destination: {
    type: 'bank_account' | 'crypto_wallet' | 'paypal';
    details: Record<string, unknown>;
  };
}

/**
 * Payment method
 */
export interface PaymentMethod {
  id: string;
  userId: string;
  type: 'credit_card' | 'bank_account' | 'crypto_wallet' | 'paypal';
  isDefault: boolean;
  details: {
    last4?: string; // Last 4 digits for cards
    brand?: string; // Visa, Mastercard, etc.
    expiryMonth?: number;
    expiryYear?: number;
    bankName?: string;
    accountNumber?: string; // Masked
    walletAddress?: string; // For crypto
    email?: string; // For PayPal
  };
  createdAt: string;
}

/**
 * Wallet summary/statistics
 */
export interface WalletSummary {
  totalDeposits: number;
  totalWithdrawals: number;
  totalBetsPlaced: number;
  totalWinnings: number;
  netProfit: number;
  currentBalance: number;
  lockedBalance: number;
  availableBalance: number;
}

