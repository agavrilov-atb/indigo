import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDefComponent } from './claim-def.component';

describe('ClaimDefComponent', () => {
  let component: ClaimDefComponent;
  let fixture: ComponentFixture<ClaimDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
