import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserDVSDto } from './dvs.dto';
import { UserDVS } from './dvs.entity';
import { DvsService } from './dvs.service';

@Controller('dvs')
export class DvsController {
    constructor(private dvsService: DvsService){}

    @Get(':id')
    gettransaction(@Param('id') id: string): Promise<UserDVS>{
        return this.dvsService.getTransactionById(id)
    }
    
    @Post()
    @UsePipes(ValidationPipe)
    insertDVS(@Body() body: UserDVSDto){
        return this.dvsService.insertUserDVSRecord(body)
    }
}
