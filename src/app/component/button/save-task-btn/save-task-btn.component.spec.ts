import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTaskBtnComponent } from './save-task-btn.component';

describe('SaveTaskBtnComponent', () => {
  let component: SaveTaskBtnComponent;
  let fixture: ComponentFixture<SaveTaskBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveTaskBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTaskBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
