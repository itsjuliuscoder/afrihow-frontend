import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyContainerComponent } from './privacy-container.component';

describe('PrivacyContainerComponent', () => {
  let component: PrivacyContainerComponent;
  let fixture: ComponentFixture<PrivacyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
