import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { CommandLigne } from 'src/model/CommandLigne';
import { Order } from 'src/model/Order';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {


  @Input()
  order: Order;
  commandLignes : Array<CommandLigne>
  constructor(private httpClientService: HttpClientService , private router: Router) { }

  ngOnInit(): void {
    console.log(this.order);
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getCommandLigneByOrder(this.order.id).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response) {
    console.log(response)
    this.commandLignes = response;
    console.log(this.commandLignes)
  }

}
