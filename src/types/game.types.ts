/**
 * Game and Team related types
 * Represents NFL games, teams, standings, and statistics
 */

import { Odds } from './bet.types';

export type GameStatus = 'scheduled' | 'live' | 'halftime' | 'finished' | 'postponed' | 'cancelled';

export type Conference = 'AFC' | 'NFC';

export type Division = 'North' | 'South' | 'East' | 'West';

/**
 * Represents an NFL team
 */
export interface Team {
  id: string;
  name: string;
  city: string;
  abbreviation: string;
  logo: string;
  conference: Conference;
  division: Division;
  wins: number;
  losses: number;
  ties: number;
  winPercentage?: number;
  pointsFor?: number;
  pointsAgainst?: number;
}

/**
 * Represents an NFL game/fixture
 */
export interface Game {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  startTime: string; // ISO date string
  status: GameStatus;
  homeScore: number;
  awayScore: number;
  quarter?: number;
  timeRemaining?: string;
  stadium?: string;
  week: number;
  season: number;
}

/**
 * Extended game details with statistics
 */
export interface GameDetails extends Game {
  statistics?: GameStatistics;
  odds?: Odds[];
  weather?: {
    temperature: number;
    condition: string;
    windSpeed: number;
  };
  broadcast?: {
    network: string;
    streamingUrl?: string;
  };
}

/**
 * Game statistics for both teams
 */
export interface GameStatistics {
  homeStats: TeamGameStats;
  awayStats: TeamGameStats;
}

/**
 * Team statistics for a specific game
 */
export interface TeamGameStats {
  totalYards: number;
  passingYards: number;
  rushingYards: number;
  turnovers: number;
  timeOfPossession: string;
  firstDowns?: number;
  thirdDownConversions?: string; // e.g., "5/12"
  penalties?: number;
  penaltyYards?: number;
  sacks?: number;
}

/**
 * Team season statistics
 */
export interface TeamSeasonStats {
  teamId: string;
  season: number;
  gamesPlayed: number;
  wins: number;
  losses: number;
  ties: number;
  pointsPerGame: number;
  pointsAllowedPerGame: number;
  totalYardsPerGame: number;
  passingYardsPerGame: number;
  rushingYardsPerGame: number;
  turnoversPerGame: number;
  sacks: number;
  interceptions: number;
}

/**
 * League standings
 */
export interface Standing {
  teamId: string;
  team: Team;
  conference: Conference;
  division: Division;
  wins: number;
  losses: number;
  ties: number;
  winPercentage: number;
  pointsFor: number;
  pointsAgainst: number;
  pointsDifferential: number;
  streak: string; // e.g., "W3" or "L2"
  divisionRank: number;
  conferenceRank: number;
  homeRecord: string; // e.g., "5-3"
  awayRecord: string; // e.g., "4-4"
}

