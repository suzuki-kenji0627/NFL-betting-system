/**
 * App Providers
 * Wraps the app with necessary providers
 */

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { useEffect, useState } from 'react';
import { useUIStore } from '@/store/uiStore';

// Component to wrap ReactQueryDevtools - ensures it's only loaded client-side after mount
// This component must be rendered INSIDE QueryClientProvider to access the context
function DevtoolsWrapper() {
  const [DevtoolsComponent, setDevtoolsComponent] = useState<React.ComponentType<{ initialIsOpen?: boolean }> | null>(null);

  useEffect(() => {
    // Only load devtools in development and after component has mounted
    // This ensures QueryClientProvider context is fully available
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      // Dynamically import devtools asynchronously to avoid blocking render
      import('@tanstack/react-query-devtools')
        .then((mod) => {
          // Set the component after it's loaded - this will trigger a re-render
          setDevtoolsComponent(() => mod.ReactQueryDevtools);
        })
        .catch(() => {
          // Devtools not available - silently fail
        });
    }
  }, []);

  // Don't render until devtools component is loaded
  if (!DevtoolsComponent) {
    return null;
  }

  // Render devtools - QueryClient context is now available
  return <DevtoolsComponent initialIsOpen={false} />;
}

// Create QueryClient - use useState with lazy initialization to avoid SSR issues
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 60 * 1000, // 1 minute
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: use singleton pattern to keep the same query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  // Use useState to create QueryClient - ensures it's created once and stable
  const [queryClient] = useState(() => getQueryClient());
  
  // Check if we're on the client side
  const isClient = typeof window !== 'undefined';

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const applyTheme = (theme: 'light' | 'dark') => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    // Apply initial theme
    const initialTheme = useUIStore.getState().theme;
    applyTheme(initialTheme);
    
    // Subscribe to theme changes - only update when theme actually changes
    let previousTheme = initialTheme;
    const unsubscribe = useUIStore.subscribe((state) => {
      if (state.theme !== previousTheme) {
        previousTheme = state.theme;
        applyTheme(state.theme);
      }
    });
    
    return () => unsubscribe();
  }, []);

  // Return providers immediately (don't wait for mount)
  // This prevents SSR issues
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster position="top-right" richColors />
      {/* DevtoolsWrapper must be inside QueryClientProvider to access context */}
      {isClient && <DevtoolsWrapper />}
    </QueryClientProvider>
  );
}

