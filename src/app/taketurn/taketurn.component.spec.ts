import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaketurnComponent } from './taketurn.component';

describe('TaketurnComponent', () => {
  let component: TaketurnComponent;
  let fixture: ComponentFixture<TaketurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaketurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaketurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
