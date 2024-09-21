import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string().min(8).max(25),
});

const registerValidator = zValidator("json", registerSchema);

export default registerValidator;
