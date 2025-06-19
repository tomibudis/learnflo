import * as React from 'react';

interface FieldErrorMessageProps {
  message?: string;
}

export const FieldErrorMessage: React.FC<FieldErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return (
    <p className="text-xs text-red-600 mt-1" role="alert">
      {message}
    </p>
  );
};
