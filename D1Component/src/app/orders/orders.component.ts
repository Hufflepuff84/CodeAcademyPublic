import { Component, OnInit } from '@angular/core';
import {orders} from './orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  private orders: any = orders;
  constructor() { }

  ngOnInit() {
  }

}
