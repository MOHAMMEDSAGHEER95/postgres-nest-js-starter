import { IsNotEmpty, IsString, IsEnum, IsDateString } from "class-validator"
import { DocumentType, Gender, Status } from "./dvs.entity"

export class UserDVSDto{
    @IsString()
    @IsNotEmpty()
    userId: string
 
    @IsString()
    @IsNotEmpty()
    brandId: string
 
    @IsEnum(DocumentType)
    @IsNotEmpty()
    documentType: string
 
    @IsString()
    @IsNotEmpty()
    documentNumber: string
 
    @IsString()
    cardNumber: string

    @IsEnum(Status)
    @IsNotEmpty()
    status: string
 
    @IsDateString()
    @IsNotEmpty()
    dateOfBirth: string
 
    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    @IsNotEmpty()
    lastName: string
 
    @IsEnum(Gender)
    @IsNotEmpty()
    gender: string
 
    @IsString()
    @IsNotEmpty()
    issuingCountry: string
 
    @IsString()
    @IsNotEmpty()
    unitNo: string
 
    @IsString()
    @IsNotEmpty()
    stateCode: string
 
    @IsString()
    @IsNotEmpty()
    houseNo: string
    
    @IsString()
    @IsNotEmpty()
    streetName: string
   
}