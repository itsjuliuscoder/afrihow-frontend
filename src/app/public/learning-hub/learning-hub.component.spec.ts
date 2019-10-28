import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningHubComponent } from './learning-hub.component';

describe('LearningHubComponent', () => {
  let component: LearningHubComponent;
  let fixture: ComponentFixture<LearningHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
