import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
    const queryRunner = await AppDataSource.createQueryRunner()
    let result = await queryRunner.manager.query(
        `SELECT Date, Source, Campaign, Ad, SUM(Click), SUM(Cost), SUM(Install), SUM(Purchase)
        FROM(
        SELECT Date, 'Source A' as Source, Campaign, Ad, Click, Cost, null as Install, null as Purchase 
        FROM tableas
        UNION
        SELECT cast(date as date), 'Source B' as Source, Campaign, Ad, Click, Cost , null as Install,  null as Purchase 
        FROM tablebs
        UNION
        SELECT Date, Source, Campaign, Ad, null, null, Install, purchase 
        FROM tablecs
        ) as t
        GROUP BY Date,Source,Campaign,Ad`
    );
    console.log(result)    
}).catch(error => console.log(error))
