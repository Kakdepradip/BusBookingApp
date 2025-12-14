import { Routes } from '@angular/router';

import { Search } from './Pages/search/search';
import { SearchResult } from './Pages/search-result/search-result';
import { MyBookings } from './Pages/my-bookings/my-bookings';
import { BookTicket } from './Pages/book-ticket/book-ticket';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: Search,
  },
  {
    path: "search-result/:from",
    component: SearchResult,
  },
  {
    path: 'book-tickit',
    component: BookTicket,
  },
  {
    path: 'my-bookings',
    component: MyBookings,
  },
];
