import { User } from "./User";

export class Order {
    id: number;
    order_date:Date;
    customer: User;
    total:number;
  }