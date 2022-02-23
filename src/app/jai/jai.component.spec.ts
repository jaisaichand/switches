import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaiComponent } from './jai.component';

describe('JaiComponent', () => {
  let component: JaiComponent;
  let fixture: ComponentFixture<JaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
