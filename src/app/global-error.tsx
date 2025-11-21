'use client';

/**
 * Global Error Boundary
 * Catches errors that occur in the root layout
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: '20px', fontFamily: 'system-ui', textAlign: 'center' }}>
          <h2>Something went wrong!</h2>
          <p style={{ color: '#666', marginTop: '10px' }}>
            {error?.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={reset}
            style={{
              padding: '10px 20px',
              marginTop: '20px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

