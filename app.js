const express = require("express");
const morgan = require("morgan");
const app = express();

const filesRouter = require("./routes/filesRoutes");
const userRouter = require("./routes/userRoutes");

// 1) middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log("hello from middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
// routes
app.use("/api/v1/files", filesRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
