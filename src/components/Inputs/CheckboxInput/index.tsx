"use client";

import React from "react";
import { CheckboxInputProps } from "@/components/types";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import BaseInput from "../Box";
import { cn } from "@/lib/utils";


const CheckboxForm: React.FC<CheckboxInputProps> = ({
  value,
  onChange,
  helper,
  label,
  className,
  variant = 'default',
  status = 'default',
}) => { 

  return (
    <BaseInput variant={variant} status={status} className={cn('gap-2 items-start',className)}>
      <Checkbox checked={value} onCheckedChange={onChange} />
      <div className="flex flex-col gap-1">
        <Label>{label}</Label>
        <Label className="text-xs text-muted-foreground">{helper}</Label>
      </div>
    </BaseInput>

  );
};

export default CheckboxForm;
