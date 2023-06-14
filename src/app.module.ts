import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './domain/user/user.module';

import * as path from 'path' ;
import { ConfigModule, ConfigService} from '@nestjs/config';
import { UserEntity } from './entities/user.entity';
import { CommentEntity } from './entities/comment.entity';
import { ArticleEntity } from './entities/article.entity';
import { AuthModule } from './auth/auth.module'; 
import { ArticleModule } from './domain/article/article.modules';

console.log(`.env.${process.env.NODE_ENV}`)

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        retryAttempts: 10,
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: Number(configService.get('DB_PORT')),
        database: configService.get('DB_NAME'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        entities: [UserEntity, CommentEntity, ArticleEntity],
        synchronize: false,
        logging: true,
        timezone: 'local',
      }),
    }),

    UserModule,
    AuthModule,
    ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
