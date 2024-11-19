import express from "express";
import "dotenv/config";
import {db} from "./configs/db.js";
import userRouter from "./routes/user.route.js";//import role router
import { errorHandler } from "./configs/middleware.js";

const app = express(); //Library express initialized
const PORT = process.env.PORT; 

//json middleware
app.use(express.json());

//api
app.use("/api/v1/users", userRouter);

// succes handling
app.use('/', (req, res) => {
    res.status(200).json({message: 'Hello World!'});
});

// error handling
app.use('*', (req, res) => {
    res.status(404).json({message: 'not found'});
});
app.use(errorHandler);


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