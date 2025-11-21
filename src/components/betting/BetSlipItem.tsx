/**
 * Bet Slip Item Component
 * Individual bet item in the bet slip
 */

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BetSlipItem as BetSlipItemType } from '@/types';
import { useBetSlipStore } from '@/store/betSlipStore';
import { X } from 'lucide-react';
import { calculatePayout, formatOdds } from '@/lib/mock/odds.mock';
import Image from 'next/image';

interface BetSlipItemProps {
  item: BetSlipItemType;
}

export function BetSlipItem({ item }: BetSlipItemProps) {
  const { updateStake, removeItem } = useBetSlipStore();

  const handleStakeChange = (value: string) => {
    const stake = parseFloat(value) || 0;
    updateStake(item.odds.id, stake);
  };

  const potentialPayout = item.stake > 0 ? calculatePayout(item.stake, item.odds.odds) : 0;
  const potentialProfit = potentialPayout - item.stake;

  return (
    <Card className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-6 w-6 rounded-full hover:bg-destructive/20 hover:text-destructive"
        onClick={() => removeItem(item.odds.id)}
      >
        <X className="h-4 w-4" />
      </Button>

      <CardContent className="p-4 pr-10">
        {/* Game Info */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="relative w-5 h-5">
              <Image
                src={item.game.awayTeam.logo}
                alt={item.game.awayTeam.abbreviation}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs">vs</span>
            <div className="relative w-5 h-5">
              <Image
                src={item.game.homeTeam.logo}
                alt={item.game.homeTeam.abbreviation}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-sm font-semibold">
            {item.game.awayTeam.abbreviation} @ {item.game.homeTeam.abbreviation}
          </p>
        </div>

        {/* Bet Details */}
        <div className="mb-3 p-2 bg-accent/50 rounded">
          <p className="text-xs text-muted-foreground mb-1">{item.odds.type.toUpperCase()}</p>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm">{item.odds.description}</p>
            <span className={`font-bold ${item.odds.odds > 0 ? 'text-green-500' : 'text-red-400'}`}>
              {formatOdds(item.odds.odds)}
            </span>
          </div>
        </div>

        {/* Stake Input */}
        <div className="space-y-2">
          <Label htmlFor={`stake-${item.odds.id}`} className="text-xs">
            Stake Amount
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              $
            </span>
            <Input
              id={`stake-${item.odds.id}`}
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              className="pl-7"
              value={item.stake || ''}
              onChange={(e) => handleStakeChange(e.target.value)}
            />
          </div>

          {/* Quick Stake Buttons */}
          <div className="flex gap-1">
            {[10, 25, 50, 100].map((amount) => (
              <Button
                key={amount}
                variant="outline"
                size="sm"
                className="flex-1 h-7 text-xs"
                onClick={() => updateStake(item.odds.id, amount)}
              >
                ${amount}
              </Button>
            ))}
          </div>

          {/* Payout Info */}
          {item.stake > 0 && (
            <div className="mt-2 p-2 bg-primary/10 rounded text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Potential Payout:</span>
                <span className="font-bold text-green-500">
                  ${potentialPayout.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Potential Profit:</span>
                <span className="font-bold text-green-500">
                  ${potentialProfit.toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

