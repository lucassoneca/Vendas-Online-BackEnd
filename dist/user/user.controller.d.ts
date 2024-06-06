import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUser: CreateUserDto): Promise<User>;
    getAllUser(): Promise<User[]>;
}
