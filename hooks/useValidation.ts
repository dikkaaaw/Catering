import { useState } from 'react';

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  email?: boolean;
  fullName?: boolean;
}

interface UseValidationReturn {
  value: string;
  error: string;
  isValid: boolean;
  setValue: (value: string) => void;
  setError: (value: string) => void;
  validate: () => boolean;
  clearError: () => void;
}

export const useValidation = (
  initialValue: string = '',
  rules: ValidationRules = {}
): UseValidationReturn => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const validate = (): boolean => {
    setError('');

    // Required Validation
    if (rules.required && !value.trim()) {
      if (rules.email) {
        setError('Email is required!');
      } else if (rules.fullName) {
        setError('Fullname is required!');
      } else {
        setError('Password is required!');
      }
      return false;
    }

    // Email format validation
    if (rules.email && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError('Please enter a valid email address');
        return false;
      }
    }

    // Full name validation
    if (rules.fullName && value.trim() && value.trim().length < 2) {
      setError('Full name must be at least 2 characters');
      return false;
    }

    // Minimum Length Validation
    if (rules.minLength && value.length < rules.minLength) {
      if (rules.email) {
        setError(`Email must be at least ${rules.minLength} characters`);
      } else if (rules.fullName) {
        setError(`Full name must be at least ${rules.minLength} characters`);
      } else {
        setError(`Password must be at least ${rules.minLength} characters`);
      }
      return false;
    }
    return true;
  };

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    if (error) {
      setError('');
    }
  };

  const clearError = () => {
    setError('');
  };

  return {
    value,
    error,
    isValid: !error && value.length > 0,
    setValue: handleValueChange,
    setError,
    validate,
    clearError,
  };
};

export const useEmailValidation = (initialValue: string = '') => {
  return useValidation(initialValue, {
    required: true,
    email: true,
  });
};

export const usePasswordValidation = (initialValue: string = '') => {
  return useValidation(initialValue, {
    required: true,
    minLength: 6,
  });
};

export const useFullNameValidation = (initialValue: string = '') => {
  return useValidation(initialValue, {
    required: true,
    fullName: true,
    minLength: 4,
  });
};
