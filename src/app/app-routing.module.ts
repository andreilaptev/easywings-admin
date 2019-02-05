import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { FlightsComponent } from 'src/app/flights/flights.component';
import { OrdersComponent } from 'src/app/orders/orders.component';
import { TicketsComponent } from 'src/app/tickets/tickets.component';
import { FavoritesComponent } from 'src/app/favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'flights',
    component: FlightsComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
