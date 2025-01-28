// EmojiForm.stories.tsx
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "@/components/ui/form";
import EmojiForm from "@/components/Inputs/EmojiInput";
import FormInput from "../../FormInput";

export default {
  title: "Form/EmojiForm",
  component: EmojiForm,
  argTypes: {
    className: { table: { disable: true } },
    maxStars: { control: "number" },
    formLabel: { control: "text" },
    formDescription: { control: "text" },
  },
};

type FormValues = { like: number };

const EmojiTemplate = (args: any) => {
  const form = useForm<FormValues>({ defaultValues: { like: 4 } });

  const handleSubmit: SubmitHandler<FormValues> = (data) => {
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

export const Default = EmojiTemplate.bind({});
Default.args = {
  type:'emoji',
  name:'like',
  formLabel: "How do you like our Service ?",
  formDescription: "Select the emoji that represents your experience with our service",
  variant: 'ghost',
};
