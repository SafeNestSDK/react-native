import { useState, useCallback } from 'react';
import {
  TuteliqClient,
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
  ConsentActionResult,
  ConsentStatusResult,
  ConsentType,
  RecordConsentInput,
  RectifyDataInput,
  RectifyDataResult,
  AuditLogsResult,
  GetAuditLogsOptions,
  LogBreachInput,
  LogBreachResult,
  BreachListResult,
  BreachResult,
  UpdateBreachInput,
  GetBreachesOptions,
} from '@tuteliq/sdk';
import { useTuteliqClient } from './context';

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
  const { client } = useTuteliqClient();
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
  const { client } = useTuteliqClient();
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
  const { client } = useTuteliqClient();
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
  const { client } = useTuteliqClient();
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
  const { client } = useTuteliqClient();
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
  const { client } = useTuteliqClient();
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
  const { client } = useTuteliqClient();
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
  const { client } = useTuteliqClient();
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
  const { client } = useTuteliqClient();
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

/**
 * Hook for recording consent (GDPR Article 7).
 */
export function useRecordConsent(): UseAsyncResult<ConsentActionResult, RecordConsentInput> {
  const { client } = useTuteliqClient();
  const [state, setState] = useState<AsyncState<ConsentActionResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (input: RecordConsentInput): Promise<ConsentActionResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.recordConsent(input);
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
 * Hook for getting consent status (GDPR Article 7).
 */
export function useGetConsentStatus(): UseAsyncResult<ConsentStatusResult, ConsentType | undefined> {
  const { client } = useTuteliqClient();
  const [state, setState] = useState<AsyncState<ConsentStatusResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (type?: ConsentType): Promise<ConsentStatusResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.getConsentStatus(type);
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
 * Hook for withdrawing consent (GDPR Article 7.3).
 */
export function useWithdrawConsent(): UseAsyncResult<ConsentActionResult, ConsentType> {
  const { client } = useTuteliqClient();
  const [state, setState] = useState<AsyncState<ConsentActionResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (type: ConsentType): Promise<ConsentActionResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.withdrawConsent(type);
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
 * Hook for data rectification (GDPR Article 16).
 */
export function useRectifyData(): UseAsyncResult<RectifyDataResult, RectifyDataInput> {
  const { client } = useTuteliqClient();
  const [state, setState] = useState<AsyncState<RectifyDataResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (input: RectifyDataInput): Promise<RectifyDataResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.rectifyData(input);
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
 * Hook for getting audit logs (GDPR Article 15).
 */
export function useGetAuditLogs(): UseAsyncResult<AuditLogsResult, GetAuditLogsOptions | undefined> {
  const { client } = useTuteliqClient();
  const [state, setState] = useState<AsyncState<AuditLogsResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (options?: GetAuditLogsOptions): Promise<AuditLogsResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.getAuditLogs(options);
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
 * Hook for logging a data breach (GDPR Article 33/34).
 */
export function useLogBreach(): UseAsyncResult<LogBreachResult, LogBreachInput> {
  const { client } = useTuteliqClient();
  const [state, setState] = useState<AsyncState<LogBreachResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (input: LogBreachInput): Promise<LogBreachResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.logBreach(input);
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
 * Hook for listing breaches (GDPR Article 33/34).
 */
export function useListBreaches(): UseAsyncResult<BreachListResult, GetBreachesOptions | undefined> {
  const { client } = useTuteliqClient();
  const [state, setState] = useState<AsyncState<BreachListResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (options?: GetBreachesOptions): Promise<BreachListResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.listBreaches(options);
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
 * Hook for getting a single breach (GDPR Article 33/34).
 */
export function useGetBreach(): UseAsyncResult<BreachResult, string> {
  const { client } = useTuteliqClient();
  const [state, setState] = useState<AsyncState<BreachResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (id: string): Promise<BreachResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.getBreach(id);
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
 * Hook for updating a breach's status (GDPR Article 33/34).
 */
export function useUpdateBreachStatus(): UseAsyncResult<BreachResult, { id: string; input: UpdateBreachInput }> {
  const { client } = useTuteliqClient();
  const [state, setState] = useState<AsyncState<BreachResult>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (params: { id: string; input: UpdateBreachInput }): Promise<BreachResult> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await client.updateBreachStatus(params.id, params.input);
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
