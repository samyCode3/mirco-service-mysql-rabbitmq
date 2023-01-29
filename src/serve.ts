import { AppDataSource } from "./connection/dbConfig";
import { connectExpressPort } from "./connectPort";
export const Conn = async(): Promise<void> => {
 try {
  await AppDataSource;
  await connectExpressPort()
 } catch (error) {
    return console.log(error.message)
 }    
   
};
Conn() 