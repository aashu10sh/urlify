import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const linkSchema = z.object({
  name: z.string(),
  originalUrl: z.string().url({ message: "Not a valid URL!" }),
  slug: z.string(),
  newUrl: z.string().url({ message: "Not a valid URL" }),
});

const linkCreationValidator = zValidator("json", linkSchema);

export default linkCreationValidator;
