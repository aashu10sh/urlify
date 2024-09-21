import { bearerAuth } from "hono/bearer-auth";
import { validateJWT } from "../utils/authUtils";
import { HTTPException } from "hono/http-exception";
import { getUserById } from "../domain/usecases/getUser";
import UserRepository from "../../users/domain/repositories/userRepository";
import { UserModel } from "../../core/domain/entities/user.model";

export const getCurrentUser = bearerAuth({
  token: process.env.SECRET!,
  async verifyToken(token, c) {
    const validationResult = await validateJWT(token);
    if (validationResult.err) {
      throw new HTTPException(403, {
        message: "Invalid Token!",
      });
    }
    const userToken = validationResult.val;
    const userDB = await getUserById(new UserRepository(), userToken);
    if (!userDB) {
      throw new HTTPException(403, {
        message: "Invalid User Token!",
      });
    }
    const user = new UserModel(userDB);
    c.set("user", user);
    return true;
  },
});
