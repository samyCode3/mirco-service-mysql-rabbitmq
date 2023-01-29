
import { AppDataSource } from "../connection/dbConfig";
import { Product } from "../entity/product";
import { RabbitConnections } from "../external";
const product = AppDataSource.getRepository(Product)
// Create Product Services
export const createProduct = async (payload: any) => {
      const create = await product.create(payload)
      const createMyProduct = await product.save(create)
      await RabbitConnections(createMyProduct)
      return createMyProduct
}

// Get Product
export const getProduct = async() => {
   const myProduct = await product.find()
    return myProduct
} 
//Get Product by Id

export const getProductById = async (payload: any) =>{
      try {
            const findProduct = await product.findOneBy(payload)
            return findProduct
      } catch (error: any) {
            return console.log(error.message)
      }
    
}
// update product 
export const updateProductServices =async (payload:any, body: any) => {
      try {
            const updateProduct = await product.findOneBy(payload)
            product.merge(updateProduct, body)
            const updatedProduct = await product.save(updateProduct)
            await RabbitConnections(updatedProduct)
            return updatedProduct
      } catch (error: any) {
            return console.log(error.message)
      }
}
// Delete product 
export const DeleteProductServices =  async (payload: any) => {
      try {
            const deleteProduct = await product.delete(payload)
            return deleteProduct
      } catch (error: any) {
            return console.log(error.message)
      }
    
}
//Like Services 
export const LikeProductService = async (payload: any) => {
      try {
            const products = await product.findOneBy(payload)
            products.likes++
            const LikeddProduct = await product.save(products)
            return LikeddProduct
      } catch (error: any) {
            return console.log(error.message)
      }
}