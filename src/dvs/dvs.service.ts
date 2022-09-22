import { Injectable, Post } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm"
import { Repository } from 'typeorm';
import { UserDVS } from './dvs.entity';

@Injectable()
export class DvsService {
    constructor(
        @InjectRepository(UserDVS)
        private UserDVSRepository: Repository<UserDVS>
    ){}

    getTransactionById(id: string): Promise<UserDVS>{
        return this.UserDVSRepository.findOne({where:{id:id}, select:[`id`,`status`, `createdAt`]})
    }

    insertUserDVSRecord(body){
        const dvsObject  = this.UserDVSRepository.create({userid:body.userId,brandid:body.brandId,
            documenttype: body.documentType,
            documentnumber: body.documentNumber,
            cardnumber: body.cardNumber,
            status: body.status,
            dateofbirth: body.dateOfBirth,
            firstname: body.firstName, lastname: body.lastName,
            gender:body.gender, issuingcountry: body.issuingCountry,statecode:body.stateCode,unitno: body.unitNo,
            houseno:body.houseNo,streetname:body.streetName})
        return this.UserDVSRepository.save(dvsObject)
        
    }
}
