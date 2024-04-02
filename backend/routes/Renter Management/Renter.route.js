import express from "express";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to ITP Project');
});

export default app;
