import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPageNotFoundComponent } from './banner-page-not-found.component';

describe('BannerPageNotFoundComponent', () => {
  let component: BannerPageNotFoundComponent;
  let fixture: ComponentFixture<BannerPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
