import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Data } from '@angular/router/src/config';
import { Flight } from '../flight';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.scss']
})
export class CreateFlightComponent implements OnInit {

  /*flightNumber: any;
  departureCity: string;
  arrivalCity: string;
  departureDate: string;
  arrivalDate: string;
  isDirect: boolean;
  price: number;*/

  added: boolean = false;

  newFlight : Flight = new Flight();

  receivedFlight: Flight;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  addFlight(newflight: Flight) {

    //debugger;

    /*
    this.data.addFlight(newflight) 
      .subscribe(
        (data: Flight) => {this.receivedFlight=data; 
         // this.done=true;
        },
          error => console.log(error)        
      );*/
      this.added = true;
  }

}
