import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsBannerComponent } from './terms-banner.component';

describe('TermsBannerComponent', () => {
  let component: TermsBannerComponent;
  let fixture: ComponentFixture<TermsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
