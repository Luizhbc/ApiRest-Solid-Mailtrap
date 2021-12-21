import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/postgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";




const postgresUsersRepository = new PostgresUsersRepository()
const mailTrapMailProvider = new MailTrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)


export { createUserUseCase, createUserController}