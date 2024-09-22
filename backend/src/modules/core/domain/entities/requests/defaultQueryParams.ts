import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const defaultQueryPramsSchema = z.object({
  page: z.coerce.number().gte(1).default(1),
  limit: z.coerce.number().gte(10).lt(100).default(10),
});

const validateDefaultQueryParams = zValidator("query", defaultQueryPramsSchema);

export default validateDefaultQueryParams;
