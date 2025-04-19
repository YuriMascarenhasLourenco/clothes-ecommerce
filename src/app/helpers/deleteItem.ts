import { api } from "../services/api"

export const deleteItem=async(cartItemId:number)=>{
    const deletedItem= await api.delete<number>(`/cart/del-item/${cartItemId.toString()}`);
    console.log('deletedItem:', deletedItem)
}