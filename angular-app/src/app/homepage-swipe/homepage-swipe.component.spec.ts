import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSwipeComponent } from './homepage-swipe.component';

describe('HomepageSwipeComponent', () => {
  let component: HomepageSwipeComponent;
  let fixture: ComponentFixture<HomepageSwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageSwipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
