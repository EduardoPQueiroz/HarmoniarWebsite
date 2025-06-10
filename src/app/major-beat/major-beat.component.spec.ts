import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorBeatComponent } from './major-beat.component';

describe('MajorBeatComponent', () => {
  let component: MajorBeatComponent;
  let fixture: ComponentFixture<MajorBeatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MajorBeatComponent]
    });
    fixture = TestBed.createComponent(MajorBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
