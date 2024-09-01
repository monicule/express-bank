import express from "express";

export const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    const data = {
        state: 'error',
        message: 'Nurodykite konkretų API endpoint\'ą'
    };
    return res.json(data.message);
});

