import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostHeaderComponentComponent } from './create-post-header-component.component';

describe('CreatePostHeaderComponentComponent', () => {
  let component: CreatePostHeaderComponentComponent;
  let fixture: ComponentFixture<CreatePostHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostHeaderComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
