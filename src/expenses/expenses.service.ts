import { findAllExpenses, createExpense } from "./expenses.repository";

export const getAllExpenses = () => {
  return findAllExpenses();
};

export const addExpense = async (expenseData: any) => {
  try {
    const result = await createExpense(expenseData);
    console.log("Service: createExpense result:", result);
    return result;
  } catch (error) {
    console.error("Service error in createExpense:", error);
    throw error;
  }
};
