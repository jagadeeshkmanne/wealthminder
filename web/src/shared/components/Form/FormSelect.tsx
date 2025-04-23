// src/shared/components/Form/FormSelect.tsx
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { FormSelectProps } from './Form.types';
import FormLabel from './FormLabel';

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(({
  label,
  options,
  error,
  fullWidth = true,
  id,
  required,
  className,
  ...rest
}, ref) => {
  const selectClasses = classNames(
    'block px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm',
    fullWidth ? 'w-full' : '',
    error
      ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 dark:bg-gray-800',
    className
  );

  return (
    <>
      {label && <FormLabel htmlFor={id} required={required}>{label}</FormLabel>}

      <select
        ref={ref}
        id={id}
        required={required}
        className={selectClasses}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </>
  );
});

FormSelect.displayName = 'FormSelect';

export default FormSelect;