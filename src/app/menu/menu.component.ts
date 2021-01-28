import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/model/Product';
import { AuthentificationService } from '../service/authentification.service';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 
  constructor(public loginService:AuthentificationService) { }

  ngOnInit(): void {
    
  }
 

}
