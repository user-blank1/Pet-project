// src/expenses.service.ts
import {
  insertExpense,
  getAllExpenses as fetchAllExpenses,
} from "./expenses.repository";

export function addExpense(expenseData: {
  name: string;
  amount: number;
  currency: string;
  category: string;
  date: string;
}) {
  return insertExpense(expenseData);
}

export function getAllExpenses() {
  return fetchAllExpenses();
}
