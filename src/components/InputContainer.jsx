import React from "react";

export default function InputContainer({
  label,
  type,
  name,
  value,
  defaultValue,
  onChange,
  required,
  placeholder,
  step,
  min,
  className,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && "*"}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        step={step}
        min={min}
        className={`form-input ${className || ""}`}
      />
    </div>
  );
}
