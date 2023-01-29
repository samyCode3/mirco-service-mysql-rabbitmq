import {
  getProduct,
  createProduct,
  getProductById,
  updateProductServices,
  DeleteProductServices,
  LikeProductService,
} from "../services/products.service";
import { Express, Request, Response, NextFunction } from "express";

//create Product
export const createProductController = async (req: Request, res: Response) => {
  const create = await createProduct(req.body);
  if (!create) return res.status(401).json({ ok: false, msg: "Not Created" });
  else return res.status(201).json({ ok: true, create });
};
// Get All Product
export const createGetProductController = async (
  req: Request,
  res: Response
) => {
    await getProduct()
    .then((getAllProduct) => {
      if (getAllProduct)
        return res.status(200).json({ ok: true, getAllProduct });
    })
    .catch((e: any) => {
      if (e)
        return res.status(500).json({ ok: false, msg: "Something went weong" });
    });
};
//Get All Product Id

export const getProductByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const findProduct = await getProductById({ id: id });
  if (!findProduct)
    return res.status(404).json({ ok: false, msg: "Product Not found" });
  else return res.status(200).json({ ok: true, findProduct });
};
//Update Product
export const updateProductById = async (req: Request, res: Response) => {
  const updateProduct = await updateProductServices(
    { id: req.params.id },
    req.body
  );
  if (!updateProduct)
    return res
      .status(403)
      .json({ ok: false, msg: "Unable to update this product" });
  else return res.status(200).json({ ok: true, updateProduct });
};

//delete Product
export const DeleteProductController = async (req: Request, res: Response) => {
  const deleteProduct = await DeleteProductServices(req.body);
  if (!deleteProduct)
    return res
      .status(403)
      .json({ ok: false, msg: "Unable to delete this product" });
      else
      return res.status(200).json({ok: true, msg: 'Product has been deleted'})
};
//Like Product
export const LikeProductController = async (req: Request, res: Response) => {
const likes = await LikeProductService({id: req.params.id})
if(!likes)
return res
.status(403)
.json({ ok: false, msg: "Unable to like this product" });
else res.status(200).json({ok: true})
}
