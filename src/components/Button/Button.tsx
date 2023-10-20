import classNames from 'classnames';
import { ReactNode } from 'react';

export enum ButtonTypes {
  Primary = 'primary',
  HasIcon = 'has-icon',
}

interface ButtonProps {
  icon?: ReactNode;
  onClick?: () => void;
  text?: string;
  variant?: ButtonTypes;
  width?: string;
}

const Button = ({
  icon,
  onClick,
  text,
  variant,
  width = 'w-full',
}: ButtonProps): JSX.Element => {
  const btnClass = classNames(
    'rounded-lg flex align-center gap-3 px-[1rem] py-[.75rem] border-dark-orange font-semibold text-white text-center',
    {
      'bg-transparent focus-within:border': variant === ButtonTypes.HasIcon,
      'bg-dark-orange': variant === ButtonTypes.Primary,
      [width]: true,
    },
  );

  return (
    <button type='button' onClick={onClick} className={btnClass}>
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  variant: ButtonTypes.Primary,
  width: 'w-full',
  icon: null,
  text: 'button',
};

export default Button;
