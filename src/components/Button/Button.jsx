import React from "react";

const ButtonCustom = ({
  children,
  variant = "primary",
  size = "md",
  startIcon,
  endIcon,
  className,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold focus:outline-none transition duration-200 focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-md",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    outline:
      "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={[baseStyles, variants[variant], sizes[size], className].filter(Boolean).join(" ")}
      {...props}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

export default ButtonCustom;
