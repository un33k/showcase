import { hash } from "bcrypt"
import { v4 as uuid_v4 } from "uuid"

/**
 * Given a password, returns a hashed password
 * @param password plain text password to be hashed
 * @returns hashed password
 */
export async function hashPassword(password?: string): Promise<string> {
  const saltRounds = 10
  password = password || uuid_v4()
  return await hash(password, saltRounds)
}
