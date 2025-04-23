// src/shared/types/goals.types.ts
export interface Goal {
  id: string;
  userId: string;
  name: string;
  type: 'retirement' | 'education' | 'home' | 'vehicle' | 'vacation' | 'custom';
  customType?: string;
  targetAmount: number;
  currentAmount: number;
  startDate: string;
  targetDate: string;
  priority: 'high' | 'medium' | 'low';
  riskProfile: 'conservative' | 'moderate' | 'aggressive';
  expectedReturnRate: number;
  progressPercentage: number;
  portfolioContributions: GoalPortfolioContribution[];
  projections?: GoalProjection;
  createdAt: string;
  updatedAt: string;
}

export interface GoalPortfolioContribution {
  portfolioId: string;
  portfolioName: string;
  contributionPercentage: number;
  currentValue: number;
}

export interface GoalProjection {
  projectedAmount: number;
  projectedShortfall: number;
  achievementPercentage: number;
  monthlyInvestmentRequired: number;
  scenarios: {
    conservative: GoalScenario;
    expected: GoalScenario;
    optimistic: GoalScenario;
  };
}

export interface GoalScenario {
  returnRate: number;
  projectedAmount: number;
  achievementPercentage: number;
  monthlyInvestmentRequired: number;
}