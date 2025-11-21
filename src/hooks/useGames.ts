/**
 * Games Hooks
 * React Query hooks for fetching game data
 */

import { useQuery } from '@tanstack/react-query';
import { gamesApi } from '@/lib/api/games';

export function useGames() {
  return useQuery({
    queryKey: ['games'],
    queryFn: () => gamesApi.getAll(),
    staleTime: 30000, // 30 seconds
  });
}

export function useLiveGames() {
  return useQuery({
    queryKey: ['games', 'live'],
    queryFn: () => gamesApi.getLive(),
    refetchInterval: 30000, // Refetch every 30 seconds for live updates
    staleTime: 10000, // 10 seconds
  });
}

export function useUpcomingGames() {
  return useQuery({
    queryKey: ['games', 'upcoming'],
    queryFn: () => gamesApi.getUpcoming(),
    staleTime: 60000, // 1 minute
  });
}

export function useFinishedGames() {
  return useQuery({
    queryKey: ['games', 'finished'],
    queryFn: () => gamesApi.getFinished(),
    staleTime: 120000, // 2 minutes
  });
}

export function useTodayGames() {
  return useQuery({
    queryKey: ['games', 'today'],
    queryFn: () => gamesApi.getToday(),
    refetchInterval: 60000, // Refetch every minute
    staleTime: 30000, // 30 seconds
  });
}

export function useGame(id: string) {
  return useQuery({
    queryKey: ['games', id],
    queryFn: () => gamesApi.getById(id),
    enabled: !!id,
    staleTime: 30000, // 30 seconds
  });
}

export function useTeamGames(teamId: string) {
  return useQuery({
    queryKey: ['games', 'team', teamId],
    queryFn: () => gamesApi.getByTeam(teamId),
    enabled: !!teamId,
    staleTime: 60000, // 1 minute
  });
}

