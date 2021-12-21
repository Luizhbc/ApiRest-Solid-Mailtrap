import { iUsersRepository } from "../../repositories/iUsersRepository";
import { iCreateUserRequestDTO } from "./createUserDTO";
import { User } from "../../entities/user";

export class CreateUserUseCase{
  constructor(private usersRepository: iUsersRepository){}

  async execute( data: iCreateUserRequestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists){
      throw new Error( "User already exists");
    }

    const user = new User(data);
    await this.usersRepository.save(user)
  }
}