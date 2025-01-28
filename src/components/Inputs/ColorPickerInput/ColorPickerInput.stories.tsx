// TextFormInput.stories.tsx
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import FormInput from '@/components/FormInput';

export default {
  title: 'Form/ColorPickerInput',
  component: FormInput,
  argTypes: {
    className: { table: { disable: true } },
    name: { table: { disable: true } },
    type: { table: { disable: true } },
    control: { table: { disable: true } },
    items: { table: { disable: true } },
    variant: {
      control: { type: 'select' },
      options: ['default', 'rounded', 'ghost'],
    },
  },
};

const ColorPickerInputTemplate = (args) => {

  const form = useForm({ defaultValues: { color: '#e11d48' } });

  const onSubmit = ({ color }) => {
    console.log(color);
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


export const Default = ColorPickerInputTemplate.bind({});
Default.args = {
  name: 'color',
  type: 'colorPicker',
  formLabel: 'Color',
  formDescription: 'Stay updated! Enter your email to receive the latest news.',
  variant: 'default',
}
