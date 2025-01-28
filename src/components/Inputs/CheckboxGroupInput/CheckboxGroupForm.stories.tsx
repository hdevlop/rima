// CheckboxGroupFormInput.stories.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import FormInput from '@/components/FormInput';

export default {
  title: 'Form/CheckboxGroupInput',
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
    layout: {
      control: { type: 'select' },
      options: ['row', 'column'],
    },
  },
};

type FormValues = { checkboxGroup: [] };

const CheckboxGroupInputTemplate = (args) => {
  const form = useForm<FormValues>({ defaultValues: { checkboxGroup: [] } });

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

export const Default = CheckboxGroupInputTemplate.bind({});
Default.args = {
  name: "checkboxGroup",
  type: "checkboxes",
  formDescription: 'You can manage your mobile notifications in the mobile.',
  formLabel: "Choose your preference",
  items: [
    { value: "home", label: "Home", icon: "mdi:home" },
    { value: "work", label: "Work", icon: "mdi:briefcase" },
    { value: "travel", label: "Travel", icon: "mdi:airplane" },
  ],
  variant: 'default',
  layout:"row" 
};
