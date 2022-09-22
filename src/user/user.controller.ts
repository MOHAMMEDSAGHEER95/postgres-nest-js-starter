import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    
    @Get()
        async getAllUsers(){
            return await this.userService.findAll();
        }
    
    @Post()
    @UsePipes(ValidationPipe)
    insertUser(
        @Body() body: CreateUserDto,
        ): any{
        return this.userService.insertUser(body)
    }
    
}
