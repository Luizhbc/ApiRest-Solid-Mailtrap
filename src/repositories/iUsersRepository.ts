import { User } from "../entities/user";

export interface iUsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}