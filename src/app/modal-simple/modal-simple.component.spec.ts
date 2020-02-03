import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalComponent } from './modal-simple.component';

describe('ModalSimpleComponent', () => {
  let component: MyModalComponent;
  let fixture: ComponentFixture<MyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
