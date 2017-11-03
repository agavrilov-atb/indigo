import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofManagementComponent } from './proof-management.component';

describe('ProofManagementComponent', () => {
  let component: ProofManagementComponent;
  let fixture: ComponentFixture<ProofManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
