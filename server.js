import * as dotenv from 'dotenv';
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI,
});

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


app.post('/dream', async (req, res) => {
    const prompt = req.body.prompt;
    let aiResponse = await openai.images.generate({
        prompt,
        n: 1,
        size: '1024x1024',
    })

    let image = aiResponse.data;
    image = image[0].url;
    res.send({ image })
});

app.listen(8080, () => console.log('make art on port http://localhost:8080/dream'));
