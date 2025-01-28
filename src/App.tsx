"use client";

import FormInput from "./components/FormInput";
import { useForm } from "react-hook-form";
import { Form } from "./components/ui/form";

const App = () => {


   const form = useForm({ defaultValues: { email: '' } });

   const onSubmit = (data: any) => {
      console.log(data);
   };

   return (
      <div className="p-4">
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 space-y-6" autoComplete="off">
               <FormInput
                  control={form.control}
                  name="email"
                  type="text"
                  formLabel="Email"
                  placeholder="Enter your email"
                  variant="default"
               />
               <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md" >
                  Submit
               </button>
            </form>
         </Form>

      </div>
   );
};

export default App;
