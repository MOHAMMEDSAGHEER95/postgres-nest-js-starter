import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from 'typeorm';
import { UserDVS } from './dvs.entity';

@Injectable()
export class DvsService {
    constructor(
        @InjectRepository(UserDVS)
        private UserDVSRepository: Repository<UserDVS>
    ){}

    insertUserDVSRecord(body){
        return body
    }
}
