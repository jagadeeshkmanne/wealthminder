import { ReactNode } from 'react';

export interface Column<T> {
  header: string;
  accessor: keyof T | ((data: T) => any);
  cell?: (data: T) => ReactNode;
  sortable?: boolean;
  width?: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  isLoading?: boolean;
  noDataMessage?: string;
  onRowClick?: (data: T) => void;
  keyExtractor?: (data: T) => string;
  pagination?: {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (page: number) => void;
  };
  sorting?: {
    sortColumn: keyof T | null;
    sortDirection: 'asc' | 'desc';
    onSort: (column: keyof T) => void;
  };
}