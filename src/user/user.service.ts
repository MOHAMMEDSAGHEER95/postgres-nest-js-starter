import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    findAll(): Promise<User[]>{
        return this.usersRepository.find();
    }

    insertUser(firstName: string, lastName: string){
        const userObject = this.usersRepository.create({firstname: firstName, lastname: lastName})
        
        return this.usersRepository.save(userObject)
    }

}

