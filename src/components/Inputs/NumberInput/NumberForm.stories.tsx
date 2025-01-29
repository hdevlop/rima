// CustomField-NumberInput.stories.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import CustomField from '@/components/RimaForm/FormInput';

export default {
  title: 'Form/NumberInput',
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

type FormValues = { height: string };

const NumberInputTemplate = (args) => {
  const form = useForm<FormValues>({ defaultValues: { height: '' } });

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

export const Number = NumberInputTemplate.bind({});
Number.args = {
  name: 'height',
  type: 'number',
  formLabel: 'Height',
  formDescription: 'Enter your height in centimeters.',
  placeholder: 'Enter your height',
  icon: 'mdi:ruler',
  showIcon: true,
    variant:'rounded'
};
