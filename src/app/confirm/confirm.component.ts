import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  startDate = '2025-05-10';
endDate = '2025-05-12';
startTime = '10:00';
endTime = '18:00';
paymentMethod = 'UPI';

confirmBooking() {
  console.log('Payment Mode:', this.paymentMethod);
  alert('Booking Confirmed!');
}

}
