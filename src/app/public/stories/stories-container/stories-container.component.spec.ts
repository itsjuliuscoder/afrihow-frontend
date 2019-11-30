import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesContainerComponent } from './stories-container.component';

describe('StoriesContainerComponent', () => {
  let component: StoriesContainerComponent;
  let fixture: ComponentFixture<StoriesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
