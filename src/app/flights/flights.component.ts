import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Data } from '@angular/router/src/config';
import { DatePipe } from '@angular/common/src/pipes/date_pipe';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  flights$: any;
  flight: any;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getAllFlights().subscribe(
      data => {
        this.flights$ = data;
        console.log(this.flights$);        
      })  

  }

}
