import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity({name : 'tableas'})
export class TableA {

    @PrimaryColumn()
    id: number

    @Column({type: 'date'})
    Date: string

    @Column()
    Campaign: string

    @Column()
    Ad: string

    @Column()
    Impression: string

    @Column()
    Click: number

    @Column()
    Cost: number
}
