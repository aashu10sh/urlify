import { StatusCode } from "hono/utils/http-status";

type ErrorResponse = {
  message: string;
  statusCode: StatusCode;
  fields: Array<string>;
};

export { type ErrorResponse };
