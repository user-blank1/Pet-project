import { Router, Request, Response } from "express";
import { getAllExpenses, addExpense } from "./expenses.service";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const expenses = getAllExpenses(); // Should return an array or promise
  res.json(expenses);
}); //upon visiting / returns full list of all expenses

router.post("/", async (req: Request, res: Response) => {
  const newExpense = req.body;
  const result = addExpense(newExpense);
  res.status(201).json(result);
}); // posting to  / a single expense

export default router;
