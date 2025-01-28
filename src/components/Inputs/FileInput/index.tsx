"use client";

import React, { useRef } from "react";
import { Label } from "@/components/ui/label";
import { cn, getFileNameFromPath, truncateFilename } from "@/lib/utils";
import { FileInputProps } from "@/components/types";
import BaseInput from "../Box";
import Icon from "@/components/Icon";

const FileInput: React.FC<FileInputProps> = ({
    value,
    onChange,
    placeholder = "No file chosen",
    icon='file-up',
    showIcon = true,
    className = "",
    variant = 'default',
    status = 'default',
}) => {
    const fileInputRef = useRef(null);

    const handleDivClick = () => {
        fileInputRef.current?.click();
    };

    const handleChange = (e) => {
        const file = e.target.files?.[0] || null;
        onChange(file);
    };

    const displayFilename = (file) => {
        if (!file) return null;
        const filename = typeof file === "string" ? getFileNameFromPath(file) : file.name;
        return truncateFilename(filename, 25);
    };

    const shouldDisplayIcon = Boolean(icon) && showIcon;

    return (
        <BaseInput variant={variant} status={status} className={cn("flex h-9 px-0", className)} onClick={handleDivClick}>

            <input type="file" ref={fileInputRef} onChange={handleChange} className="hidden " />

            <div className="bg-muted flex h-full items-center px-3">
                {shouldDisplayIcon && (
                    <Icon icon={icon} className=" h-4 w-4 " />
                )}
                <Label className="flex cursor-pointer h-full justify-center items-center px-2">Choose File</Label>
            </div>

            <Label className="ml-2 flex-1">
                {displayFilename(value) || <span className="text-muted-foreground">{placeholder}</span>}
            </Label>

        </BaseInput>
    );
};

export default FileInput;
