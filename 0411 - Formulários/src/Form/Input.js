import React from "react";

const Input = ({
  id,
  label,
  setValue,
  onChange,
  type = "text",
  value,
  onBlur,
  placeholder,
  error,
  maxLength,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
        maxLength={maxLength}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
