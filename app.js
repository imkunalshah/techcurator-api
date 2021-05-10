require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const statsRouter = require("./api/userStats/stats.router");
const categoryRouter = require("./api/category/category.router");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users",userRouter);
app.use("/api/v1/stats",statsRouter);
app.use("/api/v1/categories",categoryRouter);

app.listen(process.env.APP_PORT,() =>{
    console.log("Server running !! ");
})
module.exports = app;
