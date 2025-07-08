// src/expenses/expenses.repository.ts

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

export const createExpense = async (data: {
  name: string;
  amount: number;
  currency: string;
  category: string;
  date: string | Date; // allow both
}) => {
  return prisma.expense.create({
    data: {
      ...data,
      date: new Date(data.date),
    },
  });
};

export const findAllExpenses = async () => {
  return prisma.expense.findMany();
};
