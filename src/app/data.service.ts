import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from './flight';

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
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/flights/'+ flightId); 
  }

  addFlight(flight){    

    const body = {flightName: flight.flightNumber, 
                  departureCity: flight.departureCity, 
                  arrivalCity: flight.arrivalCity, 
                  departureTime: flight.departureDate, 
                  arrivalTime: flight.arrivalDate, 
                  direct: flight.isDirect, 
                  ticketPrice: flight.price
                };
       return this.http.post('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/Flights', body); 
       //return this.http.post('https://localhost:44310/api/flights', body); 

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
