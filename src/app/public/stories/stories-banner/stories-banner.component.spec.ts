import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesBannerComponent } from './stories-banner.component';

describe('StoriesBannerComponent', () => {
  let component: StoriesBannerComponent;
  let fixture: ComponentFixture<StoriesBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
