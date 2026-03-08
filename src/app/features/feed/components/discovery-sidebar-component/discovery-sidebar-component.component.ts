import { Component } from '@angular/core';
import { FriendCardComponentComponent } from './components/friend-card-component/friend-card-component.component';

@Component({
  selector: '[app-discovery-sidebar-component]',
  imports: [FriendCardComponentComponent],
  templateUrl: './discovery-sidebar-component.component.html',
  styleUrl: './discovery-sidebar-component.component.css',
})
export class DiscoverySidebarComponentComponent {}
