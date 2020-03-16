import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectStoriesComponent } from './subject-stories.component';

describe('SubjectStoriesComponent', () => {
  let component: SubjectStoriesComponent;
  let fixture: ComponentFixture<SubjectStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
