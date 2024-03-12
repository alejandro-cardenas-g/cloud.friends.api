import { config } from "dotenv";
config();

import express from "express";
import friendRouter from "./route.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/friends", friendRouter);

app.listen(process.env.PORT, () => {
  console.log(`friends.api listening on ${process.env.PORT}`);
});
