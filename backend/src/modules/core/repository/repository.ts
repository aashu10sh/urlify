interface Repository<T> {
  create(instance: T): Promise<T>;
  delete(instance: T): Promise<T>;
  findOne(conditions: T): Promise<T | null>;
  findMany(conditions: T, offset: number, limit: number): Promise<Array<T>>;
}
