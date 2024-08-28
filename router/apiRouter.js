import express from "express";
import { accounts } from "../data/accounts.js";

export const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    const data = {
        state: 'error',
        message: 'Nurodyk konkretu API endpoint\'a'
    };
    return res.json(data.message);
});

apiRouter.get('/account', (req, res) => {
    return res.json(accounts);
});