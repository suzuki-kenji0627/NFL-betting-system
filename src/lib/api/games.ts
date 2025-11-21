/**
 * Games API
 * Handles all game-related API calls
 */

import { Game } from '@/types';
import { apiClient, useMockData, mockDelay } from './client';
import {
  MOCK_GAMES,
  getLiveGames,
  getUpcomingGames,
  getFinishedGames,
  getGameById as getMockGameById,
  getGamesByTeam,
  getTodayGames,
} from '../mock/games.mock';

export const gamesApi = {
  /**
   * Get all games
   */
  getAll: async (): Promise<Game[]> => {
    if (useMockData) {
      await mockDelay();
      return MOCK_GAMES;
    }
    const response = await apiClient.get('/games');
    return response.data;
  },

  /**
   * Get live games
   */
  getLive: async (): Promise<Game[]> => {
    if (useMockData) {
      await mockDelay(300);
      return getLiveGames();
    }
    const response = await apiClient.get('/games/live');
    return response.data;
  },

  /**
   * Get upcoming games
   */
  getUpcoming: async (): Promise<Game[]> => {
    if (useMockData) {
      await mockDelay();
      return getUpcomingGames();
    }
    const response = await apiClient.get('/games/upcoming');
    return response.data;
  },

  /**
   * Get finished games
   */
  getFinished: async (): Promise<Game[]> => {
    if (useMockData) {
      await mockDelay();
      return getFinishedGames();
    }
    const response = await apiClient.get('/games/finished');
    return response.data;
  },

  /**
   * Get today's games
   */
  getToday: async (): Promise<Game[]> => {
    if (useMockData) {
      await mockDelay();
      return getTodayGames();
    }
    const response = await apiClient.get('/games/today');
    return response.data;
  },

  /**
   * Get game by ID
   */
  getById: async (id: string): Promise<Game> => {
    if (useMockData) {
      await mockDelay();
      const game = getMockGameById(id);
      if (!game) {
        throw new Error('Game not found');
      }
      return game;
    }
    const response = await apiClient.get(`/games/${id}`);
    return response.data;
  },

  /**
   * Get games by team
   */
  getByTeam: async (teamId: string): Promise<Game[]> => {
    if (useMockData) {
      await mockDelay();
      return getGamesByTeam(teamId);
    }
    const response = await apiClient.get(`/games/team/${teamId}`);
    return response.data;
  },

  /**
   * Get games by week
   */
  getByWeek: async (week: number, season: number): Promise<Game[]> => {
    if (useMockData) {
      await mockDelay();
      return MOCK_GAMES.filter((g) => g.week === week && g.season === season);
    }
    const response = await apiClient.get(`/games/week/${week}/season/${season}`);
    return response.data;
  },
};

