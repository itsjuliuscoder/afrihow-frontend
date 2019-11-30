import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportBannerComponent } from './support-banner.component';

describe('SupportBannerComponent', () => {
  let component: SupportBannerComponent;
  let fixture: ComponentFixture<SupportBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
