import React, { PropsWithChildren, useState, ChangeEvent } from "react";

type TextFieldProps = {
  onChange?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
};

export default function TextField(props: PropsWithChildren<TextFieldProps>) {
  const { onChange, placeholder, defaultValue } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <label className="mymui-textfield">
      <input
        placeholder={placeholder ?? ""}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        defaultValue={defaultValue}
      />
    </label>
  );
}
