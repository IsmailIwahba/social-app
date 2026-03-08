import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedFriendsMobileComponentComponent } from './suggested-friends-mobile-component.component';

describe('SuggestedFriendsMobileComponentComponent', () => {
  let component: SuggestedFriendsMobileComponentComponent;
  let fixture: ComponentFixture<SuggestedFriendsMobileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestedFriendsMobileComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestedFriendsMobileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
