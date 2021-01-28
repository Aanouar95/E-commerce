import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommandLigne } from 'src/model/CommandLigne';
import { Order } from 'src/model/Order';
import { Product } from 'src/model/Product';
import { User } from 'src/model/User';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartProducts: any;

  constructor(private httpClientService: HttpClientService , private router: Router) { }

  getCartContent(){
    let data = localStorage.getItem('cart');
    
    if (data == "null" || data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }
    return this.cartProducts;
  }
  getCartTotal(){
    let total=0;
    for (let i = 0; i < this.cartProducts.length;i++) {
      total+=this.cartProducts[i].price
    }
    console.log(total)
    return total;
  }
  addCart(order : Order){
    let returnedUser :User;
    this.httpClientService.getUser(14).subscribe(user =>{
      order.customer = user;
      this.httpClientService.addOrder(order).subscribe( 
        (order) => {
          console.log(order)
          this.addCommandLigne(this.cartProducts,order);
          this.resetCart();
          alert("Votre commande a été envoyé avec succes ");
          this.router.navigate(['/orders']);
        }
      );
    });
    
  }
  addCommandLigne(cartContent:Array<Product> , order :Order){
    for (let i =0 ; i < cartContent.length ; i++){
      let newLigne = new CommandLigne();
      newLigne.order = order;
      newLigne.product = cartContent[i];
      newLigne.quantity = 1;
      newLigne.total = cartContent[i].price;
      console.log(newLigne)
      this.httpClientService.addCommandLigne(newLigne).subscribe(res =>{
        return res;
      });
    }
    
  }
  resetCart(){
    this.cartProducts = [];
    localStorage.removeItem('cart');
  }
  
  
}
