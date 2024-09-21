import jwt from "jsonwebtoken";
import { Err, Ok, Result } from "ts-results";

export async function generateJWT(username: string): Promise<string> {
  return jwt.sign({ jid: username }, process.env.SECRET!, { expiresIn: "1d" });
}

export async function validateJWT(
  token: string,
): Promise<Result<string, string>> {
  try {
    const decoded = jwt.verify(token, process.env.SECRET!);
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    return Ok(decoded.jid as string);
  } catch (e) {
    return Err(e as string);
  }
}
