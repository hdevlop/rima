import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getFileNameFromPath = (path) => {
  return path ? path.split('\\').pop().split('/').pop() : '';
};

export const truncateFilename = (filename, maxLength = 12) => {
  if (filename.length <= maxLength) return filename;

  const extIndex = filename.lastIndexOf('.');
  const ext = extIndex !== -1 ? filename.slice(extIndex) : '';
  const name = extIndex !== -1 ? filename.slice(0, extIndex) : filename;
  const truncatedNameLength = maxLength - ext.length - 3;

  if (truncatedNameLength <= 0) {
    return `${filename.slice(0, maxLength - 3)}...`;
  }

  let truncatedName = name.slice(0, truncatedNameLength);
  while (truncatedName.length > 0 && ['-', '_', ' '].includes(truncatedName.slice(-1))) {
    truncatedName = truncatedName.slice(0, -1);
  }

  return `${truncatedName}...${ext}`;
};

export const kebabToPascal = (str: string) =>
  str.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');


const fileExtensions = /\.(png|jpe?g|gif|svg|webp|ico|bmp|tiff|avif)$/i;
const urlPattern = /^(https?:\/\/|data:image\/)/i;
const pathPattern = /^(\/|\.\/|\.\.\/|@\/)/;

export const isPath = (value: string): boolean => {
  return pathPattern.test(value);
};

export const isImagePath = (value: string): boolean => {
  return (
    fileExtensions.test(value) ||
    (urlPattern.test(value) && fileExtensions.test(value))
  );
};