import cors from "cors";
import express from "express";
import { Config } from "./config/app-config";
import setupRoutes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

setupRoutes(app);

// start the Express server
app.listen(Config.PORT, () => {
  console.log("server started at http://localhost:" + Config.PORT);
});
