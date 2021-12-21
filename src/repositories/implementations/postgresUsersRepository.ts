import { User } from "../../entities/user";
import { iUsersRepository } from "../iUsersRepository";

export class PostgresUsersRepository implements iUsersRepository{
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email == email);

    return user;

  }

  async save(user: User): Promise<void>{
    this.users.push(user);
  }
}