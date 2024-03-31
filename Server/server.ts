import express, { Request, Response } from "express";
// impo
// const express = require("express");
const app = express();
import db from "./Config/db";
const port = 4000;
import cors from "cors";

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send('welcome to get api')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("Connected to DB!");
    })
});