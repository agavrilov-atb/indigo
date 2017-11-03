import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimReqComponent } from './claim-req.component';

describe('ClaimReqComponent', () => {
  let component: ClaimReqComponent;
  let fixture: ComponentFixture<ClaimReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
