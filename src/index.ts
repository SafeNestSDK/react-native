/**
 * SafeNest React Native SDK
 *
 * @packageDocumentation
 */

// Re-export everything from the core SDK
export {
  // Client
  SafeNestClient,
  type SafeNestOptions,

  // Input types
  type DetectBullyingInput,
  type DetectGroomingInput,
  type DetectUnsafeInput,
  type AnalyzeInput,
  type AnalyzeEmotionsInput,
  type GetActionPlanInput,
  type GenerateReportInput,

  // Result types
  type BullyingResult,
  type GroomingResult,
  type UnsafeResult,
  type AnalyzeResult,
  type EmotionsResult,
  type ActionPlanResult,
  type ReportResult,

  // Message types
  type GroomingMessage,
  type EmotionMessage,
  type ReportMessage,

  // Context type
  type ContextInput,

  // Enums
  Severity,
  GroomingRisk,
  RiskLevel,
  EmotionTrend,

  // Audience type
  type Audience,

  // Errors
  SafeNestError,
  AuthenticationError,
  RateLimitError,
  ValidationError,
  NotFoundError,
  ServerError,
  TimeoutError,
  NetworkError,

  // Account types (GDPR)
  type AccountDeletionResult,
  type AccountExportResult,

  // Utilities
  type Usage,
} from '@safenest/sdk';

// React Native specific exports
export { SafeNestProvider, useSafeNestClient } from './context';
export type { SafeNestProviderProps, SafeNestContextValue } from './context';

export {
  useDetectBullying,
  useDetectGrooming,
  useDetectUnsafe,
  useAnalyze,
  useAnalyzeEmotions,
  useGetActionPlan,
  useGenerateReport,
  useDeleteAccountData,
  useExportAccountData,
} from './hooks';
export type { AsyncState, UseAsyncResult } from './hooks';
