import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteToggleBtnComponent } from './note-toggle-btn.component';

describe('NoteToggleBtnComponent', () => {
  let component: NoteToggleBtnComponent;
  let fixture: ComponentFixture<NoteToggleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteToggleBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteToggleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
