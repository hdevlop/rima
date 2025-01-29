import React from "react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import {
  SwitchInput,
  CheckboxInput,
  TextInput,
  NumberInput,
  PasswordInput,
  TextAreaInput,
  DateInput,
  FileInput,
  SelectInput,
  RadioGroupInput,
  CheckboxGroupInput,
  StarRatingInput,
  EmojiInput,
  PhoneInput,
  ColorArrayInput,
  ColorPickerInput,
} from "@/components/index";
import { useFormContext } from 'react-hook-form';

import { FormInputProps } from "../types";

export const formInputs: Record<string, React.FC<any>> = {
  switch: SwitchInput,
  checkbox: CheckboxInput,
  text: TextInput,
  number: NumberInput,
  password: PasswordInput,
  textarea: TextAreaInput,
  date: DateInput,
  file: FileInput,
  select: SelectInput,
  radio: RadioGroupInput,
  checkboxes: CheckboxGroupInput,
  stars: StarRatingInput,
  emoji: EmojiInput,
  phone: PhoneInput,
  colorArray: ColorArrayInput,
  colorPicker: ColorPickerInput,
};

const Input: React.FC<FormInputProps> = ({
  name,
  type,
  formLabel,
  formDescription,
  ...rest
}) => {
  const InputComponent = formInputs[type];
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const hasError = !!fieldState.error;

        return (
          <FormItem>
            <FormLabel>{formLabel}</FormLabel>
            <FormControl>
              <InputComponent
                value={field.value}
                onChange={field.onChange}
                status={hasError ? "error" : "default"}
                {...rest}
              />
            </FormControl>
            {!hasError && (
              <FormDescription>{formDescription}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default Input;
