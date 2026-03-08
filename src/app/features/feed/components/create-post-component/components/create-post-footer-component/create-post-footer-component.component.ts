import { Component } from '@angular/core';

@Component({
  selector: '[app-create-post-footer-component]',
  imports: [],
  templateUrl: './create-post-footer-component.component.html',
  styleUrl: './create-post-footer-component.component.css',
})
export class CreatePostFooterComponentComponent {
  showReactions: boolean = false;
  toggleReactions() {
    this.showReactions = !this.showReactions;
  }
}
