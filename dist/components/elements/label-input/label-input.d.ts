import React from "react";
import "./label-input.scss";
interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    error?: string;
}
declare const LabelInput: ({ label, className, error, ...rest }: LabelInputProps) => JSX.Element;
export default LabelInput;
