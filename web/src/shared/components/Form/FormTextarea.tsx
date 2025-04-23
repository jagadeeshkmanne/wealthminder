import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { FormTextareaProps } from './Form.types';
import FormLabel from './FormLabel';

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(({
  label,
  error,
  fullWidth = true,
  id,
  required,
  className,
  ...rest
}, ref) => {
  const textareaClasses = classNames(
    'block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm',
    fullWidth ? 'w-full' : '',
    error
      ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 dark:bg-gray-800 placeholder-gray-400',
    className
  );

  return (
    <>
      {label && <FormLabel htmlFor={id} required={required}>{label}</FormLabel>}

      <textarea
        ref={ref}
        id={id}
        required={required}
        className={textareaClasses}
        {...rest}
      />

      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </>
  );
});

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;