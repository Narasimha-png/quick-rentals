import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  @Input()
  booking:any ;
paymentMethod = 'UPI';

confirmBooking() {
  console.log('Payment Mode:', this.paymentMethod);
  alert('Booking Confirmed!');
}

}
