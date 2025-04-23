import { useAuth as useAuthContext } from '@/core/providers/AuthProvider';

/**
 * Custom hook to access authentication functionality
 * This is a wrapper around the useAuth hook from AuthProvider
 * to keep code more modular and maintainable
 */
export const useAuth = () => {
  return useAuthContext();
};

export default useAuth;