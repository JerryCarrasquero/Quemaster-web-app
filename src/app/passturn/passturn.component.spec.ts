import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassturnComponent } from './passturn.component';

describe('PassturnComponent', () => {
  let component: PassturnComponent;
  let fixture: ComponentFixture<PassturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
