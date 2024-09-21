import { Hono } from "hono";
import registerValidator from "../domain/entities/request/registerRequest";
import loginValidator from "../domain/entities/request/loginRequest";
import UserRepository from "../../users/domain/repositories/userRepository";
import AuthController from "../presentation/controllers/authController";
import { HTTPException } from "hono/http-exception";

const authRouter = new Hono();
const userRepository = new UserRepository();
const authController = new AuthController(userRepository);

authRouter.post("/register", registerValidator, async (c) => {
  const validated = c.req.valid("json");
  const registerResult = await authController.registerUser(
    validated.name,
    validated.username,
    validated.password,
  );
  if (registerResult.err) {
    throw new HTTPException(registerResult.val.statusCode, {
      message: registerResult.val.message,
      cause: registerResult.val.fields,
    });
  }
  const token = registerResult.val;
  return c.json({
    token: token,
  });
});

authRouter.post("/login", loginValidator, (c) => {
  return c.text("yes");
});

export default authRouter;
