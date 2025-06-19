import * as React from 'react';
import type { LabelHTMLAttributes, ReactNode } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className = '', ...props }, ref) => (
    <label
      ref={ref}
      className={`block text-sm font-medium text-gray-700 mb-2 ${className}`.trim()}
      {...props}
    >
      {children}
    </label>
  ),
);
Label.displayName = 'Label';

export { Label };
