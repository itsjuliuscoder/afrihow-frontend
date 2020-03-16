import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsContentComponent } from './faqs-content.component';

describe('FaqsContentComponent', () => {
  let component: FaqsContentComponent;
  let fixture: ComponentFixture<FaqsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
