// TextFormInput.stories.tsx
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import FormInput from '@/components/RimaForm/FormInput';

export default {
  title: 'Form/TextAreaInput',
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

const TextInputTemplate = (args) => {

  const form = useForm({ defaultValues: { bio: '' } });

  const onSubmit = ({bio}) => {
    if (bio == '') {
      form.setError('bio', { type: 'manual', message: 'Invalid email address' });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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

export const Default = TextInputTemplate.bind({});
Default.args = {
  name: 'bio',
  type: 'textarea',
  formLabel: 'Bio',
  formDescription: 'Tell us about yourself.',
  placeholder: 'Write something about yourself...',
  icon: 'mdi:note-text',
  showIcon: false,
};
