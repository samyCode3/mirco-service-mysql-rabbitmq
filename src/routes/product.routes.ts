import { Express, Request, Response, NextFunction } from "express";
import {
  createGetProductController,
  createProductController,
  DeleteProductController,
  getProductByIdController,
  LikeProductController,
  updateProductById,
} from "../controllers/products.controller";
export const ProductRoutes = (app: Express) => {
  app.get("/healthCheck", (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(200);
    next();
  });

  //create product
  app.post("/api/product", createProductController);
  //Get All product
  app.get("/api/product", createGetProductController);
  //Get product by Id
  app.get("/api/product/:id", getProductByIdController);
  //Update Product by Id
  app.put("/api/product/:id", updateProductById);
  //Delete Product By Id
  app.delete('/api/product/:id', DeleteProductController)
  //Like a product by Id
  app.post('/api/product/:id/likes', LikeProductController)
};
