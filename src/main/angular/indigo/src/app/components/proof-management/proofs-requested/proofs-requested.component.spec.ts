import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofsRequestedComponent } from './proofs-requested.component';

describe('ProofsRequestedComponent', () => {
  let component: ProofsRequestedComponent;
  let fixture: ComponentFixture<ProofsRequestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofsRequestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofsRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
