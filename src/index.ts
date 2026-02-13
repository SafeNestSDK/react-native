/**
 * Tuteliq React Native SDK
 *
 * @packageDocumentation
 */

// Re-export everything from the core SDK
export {
  // Client
  TuteliqClient,
  type TuteliqOptions,

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
  TuteliqError,
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

  // Consent types (GDPR)
  type ConsentType,
  type ConsentStatus,
  type RecordConsentInput,
  type ConsentRecord,
  type ConsentStatusResult,
  type ConsentActionResult,

  // Rectification types (GDPR)
  type RectifyDataInput,
  type RectifyDataResult,

  // Audit log types (GDPR)
  type AuditAction,
  type AuditLogEntry,
  type AuditLogsResult,
  type GetAuditLogsOptions,

  // Utilities
  type Usage,
} from '@tuteliq/sdk';

// React Native specific exports
export { TuteliqProvider, useTuteliqClient } from './context';
export type { TuteliqProviderProps, TuteliqContextValue } from './context';

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
  useRecordConsent,
  useGetConsentStatus,
  useWithdrawConsent,
  useRectifyData,
  useGetAuditLogs,
} from './hooks';
export type { AsyncState, UseAsyncResult } from './hooks';
