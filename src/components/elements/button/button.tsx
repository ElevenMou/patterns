import React from "react";
import "./button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "cancel" | "success" | "error" | undefined;
  size?: "small" | "medium" | "large";
}

function Button({ children, variant, size, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`btn
        ${variant ? ` btn-${variant}` : ""}
        ${size ? ` btn-${size}` : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
