import "reflect-metadata"
import { DataSource } from "typeorm"
import { TableA } from "./entity/TableA"
import { TableB } from "./entity/TableB"
import { TableC } from "./entity/TableC"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Radugailislon123",
    database: "task",
    synchronize: false,
    logging: false,
    entities: [TableA, TableB, TableC],
    migrations: [],
    subscribers: [],
})
