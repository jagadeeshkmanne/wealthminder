// src/shared/types/performance.types.ts
export interface PerformanceMetrics {
  portfolioId: string;
  portfolioName: string;
  startValue: number;
  endValue: number;
  investmentValue: number;
  absoluteReturn: number;
  absoluteReturnPercentage: number;
  annualizedReturn: number;
  xirr: number;
  volatility?: number;
  sharpeRatio?: number;
  maxDrawdown?: number;
  timePeriod: TimePeriod;
  startDate: string;
  endDate: string;
}

export interface PerformanceDataPoint {
  date: string;
  value: number;
  investment?: number;
  returns?: number;
  returnsPercentage?: number;
}

export interface PortfolioPerformance {
  portfolioId: string;
  portfolioName: string;
  metrics: PerformanceMetrics;
  dataPoints: PerformanceDataPoint[];
}

export interface PerformanceComparison {
  timeRange: DateRange;
  portfolios: {
    id: string;
    name: string;
    returns: number;
    dataPoints: PerformanceDataPoint[];
  }[];
  benchmarks?: {
    id: string;
    name: string;
    returns: number;
    dataPoints: PerformanceDataPoint[];
  }[];
}