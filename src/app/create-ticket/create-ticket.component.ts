import { Component, OnInit } from '@angular/core';
import {Ticket} from '../Ticket';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  ticket: Ticket = new Ticket();

 

  constructor() { }

  ngOnInit() {
  }

  addTicket(ticket) {

    console.log(ticket)
    debugger
  }

}
