import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverySidebarComponentComponent } from './discovery-sidebar-component.component';

describe('DiscoverySidebarComponentComponent', () => {
  let component: DiscoverySidebarComponentComponent;
  let fixture: ComponentFixture<DiscoverySidebarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverySidebarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverySidebarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
