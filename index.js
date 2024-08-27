import express from "express";

const app = express();
const port = 5030;


app.get('/', (req, res) => {
    return res.send('Bank');
})

app.get('*', (req, res) => {
    return res.send('404 - puslapis nerastas...');
})

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
})