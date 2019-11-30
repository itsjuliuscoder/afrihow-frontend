import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportContentComponent } from './support-content.component';

describe('SupportContentComponent', () => {
  let component: SupportContentComponent;
  let fixture: ComponentFixture<SupportContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
