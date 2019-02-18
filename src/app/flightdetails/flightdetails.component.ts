import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { concat } from 'rxjs/internal/observable/concat';
import { Flight } from '../flight';

@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.scss']
})
export class FlightdetailsComponent implements OnInit {

flightId: number;
flight$: object;

updatedFlight : Flight = new Flight();
receivedFlight: any;

toEdit: boolean = false;

  constructor(private route: ActivatedRoute, private data : DataService) {
    this.route.params.subscribe( params => this.flightId = params.id );
   }

  ngOnInit() {

    this.data.getFlight(this.flightId).subscribe(
      data => this.flight$ = data         
    )};

    editRequest(flightId) {
      this.toEdit = ! this.toEdit;


    }

    editFlight() {

      console.log(this.flightId);
      debugger;

      this.data.updateFlight(this.flightId, this.updatedFlight)
        .subscribe(
          data => this.flight$ = data
        )

    }

    deleteFlight(flightId) {

      debugger;
    }

}
