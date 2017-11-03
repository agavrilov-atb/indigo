import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofsIssuedComponent } from './proofs-issued.component';

describe('ProofsIssuedComponent', () => {
  let component: ProofsIssuedComponent;
  let fixture: ComponentFixture<ProofsIssuedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofsIssuedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofsIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
