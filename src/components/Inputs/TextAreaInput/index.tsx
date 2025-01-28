// src/components/TextAreaInput.tsx
"use client";

import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { TextAreaInputProps } from "@/components/types";
import BaseInput from "../Box";

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  value,
  onChange,
  placeholder = "",
  className = "",
  variant = "default",
  status = "default",
  ...props
}) => {
  return (
    <BaseInput variant={variant} status={status} className={className} >
      <Textarea
        placeholder={placeholder}
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        className="border-none focus-visible:ring-0 focus-visible:ring-transparent p-0 focus-visible:ring-offset-0"
        {...props}
      />
    </BaseInput>
  );
};

export default TextAreaInput;
