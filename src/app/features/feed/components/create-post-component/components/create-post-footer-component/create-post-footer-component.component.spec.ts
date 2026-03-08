import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostFooterComponentComponent } from './create-post-footer-component.component';

describe('CreatePostFooterComponentComponent', () => {
  let component: CreatePostFooterComponentComponent;
  let fixture: ComponentFixture<CreatePostFooterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostFooterComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostFooterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
