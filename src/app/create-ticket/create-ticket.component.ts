import { Component, OnInit } from '@angular/core';
import { Ticket} from '../Ticket';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Data } from '@angular/router/src/config';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  ticket: any;
  added = false;
  warning: boolean;
 

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
  }

  addTicket(ticket) {

    this.data.addTicket(ticket).subscribe(
      data => this.ticket = data
    )
    this.added = true;
    console.log(ticket)
    
  }

}
