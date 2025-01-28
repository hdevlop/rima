// CustomField-DateInput.stories.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import CustomField from '@/components/FormInput';

export default {
  title: 'Form/DateInput',
  component: CustomField,
  argTypes: {
    className: { table: { disable: true } },
    name: { table: { disable: true } },
    type: { table: { disable: true } },
    control: { table: { disable: true } },
    items: { table: { disable: true } },
    showIcon: { control: 'boolean' },
    icon: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'rounded', 'ghost'],
    },
  },
};

type FormValues = { birthdate: string };

const DateInputTemplate = (args) => {
  const form = useForm<FormValues>({ defaultValues: { birthdate: '' } });

  const handleSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-96 space-y-6"
        autoComplete="off"
      >
        <CustomField control={form.control} {...args} />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </Form>
  );
};

export const Date = DateInputTemplate.bind({});
Date.args = {
  name: 'birthdate',
  type: 'date',
  formLabel: 'Birthdate',
  formDescription: 'Select your date of birth.',
  placeholder: 'Pick a date...',
  icon: 'calendar',
  showIcon: true,
  variant: 'rounded'
};
