import * as express from "express";
import * as cors from "cors";
import * as config from "config";
import {ProductRoutes} from './routes/product.routes'

export const connectExpressPort = () => {
    const PORT = config.get<number>("PORT");
    const app = express();
    app.use(express.json());
    app.use(
      cors({
        origin: [
          "http://localhost:3000",
          "http://localhost:8080",
          "http://localhost:4200",
        ],
      })
    );
   app.listen(PORT, () => console.log(`App running on ${PORT}`));
   return ProductRoutes(app)
   
}
