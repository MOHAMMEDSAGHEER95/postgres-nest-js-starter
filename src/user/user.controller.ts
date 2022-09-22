import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    
    @Get()
        async getAllUsers(){
            return await this.userService.findAll();
        }
    
    @Post()
    insertUser(
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string
        ): any{
        return this.userService.insertUser(firstName, lastName)
    }
    
}
