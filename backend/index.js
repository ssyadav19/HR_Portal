import express from "express";
import authRouter from "./src/routers/authRouter.js";
import userRouter from "./src/routers/userRouter.js";
import connectDb from "./src/config/db.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started at: ", port);
  connectDb();
});
