import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity({name : 'tablecs'})
export class TableC {

    @PrimaryColumn()
    id: number

    @Column({type: 'date'})
    Date: string

    @Column()
    Source: string

    @Column()
    Campaign: string

    @Column()
    Ad: string
    
    @Column()
    Install: number

    @Column()
    Purchase: number
}
