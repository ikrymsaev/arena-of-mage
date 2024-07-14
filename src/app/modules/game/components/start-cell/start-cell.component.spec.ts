import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCellComponent } from './start-cell.component';

describe('StartCellComponent', () => {
  let component: StartCellComponent;
  let fixture: ComponentFixture<StartCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartCellComponent]
    });
    fixture = TestBed.createComponent(StartCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
