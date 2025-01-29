// RadioGroupFormInput.stories.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import FormInput from '@/components/RimaForm/FormInput';

export default {
  title: 'Form/RadioGroupInput',
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

type FormValues = { radioGroup: boolean };

const RadioGroupInputTemplate = (args) => {
  const form = useForm<FormValues>({ defaultValues: { radioGroup: false } });

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

export const Default = RadioGroupInputTemplate.bind({});
Default.args = {
  name: "radioGroup",
  type: "radio",
  formDescription: "Select your preferred payment method.",
  formLabel: "Payment option",
  items: [
    { value: "paypal", label: "PayPal", icon: "logos:paypal" },
    { value: "visa", label: "Visa", icon: "logos:visa" },
    { value: "mastercard", label: "MasterCard", icon: "logos:mastercard" },
  ],
  variant: 'ghost',
  layout: 'row',
};
