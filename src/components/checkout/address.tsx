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
  firstName: z
    .string()
    .min(1, "First name is required.")
    .max(50, "Max length is 50 characters."),
  companyName: z.string().optional(),
  streetAddress: z.string().min(1, "Street Address is required."),
  townCity: z.string().min(1, "Town/City is required."),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits."),
  emailAddress: z.string().email("Invalid email address."),
  state: z.string().min(1, "State is required."),
  postalCode: z.string().min(1, "Postal code is required."),
  paymentMethod: z.string().min(1, "Payment method is required."),
});

type FormType = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [validationMessage, setValidationMessage] = useState<string>("");

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });



  const onSubmit = async (data: FormType) => {
    try {
      console.log("Form submitted:", data);
  
      setValidationMessage("");
  
      await Swal.fire({
        icon: 'success',
        title: 'Order Placed Successfully',
        text: 'Your order has been placed successfully!',
        confirmButtonText: 'OK',
      });
  
      router.push("/confirm"); 
  
    } catch (error) {
      console.error("Error occurred during form submission:", error);
      setValidationMessage("An error occurred. Please try again later.");
    }
  };
  

  const router = useRouter();

  return (
    <div className="flex">
      {/* Left Side Form */}
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
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="streetAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address*</FormLabel>
                  <FormControl>
                    <Input placeholder="Street Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="townCity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Town/City*</FormLabel>
                  <FormControl>
                    <Input placeholder="Town/City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number*</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address*</FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State*</FormLabel>
                  <FormControl>
                    <Input placeholder="State" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code*</FormLabel>
                  <FormControl>
                    <Input placeholder="Postal Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Payment Method Selection */}
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method*</FormLabel>
                  <FormControl>
                    <select {...field} className="input">
                      <option value="">Select Payment Method</option>
                      <option value="creditCard">Credit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="bankTransfer">Bank Transfer</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {validationMessage && <p>{validationMessage}</p>}
            <Button
              type="submit"
              className="mt-6 w-full bg-[#ff9f0d] text-white py-2 rounded"
            >
              Place Order
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
