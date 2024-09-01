import express from "express";
import { isName } from '../lib/nameValidation.js';
import { isSurname } from '../lib/surnameValidation.js'

export const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    const data = {
        state: 'error',
        message: 'Nurodykite konkretų API endpoint\'ą'
    };
    return res.json(data.message);
});


