
import { z } from "zod";
import Form from "./components/RimaForm/Form";
import FormInput from "./components/RimaForm/FormInput";

const schema = z.object({
   email: z.string().email({ message: "Please enter a valid email address." }),
});



const App = () => {

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <div className="p-4">

         <Form
            schema={schema}
            defaultValues={{ email: "" }}
            onSubmit={onSubmit}
            className="w-96 space-y-6"
         >
            <FormInput
               name="email"
               type="text"
               formLabel="Email"
               placeholder="Enter your email"
               variant="default"
            />
         </Form>

         <button type="submit"  className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
            Submit
         </button>
      </div>
   );
};

export default App;