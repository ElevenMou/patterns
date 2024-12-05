import React from "react";
import "./label-input.scss";

interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  error?: string;
}

const LabelInput = ({ label, className, error, ...rest }: LabelInputProps) => {
  return (
    <label
      className={`label-input${className ? ` ${className}` : ""}${
        error ? " label-input--error" : ""
      }`}
    >
      {label && <span className="label-input__label">{label}</span>}
      {rest.type === "textarea" ? (
        <textarea
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className="label-input__input"
        />
      ) : (
        <input {...rest} className="label-input__input" />
      )}
      {error && <span className="label-input__error">{error}</span>}
    </label>
  );
};

export default LabelInput;
