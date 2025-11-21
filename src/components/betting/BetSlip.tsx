/**
 * Bet Slip Component
 * Floating sheet for managing bets before placement
 */

'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useBetSlipStore } from '@/store/betSlipStore';
import { useAuthStore } from '@/store/authStore';
import { BetSlipItem } from './BetSlipItem';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Trash2, ShoppingCart } from 'lucide-react';

export function BetSlip() {
  const { items, isOpen, closeSlip, clearAll, getSummary } = useBetSlipStore();
  const { isAuthenticated } = useAuthStore();
  const [isPlacing, setIsPlacing] = useState(false);
  const router = useRouter();

  const summary = getSummary();

  const handlePlaceBets = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to place bets');
      router.push('/login');
      return;
    }

    if (summary.totalStake === 0) {
      toast.error('Please add stake amounts to your bets');
      return;
    }

    setIsPlacing(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Bets placed successfully!');
      clearAll();
      closeSlip();
      setIsPlacing(false);
      router.push('/my-bets');
    }, 1500);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={(open) => !open && closeSlip()}>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto">
          <SheetHeader className="mb-6">
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Bet Slip ({items.length})
            </SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-2">Your bet slip is empty</p>
              <p className="text-sm text-muted-foreground">
                Click on odds to add bets to your slip
              </p>
            </div>
          ) : (
            <>
              {/* Clear All Button */}
              <div className="flex justify-end mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAll}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </div>

              {/* Bet Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <BetSlipItem key={item.odds.id} item={item} />
                ))}
              </div>

              <Separator className="my-6" />

              {/* Summary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Bets:</span>
                  <span className="font-semibold">{summary.betCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Stake:</span>
                  <span className="font-bold text-lg">${summary.totalStake.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Potential Payout:</span>
                  <span className="font-bold text-lg text-green-500">
                    ${summary.potentialPayout.toFixed(2)}
                  </span>
                </div>
                {summary.totalStake > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Potential Profit:</span>
                    <span className="font-bold text-green-500">
                      ${(summary.potentialPayout - summary.totalStake).toFixed(2)}
                    </span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button
                  className="w-full h-12 text-lg font-semibold"
                  size="lg"
                  onClick={handlePlaceBets}
                  disabled={isPlacing || summary.totalStake === 0}
                >
                  {isPlacing ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Placing Bets...
                    </>
                  ) : (
                    `Place Bet${items.length > 1 ? 's' : ''}`
                  )}
                </Button>

                {!isAuthenticated && (
                  <p className="text-xs text-center text-muted-foreground">
                    You need to <span className="text-primary">login</span> to place bets
                  </p>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}

