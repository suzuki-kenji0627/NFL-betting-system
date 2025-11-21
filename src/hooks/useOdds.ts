/**
 * Odds Hooks
 * React Query hooks for fetching odds data
 */

import { useQuery } from '@tanstack/react-query';
import { oddsApi } from '@/lib/api/odds';

export function useGameOdds(gameId: string) {
  return useQuery({
    queryKey: ['odds', gameId],
    queryFn: () => oddsApi.getByGameId(gameId),
    enabled: !!gameId,
    refetchInterval: 60000, // Refetch every minute (odds change frequently)
    staleTime: 30000, // 30 seconds
  });
}

export function useMoneylineOdds(gameId: string) {
  return useQuery({
    queryKey: ['odds', gameId, 'moneyline'],
    queryFn: () => oddsApi.getMoneyline(gameId),
    enabled: !!gameId,
    refetchInterval: 60000,
    staleTime: 30000,
  });
}

export function useSpreadOdds(gameId: string) {
  return useQuery({
    queryKey: ['odds', gameId, 'spread'],
    queryFn: () => oddsApi.getSpread(gameId),
    enabled: !!gameId,
    refetchInterval: 60000,
    staleTime: 30000,
  });
}

export function useOverUnderOdds(gameId: string) {
  return useQuery({
    queryKey: ['odds', gameId, 'overunder'],
    queryFn: () => oddsApi.getOverUnder(gameId),
    enabled: !!gameId,
    refetchInterval: 60000,
    staleTime: 30000,
  });
}

