import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { FlightsComponent } from 'src/app/flights/flights.component';
import { OrdersComponent } from 'src/app/orders/orders.component';
import { TicketsComponent } from 'src/app/tickets/tickets.component';
import { FavoritesComponent } from 'src/app/favorites/favorites.component';
import { CustomersComponent } from 'src/app/customers/customers.component';
import { FlightdetailsComponent } from 'src/app/flightdetails/flightdetails.component';
import { CreateFlightComponent } from 'src/app/create-flight/create-flight.component';
import { OrderDetailsComponent } from 'src/app/order-details/order-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'flights',
    component: FlightsComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'flight_details/:id',
    component: FlightdetailsComponent
  },
  {
    path: 'create_flight',
    component: CreateFlightComponent
  },
  {
    path: 'order_details/:id',
    component: OrderDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
