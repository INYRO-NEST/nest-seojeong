import { Controller, Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { LocalStragtegy } from "./strategies/local.strategies";
import { JwtStrategy } from "./strategies/jwt.starategy";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/entities/user.entity";
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
      TypeOrmModule.forFeature([UserEntity]),
      JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
          return {
            secret: configService.get('JWT_SECRET'),
            signOptions: { expiresIn: '30m' },
          };
        },
      }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStragtegy, JwtStrategy],
  })
  export class AuthModule {}