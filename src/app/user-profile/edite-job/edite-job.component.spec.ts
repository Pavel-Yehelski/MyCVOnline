import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeJobComponent } from './edite-job.component';

describe('EditeJobComponent', () => {
  let component: EditeJobComponent;
  let fixture: ComponentFixture<EditeJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
