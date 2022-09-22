import { stringify } from "querystring";
import { Column,PrimaryGeneratedColumn, Entity } from "typeorm";

export enum DocumentType {
    Passport = "passport",
    DriversLicense = "driverslicense"
}

export enum Gender {
    Male = "M",
    Female = "F",
    Othere = "X"
}

@Entity()
export class UserDVS{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    userid: string

    @Column()
    brandid: string

    @Column({
        type: "enum",
        enum: DocumentType,
    })
    documenttype:{
        required: true
    }

    @Column()
    cardnumber: string

    @Column({
        type: "date"
    })
    dateofbirth:{
        required: true
    }

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column({
        type:"enum",
        enum: Gender
    })
    gender:{
        required: true
    }

    @Column()
    issuingcountry: string
    
    @Column()
    statecode: string
    
    @Column()
    unitno: string
    
    @Column()
    houseno:string
    
    @Column()
    streetname: string
}
