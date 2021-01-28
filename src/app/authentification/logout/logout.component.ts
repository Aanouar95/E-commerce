import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authentocationService: AuthentificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.authentocationService.logOut();
    this.router.navigate(['login']);
  }
  

}
