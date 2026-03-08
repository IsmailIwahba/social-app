import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLeftComponentComponent } from './sidebar-left-component.component';

describe('SidebarLeftComponentComponent', () => {
  let component: SidebarLeftComponentComponent;
  let fixture: ComponentFixture<SidebarLeftComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarLeftComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarLeftComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
