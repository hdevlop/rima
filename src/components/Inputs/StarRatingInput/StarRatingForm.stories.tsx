// StarRatingForm.stories.tsx
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import StarRatingForm from "@/components/Inputs/StarRatingInput";
import FormInput from "../../RimaForm/FormInput";

export default {
  title: "Form/StarRatingForm",
  component: StarRatingForm,
  argTypes: {
    className: { table: { disable: true } },
    maxStars: { control: "number" },
    formLabel: { control: "text" },
    formDescription: { control: "text" },
    showIcon: { table: { disable: true } },
    icon: { table: { disable: true } },
    variant: {
      control: { type: 'select' },
      options: ['default', 'ghost'],
    },
  },
};

const StarRatingTemplate = (args: any) => {
  const form = useForm({ defaultValues: { rating: 4 } });

  const handleSubmit = (data) => {
    console.log("Form Data:", data);
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

export const Default = StarRatingTemplate.bind({});
Default.args = {
  type:'stars',
  name:'rating',
  formLabel: "Rate this product",
  formDescription: "Select a rating between 1 and 5 stars.",
  maxStars: 5,
  variant: 'ghost',
};
