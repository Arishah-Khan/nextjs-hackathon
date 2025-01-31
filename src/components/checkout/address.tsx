"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required.").max(50),
  companyName: z.string().optional(),
  streetAddress: z.string().min(1, "Street Address is required."),
  townCity: z.string().min(1, "Town/City is required."),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits."),
  emailAddress: z.string().email("Invalid email address."),
  state: z.string().min(1, "State is required."),
  postalCode: z.string().min(1, "Postal code is required."),
});

type FormType = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false); // State for loader
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: FormType) => {
    setIsLoading(true); // Start loader

    try {
      console.log("Form submitted:", data);

      setTimeout(() => {
        router.push("/confirm"); // Redirect after 2 seconds
      }, 2000);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="flex">
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Other form fields go here */}

            {/* Loader & Button */}
            {isLoading ? (
              <p className="text-center text-gray-600">Redirecting to payment...</p>
            ) : (
              <Button
                type="submit"
                className="mt-6 w-full bg-[#ff9f0d] text-white py-2 rounded"
              >
                Proceed To Payment
              </Button>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
