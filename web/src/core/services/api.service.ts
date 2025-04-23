import axios from 'axios';

// API base URL (you might want to put this in an environment variable)
const API_BASE_URL = 'https://us-central1-wealthminder.cloudfunctions.net';

// Create instance of axios with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interface for fund data
export interface Fund {
  id: string;
  schemeCode: string;
  schemeName: string;
  navValue: number;
  navDate: string;
  lastUpdated: string;
}

// Interface for NAV history
export interface NAVHistory {
  id: string;
  schemeCode: string;
  navValue: number;
  navDate: string;
  recordedAt: string;
}

// Interface for API response
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// API service class
class ApiService {
  // Get all mutual funds with pagination
  async getFunds(limit = 50, startAfter?: string): Promise<{ funds: Fund[], lastId: string | null }> {
    try {
      const params: any = { limit };
      if (startAfter) {
        params.startAfter = startAfter;
      }

      const response = await apiClient.get('/getFunds', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching funds:', error);
      throw error;
    }
  }

  // Search funds by name
  async searchFunds(query: string, limit = 20): Promise<{ funds: Fund[] }> {
    try {
      const response = await apiClient.get('/searchFunds', {
        params: { q: query, limit }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching funds:', error);
      throw error;
    }
  }

  // Get a specific fund by scheme code
  async getFundByCode(schemeCode: string): Promise<{ fund: Fund }> {
    try {
      const response = await apiClient.get('/getFundByCode', {
        params: { schemeCode }
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching fund with code ${schemeCode}:`, error);
      throw error;
    }
  }

  // Get NAV history for a fund
  async getNavHistory(schemeCode: string): Promise<{ history: NAVHistory[] }> {
    try {
      const response = await apiClient.get('/getNavHistory', {
        params: { schemeCode }
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching NAV history for fund ${schemeCode}:`, error);
      throw error;
    }
  }

  // Get funds by category or AMC
  async getFundsByCategory(category?: string, amc?: string, limit = 50): Promise<{ funds: Fund[] }> {
    try {
      const params: any = { limit };
      if (category) params.category = category;
      if (amc) params.amc = amc;

      const response = await apiClient.get('/getFundsByCategory', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching funds by category:', error);
      throw error;
    }
  }

  // Get AMFI sync status
  async getAmfiSyncStatus(): Promise<{ status: { lastSync: string, status: string } }> {
    try {
      const response = await apiClient.get('/getAmfiSyncStatus');
      return response.data;
    } catch (error) {
      console.error('Error fetching AMFI sync status:', error);
      throw error;
    }
  }
}

export default new ApiService();