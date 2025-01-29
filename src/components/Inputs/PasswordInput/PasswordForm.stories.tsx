// CustomField-PasswordInput.stories.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import CustomField from '@/components/RimaForm/FormInput';

export default {
  title: 'Form/PasswordInput',
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

type FormValues = { password: string };

const PasswordInputTemplate = (args) => {
  const form = useForm<FormValues>({ defaultValues: { password: '' } });

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

export const Password = PasswordInputTemplate.bind({});
Password.args = {
  name: 'password',
  type: 'password',
  formLabel: 'Password',
  formDescription: 'Create a strong password to secure your account.',
  placeholder: 'Enter your password',
  icon: 'mdi:lock',
  showIcon: true,
    variant:'rounded'
};
