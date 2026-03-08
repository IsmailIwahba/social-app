import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProfilePostsComponent } from '../profile/components/profile-posts/profile-posts.component';
import { MobileNavigationComponentComponent } from './components/mobile-navigation-component/mobile-navigation-component.component';
import { CreatePostComponentComponent } from './components/create-post-component/create-post-component.component';
import { SuggestedFriendsMobileComponentComponent } from './components/suggested-friends-mobile-component/suggested-friends-mobile-component.component';
import { DiscoverySidebarComponentComponent } from './components/discovery-sidebar-component/discovery-sidebar-component.component';

@Component({
  selector: 'app-feed',
  imports: [
    RouterLink,
    RouterLinkActive,
    ProfilePostsComponent,
    MobileNavigationComponentComponent,
    CreatePostComponentComponent,
    SuggestedFriendsMobileComponentComponent,
    DiscoverySidebarComponentComponent,
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {}
