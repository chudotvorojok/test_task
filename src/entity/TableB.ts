import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity({name : 'tablebs'})
export class TableB {

    @PrimaryColumn()
    id: number

    @Column({ type: 'datetime' })
    Date: Date

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
