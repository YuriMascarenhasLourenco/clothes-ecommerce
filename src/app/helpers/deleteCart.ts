import { cartProductType } from "@/types/cartProductType";
import { api } from "../services/api"

export const deleteCart=async(data:cartProductType[])=>{
    const cartId= data[0].cartId as number
    console.log('cartId:', cartId)
    const deletedCart= await api.delete<number>(`/cart/${data[0].cartId}`);
    console.log('deleted cart:', deleteCart);
}