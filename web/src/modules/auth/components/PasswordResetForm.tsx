// src/modules/auth/components/PasswordResetForm.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, FormInput, Button, Alert } from '@/shared/components';
import { useAuth } from '@/core/hooks/useAuth';
import { isValidEmail } from '@/core/utils/validation.utils';

const PasswordResetForm: React.FC = () => {
  const { resetPassword, error, clearErrors } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const validateForm = (): boolean => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }

    setEmailError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await resetPassword(email);
      setResetSent(true);
    } catch (err) {
      // Error is handled by the auth provider
      console.error('Password reset error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (resetSent) {
    return (
      <div className="space-y-6">
        <Alert type="success" title="Reset Email Sent">
          We've sent a password reset link to <strong>{email}</strong>. Please check your email inbox and follow the instructions to reset your password.
        </Alert>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Return to{' '}
            <Link to="/login" className="font-medium text-primary hover:text-primary-dark">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert
          type="error"
          title="Password Reset Error"
          onClose={clearErrors}
        >
          {error}
        </Alert>
      )}

      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Reset Your Password</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
            error={emailError}
          />
        </FormGroup>

        <div>
          <Button
            type="submit"
            variant="primary"
            isLoading={isLoading}
            fullWidth
          >
            Send Reset Link
          </Button>
        </div>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Remember your password?{' '}
          <Link to="/login" className="font-medium text-primary hover:text-primary-dark">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PasswordResetForm;