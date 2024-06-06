import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
export declare class UserService {
    private users;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getAllUser(): Promise<User[]>;
}
