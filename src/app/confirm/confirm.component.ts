import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

@Input()
booking:any ;
paymentMethod = 'UPI';
bookingStatusString:string = '' ;

constructor(private http:HttpClient) { }

confirmBooking() {

  this.booking.pickUpDateTime = this.dateTimeFormat(this.booking.pickUpDateTime , this.booking.pickUpDateTime.includes('PM'));
  this.booking.dropOffDateTime = this.dateTimeFormat(this.booking.dropOffDateTime , this.booking.dropOffDateTime.includes('PM'));
  console.log(JSON.stringify(this.booking)) ;
  this.http.post('http://localhost:8080/api/v1/bookvehicle', this.booking, { responseType: 'text' })
 .subscribe(
  response => {
    console.log('Booking confirmed:', response);
    
    alert('Booking confirmed successfully!');
    this.bookingStatusString = 'Booking confirmed:', response ;
  },
  error => {
    console.error('Error confirming booking:', error);
    alert('Error confirming booking. Please try again later.');
  }
);

}

dateTimeFormat(dateTime: string, isPm: boolean ): string {
  dateTime = dateTime.substring(0, dateTime.length - 4) ;
  let date = new Date(dateTime);
  if(isPm) {
    date.setHours(date.getHours() + 12);
  }
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`.replace(' ','T');
}

}
