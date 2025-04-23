import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { FormCheckboxProps } from './Form.types';

const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(({
  label,
  error,
  id,
  className,
  ...rest
}, ref) => {
  const checkboxClasses = classNames(
    'h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 rounded',
    className
  );

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={checkboxClasses}
          {...rest}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>

        {error && (
          <p className="text-red-600 dark:text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
});

FormCheckbox.displayName = 'FormCheckbox';

export default FormCheckbox;