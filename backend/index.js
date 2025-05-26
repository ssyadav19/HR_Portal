import express from "express";
import authRouter from "./src/routers/authRouter.js";
import connectDb from "./src/config/db.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started at: ", port);
  connectDb();
});
