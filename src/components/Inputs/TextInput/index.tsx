"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import Icon from "@/components/Icon";
import { TextInputProps } from "@/components/types";
import BaseInput from "../Box";
import { cn } from "@/lib/utils";


const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder = "",
  icon,
  showIcon = true,
  className = "",
  variant = 'default',
  status = 'default',
  ...props
}) => {
  const shouldDisplayIcon = Boolean(icon) && showIcon;

  return (
    <BaseInput variant={variant} status={status} className={cn('h-9 gap-2', className)}>

      {shouldDisplayIcon && (
        <Icon icon={icon} className=" h-4 w-4 text-muted-foreground" />
      )}
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        className='border-0 border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 p-0 '
        {...props}
      />

    </BaseInput>
  );
};

export default TextInput;
