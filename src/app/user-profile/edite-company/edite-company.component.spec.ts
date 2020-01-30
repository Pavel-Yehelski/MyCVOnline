import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeCompanyComponent } from './edite-company.component';

describe('EditeCompanyComponent', () => {
  let component: EditeCompanyComponent;
  let fixture: ComponentFixture<EditeCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
