import React from "react";
import { Icon as IconifyIcon } from "@iconify/react";
import { LucidIcon, isValidLucidIcon } from './LuciIcon';
import { isImagePath } from "@/lib/utils";
import { IconWrapperProps } from "@/components/types";


const IconWrapper: React.FC<IconWrapperProps> = ({ icon, className = "", onClick,...props }) => {
   if (isImagePath(icon)) {
      return <img src={icon} alt="icon" className={`w-5 h-5 ${className}`} onClick={onClick} {...props}/>;
   }

   if (isValidLucidIcon(icon)) {
      return <LucidIcon name={icon} className={className} onClick={onClick} {...props}/>;
   }

   return <IconifyIcon icon={icon} className={`w-5 h-5 ${className}`} onClick={onClick} {...props}/>;

};

export default React.memo(IconWrapper);
