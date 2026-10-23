import { Exception, apiErrorKindOf, exceptionOfApiErrorKind, type ApiErrorKind } from '@/legacy/os/os-exceptions';

/* The error of a failed server call for the data layer (plan v2 P5-1): a kind that code can switch on, and the
   OutSystems exception as `cause`. callAction still raises the OutSystems exception itself, so the ported Handle Error
   flows keep their class tests; code that wants the kind wraps the exception with asApiError. The kinds and their
   exceptions are mapped in legacy/os/os-exceptions.ts, in both directions. */

export type { ApiErrorKind };

export class ApiError extends Error {
  /** What went wrong: timeout, network, server, security or viewChanged. */
  readonly kind: ApiErrorKind;
  /** The OutSystems exception of the failure. */
  declare readonly cause: Exception;

  /** The ApiError of an OutSystems exception; the kind follows from the exception. */
  constructor(cause: Exception) {
    super(cause.message, { cause });
    this.name = 'ApiError';
    this.kind = apiErrorKindOf(cause);
  }

  /** The ApiError of a kind, for a failure that comes without an OutSystems exception; the cause is the exception of
      the kind (exceptionOfApiErrorKind). */
  static ofKind(kind: ApiErrorKind, message = '', specificType = ''): ApiError {
    return new ApiError(exceptionOfApiErrorKind(kind, message, specificType));
  }
}

/** The ApiError of a thrown value: an ApiError as it is, an OutSystems exception wrapped, anything else null (an error
    that is not a call failure, for example a bug in a mapper). */
export function asApiError(error: unknown): ApiError | null {
  if (error instanceof ApiError) return error;
  return error instanceof Exception ? new ApiError(error) : null;
}
