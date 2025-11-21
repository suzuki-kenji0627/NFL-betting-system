/**
 * Odds API
 * Handles all odds-related API calls
 */

import { Odds } from '@/types';
import { apiClient, useMockData, mockDelay } from './client';
import {
  getOddsByGameId,
  getMoneylineOdds,
  getSpreadOdds,
  getOverUnderOdds,
} from '../mock/odds.mock';

export const oddsApi = {
  /**
   * Get all odds for a game
   */
  getByGameId: async (gameId: string): Promise<Odds[]> => {
    if (useMockData) {
      await mockDelay(300);
      return getOddsByGameId(gameId);
    }
    const response = await apiClient.get(`/odds/game/${gameId}`);
    return response.data;
  },

  /**
   * Get moneyline odds for a game
   */
  getMoneyline: async (gameId: string): Promise<Odds[]> => {
    if (useMockData) {
      await mockDelay(300);
      return getMoneylineOdds(gameId);
    }
    const response = await apiClient.get(`/odds/game/${gameId}/moneyline`);
    return response.data;
  },

  /**
   * Get spread odds for a game
   */
  getSpread: async (gameId: string): Promise<Odds[]> => {
    if (useMockData) {
      await mockDelay(300);
      return getSpreadOdds(gameId);
    }
    const response = await apiClient.get(`/odds/game/${gameId}/spread`);
    return response.data;
  },

  /**
   * Get over/under odds for a game
   */
  getOverUnder: async (gameId: string): Promise<Odds[]> => {
    if (useMockData) {
      await mockDelay(300);
      return getOverUnderOdds(gameId);
    }
    const response = await apiClient.get(`/odds/game/${gameId}/overunder`);
    return response.data;
  },
};

