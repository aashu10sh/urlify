import prisma from "../../../core/db/db";
import { UserModel } from "../../../core/domain/entities/user.model";
import UserRepository from "../../../users/domain/repositories/userRepository";

export async function getUserById(
  repository: UserRepository,
  id: string,
): Promise<UserModel | null> {
  return await repository.findOne(new UserModel({ id:id})); 
}

export async function getUserByUsername(
  repository: UserRepository,
  username: string,
) {
  const user = repository.findOne(new UserModel({ username: username }));
  return user;
}
