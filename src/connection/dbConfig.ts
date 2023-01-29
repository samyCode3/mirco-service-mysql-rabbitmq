import '../utils/dotenvConfig'
import "reflect-metadata"
import { DataSource } from "typeorm"

// import * as entity from '../entity'
export const AppDataSource = new DataSource({
            "type" : "mysql",
            "host" :process.env.HOST,
            "username" :process.env.USER,
            "password" :process.env.PASS,
            "database" :process.env.DATABASE,
            entities: [
                "src/entity/*.ts"
            ],
            synchronize: true,
            logging: false,
        })
   AppDataSource.initialize().then((db) => {
      if(db) {
  
        console.log('Database is working and connected')
      }
   })

   
