import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(8).max(25),
});

const loginValidator = zValidator("json", loginSchema);

export default loginValidator;
