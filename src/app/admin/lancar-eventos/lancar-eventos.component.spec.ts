import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarEventosComponent } from './lancar-eventos.component';

describe('LancarEventosComponent', () => {
  let component: LancarEventosComponent;
  let fixture: ComponentFixture<LancarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancarEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LancarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
