import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseContentComponent } from './enterprise-content.component';

describe('EnterpriseContentComponent', () => {
  let component: EnterpriseContentComponent;
  let fixture: ComponentFixture<EnterpriseContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
