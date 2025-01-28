// CheckboxFormInput.stories.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import FormInput from '@/components/FormInput';

export default {
  title: 'Form/CheckboxInput',
  component: FormInput,
  argTypes: {
    className: { table: { disable: true } },
    name: { table: { disable: true } },
    type: { table: { disable: true } },
    control: { table: { disable: true } }, 
    items: { table: { disable: true } },
    showIcon: { table: { disable: true } },
    icon: { table: { disable: true } },
    variant: {
      control: { type: 'select' },
      options: ['default', 'ghost'],
    },
  },
};

type FormValues = { checkbox: boolean };

const CheckboxInputTemplate = (args) => {
  const form = useForm<FormValues>({ defaultValues: { checkbox: false } });

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
        <FormInput control={form.control} {...args} />
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

export const Default = CheckboxInputTemplate.bind({});
Default.args = {
  name: "checkbox",
  type: "checkbox",
  formLabel: 'CheckBox Field',
  label: 'Use different settings for my mobile devices',
  helper: 'You can manage your mobile notifications in the mobile.',
  variant: 'default',
};
