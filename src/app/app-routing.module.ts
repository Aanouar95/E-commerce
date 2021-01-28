import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './admin/products/product.component';
import { UsersComponent } from './admin/users/users.component';
import { LoginComponent } from './authentification/login/login.component';
import { LogoutComponent } from './authentification/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { ShopproductComponent } from './shopproduct/shopproduct.component';
import { ViewCartComponent } from './shopproduct/view-cart/view-cart.component';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent , canActivate:[AuthGaurdService] ,data: { expectedPage: 'admin/users'}  },
  { path: 'admin/products', component: ProductComponent , canActivate:[AuthGaurdService] , data: { expectedPage: 'admin/products'}   },
  { path: 'shop', component: ShopproductComponent },
  { path: 'cart', component: ViewCartComponent , canActivate:[AuthGaurdService] , data: { expectedPage: 'cart'} },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent , canActivate:[AuthGaurdService]  },
  { path: 'orders', component: OrdersComponent , canActivate:[AuthGaurdService]  },
  { path: 'home', component: HomeComponent  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
