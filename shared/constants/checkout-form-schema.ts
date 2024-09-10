import { comment } from "postcss";
import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name is too short" }),
  lastName: z.string().min(2, { message: "Last name is too short" }),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().min(6, { message: "Phone is too short" }),
  address: z.string().min(5, { message: "Address is too short" }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
