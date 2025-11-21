/**
 * Bet Slip Store
 * Manages bet slip state using Zustand
 */

import { create } from 'zustand';
import { BetSlipItem, BetSlipSummary } from '@/types';
import { calculatePayout } from '@/lib/mock/odds.mock';

interface BetSlipState {
  items: BetSlipItem[];
  isOpen: boolean;

  // Actions
  addItem: (item: BetSlipItem) => void;
  removeItem: (oddsId: string) => void;
  updateStake: (oddsId: string, stake: number) => void;
  clearAll: () => void;
  openSlip: () => void;
  closeSlip: () => void;
  toggleSlip: () => void;
  getSummary: () => BetSlipSummary;
}

export const useBetSlipStore = create<BetSlipState>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (item) =>
    set((state) => {
      // Check if item already exists
      const exists = state.items.find((i) => i.odds.id === item.odds.id);
      if (exists) {
        return state; // Don't add duplicates
      }
      return { items: [...state.items, item], isOpen: true };
    }),

  removeItem: (oddsId) =>
    set((state) => ({
      items: state.items.filter((item) => item.odds.id !== oddsId),
    })),

  updateStake: (oddsId, stake) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.odds.id === oddsId ? { ...item, stake } : item
      ),
    })),

  clearAll: () => set({ items: [] }),

  openSlip: () => set({ isOpen: true }),

  closeSlip: () => set({ isOpen: false }),

  toggleSlip: () => set((state) => ({ isOpen: !state.isOpen })),

  getSummary: () => {
    const state = get();
    const totalStake = state.items.reduce((sum, item) => sum + (item.stake || 0), 0);
    const potentialPayout = state.items.reduce((sum, item) => {
      if (!item.stake || item.stake === 0) return sum;
      return sum + calculatePayout(item.stake, item.odds.odds);
    }, 0);

    // Calculate combined odds (for display purposes)
    const totalOdds = state.items.reduce((product, item) => {
      if (!item.stake || item.stake === 0) return product;
      const decimal = item.odds.decimalOdds || 1.91;
      return product * decimal;
    }, 1);

    return {
      totalStake,
      potentialPayout,
      totalOdds: Math.round(totalOdds * 100) / 100,
      betCount: state.items.length,
    };
  },
}));

