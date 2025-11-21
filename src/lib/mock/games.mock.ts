/**
 * Mock NFL Games Data
 * Realistic game fixtures for development
 */

import { Game } from '@/types';
import { getTeamById } from './teams.mock';

// Helper to create date relative to now
const daysFromNow = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
};

const hoursFromNow = (hours: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hours);
  return date.toISOString();
};

export const MOCK_GAMES: Game[] = [
  // Live games
  {
    id: 'game-live-1',
    homeTeam: getTeamById('kc')!,
    awayTeam: getTeamById('buf')!,
    startTime: hoursFromNow(-2),
    status: 'live',
    homeScore: 21,
    awayScore: 17,
    quarter: 3,
    timeRemaining: '08:45',
    week: 13,
    season: 2024,
    stadium: 'Arrowhead Stadium',
  },
  {
    id: 'game-live-2',
    homeTeam: getTeamById('sf')!,
    awayTeam: getTeamById('phi')!,
    startTime: hoursFromNow(-1.5),
    status: 'live',
    homeScore: 14,
    awayScore: 20,
    quarter: 2,
    timeRemaining: '03:21',
    week: 13,
    season: 2024,
    stadium: "Levi's Stadium",
  },
  {
    id: 'game-live-3',
    homeTeam: getTeamById('bal')!,
    awayTeam: getTeamById('mia')!,
    startTime: hoursFromNow(-2.5),
    status: 'live',
    homeScore: 28,
    awayScore: 24,
    quarter: 4,
    timeRemaining: '12:15',
    week: 13,
    season: 2024,
    stadium: 'M&T Bank Stadium',
  },

  // Halftime
  {
    id: 'game-halftime-1',
    homeTeam: getTeamById('det')!,
    awayTeam: getTeamById('gb')!,
    startTime: hoursFromNow(-1),
    status: 'halftime',
    homeScore: 17,
    awayScore: 10,
    quarter: 2,
    timeRemaining: '00:00',
    week: 13,
    season: 2024,
    stadium: 'Ford Field',
  },

  // Upcoming games - Today
  {
    id: 'game-upcoming-1',
    homeTeam: getTeamById('dal')!,
    awayTeam: getTeamById('wsh')!,
    startTime: hoursFromNow(3),
    status: 'scheduled',
    homeScore: 0,
    awayScore: 0,
    week: 13,
    season: 2024,
    stadium: 'AT&T Stadium',
  },
  {
    id: 'game-upcoming-2',
    homeTeam: getTeamById('lac')!,
    awayTeam: getTeamById('den')!,
    startTime: hoursFromNow(5),
    status: 'scheduled',
    homeScore: 0,
    awayScore: 0,
    week: 13,
    season: 2024,
    stadium: 'SoFi Stadium',
  },
  {
    id: 'game-upcoming-3',
    homeTeam: getTeamById('sea')!,
    awayTeam: getTeamById('lar')!,
    startTime: hoursFromNow(7),
    status: 'scheduled',
    homeScore: 0,
    awayScore: 0,
    week: 13,
    season: 2024,
    stadium: 'Lumen Field',
  },

  // Upcoming games - Tomorrow
  {
    id: 'game-upcoming-4',
    homeTeam: getTeamById('jax')!,
    awayTeam: getTeamById('hou')!,
    startTime: daysFromNow(1),
    status: 'scheduled',
    homeScore: 0,
    awayScore: 0,
    week: 13,
    season: 2024,
    stadium: 'TIAA Bank Field',
  },
  {
    id: 'game-upcoming-5',
    homeTeam: getTeamById('pit')!,
    awayTeam: getTeamById('cle')!,
    startTime: daysFromNow(1),
    status: 'scheduled',
    homeScore: 0,
    awayScore: 0,
    week: 13,
    season: 2024,
    stadium: 'Heinz Field',
  },
  {
    id: 'game-upcoming-6',
    homeTeam: getTeamById('min')!,
    awayTeam: getTeamById('chi')!,
    startTime: daysFromNow(1),
    status: 'scheduled',
    homeScore: 0,
    awayScore: 0,
    week: 13,
    season: 2024,
    stadium: 'U.S. Bank Stadium',
  },
  {
    id: 'game-upcoming-7',
    homeTeam: getTeamById('tb')!,
    awayTeam: getTeamById('no')!,
    startTime: daysFromNow(2),
    status: 'scheduled',
    homeScore: 0,
    awayScore: 0,
    week: 13,
    season: 2024,
    stadium: 'Raymond James Stadium',
  },
  {
    id: 'game-upcoming-8',
    homeTeam: getTeamById('ne')!,
    awayTeam: getTeamById('nyj')!,
    startTime: daysFromNow(2),
    status: 'scheduled',
    homeScore: 0,
    awayScore: 0,
    week: 13,
    season: 2024,
    stadium: 'Gillette Stadium',
  },

  // Finished games
  {
    id: 'game-finished-1',
    homeTeam: getTeamById('cin')!,
    awayTeam: getTeamById('ten')!,
    startTime: daysFromNow(-1),
    status: 'finished',
    homeScore: 27,
    awayScore: 20,
    week: 12,
    season: 2024,
    stadium: 'Paul Brown Stadium',
  },
  {
    id: 'game-finished-2',
    homeTeam: getTeamById('ind')!,
    awayTeam: getTeamById('lv')!,
    startTime: daysFromNow(-1),
    status: 'finished',
    homeScore: 31,
    awayScore: 24,
    week: 12,
    season: 2024,
    stadium: 'Lucas Oil Stadium',
  },
  {
    id: 'game-finished-3',
    homeTeam: getTeamById('nyg')!,
    awayTeam: getTeamById('car')!,
    startTime: daysFromNow(-2),
    status: 'finished',
    homeScore: 20,
    awayScore: 17,
    week: 12,
    season: 2024,
    stadium: 'MetLife Stadium',
  },
  {
    id: 'game-finished-4',
    homeTeam: getTeamById('atl')!,
    awayTeam: getTeamById('ari')!,
    startTime: daysFromNow(-3),
    status: 'finished',
    homeScore: 24,
    awayScore: 21,
    week: 12,
    season: 2024,
    stadium: 'Mercedes-Benz Stadium',
  },
];

// Helpers
export const getLiveGames = (): Game[] => {
  return MOCK_GAMES.filter((game) => game.status === 'live' || game.status === 'halftime');
};

export const getUpcomingGames = (): Game[] => {
  return MOCK_GAMES.filter((game) => game.status === 'scheduled').sort(
    (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
  );
};

export const getFinishedGames = (): Game[] => {
  return MOCK_GAMES.filter((game) => game.status === 'finished').sort(
    (a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
  );
};

export const getGameById = (id: string): Game | undefined => {
  return MOCK_GAMES.find((game) => game.id === id);
};

export const getGamesByTeam = (teamId: string): Game[] => {
  return MOCK_GAMES.filter(
    (game) => game.homeTeam.id === teamId || game.awayTeam.id === teamId
  );
};

export const getTodayGames = (): Game[] => {
  const today = new Date();
  return MOCK_GAMES.filter((game) => {
    const gameDate = new Date(game.startTime);
    return gameDate.toDateString() === today.toDateString();
  });
};

