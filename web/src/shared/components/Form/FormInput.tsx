import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { FormInputProps } from './Form.types';
import FormLabel from './FormLabel';

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
  label,
  error,
  fullWidth = true,
  leftIcon,
  rightIcon,
  id,
  required,
  className,
  ...rest
}, ref) => {
  const inputContainerClasses = classNames(
    'relative rounded-md',
    fullWidth ? 'w-full' : '',
    leftIcon ? 'pl-10' : '',
    rightIcon ? 'pr-10' : ''
  );

  const inputClasses = classNames(
    'block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm',
    error
      ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 dark:bg-gray-800 placeholder-gray-400',
    className
  );

  return (
    <>
      {label && <FormLabel htmlFor={id} required={required}>{label}</FormLabel>}

      <div className={inputContainerClasses}>
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          id={id}
          required={required}
          className={inputClasses}
          {...rest}
        />

        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {rightIcon}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </>
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;