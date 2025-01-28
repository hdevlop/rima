// SelectFormInput.stories.tsx
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import FormInput from '@/components/FormInput';

export default {
  title: 'Form/SelectInput',
  component: FormInput,
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

const SelectInputTemplate = (args) => {

  const form = useForm({ defaultValues: { selectField: '' } });

  const handleSubmit = ({selectField}) => {
    if (selectField == '') {
      form.setError('selectField', { type: 'manual', message: 'Invalid email address' });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-96 space-y-6" autoComplete="off">
        <FormInput control={form.control} {...args} />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    </Form>
  );
};

export const Default = SelectInputTemplate.bind({});
Default.args = {
  name: 'selectField',
  type: 'select',
  formLabel: 'Select Option',
  formDescription: 'Stay updated! Enter your email to receive the latest news.',
  placeholder: 'Choose an option...',
  items: [
    { value: "profile", label: "Profile", icon: "mdi:account" },
    { value: "email", label: "Email", icon: "mdi:email" },
    { value: "settings", label: "Settings", icon: "mdi:cog" },
  ],
  icon: "mdi:home",
  showIcon: true,
  variant: 'rounded'
};
