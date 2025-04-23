// src/shared/types/portfolio.types.ts
export interface Portfolio {
  id: string;
  userId: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  totalInvestment: number;
  currentValue: number;
  returns: {
    absolute: number;
    percentage: number;
    annualized?: number;
    xirr?: number;
  };
  rebalanceThreshold: number;
  funds: PortfolioFund[];
  isShared: boolean;
  sharingDetails?: PortfolioSharing[];
}

export interface PortfolioFund {
  id: string;
  fundId: string;
  schemeCode: string;
  schemeName: string;
  units: number;
  avgBuyPrice: number;
  currentNav: number;
  investmentAmount: number;
  currentValue: number;
  profit: number;
  returns: number;
  targetAllocation: number;
  currentAllocation: number;
  deviation: number;
}

export interface PortfolioSharing {
  id: string;
  portfolioId: string;
  sharedWithUserId: string;
  sharedWithEmail: string;
  sharedByUserId: string;
  permissionType: 'READ' | 'EDIT';
  sharedAt: string;
}

export interface PortfolioFilters {
  includeShared?: boolean;
  sortBy?: 'name' | 'value' | 'returns' | 'created';
  sortDirection?: 'asc' | 'desc';
}