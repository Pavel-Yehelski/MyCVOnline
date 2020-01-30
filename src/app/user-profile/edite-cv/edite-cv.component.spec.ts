import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeCvComponent } from './edite-cv.component';

describe('EditeCvComponent', () => {
  let component: EditeCvComponent;
  let fixture: ComponentFixture<EditeCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
