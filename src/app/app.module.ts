import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import {FormsModule} from '@angular/forms';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { ProductComponent } from './admin/products/product.component';
import { AddproductComponent } from './admin/products/addproduct/addproduct.component';
import { ViewproductComponent } from './admin/products/viewproduct/viewproduct.component';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { ShopproductComponent } from './shopproduct/shopproduct.component';
import { ViewCartComponent } from './shopproduct/view-cart/view-cart.component';
import { LoginComponent } from './authentification/login/login.component';
import { LogoutComponent } from './authentification/logout/logout.component';
import { OrdersComponent } from './orders/orders.component';
import { VieworderComponent } from './orders/vieworder/vieworder.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    ProductComponent,
    AddproductComponent,
    ViewproductComponent,
    ShopproductComponent,
    ViewCartComponent,
    LoginComponent,
    LogoutComponent,
    OrdersComponent,
    VieworderComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2ImgMaxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
