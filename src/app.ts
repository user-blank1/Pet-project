const express = require('express');
import { PORT } from './config/index';
import { Request, Response } from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
export const start = () =>
{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}: http://localhost:${PORT}`);
    }
    );
    app.get("/",(req:Request,res:Response)=>
    {
        res.send("Hello, world!");
    })

    app.get('/ping', (req: Request, res: Response) => {
        res.json({message:'pong'});   
    });


    console.log("Hello, world!!!!!!!!!!");
}


