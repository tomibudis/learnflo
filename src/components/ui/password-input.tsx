import React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showPassword?: boolean;
  onToggleShowPassword?: () => void;
}

export function PasswordInput({
  showPassword: showPasswordProp,
  onToggleShowPassword,
  className = '',
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const isControlled = showPasswordProp !== undefined && onToggleShowPassword !== undefined;
  const actualShowPassword = isControlled ? showPasswordProp : showPassword;
  const handleToggle = () => {
    if (isControlled) {
      if (onToggleShowPassword) onToggleShowPassword();
    } else {
      setShowPassword((prev) => !prev);
    }
  };

  return (
    <div className="relative">
      <Input
        type={actualShowPassword ? 'text' : 'password'}
        className={`pr-10 ${className}`}
        {...props}
        value={
          props.value === undefined || typeof props.value === 'string'
            ? props.value
            : String(props.value)
        }
      />
      <button
        type="button"
        className="absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center"
        onClick={handleToggle}
        aria-label={actualShowPassword ? 'Hide password' : 'Show password'}
        tabIndex={-1}
      >
        {actualShowPassword ? (
          <EyeOff className="h-4 w-4 text-gray-400" />
        ) : (
          <Eye className="h-4 w-4 text-gray-400" />
        )}
      </button>
    </div>
  );
}
