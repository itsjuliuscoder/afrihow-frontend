import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StpriesComponent } from './stpries.component';

describe('StpriesComponent', () => {
  let component: StpriesComponent;
  let fixture: ComponentFixture<StpriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StpriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StpriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
