const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users",userRouter);


app.listen(process.env.PORT || 3000,() =>{
    console.log("Server running !! "+ process.env.PORT);
});
module.exports = app;
