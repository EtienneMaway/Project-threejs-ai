import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import router from "./routes/dale.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT} ...`);
});
