import { Component, OnInit } from '@angular/core';
import { AvailableBikesService } from './available-bikes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  availableBikes: any[] = [];
  selectedBike: any = null;
  errorMessage!: string ;
  startDateTime: string = ''; 
  endDateTime: string = '';
  selected:boolean = false ;
  exportBike:any = null ;
  searchFilter: string = '';
  searchText: string = '';

  constructor(private bikeService: AvailableBikesService , private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.getAvailableBikes();
    this.extractDateTime();
  }

  extractDateTime(){
    this.route.queryParamMap.subscribe(params => {
      this.startDateTime = params.get('startDate') || '';
      this.endDateTime = params.get('endDate') || '';

      console.log('Start Date and Time:', this.startDateTime);
      console.log('End Date and Time:', this.endDateTime);
    } );
  }
  getAvailableBikes() {
    this.bikeService.getAvailableBikes().subscribe(
      (data: any[]) => {
        this.availableBikes = data;
        console.log('Available bikes:', this.availableBikes);
      },
      (error) => {
        console.error('Error fetching available bikes:', error);
        this.errorMessage = 'Error fetching available bikes. Please try again later.';
      }
    );
    console.log('Fetching available bikes...');

  }

  bookBike(bike:any ){
    this.selected = true ;
    this.exportBike = {
      
      pickUpDateTime: this.startDateTime,
      dropOffDateTime: this.endDateTime,
      vehicle: bike,
    }
  }
  
  

}
