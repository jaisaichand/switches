import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteritComponent } from './filterit.component';

describe('FilteritComponent', () => {
  let component: FilteritComponent;
  let fixture: ComponentFixture<FilteritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
