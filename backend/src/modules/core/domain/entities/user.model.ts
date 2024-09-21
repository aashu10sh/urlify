export class UserModel {
  id?: string;
  name?: string;
  username?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deleted?: boolean;
  constructor({
    id,
    name,
    username,
    createdAt,
    updatedAt,
    deleted,
  }: {
    id?: string;
    name?: string;
    username?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deleted?: boolean;
  }) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deleted = this.deleted;
  }
}

export class UserModelWithPassword extends UserModel {
  password?: string;

  constructor({
    id,
    name,
    username,
    createdAt,
    updatedAt,
    deleted,
    password,
  }: {
    id?: string;
    name?: string;
    username?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deleted?: boolean;
    password?: string;
  }) {
    super({ id, name, username, createdAt, updatedAt, deleted });
    this.password = password;
  }
}
