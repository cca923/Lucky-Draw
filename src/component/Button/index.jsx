import React from "react";

const Button = ({
  className,
  children,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
