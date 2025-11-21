/**
 * Teams Hooks
 * React Query hooks for fetching team data
 */

import { useQuery } from '@tanstack/react-query';
import { teamsApi } from '@/lib/api/teams';

export function useTeams() {
  return useQuery({
    queryKey: ['teams'],
    queryFn: () => teamsApi.getAll(),
    staleTime: 300000, // 5 minutes (teams don't change often)
  });
}

export function useTeam(id: string) {
  return useQuery({
    queryKey: ['teams', id],
    queryFn: () => teamsApi.getById(id),
    enabled: !!id,
    staleTime: 300000, // 5 minutes
  });
}

export function useTeamsByConference(conference: 'AFC' | 'NFC') {
  return useQuery({
    queryKey: ['teams', 'conference', conference],
    queryFn: () => teamsApi.getByConference(conference),
    enabled: !!conference,
    staleTime: 300000, // 5 minutes
  });
}

export function useTeamsByDivision(
  conference: 'AFC' | 'NFC',
  division: 'North' | 'South' | 'East' | 'West'
) {
  return useQuery({
    queryKey: ['teams', 'division', conference, division],
    queryFn: () => teamsApi.getByDivision(conference, division),
    enabled: !!conference && !!division,
    staleTime: 300000, // 5 minutes
  });
}

