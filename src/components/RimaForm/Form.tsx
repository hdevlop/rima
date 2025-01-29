import React from 'react';
import { Form as ShadcnForm } from '../ui/form';
import { useForm, UseFormProps, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type RimaFormProps<T extends z.ZodType<any, any>> = {
  schema: T;
  defaultValues?: UseFormProps<z.infer<T>>['defaultValues'];
  onSubmit: SubmitHandler<z.infer<T>>;
  className?: string;
  id?: string; 
  children: React.ReactNode;
};

const RimaForm = <T extends z.ZodType<any, any>>({
  schema,
  defaultValues,
  onSubmit,
  className,
  id,
  children,
}: RimaFormProps<T>) => {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <ShadcnForm {...form}>
      <form id={id} onSubmit={form.handleSubmit(onSubmit)} className={className} autoComplete="off">
        {children}
      </form>
    </ShadcnForm>
  );
};

export default RimaForm;