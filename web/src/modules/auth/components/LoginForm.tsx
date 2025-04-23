// src/modules/auth/components/LoginForm.tsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FormGroup, FormInput, Button, Alert } from '@/shared/components';
import { useAuth } from '@/core/hooks/useAuth';
import { LoginCredentials } from '@/shared/types';

const LoginForm: React.FC = () => {
  const { signIn, signInWithGoogle, error, clearErrors } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect path from location state or default to dashboard
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();
    setIsLoading(true);

    try {
      await signIn(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      // Error is handled by the auth provider
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    clearErrors();
    setIsLoading(true);

    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      console.error('Google login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <Alert
          type="error"
          title="Authentication Error"
          onClose={clearErrors}
        >
          {error}
        </Alert>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <FormGroup>
          <FormInput
            id="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </FormGroup>

        <FormGroup>
          <FormInput
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </FormGroup>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link to="/reset-password" className="text-primary hover:text-primary-dark">
              Forgot your password?
            </Link>
          </div>
        </div>

        <div>
          <Button
            type="submit"
            variant="primary"
            isLoading={isLoading}
            fullWidth
          >
            Sign In
          </Button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            Or continue with
          </span>
        </div>
      </div>

      <div>
        <Button
          type="button"
          variant="outline"
          fullWidth
          onClick={handleGoogleLogin}
          disabled={isLoading}
          leftIcon={
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
          }
        >
          Sign in with Google
        </Button>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-primary hover:text-primary-dark">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;