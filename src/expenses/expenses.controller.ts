import { Router, Request, Response } from "express";
import { getAllExpenses, addExpense } from "./expenses.service";
import { expenseSchema } from "./expenses.validation";
import { z } from "zod";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const expenses = await getAllExpenses();
  if (expenses.length > 0) {
    res.status(200).json(expenses);
  } else {
    res.send("Error: No expenses found");
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const validatedExpense = expenseSchema.parse(req.body); // throws if invalid

    //  console.log("Validated expense:", validatedExpense); //

    const result = await addExpense(validatedExpense);
    // console.log("Inserted result:", result); //

    res.status(201).json(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send("sasjdiuh");
      // res.status(400).json({ error: error.errors });
    } else {
      res.status(500).send(error);
    }
  }
});

export default router;
