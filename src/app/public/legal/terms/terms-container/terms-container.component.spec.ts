import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsContainerComponent } from './terms-container.component';

describe('TermsContainerComponent', () => {
  let component: TermsContainerComponent;
  let fixture: ComponentFixture<TermsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
