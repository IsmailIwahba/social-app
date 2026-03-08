import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavigationComponentComponent } from './mobile-navigation-component.component';

describe('MobileNavigationComponentComponent', () => {
  let component: MobileNavigationComponentComponent;
  let fixture: ComponentFixture<MobileNavigationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavigationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNavigationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
