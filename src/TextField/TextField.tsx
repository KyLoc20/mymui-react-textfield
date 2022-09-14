import React, { PropsWithChildren, useState, ChangeEvent } from "react";
import { throttle } from "lodash";

export default function TextField(props: PropsWithChildren<TextFieldProps>) {
  const { onChange, placeholder, defaultValue, throttleTimeout, renderIcon: RenderIcon } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = throttle((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }, throttleTimeout ?? 0);

  return (
    <label
      className="mymui-textfield"
      style={{
        maxWidth: "384px",
        padding: "8px 12px",
        background: "#fff",
        border: `1px solid ${isFocused ? "#0190c8" : "#aebdcb"}`,
        color: "#8299ae",
        borderRadius: "16px",
        boxShadow: isFocused ? "0 0 0 1px #0190c8" : "",
        display: "flex",
        alignItems: "center",
      }}
    >
      {RenderIcon && (
        <div style={{ display: "flex", alignItems: "center", marginRight: "8px" }}>
          <RenderIcon />
        </div>
      )}
      <input
        onInvalid={(e) => e.preventDefault()}
        placeholder={placeholder ?? ""}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        defaultValue={defaultValue}
        style={{
          width: "100%",
          lineHeight: "20px",
          fontSize: "14px",
          fontWeight: 400,
        }}
      />
      <style>{STYLES}</style>
    </label>
  );
}
type TextFieldProps = {
  onChange?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  throttleTimeout?: number;
  renderIcon?: React.FC;
};
const STYLES = `
*:focus {
  outline: none;
}

input {
  border: none;
  padding: 0;
  background-color: transparent;
}`;
