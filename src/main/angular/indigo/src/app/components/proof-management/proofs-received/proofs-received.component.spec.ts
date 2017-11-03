import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofsReceivedComponent } from './proofs-received.component';

describe('ProofsReceivedComponent', () => {
  let component: ProofsReceivedComponent;
  let fixture: ComponentFixture<ProofsReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofsReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
