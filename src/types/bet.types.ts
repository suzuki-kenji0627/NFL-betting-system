/**
 * Betting related types
 * Represents bets, odds, and betting markets
 */

import { Game } from './game.types';

export type BetType = 'moneyline' | 'spread' | 'over_under' | 'prop';

export type BetStatus = 'pending' | 'won' | 'lost' | 'cancelled' | 'pushed';

export type OddsFormat = 'american' | 'decimal' | 'fractional';

/**
 * Represents betting odds for a game
 */
export interface Odds {
  id: string;
  gameId: string;
  type: BetType;
  value: number; // Spread value or O/U total
  description: string; // e.g., "KC -3.5" or "Over 47.5"
  odds: number; // American odds (e.g., -110, +150)
  decimalOdds?: number; // Decimal odds (e.g., 1.91, 2.50)
  isAvailable: boolean;
  updatedAt: string;
  bookmaker?: string;
}

/**
 * Represents a placed bet
 */
export interface Bet {
  id: string;
  userId: string;
  gameId: string;
  game: Game;
  oddsId: string;
  odds: Odds;
  amount: number; // Stake amount
  potentialPayout: number; // Stake + potential winnings
  lockedOdds: number; // Odds value when bet was placed
  status: BetStatus;
  placedAt: string;
  settledAt?: string;
  result?: 'won' | 'lost' | 'pushed';
  actualPayout?: number; // Actual payout received
}

/**
 * Represents an item in the bet slip (before placing bet)
 */
export interface BetSlipItem {
  gameId: string;
  game: Game;
  odds: Odds;
  stake: number;
}

/**
 * Bet slip summary
 */
export interface BetSlipSummary {
  totalStake: number;
  potentialPayout: number;
  totalOdds: number;
  betCount: number;
}

/**
 * Betting market (collection of odds for a game)
 */
export interface BettingMarket {
  gameId: string;
  game: Game;
  moneylineOdds: Odds[];
  spreadOdds: Odds[];
  overUnderOdds: Odds[];
  propOdds?: Odds[];
  lastUpdated: string;
}

/**
 * Parlay bet (multiple bets combined)
 */
export interface ParlayBet {
  id: string;
  userId: string;
  bets: Bet[];
  totalStake: number;
  potentialPayout: number;
  combinedOdds: number;
  status: BetStatus;
  placedAt: string;
  settledAt?: string;
}

/**
 * User betting statistics
 */
export interface UserBettingStats {
  userId: string;
  totalBets: number;
  activeBets: number;
  wonBets: number;
  lostBets: number;
  cancelledBets: number;
  totalStaked: number;
  totalWinnings: number;
  netProfit: number;
  winRate: number;
  roi: number; // Return on investment percentage
  biggestWin: number;
  biggestLoss: number;
}

