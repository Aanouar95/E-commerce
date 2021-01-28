import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/model/Product';
import { HttpClientService } from '../service/http-client.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-shopproduct',
  templateUrl: './shopproduct.component.html',
  styleUrls: ['./shopproduct.component.css']
})
export class ShopproductComponent implements OnInit {
  products: Array<Product>;
  productsRecieved: Array<Product>;
  cartProducts: any;
  totalCart :number; 


  constructor(private router: Router, private httpClientService: HttpClientService , private cartService: CartService ) { }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartContent();
    this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.products = new Array<Product>();
    //get books returned by the api call
    this.productsRecieved = response;
    for (const product of this.productsRecieved) {

      const bookwithRetrievedImageField = new Product();
      bookwithRetrievedImageField.id = product.id;
      bookwithRetrievedImageField.name = product.name;
      //populate retrieved image field so that book image can be displayed
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + product.picByte;
      bookwithRetrievedImageField.quantity = product.quantity;
      bookwithRetrievedImageField.price = product.price;
      bookwithRetrievedImageField.picByte = product.picByte;
      this.products.push(bookwithRetrievedImageField);
    }
  }
  addToCart(productId) {
    //retrieve book from books array using the book id
    let product = this.products.find(product => {
      return product.id === +productId;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data == "null" || data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected book to cart data
    cartData.push(product);
    //updated the cartBooks
    this.updateCartData(cartData);
    //save the updated cart data in fstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the book added to cart as true
    product.isAdded = true;

    this.totalCart = this.cartTotal();
  }

  updateCartData(cartData) {
    this.cartProducts = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartProducts = [];
    localStorage.clear();
  }
  cartTotal(){
    let total=0;
    for (let i = 0; i < this.cartProducts.length;i++) {
      total+=this.cartProducts[i].price
    }
    return total;
  }


}
