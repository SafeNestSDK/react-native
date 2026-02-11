import { useState, useCallback } from 'react';
import {
  SafeNestClient,
  DetectBullyingInput,
  BullyingResult,
  DetectGroomingInput,
  GroomingResult,
  DetectUnsafeInput,
  UnsafeResult,
  AnalyzeInput,
  AnalyzeResult,
  AnalyzeEmotionsInput,
  EmotionsResult,
  GetActionPlanInput,
  ActionPlanResult,
  GenerateReportInput,
  ReportResult,
  AccountDeletionResult,
  AccountExportResult,
} from '@safenest/sdk';
import { useSafeNestClient } from './context';

/**
 * State for async operations.
 */
export interface AsyncState<T> {
  /** The result data */
  data: T | null;
  /** Loading state */
  loading: boolean;
  /** Error if any */
  error: Error | null;
}

/**
 * Hook result type.
 */
export interface UseAsyncResult<T, I> extends AsyncState<T> {
  /** Execute the operation */
  execute: (input: I) => Promise<T>;
  /** Reset state */
  reset: () => void;
}

/**
 * Hook for bullying detection.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { data, loading, error, execute } = useDetectBullying();
 *
 *   const handleCheck = async () => {
 *     const result = await execute({ content: 'Message to check' });
 *     if (result.is_bullying) {
 *       console.log('Bullying detected!');
 *     }
 *   };
 * }
 * ```
 */
export function useDetectBullying(): UseAsyncResult<BullyingResult, DetectBullyingInput> {
  const { client } = useSafeNestClient();
  const [state, setState] = useState<AsyncState<BullyingResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (input: DetectBullyingInput): Promise<BullyingResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.detectBullying(input);
        setState({ data: result, loading: false, error: null });
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setState({ data: null, loading: false, error });
        throw error;
      }
    },
    [client]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}

/**
 * Hook for grooming detection.
 */
export function useDetectGrooming(): UseAsyncResult<GroomingResult, DetectGroomingInput> {
  const { client } = useSafeNestClient();
  const [state, setState] = useState<AsyncState<GroomingResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (input: DetectGroomingInput): Promise<GroomingResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.detectGrooming(input);
        setState({ data: result, loading: false, error: null });
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setState({ data: null, loading: false, error });
        throw error;
      }
    },
    [client]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}

/**
 * Hook for unsafe content detection.
 */
export function useDetectUnsafe(): UseAsyncResult<UnsafeResult, DetectUnsafeInput> {
  const { client } = useSafeNestClient();
  const [state, setState] = useState<AsyncState<UnsafeResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (input: DetectUnsafeInput): Promise<UnsafeResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.detectUnsafe(input);
        setState({ data: result, loading: false, error: null });
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setState({ data: null, loading: false, error });
        throw error;
      }
    },
    [client]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}

/**
 * Hook for quick analysis.
 *
 * @example
 * ```tsx
 * function ChatInput() {
 *   const { execute, loading } = useAnalyze();
 *   const [message, setMessage] = useState('');
 *
 *   const handleSend = async () => {
 *     const result = await execute({ content: message });
 *     if (result.risk_level === 'critical') {
 *       Alert.alert('Message blocked', result.summary);
 *       return;
 *     }
 *     // Send message...
 *   };
 * }
 * ```
 */
export function useAnalyze(): UseAsyncResult<AnalyzeResult, AnalyzeInput> {
  const { client } = useSafeNestClient();
  const [state, setState] = useState<AsyncState<AnalyzeResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (input: AnalyzeInput): Promise<AnalyzeResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.analyze(input);
        setState({ data: result, loading: false, error: null });
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setState({ data: null, loading: false, error });
        throw error;
      }
    },
    [client]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}

/**
 * Hook for emotion analysis.
 */
export function useAnalyzeEmotions(): UseAsyncResult<EmotionsResult, AnalyzeEmotionsInput> {
  const { client } = useSafeNestClient();
  const [state, setState] = useState<AsyncState<EmotionsResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (input: AnalyzeEmotionsInput): Promise<EmotionsResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.analyzeEmotions(input);
        setState({ data: result, loading: false, error: null });
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setState({ data: null, loading: false, error });
        throw error;
      }
    },
    [client]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}

/**
 * Hook for action plan generation.
 */
export function useGetActionPlan(): UseAsyncResult<ActionPlanResult, GetActionPlanInput> {
  const { client } = useSafeNestClient();
  const [state, setState] = useState<AsyncState<ActionPlanResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (input: GetActionPlanInput): Promise<ActionPlanResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.getActionPlan(input);
        setState({ data: result, loading: false, error: null });
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setState({ data: null, loading: false, error });
        throw error;
      }
    },
    [client]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}

/**
 * Hook for incident report generation.
 */
export function useGenerateReport(): UseAsyncResult<ReportResult, GenerateReportInput> {
  const { client } = useSafeNestClient();
  const [state, setState] = useState<AsyncState<ReportResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (input: GenerateReportInput): Promise<ReportResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.generateReport(input);
        setState({ data: result, loading: false, error: null });
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setState({ data: null, loading: false, error });
        throw error;
      }
    },
    [client]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}

/**
 * Hook for account data deletion (GDPR Article 17 — Right to Erasure).
 */
export function useDeleteAccountData(): Omit<UseAsyncResult<AccountDeletionResult, void>, 'execute'> & { execute: () => Promise<AccountDeletionResult> } {
  const { client } = useSafeNestClient();
  const [state, setState] = useState<AsyncState<AccountDeletionResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (): Promise<AccountDeletionResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.deleteAccountData();
        setState({ data: result, loading: false, error: null });
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setState({ data: null, loading: false, error });
        throw error;
      }
    },
    [client]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}

/**
 * Hook for account data export (GDPR Article 20 — Right to Data Portability).
 */
export function useExportAccountData(): Omit<UseAsyncResult<AccountExportResult, void>, 'execute'> & { execute: () => Promise<AccountExportResult> } {
  const { client } = useSafeNestClient();
  const [state, setState] = useState<AsyncState<AccountExportResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (): Promise<AccountExportResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.exportAccountData();
        setState({ data: result, loading: false, error: null });
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setState({ data: null, loading: false, error });
        throw error;
      }
    },
    [client]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}
