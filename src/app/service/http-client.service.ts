import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/User';
import { Product } from 'src/model/Product';
import { Order } from 'src/model/Order';
import { CommandLigne } from 'src/model/CommandLigne';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
   
   }
   getUsers()
   {
     return this.httpClient.get<User[]>('http://localhost:8080/ejbws/webresources/api/v1/employee');
   }
   addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/ejbws/webresources/api/v1/employee/add', newUser);   
  }
  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:8080/ejbws/webresources/api/v1/employee/' + id);
  }
  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:8080/ejbws/webresources/api/v1/products');
  }
  addProduct(newProduct: Product) {
    console.log(newProduct);
    return this.httpClient.post<Product>('http://localhost:8080/ejbws/webresources/api/v1/products/add', newProduct);
  }
  deleteProduct(id) {
    return this.httpClient.delete<Product>('http://localhost:8080/ejbws/webresources/api/v1/products/' + id);
  }
  updateProduct(updatedProduct: Product) {
    console.log(updatedProduct);
    const rep =this.httpClient.post<Product>('http://localhost:8080/ejbws/webresources/api/v1/products/update', updatedProduct); 
    return rep;
  }
  getUser(id: number) {
    return this.httpClient.get<User>('http://localhost:8080/ejbws/webresources/api/v1/customers/' + id);   
  }
  addOrder(order : Order) {
    return this.httpClient.post<Order>('http://localhost:8080/ejbws/webresources/api/v1/orders/add', order);
  }
  getOrderByCustomerId(id : number){
    return this.httpClient.get<Order[]>('http://localhost:8080/ejbws/webresources/api/v1/orders/findByCustomerId/' + id);   

  }
  addCommandLigne(commandLigne : CommandLigne) {
    return this.httpClient.post<CommandLigne>('http://localhost:8080/ejbws/webresources/api/v1/commandLignes/add', commandLigne);
  }
  getCommandLignes() {
    return this.httpClient.get<CommandLigne[]>('http://localhost:8080/ejbws/webresources/api/v1/commandLignes');
  }
  getCommandLigneByOrder(id : number) {
    return this.httpClient.get<CommandLigne[]>('http://localhost:8080/ejbws/webresources/api/v1/commandLignes/findByOrder/'+ id);
  }
}
