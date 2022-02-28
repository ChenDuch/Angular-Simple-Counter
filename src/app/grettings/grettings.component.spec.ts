import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrettingsComponent } from './grettings.component';

describe('GrettingsComponent', () => {
  let component: GrettingsComponent;
  let fixture: ComponentFixture<GrettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
