import * as React from 'react';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Button.module.scss';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: string;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={classes.root} {...props}>
      <FontAwesomeIcon icon={faCalendarAlt} className={classes.icon} />

      <span>{children}</span>
    </button>
  );
};
