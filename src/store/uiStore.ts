/**
 * UI Store
 * Manages global UI state using Zustand
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  oddsFormat: 'american' | 'decimal' | 'fractional';

  // Actions
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setOddsFormat: (format: 'american' | 'decimal' | 'fractional') => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: 'dark', // Default to dark theme
      sidebarOpen: false,
      oddsFormat: 'american',

      setTheme: (theme) => set({ theme }),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      setSidebarOpen: (open) => set({ sidebarOpen: open }),

      toggleSidebar: () =>
        set((state) => ({ sidebarOpen: !state.sidebarOpen })),

      setOddsFormat: (format) => set({ oddsFormat: format }),
    }),
    {
      name: 'ui-storage',
    }
  )
);

