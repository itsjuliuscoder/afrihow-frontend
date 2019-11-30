import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordContentComponent } from './forgot-password-content.component';

describe('ForgotPasswordContentComponent', () => {
  let component: ForgotPasswordContentComponent;
  let fixture: ComponentFixture<ForgotPasswordContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
