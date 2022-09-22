
import { Column,PrimaryGeneratedColumn, Entity, CreateDateColumn } from "typeorm";

export enum DocumentType {
    Passport = "passport",
    DriversLicense = "driverslicense"
}

export enum Gender {
    Male = "M",
    Female = "F",
    Othere = "X"
}

export enum Status {
    Verified = "verified",
    Limited = "limited",
    Failed = "failed",
    Error = "error",
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
    documentnumber: string

    @Column()
    cardnumber: string

    @Column({
        type:"enum",
        enum: Status
    })
    status:{
        required: true
    }

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

    @CreateDateColumn()
    createdAt: Date;
}
