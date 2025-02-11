import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  openModal() {
    let modalElement = document.getElementById('searchModal');
    if (modalElement) {
      let modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  navigateToDetails() {
    // Navigate to details page with the search term
    this.router.navigate(['/details', this.searchTerm]);
  }
}
