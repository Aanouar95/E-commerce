import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthentificationService) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const expectedPage = route.data.expectedPage;
      if (this.authService.isUserLoggedIn())
        return true;
      this.router.navigate(['login'] , { queryParams: { page: expectedPage } });
      return false;
     
  
    }
}
