import { CartProduct } from "./cartProduct.interface";

export interface Cart{
  id:number,
  products: CartProduct[]
  total: number,
  discountedTotal: number,
  totalProducts: number,
  totalQuantity:number,
  userId: number,
}
