import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { search } from '../../Model/model';

@Component({
  selector: 'app-search-result',
  imports: [],
  templateUrl: './search-result.html',
  styleUrl: './search-result.css',
})
export class SearchResult {
  activatedRoute=inject(ActivatedRoute)
   searchobj: search = new search();

   constructor(){
    this.activatedRoute.params.subscribe((res:any)=>{

      this.searchobj.fromLocationId=res.from;
      this.searchobj.toLocationId=res.to;
      this.searchobj.date=res.date;

    })
   }

}
