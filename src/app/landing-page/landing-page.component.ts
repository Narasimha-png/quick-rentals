import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  twelveHourRange: string[] = [];
  minutes: string[] = ['00', '30'];
  meridiems: string[] = ['AM', 'PM'];
  
  startDate: string = '';
  endDate: string = '';
  
  startHour: string = '';
  startMinute: string = '';
  startMeridiem: string = '';
  
  endHour: string = '';
  endMinute: string = '';
  endMeridiem: string = '';

  constructor(private router: Router) { }
  
  ngOnInit() {
   
    for (let i = 1; i <= 12; i++) {
      this.twelveHourRange.push(i.toString().padStart(2, '0'));
    }
  
    const now = new Date();
  
  
    const rounded = new Date(now);
    rounded.setMinutes(now.getMinutes() <= 30 ? 30 : 0);
    if (now.getMinutes() > 30) rounded.setHours(rounded.getHours() + 1);
    rounded.setSeconds(0);
    rounded.setMilliseconds(0);
  
    const nextDay = new Date(rounded);
    nextDay.setDate(nextDay.getDate() + 1);
  
    this.startDate = this.formatDate(rounded);
    this.endDate = this.formatDate(nextDay);
  
    const startTime = this.format12HourTime(rounded);
    this.startHour = startTime.hour;
    this.startMinute = startTime.minute;
    this.startMeridiem = startTime.meridiem;
  
    this.endHour = startTime.hour;
    this.endMinute = startTime.minute;
    this.endMeridiem = startTime.meridiem;
  }
  
  openCatalog():void{
    let startDateTime = this.startDate + ' ' + this.startHour + ':' + this.startMinute + ' ' + this.startMeridiem;
    let endDateTime = this.endDate + ' ' + this.endHour + ':' + this.endMinute + ' ' + this.endMeridiem;
    console.log('Start Date:', startDateTime);
    console.log('End Date:', endDateTime);
  
      this.router.navigate(['/avilablebikes'], { queryParams: { startDate: startDateTime, endDate: endDateTime } });
  }
 
  formatDate(date: Date): string {
    const yyyy = date.getFullYear();
    const mm = (date.getMonth() + 1).toString().padStart(2, '0');
    const dd = date.getDate().toString().padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
  
  
  format12HourTime(date: Date): { hour: string; minute: string; meridiem: string } {
    let hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');
    const meridiem = hour >= 12 ? 'PM' : 'AM';
  
    hour = hour % 12;
    hour = hour ? hour : 12; 
    return {
      hour: hour.toString().padStart(2, '0'),
      minute,
      meridiem
    };
  }
  
  
}
