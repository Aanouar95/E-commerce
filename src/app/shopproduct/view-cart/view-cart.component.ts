import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Address } from 'src/model/Address';
import { User } from 'src/model/User';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Order } from 'src/model/Order';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  cartContent:any;
  cartTotal:number;
  user:User;
  address:Address;
  constructor(private cartService: CartService  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.address = new Address();
    this.cartContent = this.cartService.getCartContent();
    this.cartTotal = this.cartService.getCartTotal();
}
onClickSubmit(data) {
  this.user.address=this.getAddress(this.address);
  this.cartService.addCart(new Order());

    
}
getAddress(address:Address){
  return  address.address + " " + address.address2 + " " + address.zip + " " + address.state;
}
}