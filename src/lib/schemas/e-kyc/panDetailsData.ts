import { z } from "zod";

export const panDetailsData = z.object({
  panNumber: z
    .string()
    .min(10, "PAN Number must be at least 10 characters long") // Assuming PAN Number should be 10 characters
    .max(10, "PAN Number must be at most 10 characters long"),
  mobileNumber: z
    .string()
    .length(10, "Mobile Number must be exactly 10 digits") // Assuming mobile number should be exactly 10 digits
    .regex(/^\d+$/, "Mobile Number must contain only digits"), // Ensure mobile number contains only digits
  dateOfBirth: z.coerce
    .date()
    .refine((date) => date < new Date(), "Provide a valid Date of Birth")
    .refine((date) => {
      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();
      const month = today.getMonth() - date.getMonth();
      return age > 18 || (age === 18 && month >= 0); // User must be at least 18 years old
    }, "You must be at least 18 years old"),
  emailId: z.string().email("Invalid email address"),
  whoAreU: z.enum([
    "Individual",
    "Non Resident Indian",
    "Foreign National",
    "Person of Indian Origin",
  ]),
});
