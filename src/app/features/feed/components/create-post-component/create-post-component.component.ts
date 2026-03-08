import { Component } from '@angular/core';
import { CreatePostHeaderComponentComponent } from './components/create-post-header-component/create-post-header-component.component';
import { CreatePostContentComponentComponent } from './components/create-post-content-component/create-post-content-component.component';
import { CreatePostFooterComponentComponent } from './components/create-post-footer-component/create-post-footer-component.component';

@Component({
  selector: '[app-create-post-component]',
  imports: [
    CreatePostHeaderComponentComponent,
    CreatePostContentComponentComponent,
    CreatePostFooterComponentComponent,
  ],
  templateUrl: './create-post-component.component.html',
  styleUrl: './create-post-component.component.css',
})
export class CreatePostComponentComponent {
  showReactions: boolean = false;
  toggleReactions() {
    this.showReactions = !this.showReactions;
  }
}
