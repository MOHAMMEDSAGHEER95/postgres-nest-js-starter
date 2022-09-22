import { Body, Controller, Get, Post } from '@nestjs/common';
import { DvsService } from './dvs.service';

@Controller('dvs')
export class DvsController {
    constructor(private dvsService: DvsService){}
    
    @Post()
    insertDVS(@Body() body: Object){
        return this.dvsService.insertUserDVSRecord(body)
    }
}
