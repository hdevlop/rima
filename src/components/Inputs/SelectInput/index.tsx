// src/components/SelectInput.tsx
"use client";

import React from "react";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/Icon";
import { SelectInputProps } from "@/components/types";
import RenderSelectItems from "./RenderSelectItems";
import BaseInput from "../Box";
import { cn } from "@/lib/utils";

const SelectInput: React.FC<SelectInputProps> = ({
    placeholder = "",
    value,
    onChange,
    icon,
    showIcon = true,
    items,
    className = "",
    variant = "default",
    status = "default",
}) => {
    const shouldDisplayIcon = Boolean(icon) && showIcon && !value;

    return (
        <BaseInput variant={variant} status={status} className={cn('h-9 gap-2', className)}>
            {shouldDisplayIcon && (
                <Icon icon={icon} className=" h-4 w-4 text-muted-foreground " />
            )}
            <Select onValueChange={onChange} defaultValue={value}>
                <SelectTrigger className="text-muted-foreground gap-2 border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 p-0">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent className="max-h-[300px] w-full overflow-y-auto flex justify-center items-center">
                    <RenderSelectItems items={items} />
                </SelectContent>
            </Select>
        </BaseInput>
    );
};

export default SelectInput;
