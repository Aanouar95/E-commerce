import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/model/Order';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Array<Order>;
  selectedOrder: Order;
  action: string;

  constructor(private httpClientService: HttpClientService , private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshData();
  }
  handleSuccessfulResponse(response) {
    this.orders = response;
    console.log(response);
  }

  refreshData() {
    this.httpClientService.getOrderByCustomerId(14).subscribe(res=>{
      this.handleSuccessfulResponse(res);
    });
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedOrderId = params['id'];
        if (selectedOrderId) {
          this.selectedOrder = this.orders.find(order => order.id === +selectedOrderId);
        }
      }
    );
  }
  viewOrder(id: number){
    this.router.navigate(['orders'], {queryParams : {id, action: 'view'}});
  }

}
