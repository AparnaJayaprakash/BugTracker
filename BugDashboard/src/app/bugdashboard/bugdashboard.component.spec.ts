import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugdashboardComponent } from './bugdashboard.component';

describe('BugdashboardComponent', () => {
  let component: BugdashboardComponent;
  let fixture: ComponentFixture<BugdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
