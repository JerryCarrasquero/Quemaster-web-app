import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingpageComponent } from './missingpage.component';

describe('MissingpageComponent', () => {
  let component: MissingpageComponent;
  let fixture: ComponentFixture<MissingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
