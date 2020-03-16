import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingBannerComponent } from './pricing-banner.component';

describe('PricingBannerComponent', () => {
  let component: PricingBannerComponent;
  let fixture: ComponentFixture<PricingBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
