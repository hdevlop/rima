
interface BaseProps {
  className?: string;
  variant?: "default" | "rounded" | "ghost"; 
  status?: "default" | "error";
}

export interface SelectItemType {
  value: string;
  label: string;
  icon?: string;
}

export interface PasswordInputProps extends BaseProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: string;
  showIcon?: boolean;
}

export interface NumberInputProps extends BaseProps {
  value: string | number;
  onChange: (value: number) => void;
  placeholder?: string;
  icon?: string;
  showIcon?: boolean;
}

export interface TextInputProps extends BaseProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: string;
  showIcon?: boolean;
}

export interface TextAreaInputProps extends BaseProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface SelectInputProps extends BaseProps {
  value: string;
  onChange: (value: string) => void;
  items: (string | SelectItemType)[];
  placeholder?: string;
  icon?: string;
  showIcon?: boolean;
}

export interface RadioGroupInputProps extends BaseProps {
  value: string;
  onChange: (value: string) => void;
  items: (string | SelectItemType)[];
  layout?: "row" | "column";
}

export interface SwitchInputProps extends BaseProps {
  value: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  helper?: string;
}

export interface CheckboxGroupInputProps extends BaseProps {
  value: string[];
  onChange: (newValue: string[]) => void;
  items: (string | SelectItemType)[];
  layout?: "row" | "column";
}

export interface CheckboxInputProps extends BaseProps {
  value: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  helper?: string;
}

export interface FileInputProps extends BaseProps {
  value: File | string | null;
  onChange: (file: File | null) => void;
  placeholder?: string;
  icon?: string;
  showIcon?: boolean;
}

export interface PhoneInputProps extends BaseProps {
  value: string;
  onChange: (file: string) => void;
}

export interface DateInputProps extends BaseProps {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  placeholder?: string;
  icon?: string;
  showIcon?: boolean;
}

export interface StarRatingInputProps extends BaseProps {
  value: number;
  onChange: (starNumber: number | undefined) => void;
  maxStars: number;
}

export interface EmojiInputProps extends BaseProps {
  value: number;
  onChange: (starNumber: number) => void;
}

export interface ColorArrayInputProps extends BaseProps{
  value: string;
  onChange: (color: string) => void;
  colors?: string[]; 
}

export interface IconWrapperProps {
  icon: string;
  className?: string;
  onClick?: () => void;
  fill?: string;
  stroke?: string;
}

interface BaseFormInputProps {
  control: any;
  name: string;
  formLabel?: string;
  formDescription?: string;
}

type InputTypeMap = {
  password: Omit<PasswordInputProps, 'value' | 'onChange'>;
  number: Omit<NumberInputProps, 'value' | 'onChange'>;
  text: Omit<TextInputProps, 'value' | 'onChange'>;
  textarea: Omit<TextAreaInputProps, 'value' | 'onChange'>;
  select: Omit<SelectInputProps, 'value' | 'onChange'>;
  radio: Omit<RadioGroupInputProps, 'value' | 'onChange'>;
  switch: Omit<SwitchInputProps, 'value' | 'onChange'>;
  checkboxGroup: Omit<CheckboxGroupInputProps, 'value' | 'onChange'>;
  checkbox: Omit<CheckboxInputProps, 'value' | 'onChange'>;
  file: Omit<FileInputProps, 'value' | 'onChange'>;
  phone: Omit<PhoneInputProps, 'value' | 'onChange'>;
  date: Omit<DateInputProps, 'value' | 'onChange'>;
  starRating: Omit<StarRatingInputProps, 'value' | 'onChange'>;
  emoji: Omit<EmojiInputProps, 'value' | 'onChange'>;
  colorArray: Omit<ColorArrayInputProps, 'value' | 'onChange'>;
};

export type FormInputProps = {
  [K in keyof InputTypeMap]: BaseFormInputProps & { type: K } & InputTypeMap[K]
}[keyof InputTypeMap];