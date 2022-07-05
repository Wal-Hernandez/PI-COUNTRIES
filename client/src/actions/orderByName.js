import { ORDER_BY_NAME } from "../types"

export default function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload,
      }
    }