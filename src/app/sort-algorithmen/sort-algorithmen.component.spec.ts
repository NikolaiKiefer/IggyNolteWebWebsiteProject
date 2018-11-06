import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortAlgorithmenComponent } from './sort-algorithmen.component';

describe('SortAlgorithmenComponent', () => {
  let component: SortAlgorithmenComponent;
  let fixture: ComponentFixture<SortAlgorithmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortAlgorithmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortAlgorithmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
