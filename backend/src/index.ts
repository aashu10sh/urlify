import { serve } from "@hono/node-server";
import { Hono } from "hono";
import authRouter from "./modules/auth/router/authRouter";
import { logger } from "hono/logger";
import linkRouter from "./modules/link/router/linkRouter";
require("dotenv").config();
import { cors } from "hono/cors";

const port = 3000;

const app = new Hono().basePath("/api/v1");
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173", "http://localhost:4173"],
    allowMethods: ["POST", "OPTIONS", "GET", "PUT", "DELETE", "PATCH", "HEAD"],
  }),
);
app.use(logger());

app.get("/", (c) => {
  return c.text("Hello Boys!");
});

app.route("/auth", authRouter);
app.route("/link", linkRouter);

console.log(`Server is running on port ${port}`);
serve({
  fetch: app.fetch,
  port,
});
