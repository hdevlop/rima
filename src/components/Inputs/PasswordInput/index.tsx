// src/components/PasswordInput.tsx
"use client";

import { FC, useState } from "react";
import { Input } from "@/components/ui/input";
import Icon from "@/components/Icon";
import { PasswordInputProps } from "@/components/types";
import BaseInput from "../Box";
import { cn } from "@/lib/utils";

const PasswordInput: FC<PasswordInputProps> = ({
    value,
    onChange,
    placeholder = "",
    showIcon = true,
    icon,
    className = "",
    variant = "default",
    status = "default",
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
        setShowPassword(!showPassword);
    };

    const shouldDisplayIcon = Boolean(icon) && showIcon;

    return (
        <BaseInput variant={variant} status={status} className={cn('h-9 gap-2',className)}>
            
            {shouldDisplayIcon && (
                <Icon icon={icon} className=" h-4 w-4 text-muted-foreground " />
            )}

            <Input
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={(ev) => onChange(ev.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 p-0"
                {...props}
            />

            <Icon
                icon={showPassword ? "eye" : "eye-closed"}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer"
                onClick={toggleVisibility}
            />
        </BaseInput>
    );
};

export default PasswordInput;
