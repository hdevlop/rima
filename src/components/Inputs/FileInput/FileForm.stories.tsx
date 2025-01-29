// CustomField-NumberInput.stories.tsx
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import CustomField from '@/components/RimaForm/FormInput';

export default {
  title: 'Form/FileInput',
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

const NumberInputTemplate = (args) => {
  const form = useForm({ defaultValues: { avatar: '' } });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 space-y-6" autoComplete="off">
        <CustomField control={form.control} {...args} />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md" >
          Submit
        </button>
      </form>
    </Form>
  );
};

export const Number = NumberInputTemplate.bind({});
Number.args = {
  name: 'avatar',
  type: 'file',
  formLabel: 'Avatar',
  formDescription: 'Upload your profile picture.',
  placeholder: 'No file chosen',
  icon: 'pencil-ruler',
  showIcon: true,
  variant: 'rounded'
};
