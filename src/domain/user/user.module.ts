import { Module } from '@nestjs/common';
import { UserControlloer } from './user.controller';

@Module ({
    imports: [],
    cotrollers: [UserControlloer],
    providers: [UserService],
})
export class UserModule {}