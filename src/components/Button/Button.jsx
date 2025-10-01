import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  startIcon,
  endIcon,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold focus:outline-none transition duration-200";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

export default Button;
