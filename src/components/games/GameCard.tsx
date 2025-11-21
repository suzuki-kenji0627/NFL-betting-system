/**
 * Game Card Component
 * Displays game information in a card format
 */

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Game } from '@/types';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useGameOdds } from '@/hooks/useOdds';
import { OddsButton } from '../betting/OddsButton';

interface GameCardProps {
  game: Game;
  showOdds?: boolean;
}

export function GameCard({ game, showOdds = false }: GameCardProps) {
  const isLive = game.status === 'live' || game.status === 'halftime';
  const isFinished = game.status === 'finished';
  const { data: odds } = useGameOdds(game.id);

  const getStatusBadge = () => {
    switch (game.status) {
      case 'live':
        return (
          <Badge variant="destructive" className="animate-pulse">
            🔴 LIVE
          </Badge>
        );
      case 'halftime':
        return <Badge variant="secondary">HALFTIME</Badge>;
      case 'finished':
        return <Badge variant="secondary">FINAL</Badge>;
      default:
        return (
          <Badge variant="outline">
            {format(new Date(game.startTime), 'MMM d, h:mm a')}
          </Badge>
        );
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
      <CardContent className="p-6">
        {/* Header - Status and Time */}
        <div className="flex justify-between items-center mb-4">
          {getStatusBadge()}
          {isLive && game.quarter && game.timeRemaining && (
            <span className="text-sm text-muted-foreground">
              Q{game.quarter} • {game.timeRemaining}
            </span>
          )}
        </div>

        {/* Teams */}
        <Link href={`/games/${game.id}`} className="block mb-4">
          <div className="space-y-3">
            {/* Away Team */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50 group-hover:bg-accent transition-colors">
              <div className="flex items-center space-x-3 flex-1">
                <div className="relative w-10 h-10">
                  <Image
                    src={game.awayTeam.logo}
                    alt={game.awayTeam.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold">{game.awayTeam.city} {game.awayTeam.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {game.awayTeam.wins}-{game.awayTeam.losses}-{game.awayTeam.ties}
                  </p>
                </div>
              </div>
              {(isLive || isFinished) && (
                <span className="text-2xl font-bold ml-4">{game.awayScore}</span>
              )}
            </div>

            {/* Home Team */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50 group-hover:bg-accent transition-colors">
              <div className="flex items-center space-x-3 flex-1">
                <div className="relative w-10 h-10">
                  <Image
                    src={game.homeTeam.logo}
                    alt={game.homeTeam.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold">{game.homeTeam.city} {game.homeTeam.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {game.homeTeam.wins}-{game.homeTeam.losses}-{game.homeTeam.ties}
                  </p>
                </div>
              </div>
              {(isLive || isFinished) && (
                <span className="text-2xl font-bold ml-4">{game.homeScore}</span>
              )}
            </div>
          </div>
        </Link>

        {/* Stadium Info */}
        {game.stadium && (
          <p className="text-xs text-muted-foreground text-center mb-3">
            📍 {game.stadium}
          </p>
        )}

        {/* Odds Section */}
        {showOdds && odds && odds.length > 0 && game.status === 'scheduled' && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="grid grid-cols-3 gap-2">
              {odds.slice(0, 3).map((odd) => (
                <OddsButton key={odd.id} odds={odd} game={game} />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

