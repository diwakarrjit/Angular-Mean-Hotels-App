import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRatingsComponent } from './hotel-ratings.component';

describe('HotelRatingsComponent', () => {
  let component: HotelRatingsComponent;
  let fixture: ComponentFixture<HotelRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
