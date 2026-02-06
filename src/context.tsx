import React, { createContext, useContext, useMemo, useRef } from 'react';
import { SafeNestClient, SafeNestOptions } from '@safenest/sdk';

/**
 * Props for SafeNestProvider.
 */
export interface SafeNestProviderProps {
  /** Your SafeNest API key */
  apiKey: string;
  /** Optional configuration */
  options?: SafeNestOptions;
  /** React children */
  children: React.ReactNode;
}

/**
 * Context value type.
 */
export interface SafeNestContextValue {
  /** The SafeNest client instance */
  client: SafeNestClient;
  /** Whether the client is ready */
  isReady: boolean;
}

const SafeNestContext = createContext<SafeNestContextValue | null>(null);

/**
 * Provider component for SafeNest client.
 *
 * @example
 * ```tsx
 * import { SafeNestProvider } from '@safenest/react-native';
 *
 * function App() {
 *   return (
 *     <SafeNestProvider apiKey="your-api-key">
 *       <YourApp />
 *     </SafeNestProvider>
 *   );
 * }
 * ```
 */
export function SafeNestProvider({
  apiKey,
  options,
  children,
}: SafeNestProviderProps): JSX.Element {
  const clientRef = useRef<SafeNestClient | null>(null);

  // Create client only once
  if (!clientRef.current) {
    clientRef.current = new SafeNestClient(apiKey, options);
  }

  const value = useMemo<SafeNestContextValue>(
    () => ({
      client: clientRef.current!,
      isReady: true,
    }),
    []
  );

  return (
    <SafeNestContext.Provider value={value}>
      {children}
    </SafeNestContext.Provider>
  );
}

/**
 * Hook to access the SafeNest client.
 *
 * @throws Error if used outside of SafeNestProvider
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { client } = useSafeNestClient();
 *
 *   const checkMessage = async (text: string) => {
 *     const result = await client.analyze({ content: text });
 *     console.log(result.risk_level);
 *   };
 * }
 * ```
 */
export function useSafeNestClient(): SafeNestContextValue {
  const context = useContext(SafeNestContext);

  if (!context) {
    throw new Error('useSafeNestClient must be used within a SafeNestProvider');
  }

  return context;
}
