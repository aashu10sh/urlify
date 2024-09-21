import {
  UserModel,
  UserModelWithPassword,
} from "../../../core/domain/entities/user.model";
import UserRepository from "../../../users/domain/repositories/userRepository";
import { generateHash } from "../../utils/passwordUtils";

export async function createUser(
  repository: UserRepository,
  name: string,
  username: string,
  password: string,
): Promise<UserModel> {
  return await repository.create(
    new UserModelWithPassword({
      name: name,
      username: username,
      password: await generateHash(password),
    }),
  );
}
