import { Router } from "express";

const setupRoutes = (app: Router) => {
  app.get("/listings", (req, res, next) => {
    return res.json({ message: "DZIALA" });
  });
};

export default setupRoutes;
