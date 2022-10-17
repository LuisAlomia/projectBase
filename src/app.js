const express = require("express");
const userRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

module.exports = app;
