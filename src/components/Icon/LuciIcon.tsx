import { kebabToPascal } from '@/lib/utils';
import { type LucideProps, icons } from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
  fill?: string;
}

export function isValidLucidIcon(componentName) {
  return kebabToPascal(componentName) in icons;
}

export function LucidIcon({ name, ...props }: IconProps) {
  const componentName = kebabToPascal(name);
  const Icon = icons[componentName];
  return <Icon {...props} />;
}