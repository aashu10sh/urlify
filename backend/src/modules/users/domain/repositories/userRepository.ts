import prisma from "../../../core/db/db";
import {
  UserModel,
  UserModelWithPassword,
} from "../../../core/domain/entities/user.model";

class UserRepository implements Repository<UserModel> {
  async create(instance: UserModelWithPassword): Promise<UserModel> {
    const createdUser = await prisma.users.create({
      data: {
        name: instance.name!,
        username: instance.username!,
        password: instance.password!,
        createdAt: instance.createdAt || new Date(),
        updatedAt: instance.updatedAt || new Date(),
        deleted: instance.deleted || false,
      },
    });

    return new UserModel(createdUser);
  }

  async delete(instance: UserModel): Promise<UserModel> {
    const deletedUser = await prisma.users.update({
      where: { id: instance.id },
      data: { deleted: true },
    });

    return new UserModel(deletedUser);
  }

  async findOne(
    conditions: Partial<UserModel>,
  ): Promise<UserModelWithPassword | null> {
    const user = await prisma.users.findFirst({
      where: {
        id: conditions.id,
        name: conditions.name,
        username: conditions.username,
        deleted: conditions.deleted ?? false,
      },
    });
    return user ? new UserModelWithPassword(user) : null;
  }

  async findMany(
    conditions: Partial<UserModel>,
    offset: number,
    limit: number,
  ): Promise<UserModel[]> {
    const users = await prisma.users.findMany({
      skip: offset,
      take: limit,
      where: {
        id: conditions.id,
        name: conditions.name,
        username: conditions.username,
        deleted: conditions.deleted ?? false,
      },
    });

    return users.map((user) => new UserModel(user));
  }

  async update(instance: UserModel): Promise<UserModel> {
    const updatedUser = await prisma.users.update({
      where: { id: instance.id },
      data: {
        name: instance.name,
        username: instance.username,
        updatedAt: new Date(),
      },
    });

    return new UserModel(updatedUser);
  }
}

export default UserRepository;
