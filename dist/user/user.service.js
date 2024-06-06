"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
let UserService = class UserService {
    constructor() {
        this.users = [];
    }
    async createUser(createUserDto) {
        const saltOrRounds = 10;
        const passwordHash = await (0, bcrypt_1.hash)(createUserDto.password, saltOrRounds);
        const user = {
            ...createUserDto,
            id: this.users.length + 1,
            password: passwordHash
        };
        this.users.push(user);
        console.log('passwordHashed', passwordHash);
        return user;
    }
    async getAllUser() {
        return this.users;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map