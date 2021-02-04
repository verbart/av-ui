import * as React from 'react';

export type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: string;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button {...props}>
      <span>{children}</span>
    </button>
  );
};
