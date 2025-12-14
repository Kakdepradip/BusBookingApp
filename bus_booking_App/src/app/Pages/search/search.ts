import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { search } from '../../Model/model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {
  http = inject(HttpClient);
  locationList: any[] = [];
  searchobj: search = new search();
  router=inject(Router);

  ngOnInit(): void {
    debugger;
    this.getAlllocation();
  }
  getAlllocation() {
    debugger;
    this.http
      .get('https://api.freeprojectapi.com/api/BusBooking/GetBusLocations')
      .subscribe((res: any) => {
        debugger;
        this.locationList = res;
      });
  }
  searchBus() {
    this.router.navigate([
    '/search-result',
    this.searchobj.fromLocationId,
    this.searchobj.toLocationId,
    this.searchobj.date
  ]);
  /**  this.http
      .get(
        'https://api.freeprojectapi.com/api/BusBooking/searchBus2?fromLocation=' +
          this.searchobj.fromLocationId +
          '&toLocation=' +
          this.searchobj.toLocationId +
          '&date=' +
          this.searchobj.date +
          ''
      )
      .subscribe((res: any) => {});**/

  }
}
