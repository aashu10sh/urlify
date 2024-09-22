import { serve } from "@hono/node-server";
import { Hono } from "hono";
import authRouter from "./modules/auth/router/authRouter";
import { logger } from "hono/logger";
import linkRouter from "./modules/link/router/linkRouter";
require("dotenv").config();

const port = 3000;

const app = new Hono().basePath("/api/v1");
app.use(logger());

app.get("/", (c) => {
  return c.text("Hello Boys!");
});

app.route("/auth", authRouter);
app.route('/link', linkRouter);

console.log(`Server is running on port ${port}`);
serve({
  fetch: app.fetch,
  port,
});
