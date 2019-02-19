import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { concat } from 'rxjs/internal/observable/concat';
import { Flight } from '../flight';
import { debug } from 'util';

@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.scss']
})
export class FlightdetailsComponent implements OnInit {

flightId: number;
flight$: any;

updatedFlight : Flight = new Flight();
receivedFlight: any;

toEdit: boolean = false;
editConfirm: boolean = false;
deleteConfirm: boolean = false;
updated: boolean= false;
deleted: boolean= false;

  constructor(private route: ActivatedRoute, private data : DataService) {
    this.route.params.subscribe( params => this.flightId = params.id );
   }

  ngOnInit() {

    this.data.getFlight(this.flightId).subscribe(
      data => this.flight$ = data         
    )};

    ///////////////// EDITING //////////////
    // Show Edit Form
    editRequest(flightId) {
      this.toEdit = ! this.toEdit;
    }

    // Show Edit Confirmation Window
    confirmEdit(){
       this.editConfirm = true;
     }

     // Cancel Update Function
     cancelUpdate() {
      this.editConfirm = false;
     }

    // Edit Flight Function
    editFlight() {

      console.log(this.flight$);
      //debugger;

      if (this.updatedFlight.flightName == undefined)
        this.updatedFlight.flightName = this.flight$.flightName;

      if (this.updatedFlight.departureCity == undefined)
        this.updatedFlight.departureCity = this.flight$.departureCity;

      if (this.updatedFlight.arrivalCity == undefined)
        this.updatedFlight.arrivalCity = this.flight$.arrivalCity;

      if (this.updatedFlight.departureTime == undefined)
        this.updatedFlight.departureTime = this.flight$.departureTime;

      if (this.updatedFlight.arrivalTime == undefined)
        this.updatedFlight.arrivalTime = this.flight$.arrivalTime;
      
      if (this.updatedFlight.ticketPrice == undefined)
        this.updatedFlight.ticketPrice = this.flight$.ticketPrice;

    /*  
      || newflight.departureCity== undefined || newflight.arrivalCity == undefined
        || newflight.departureTime == undefined|| newflight.arrivalTime == undefined
        || newflight.ticketPrice == undefined) {
*/
      this.data.updateFlight(this.flightId, this.updatedFlight)
        .subscribe(
          data => this.flight$ = data          
        )
        this.editConfirm = false;
        this.updated = true;
        location.reload();
    }

  
    /////// DELETION ///////////////

    // Confirm Deletion Window
    confirmDelete() {
      this.deleteConfirm = true;
    }

    // Cancel Delete
    cancelDelete() {
      this.deleteConfirm = false;
    }


    // Delete Flight function
    deleteFlight(flightId) {

      debugger;
      this.data.deleteFlight(this.flightId)
      .subscribe(
        data => this.flight$ = data
      )
      this.deleteConfirm = false;
      this.deleted = true;
      
    }

}
