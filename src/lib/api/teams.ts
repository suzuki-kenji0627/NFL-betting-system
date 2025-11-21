/**
 * Teams API
 * Handles all team-related API calls
 */

import { Team } from '@/types';
import { apiClient, useMockData, mockDelay } from './client';
import {
  MOCK_TEAMS,
  getTeamById as getMockTeamById,
  getTeamsByConference,
  getTeamsByDivision,
} from '../mock/teams.mock';

export const teamsApi = {
  /**
   * Get all teams
   */
  getAll: async (): Promise<Team[]> => {
    if (useMockData) {
      await mockDelay();
      return MOCK_TEAMS;
    }
    const response = await apiClient.get('/teams');
    return response.data;
  },

  /**
   * Get team by ID
   */
  getById: async (id: string): Promise<Team> => {
    if (useMockData) {
      await mockDelay();
      const team = getMockTeamById(id);
      if (!team) {
        throw new Error('Team not found');
      }
      return team;
    }
    const response = await apiClient.get(`/teams/${id}`);
    return response.data;
  },

  /**
   * Get teams by conference
   */
  getByConference: async (conference: 'AFC' | 'NFC'): Promise<Team[]> => {
    if (useMockData) {
      await mockDelay();
      return getTeamsByConference(conference);
    }
    const response = await apiClient.get(`/teams/conference/${conference}`);
    return response.data;
  },

  /**
   * Get teams by division
   */
  getByDivision: async (
    conference: 'AFC' | 'NFC',
    division: 'North' | 'South' | 'East' | 'West'
  ): Promise<Team[]> => {
    if (useMockData) {
      await mockDelay();
      return getTeamsByDivision(conference, division);
    }
    const response = await apiClient.get(`/teams/${conference}/${division}`);
    return response.data;
  },
};

