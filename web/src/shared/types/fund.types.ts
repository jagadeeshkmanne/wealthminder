// src/shared/types/fund.types.ts
export interface Fund {
  id: string;
  schemeCode: string;
  schemeName: string;
  fundHouse: string;
  category: string;
  type: string;
  planType: 'Direct' | 'Regular';
  currentNav: number;
  navDate: string;
  aum?: number;
  expenseRatio?: number;
  riskRating?: 'Low' | 'Moderate' | 'High';
  returns?: {
    oneYear?: number;
    threeYear?: number;
    fiveYear?: number;
    tenYear?: number;
    sinceInception?: number;
  };
  metadata?: {
    launchDate?: string;
    managers?: string[];
    benchmark?: string;
    exitLoad?: string;
    minimumInvestment?: number;
  };
}

export interface NavHistory {
  date: string;
  nav: number;
}

export interface FundSearch {
  keyword?: string;
  category?: string[];
  fundHouse?: string[];
  planType?: ('Direct' | 'Regular')[];
  riskRating?: ('Low' | 'Moderate' | 'High')[];
  minExpenseRatio?: number;
  maxExpenseRatio?: number;
}