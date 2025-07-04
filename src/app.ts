const express = require('express');
import { Request, Response } from 'express';
const app = express();
const port = 3000;
export const start = () =>
{
    app.listen(port, () => {
        console.log(`Server is running on port ${port}: http://localhost:${port}`);
    }
    );
    app.get("/",(req:Request,res:Response)=>
    {
        res.send("Hello, world!");
    })
    console.log("Hello, world!");
}


