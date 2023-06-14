import { Module } from '@nestjs/common';
import { UserControlloer } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';

@Module ({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserControlloer],
    providers: [UserService],
})
export class UserModule {}