import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBannerComponent } from './learning-banner.component';

describe('LearningBannerComponent', () => {
  let component: LearningBannerComponent;
  let fixture: ComponentFixture<LearningBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
