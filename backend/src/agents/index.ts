// import { apiKey } from '../serverClient';
import cors from 'cors';
import "dotenv/config";
import express from 'express';

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (_req, res) => {
    res.json({
        message: "AI Writing Assistant server is running",
        // apiKey: apiKey
    });
});

const port = process.env['PORT'] || 3000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});