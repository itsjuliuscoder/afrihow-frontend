import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseBannerComponent } from './enterprise-banner.component';

describe('EnterpriseBannerComponent', () => {
  let component: EnterpriseBannerComponent;
  let fixture: ComponentFixture<EnterpriseBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
