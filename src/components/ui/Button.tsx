import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href
}) => {
  const baseStyles = "px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-block text-center";
  const variantStyles = {
    primary: "bg-soft-blue-500 hover:bg-soft-blue-600 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-soft-green-500 hover:bg-soft-green-600 text-white shadow-lg hover:shadow-xl"
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
