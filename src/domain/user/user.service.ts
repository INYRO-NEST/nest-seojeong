import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    constructor() {}

    async getUserPage() {
        return { page : 'User Page입니다.' };
    }
}