import UserRepository from "../../../users/domain/repositories/userRepository";
import { createUser } from "../../domain/usecases/createUser";
import { getUserByUsername } from "../../domain/usecases/getUser";
import { Ok, Err, Result } from "ts-results";
import { ErrorResponse } from "../../../core/domain/entities/error.response";
import { comparePassword } from "../../utils/passwordUtils";
import { generateJWT } from "../../utils/authUtils";

class AuthController {
  constructor(readonly userRepository: UserRepository) {}
  async registerUser(
    name: string,
    username: string,
    password: string,
  ): Promise<Result<string, ErrorResponse>> {
    const alreadyUser = await getUserByUsername(this.userRepository, username);
    if (alreadyUser) {
      return Err({
        statusCode: 409,
        message: "User Already Exists",
        fields: ["username"],
      });
    }
    const newUser = await createUser(
      this.userRepository,
      name,
      username,
      password,
    );
    const token = await generateJWT(newUser.id!);
    return Ok(token);
  }

  async loginUser(
    username: string,
    password: string,
  ): Promise<Result<string, ErrorResponse>> {
    const userInDb = await getUserByUsername(this.userRepository, username);
    if (!userInDb) {
      return Err({
        statusCode: 401,
        message: "Invalid Username or Password",
        fields: ["username", "password"],
      });
    }
    if (await comparePassword(password, userInDb.password!)) {
      return Ok(await generateJWT(userInDb.id!));
    }
    return Err({
      statusCode: 401,
      message: "Invalid Credentials!",
      fields: ["username", "password"],
    });
  }
}

export default AuthController;
