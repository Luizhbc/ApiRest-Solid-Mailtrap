import { iUsersRepository } from "../../repositories/iUsersRepository";
import { iCreateUserRequestDTO } from "./createUserDTO";
import { User } from "../../entities/user";
import { iMailProvider } from "../../providers/iMailProvider";

export class CreateUserUseCase{
  constructor(
    private usersRepository: iUsersRepository,
    private mailProvider: iMailProvider){}

  async execute( data: iCreateUserRequestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists){
      throw new Error( "User already exists");
    }

    const user = new User(data);

    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: { 
        name: data.name,
        email: data.email
      },
      from: {
        name: "Alou alou o bozo chegou",
        email: 'Equipe@bozo.com.br'
      },
      subject: "Seja bem-vindo á plataforma",
      body: "<p>você pode fazer login em nossa plataforma.</p>"
    })
  }
}