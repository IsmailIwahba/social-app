import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-posts',
  imports: [],
  templateUrl: './profile-posts.component.html',
  styleUrl: './profile-posts.component.css',
})
export class ProfilePostsComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
