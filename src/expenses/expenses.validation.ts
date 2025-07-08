import { z } from "zod";

export const expenseSchema = z.object({
  name: z.string().min(1),
  amount: z.number().positive(),
  currency: z.string().min(1),
  category: z.string().min(1),
  date: z.coerce.date(),
});

export type ExpenseInput = z.infer<typeof expenseSchema>;
