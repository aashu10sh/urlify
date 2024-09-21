import UserRepository from "../../../users/domain/repositories/userRepository";
import { createUser } from "../../domain/usecases/createUser";
import { getUserById, getUserByUsername } from "../../domain/usecases/getUser";
import { Ok, Err, Result } from "ts-results";
import jwt from "jsonwebtoken";
import { ErrorResponse } from "../../../core/domain/entities/error.response";

class AuthController {
  SECRET: string = "YESIR";
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
    const token = await this.generateJWT(newUser.id!);

    return Ok(token);
  }

  async generateJWT(username: string): Promise<string> {
    return jwt.sign(
      {
        jid: username,
      },
      this.SECRET,
      {
        expiresIn: "1d",
      },
    );
  }
}

export default AuthController;
