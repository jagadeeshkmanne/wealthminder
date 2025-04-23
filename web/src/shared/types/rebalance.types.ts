// src/shared/types/rebalance.types.ts
export interface RebalanceStatus {
  portfolioId: string;
  portfolioName: string;
  lastRebalanced: string | null;
  currentDeviation: number;
  rebalanceThreshold: number;
  requiresRebalance: boolean;
}

export interface FundRebalanceRecommendation {
  fundId: string;
  fundName: string;
  schemeCode: string;
  currentUnits: number;
  currentValue: number;
  currentAllocation: number;
  targetAllocation: number;
  deviationPercentage: number;
  recommendedAction: 'BUY' | 'SELL' | 'NONE';
  recommendedUnits: number;
  estimatedAmount: number;
}

export interface PortfolioRebalanceRecommendation {
  portfolioId: string;
  portfolioName: string;
  date: string;
  currentValue: number;
  fundRecommendations: FundRebalanceRecommendation[];
  totalBuyAmount: number;
  totalSellAmount: number;
  estimatedFees: number;
  status: 'pending' | 'executed' | 'cancelled';
  executionDate?: string;
}

export interface RebalanceHistory {
  id: string;
  portfolioId: string;
  portfolioName: string;
  rebalanceDate: string;
  preRebalanceValue: number;
  postRebalanceValue: number;
  status: 'completed' | 'partial' | 'failed';
  actions: RebalanceAction[];
}

export interface RebalanceAction {
  fundId: string;
  fundName: string;
  action: 'BUY' | 'SELL';
  units: number;
  amount: number;
  nav: number;
  status: 'completed' | 'failed';
  transactionId?: string;
}