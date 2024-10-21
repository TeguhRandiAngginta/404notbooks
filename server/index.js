import express from "express";
import "dotenv/config";
import {db} from "./configs/db.js";

const app = express(); //Library express initialized
const PORT = process.env.PORT; 

// route / path
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World",
    });
});

// route / path
app.use("*", (req, res) => {
    res.status(404).json({
        message: "not found",
    });
});

// start the server
app.listen(PORT, ()=> {
    console.log(`Server started, listening on port ${PORT}`);
});