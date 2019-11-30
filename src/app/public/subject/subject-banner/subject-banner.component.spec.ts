import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBannerComponent } from './subject-banner.component';

describe('SubjectBannerComponent', () => {
  let component: SubjectBannerComponent;
  let fixture: ComponentFixture<SubjectBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
