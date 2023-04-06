import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserControlloer {
    constructor(private readonly userService: UserSe) {}

    @get('/user-page')
    async getUserPage() {
        const res = await this.userService.getUserPage();
        return res.page;
    }
}