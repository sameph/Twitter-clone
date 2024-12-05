import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT | 5000;

// console.log(process.env.MONGO_URI);
app.use(express.json()); // for parsing areq.body

app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  connectMongoDB();
});
