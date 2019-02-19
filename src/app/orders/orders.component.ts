import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Data } from '@angular/router/src/config';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private data: DataService) { }

  orders$: any;
  order: any;

  ngOnInit() {
    this.data.getAllOrders().subscribe(
      data => {
        this.orders$ = data;
        console.log(this.orders$);        
      })  
  }

}
