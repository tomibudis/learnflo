import React from 'react';

export interface CheckboxProps {
  id: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked = false,
  onChange,
  className = '',
}) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={(e) => onChange?.(e.target.checked)}
    className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ${className}`}
  />
);
