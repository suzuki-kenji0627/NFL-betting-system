/**
 * Odds Button Component
 * Button to add odds to bet slip
 */

'use client';

import { Button } from '@/components/ui/button';
import { Odds, Game } from '@/types';
import { useBetSlipStore } from '@/store/betSlipStore';
import { cn } from '@/lib/utils';

interface OddsButtonProps {
  odds: Odds;
  game: Game;
  variant?: 'default' | 'compact';
}

export function OddsButton({ odds, game, variant = 'default' }: OddsButtonProps) {
  const { addItem, removeItem, items } = useBetSlipStore();

  const isSelected = items.some((item) => item.odds.id === odds.id);

  const handleClick = () => {
    if (isSelected) {
      removeItem(odds.id);
    } else {
      addItem({
        gameId: game.id,
        game,
        odds,
        stake: 0,
      });
    }
  };

  const formatOdds = (oddsValue: number) => {
    return oddsValue > 0 ? `+${oddsValue}` : oddsValue.toString();
  };

  const getOddsColor = (oddsValue: number) => {
    return oddsValue > 0 ? 'text-green-500' : 'text-red-400';
  };

  if (!odds.isAvailable) {
    return (
      <Button
        variant="outline"
        className="w-full opacity-50 cursor-not-allowed"
        disabled
      >
        <div className="flex flex-col items-center w-full">
          <span className="text-xs text-muted-foreground truncate w-full">
            {odds.description}
          </span>
          <span className="text-xs text-muted-foreground">N/A</span>
        </div>
      </Button>
    );
  }

  if (variant === 'compact') {
    return (
      <Button
        variant={isSelected ? 'default' : 'outline'}
        size="sm"
        className={cn(
          'w-full hover:bg-primary/20 transition-colors',
          isSelected && 'bg-primary text-primary-foreground'
        )}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center w-full">
          <span className="text-xs truncate w-full">{odds.description}</span>
          <span className={cn('font-bold text-sm', !isSelected && getOddsColor(odds.odds))}>
            {formatOdds(odds.odds)}
          </span>
        </div>
      </Button>
    );
  }

  return (
    <Button
      variant={isSelected ? 'default' : 'outline'}
      className={cn(
        'w-full h-auto p-3 hover:bg-primary/20 transition-all',
        isSelected && 'bg-primary text-primary-foreground shadow-lg'
      )}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center w-full space-y-1">
        <span className="text-xs text-center leading-tight">
          {odds.description}
        </span>
        <span className={cn('font-bold', !isSelected && getOddsColor(odds.odds))}>
          {formatOdds(odds.odds)}
        </span>
        {odds.bookmaker && (
          <span className="text-[10px] text-muted-foreground">
            {odds.bookmaker}
          </span>
        )}
      </div>
    </Button>
  );
}

