/**
 * Mock Betting Odds Data
 * Realistic odds for NFL games
 */

import { Odds } from '@/types';

// Helper to convert American odds to decimal
export const americanToDecimal = (american: number): number => {
  if (american > 0) {
    return (american / 100) + 1;
  }
  return (100 / Math.abs(american)) + 1;
};

// Mock odds for each game - inspired by the reference site
export const MOCK_ODDS: Record<string, Odds[]> = {
  // Live Game 1: KC vs BUF
  'game-live-1': [
    {
      id: 'odds-live-1-ml-home',
      gameId: 'game-live-1',
      type: 'moneyline',
      value: 0,
      description: 'Kansas City Chiefs',
      odds: -150,
      decimalOdds: 1.67,
      isAvailable: false, // Not available during live game
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-live-1-ml-away',
      gameId: 'game-live-1',
      type: 'moneyline',
      value: 0,
      description: 'Buffalo Bills',
      odds: +130,
      decimalOdds: 2.30,
      isAvailable: false,
      updatedAt: new Date().toISOString(),
    },
  ],

  // Upcoming Game 1: DAL vs WSH
  'game-upcoming-1': [
    // Moneyline
    {
      id: 'odds-up-1-ml-home',
      gameId: 'game-upcoming-1',
      type: 'moneyline',
      value: 0,
      description: 'Dallas Cowboys',
      odds: -195,
      decimalOdds: 1.51,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
      bookmaker: 'FanDuel',
    },
    {
      id: 'odds-up-1-ml-away',
      gameId: 'game-upcoming-1',
      type: 'moneyline',
      value: 0,
      description: 'Washington Commanders',
      odds: +165,
      decimalOdds: 2.65,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
      bookmaker: 'FanDuel',
    },
    // Spread
    {
      id: 'odds-up-1-spread-home',
      gameId: 'game-upcoming-1',
      type: 'spread',
      value: -4.5,
      description: 'DAL -4.5',
      odds: -110,
      decimalOdds: 1.91,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
      bookmaker: 'DraftKings',
    },
    {
      id: 'odds-up-1-spread-away',
      gameId: 'game-upcoming-1',
      type: 'spread',
      value: 4.5,
      description: 'WSH +4.5',
      odds: -110,
      decimalOdds: 1.91,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
      bookmaker: 'DraftKings',
    },
    // Over/Under
    {
      id: 'odds-up-1-ou-over',
      gameId: 'game-upcoming-1',
      type: 'over_under',
      value: 47.5,
      description: 'Over 47.5',
      odds: -115,
      decimalOdds: 1.87,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
      bookmaker: 'BetMGM',
    },
    {
      id: 'odds-up-1-ou-under',
      gameId: 'game-upcoming-1',
      type: 'over_under',
      value: 47.5,
      description: 'Under 47.5',
      odds: -105,
      decimalOdds: 1.95,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
      bookmaker: 'BetMGM',
    },
  ],

  // Upcoming Game 2: LAC vs DEN
  'game-upcoming-2': [
    {
      id: 'odds-up-2-ml-home',
      gameId: 'game-upcoming-2',
      type: 'moneyline',
      value: 0,
      description: 'Los Angeles Chargers',
      odds: -220,
      decimalOdds: 1.45,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-2-ml-away',
      gameId: 'game-upcoming-2',
      type: 'moneyline',
      value: 0,
      description: 'Denver Broncos',
      odds: +185,
      decimalOdds: 2.85,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-2-spread-home',
      gameId: 'game-upcoming-2',
      type: 'spread',
      value: -5.5,
      description: 'LAC -5.5',
      odds: -105,
      decimalOdds: 1.95,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-2-spread-away',
      gameId: 'game-upcoming-2',
      type: 'spread',
      value: 5.5,
      description: 'DEN +5.5',
      odds: -115,
      decimalOdds: 1.87,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-2-ou-over',
      gameId: 'game-upcoming-2',
      type: 'over_under',
      value: 44.5,
      description: 'Over 44.5',
      odds: -110,
      decimalOdds: 1.91,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-2-ou-under',
      gameId: 'game-upcoming-2',
      type: 'over_under',
      value: 44.5,
      description: 'Under 44.5',
      odds: -110,
      decimalOdds: 1.91,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
  ],

  // Upcoming Game 3: SEA vs LAR
  'game-upcoming-3': [
    {
      id: 'odds-up-3-ml-home',
      gameId: 'game-upcoming-3',
      type: 'moneyline',
      value: 0,
      description: 'Seattle Seahawks',
      odds: -135,
      decimalOdds: 1.74,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-3-ml-away',
      gameId: 'game-upcoming-3',
      type: 'moneyline',
      value: 0,
      description: 'Los Angeles Rams',
      odds: +115,
      decimalOdds: 2.15,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-3-spread-home',
      gameId: 'game-upcoming-3',
      type: 'spread',
      value: -3,
      description: 'SEA -3',
      odds: -110,
      decimalOdds: 1.91,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-3-spread-away',
      gameId: 'game-upcoming-3',
      type: 'spread',
      value: 3,
      description: 'LAR +3',
      odds: -110,
      decimalOdds: 1.91,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-3-ou-over',
      gameId: 'game-upcoming-3',
      type: 'over_under',
      value: 50.5,
      description: 'Over 50.5',
      odds: -110,
      decimalOdds: 1.91,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-3-ou-under',
      gameId: 'game-upcoming-3',
      type: 'over_under',
      value: 50.5,
      description: 'Under 50.5',
      odds: -110,
      decimalOdds: 1.91,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
  ],

  // Upcoming Game 4: JAX vs HOU (Tomorrow)
  'game-upcoming-4': [
    {
      id: 'odds-up-4-ml-home',
      gameId: 'game-upcoming-4',
      type: 'moneyline',
      value: 0,
      description: 'Jacksonville Jaguars',
      odds: -165,
      decimalOdds: 1.61,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-4-ml-away',
      gameId: 'game-upcoming-4',
      type: 'moneyline',
      value: 0,
      description: 'Houston Texans',
      odds: +140,
      decimalOdds: 2.40,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-4-spread-home',
      gameId: 'game-upcoming-4',
      type: 'spread',
      value: -3.5,
      description: 'JAX -3.5',
      odds: -115,
      decimalOdds: 1.87,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-4-spread-away',
      gameId: 'game-upcoming-4',
      type: 'spread',
      value: 3.5,
      description: 'HOU +3.5',
      odds: -105,
      decimalOdds: 1.95,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-4-ou-over',
      gameId: 'game-upcoming-4',
      type: 'over_under',
      value: 45.5,
      description: 'Over 45.5',
      odds: -110,
      decimalOdds: 1.91,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'odds-up-4-ou-under',
      gameId: 'game-upcoming-4',
      type: 'over_under',
      value: 45.5,
      description: 'Under 45.5',
      odds: -110,
      decimalOdds: 1.91,
      isAvailable: true,
      updatedAt: new Date().toISOString(),
    },
  ],
};

// Helper functions
export const getOddsByGameId = (gameId: string): Odds[] => {
  return MOCK_ODDS[gameId] || [];
};

export const getMoneylineOdds = (gameId: string): Odds[] => {
  return getOddsByGameId(gameId).filter((odds) => odds.type === 'moneyline');
};

export const getSpreadOdds = (gameId: string): Odds[] => {
  return getOddsByGameId(gameId).filter((odds) => odds.type === 'spread');
};

export const getOverUnderOdds = (gameId: string): Odds[] => {
  return getOddsByGameId(gameId).filter((odds) => odds.type === 'over_under');
};

export const formatOdds = (odds: number): string => {
  return odds > 0 ? `+${odds}` : odds.toString();
};

export const calculatePayout = (stake: number, odds: number): number => {
  if (odds > 0) {
    // Positive odds: profit = (stake * odds) / 100
    return stake + (stake * odds) / 100;
  } else {
    // Negative odds: profit = (stake * 100) / Math.abs(odds)
    return stake + (stake * 100) / Math.abs(odds);
  }
};

