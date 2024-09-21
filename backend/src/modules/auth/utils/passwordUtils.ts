import bcrypt from "bcrypt";

export async function generateHash(password: string): Promise<string> {
  return bcrypt.hash(password, 3);
}

export async function comparePassword(
  plainText: string,
  hashed: string,
): Promise<boolean> {
  return bcrypt.compare(plainText, hashed);
}
