import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Data } from '@angular/router/src/config';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

tickets$: any;
ticket: any;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getAllTickets().subscribe(
      data => {
        this.tickets$ = data;
        console.log(this.tickets$);        
      })  
  }

}
