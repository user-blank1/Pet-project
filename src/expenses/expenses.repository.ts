// src/expenses/expenses.repository.ts
import db from "../db/db.service";

export function insertExpense(expense: {
  //name- insertExpense, takes one parameter expense defined inside the body
  name: string;
  amount: number;
  currency: string;
  category: string;
  date: string;
}) {
  const stmt = db.prepare(`
    INSERT INTO expenses (name, amount, currency, category, date)
    VALUES (?, ?, ?, ?, ?)
  `); //db.prepare creates a sql statement.

  const result = stmt.run(
    expense.name,
    expense.amount,
    expense.currency,
    expense.category,
    expense.date,
  ); //.run on .prepare variable inserts the values in the order that they were written in the sql statement
  return result.lastInsertRowid; //result object is:
  /*
{
  changes: number;        // Number of rows affected (for INSERT, UPDATE, DELETE)
  lastInsertRowid: number // The ID (primary key) of the last inserted row (for INSERT)
}
  */
} //this function returns id of the last inserted row (the only inserted row in this case).

export function getAllExpenses() {
  const stmt = db.prepare("SELECT * FROM expenses ORDER BY date DESC"); //stmt is sql query string
  return stmt.all(); //execute and get all.
}
