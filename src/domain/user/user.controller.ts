import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserControlloer {
    constructor(private readonly userService: UserService) {}

    @Get('/user-page')
    async getUserPage() {
        const res = await this.userService.getUserPage();
        return res;
    }
    // HTTP GET, POST
    @Post()
    async register(@Body() body) {
        console.log('body :', body);

        const email = body.email;
        const password = body.password;

        const user = await this.userService.register(email, password)

        return user;
    }
}

// class Human {
//     age;
//     height;
//     weight;

//     constructor(age, height, weight) {
//         this.age = age;
//         this.height = height;
//         this.weight = weight;
//     }

//     throw();
//     stepOn();
// }

// const human = new Human(20, 170, 70)

// human.age; //20
// human.height; //170
// human.stepOn()

