import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin'
  password = ''
  invalidLogin = false
  retUrl:string="home";

  constructor(private router: Router,
    private loginservice: AuthentificationService ,  
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
                .subscribe(params => {
            this.retUrl = params.get('page'); 
        });

  }
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
       if (this.retUrl === null){
         this.retUrl = "home";
       }
       console.log(this.retUrl)
      this.router.navigate([this.retUrl])
      this.invalidLogin = false
    } else
      alert ("User Name or password incorrect")
      this.invalidLogin = true
  }

}
