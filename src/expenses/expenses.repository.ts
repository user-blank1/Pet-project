// src/expenses/expenses.repository.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
