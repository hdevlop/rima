// src/components/ColorArrayInput.tsx
"use client";

import React from "react";
import { ColorArrayInputProps } from "@/components/types";
import { cn } from "@/lib/utils";
import BaseInput from "../Box";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SketchPicker } from 'react-color';

const ColorPickerInput: React.FC<ColorArrayInputProps> = ({
  value,
  onChange,
  className = "",
  variant = "default",
  status = "default",
}) => {
  return (
    <BaseInput variant={variant} status={status} className={cn("flex flex-wrap gap-2 p-0", className)} >
      <Popover >
        <PopoverTrigger asChild>
          <div className='flex items-center w-full cursor-pointer gap-2 '>
            <div className='w-9 h-9 rounded-l-md rounded-r-none' style={{ backgroundColor: value }} />
            {value}
          </div>
        </PopoverTrigger>
        <PopoverContent className='bg-none w-full p-0' align="start">
          <SketchPicker
            showAlpha={false}
            color={value}
            onChange={(color) => {
              onChange(color.hex);
            }}
          />
        </PopoverContent>
      </Popover>
    </BaseInput>
  );
};

export default ColorPickerInput;
