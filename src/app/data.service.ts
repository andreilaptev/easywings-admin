import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllFlights() {
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/flights');
  }

  getFlight(flightId) {
   // console.log(this.flight$)
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/flights/'+ flightId)
  }

  getAllCustomers() {
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/customers');
  }

  getCustomer(customerId) {
   // console.log(this.flight$)
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/customers/'+ customerId)
  }

  getAllOrders() {
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/orders');
  }

  getOrder(orderId) {
   // console.log(this.flight$)
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/orders/'+ orderId)
  }

  getAllTickets() {
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/tickets');
  }

  getTicket(ticketId) {
   // console.log(this.flight$)
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/tickets/'+ ticketId)
  }

  getAllFavorites() {
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/favorites');
  }

  getFavorite(favoriteId) {
   // console.log(this.flight$)
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/flifavoritesghts/'+ favoriteId)
  }

}
