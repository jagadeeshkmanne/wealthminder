// src/shared/types/auth.types.ts
export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  role: UserRole;
  createdAt: string;
  lastLogin: string;
  preferences?: UserPreferences;
  isActive?: boolean;
  metadata?: UserMetadata;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  currency: string;
  language: string;
  timezone: string;
  emailNotifications: boolean;
  pushNotifications?: boolean;
  notificationTypes?: {
    rebalanceAlerts: boolean;
    goalMilestones: boolean;
    portfolioSharing: boolean;
    performanceReports: boolean;
    systemAnnouncements: boolean;
  };
  dashboardLayout?: string[];
}

export interface UserMetadata {
  creationTime: string;
  lastSignInTime: string;
  lastPasswordChange?: string;
  accountType?: 'email' | 'google' | 'facebook' | 'apple';
  deviceInfo?: {
    lastDevice?: string;
    lastOS?: string;
    lastBrowser?: string;
    lastIP?: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface ResetPasswordCredentials {
  email: string;
}

export interface UpdatePasswordCredentials {
  currentPassword: string;
  newPassword: string;
}

export interface UpdateProfileCredentials {
  displayName?: string;
  photoURL?: string;
  phoneNumber?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updatePassword: (credentials: UpdatePasswordCredentials) => Promise<void>;
  updateProfile: (credentials: UpdateProfileCredentials) => Promise<void>;
  updatePreferences: (preferences: Partial<UserPreferences>) => Promise<void>;
}

export interface TokenPayload {
  sub: string;
  email: string;
  role: UserRole;
  iat: number;
  exp: number;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}