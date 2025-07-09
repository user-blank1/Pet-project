import { Router, Request, Response } from "express";
import { getAllExpenses, addExpense } from "./expenses.service";
import { expenseSchema } from "./expenses.validation";
import { z } from "zod";
import logger from "../helpers/Logger";
const router = Router();

export const getExpensesHandler = async (req: Request, res: Response) => {
  const expenses = await getAllExpenses();
  if (expenses.length > 0) {
    res.status(200).json(expenses);
  } else {
    logger.info("Error: No expenses found");
    res.status(200).json([]); // Prevent hanging
  }
};

router.get("/", getExpensesHandler);

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
      logger.error("Error adding expense:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

export default router;
