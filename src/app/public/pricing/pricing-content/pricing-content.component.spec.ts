import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingContentComponent } from './pricing-content.component';

describe('PricingContentComponent', () => {
  let component: PricingContentComponent;
  let fixture: ComponentFixture<PricingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
