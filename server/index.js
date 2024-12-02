import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/user.route.js";//import role router
import authRouter from "./routes/auth.route.js";//import auth router
import { errorHandler } from "./configs/middleware.js";

const PORT = process.env.PORT;
const app = express(); //Library express initialized
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

//json middleware
app.use(express.json());

app.use(cookieParser());

//api
app.use("/api/v1/users", userRouter);
app.use('/api/v1/auth', authRouter);

// succes handling
app.use('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

// error handling
app.use('*', (req, res) => {
    res.status(404).json({ message: 'not found' });
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
app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});