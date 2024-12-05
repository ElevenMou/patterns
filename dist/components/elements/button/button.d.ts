import React from "react";
import "./button.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "cancel" | "success" | "error" | undefined;
    size?: "small" | "medium" | "large";
}
declare function Button({ children, variant, size, ...rest }: ButtonProps): JSX.Element;
export default Button;
