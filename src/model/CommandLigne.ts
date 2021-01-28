import { Order } from "./Order";
import { Product } from "./Product";

export class CommandLigne{
    id: number;
    product : Product;
    quantity:number;
    total : number;
    order:Order;
}