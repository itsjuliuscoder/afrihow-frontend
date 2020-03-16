import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectStoriesSingleComponent } from './subject-stories-single.component';

describe('SubjectStoriesSingleComponent', () => {
  let component: SubjectStoriesSingleComponent;
  let fixture: ComponentFixture<SubjectStoriesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectStoriesSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectStoriesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
