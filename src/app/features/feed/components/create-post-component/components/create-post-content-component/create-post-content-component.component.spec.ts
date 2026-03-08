import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostContentComponentComponent } from './create-post-content-component.component';

describe('CreatePostContentComponentComponent', () => {
  let component: CreatePostContentComponentComponent;
  let fixture: ComponentFixture<CreatePostContentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostContentComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
