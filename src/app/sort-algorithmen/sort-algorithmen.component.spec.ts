import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortAlgorithmenComponent } from './sort-algorithmen.component';
import {element} from 'protractor';
import {domRendererFactory3} from '@angular/core/src/render3/interfaces/renderer';

fdescribe('SortAlgorithmenComponent', () => {
  let component: SortAlgorithmenComponent;
  let fixture: ComponentFixture<SortAlgorithmenComponent>;
  const testNumberArray = [1, 2, 77, 8, 9, 3, 4, 6, 1, 0, 0, 8, 6, 5, 4, 3, 3, 444];

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

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should sort bubble', () => {
    const result = component.bubblesort(testNumberArray);
    expect(result).toEqual([0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 5, 6, 6, 8, 8, 9, 77, 444]);
  });

  fit('should sort merge', () => {
    const result = component.mergesort(testNumberArray);
    expect(result).toEqual([0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 5, 6, 6, 8, 8, 9, 77, 444]);
  });

  fit('should be the same', () => {
    const resultMerge = component.mergesort(testNumberArray);
    const resultBubble = component.bubblesort(testNumberArray);
    expect(resultBubble).toEqual(resultMerge);
  });

  fit('counter Test',() => {
    const result = component.mergesort(testNumberArray);
    expect(result).not.toEqual([0, 1, 0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 6, 8, 8, 9, 77, 444]);
  });

  fit('Gui Test', () => {
    const renderedDom = fixture.nativeElement;
    const input = renderedDom.querySelector('button');
    expect(input.textContent).toContain('add Number');
  });
});
