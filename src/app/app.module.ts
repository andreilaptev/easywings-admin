import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { TicketsComponent } from './tickets/tickets.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FlightsComponent,
    CustomersComponent,
    OrdersComponent,
    TicketsComponent,
    FavoritesComponent,
    FlightdetailsComponent,
    CreateFlightComponent,
    OrderDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
