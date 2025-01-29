// TextFormInput.stories.tsx
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import FormInput from '@/components/RimaForm/FormInput';

export default {
  title: 'Form/PhoneInput',
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
      options: ['default', 'rounded', 'ghost'],
    },
  },
};

const PhoneInputTemplate = (args) => {

  const form = useForm({
    defaultValues: { email: '' }
  });

  const onSubmit = ({ email }) => {
    if (email == '') {
      form.setError('email', { type: 'manual', message: 'Invalid email address' });
    }
  };


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 space-y-6" autoComplete="off">
        <FormInput control={form.control} {...args} />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md" >
          Submit
        </button>
      </form>
    </Form>
  );
};


export const Default = PhoneInputTemplate.bind({});
Default.args = {
  name: 'Phone',
  type: 'phone',
  formLabel: 'Phone',
  formDescription: 'Stay connected! Enter your phone number.',
  variant:'rounded'

}
