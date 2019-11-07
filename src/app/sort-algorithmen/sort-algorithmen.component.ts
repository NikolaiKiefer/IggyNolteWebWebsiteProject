import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-sort-algorithmen',
  templateUrl: './sort-algorithmen.component.html',
  styleUrls: ['./sort-algorithmen.component.scss']
})
export class SortAlgorithmenComponent implements OnInit {
newArray: [number];
numberArray = [];

  constructor() { }

  ngOnInit() {
  }

  addNumber(number) {
    this.numberArray.push(number);
  }

  bubblesort(numberArray) {
    bubbleSortInner(numberArray, numberArray.length);

    function bubbleSortInner( numberArray, length) {
    for (let i = 0; i < length;) {
      if (+numberArray[i] > +numberArray[i + 1]) {
        const temp = numberArray[i];
        numberArray[i] = numberArray[i + 1];
        numberArray[i + 1] = temp;
        i++;
      } else {
        i++;
      }
    } if (length >= 1) {
        bubbleSortInner(numberArray, length - 1);
      } else {
      }
    }return numberArray;
  }

 mergesort(array) {
   return mergeSortinner(array);

   function mergeSortinner(array) {
     return divide(array);

     function divide(array) {
       let newLeft = [];
       let newRight = [];
       if (array.length > 1) {
         const tmpArrayLeft = array.slice(0, ((array.length - (array.length % 2)) / 2));
         const tmpArrayRight = array.slice(((array.length - (array.length % 2)) / 2), array.length);
         newLeft = divide(tmpArrayLeft);
         newRight = divide(tmpArrayRight);
       } else {
         newLeft = array;
       }
       // const newLeft = divide(tmpArrayLeft);
       // const newRight = divide(tmpArrayRight);
       return merge(newLeft, newRight);
     }

    function merge(left, right) {
      let mergedArray = [];
      while(left.length > 0 && right.length > 0) {
        if (+left[0] <= +right[0]) {
          mergedArray.push(left[0]);
          left.shift();
        } else {
          mergedArray.push(right[0]);
          right.shift();
        }
      }
      if (left.length === 0 && right.length >= 1) {
        mergedArray = mergedArray.concat(right);
      }
      if (right.length === 0 && left.length >= 1) {
        mergedArray = mergedArray.concat(left);
      }
      return mergedArray;
    }
     }
    }
  }
