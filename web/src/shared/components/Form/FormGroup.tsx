import React from 'react';
import { FormGroupProps } from './Form.types';

const FormGroup: React.FC<FormGroupProps> = ({ children, className = '' }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

export default FormGroup;