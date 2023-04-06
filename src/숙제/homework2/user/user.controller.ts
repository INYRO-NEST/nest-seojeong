import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user/user-info')
  async getuserPage() {
    return this.userService.getuserPage();
  }
}