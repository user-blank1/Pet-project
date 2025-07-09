import { Request, Response } from "express";
import * as expenseService from "./expenses.service"; //getAllExpenses and addExpense
import router from "./expenses.controller"; //to access the data from the routes

function createMockResponse() {
  const res = {} as Response; //create an empty object that is Response type
  res.status = jest.fn().mockReturnValue(res); //jest.fn() creates a mock function
  //mockReturnValue(res) means that when res.status is called, it will return the mocked response object `res`
  //so that we can chain methods like res.status(200).json(expenses)
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
}
