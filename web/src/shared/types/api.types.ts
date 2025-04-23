// src/shared/types/api.types.ts
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface ApiError {
  statusCode: number;
  message: string;
  errors?: Record<string, string[]>;
  timestamp?: string;
  path?: string;
  requestId?: string;
}

export interface ApiRequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean | undefined>;
  timeout?: number;
  withCredentials?: boolean;
  responseType?: 'json' | 'blob' | 'text' | 'arraybuffer';
}

export interface ApiFile {
  name: string;
  url: string;
  size: number;
  type: string;
  lastModified?: Date;
}

export interface SearchParams {
  query?: string;
  filters?: Record<string, any>;
  sort?: string;
  sortDirection?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
}