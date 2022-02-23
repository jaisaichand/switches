import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightoneComponent } from './rightone.component';

describe('RightoneComponent', () => {
  let component: RightoneComponent;
  let fixture: ComponentFixture<RightoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
