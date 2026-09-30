import React from "react";

export default function InputField({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  isInvalid = false,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`
        w-full max-w-[320px] h-12 px-4 py-3 rounded-lg bg-bg-primary font-body text-body-regular
        border outline-none transition-colors duration-200
        ${
          isInvalid
            ? "border-primary-700 focus:border-primary-900"
            : "border-border focus:border-primary-500"
        }
        ${disabled ? "opacity-50 cursor-not-allowed bg-bg-secondary" : ""}
      `}
    />
  );
}
