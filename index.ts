import express from "express";
import { Response, Request } from "express";
// import cors from "cors";
import mongoose from "mongoose";
import studentRouter from "./router/studentRouter";
const port: number = 2222;

const URL: string = "mongodb://localhost/newclass";
mongoose
  .connect(URL)
  .then((): void => {
    console.log("databas connected succesfully");
  })
  .catch((error): void => {
    console.log(error.message);
  });
const app = express();

app.use(express.json());
// app.use(cors());

app.use("/api", studentRouter);
app.get("/", (req: Request, res: Response): Response => {
  return res.status(201).json({ message: "welcome to ts api" });
});
app.listen(port, (): void => {
  console.log("now listenin on port");
});
