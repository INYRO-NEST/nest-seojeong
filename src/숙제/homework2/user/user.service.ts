import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getuserPage() {
    return { "user": { “name”: “hansu”, “age”: 20 } };
  }
}