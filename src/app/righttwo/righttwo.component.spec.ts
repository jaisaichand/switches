import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RighttwoComponent } from './righttwo.component';

describe('RighttwoComponent', () => {
  let component: RighttwoComponent;
  let fixture: ComponentFixture<RighttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RighttwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RighttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
