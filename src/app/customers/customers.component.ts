import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Data } from '@angular/router/src/config';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

customers$; any;
customer: any;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getAllCustomers().subscribe(
      data => {
        this.customers$ = data;
        console.log(this.customers$);        
      })  
  }

}
