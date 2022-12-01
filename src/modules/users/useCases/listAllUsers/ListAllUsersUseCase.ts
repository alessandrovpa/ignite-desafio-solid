import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userRequest = this.usersRepository.findById(user_id);
    if (!userRequest) {
      throw new Error("User not found");
    }
    if (!userRequest.admin) {
      throw new Error("Permission denied");
    }
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
