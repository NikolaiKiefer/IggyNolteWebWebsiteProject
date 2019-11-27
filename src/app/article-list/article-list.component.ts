import { Component, OnInit } from '@angular/core';
import {Article} from '../models/models';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
articles: Article[] = [
  {text: 'Dies ist ein Beispiel Text um die Databinding funktion zwischen componenten zu testen. Hierbei gebe ich aktuell in Typescript per Input Binding ein Text herein der dann hier angezeigt wird',
    chips : [
      {name: 'Javascript'}, {name: 'Typescript'}, {name: 'Angular'}],
    blogImg: 'farb_favicon_test.svg',
    articleNumber: 1,
    author: 'Nikolai Kiefer',
    title: 'Angular Input-Binding'
  },
  {text: 'das ist der zweite Artikel',
    chips : [
      {name: 'Javascript'}, {name: 'Typescript'}, {name: 'Angular'}
      ], blogImg: 'farb_favicon_test.svg',
    articleNumber: 2,
    author: 'Nikolai Kiefer',
    title: 'Zweiter Test Artikel'},
  {text: 'das ist der dritte Artikel',
    chips : [
      {name: 'Javascript'}, {name: 'Typescript'}, {name: 'Angular'}
    ], blogImg: 'farb_favicon_test.svg',
    articleNumber: 3,
    author: 'Nikolai Kiefer',
    title: 'Zweiter Test Artikel'}
];
  constructor() { }

  ngOnInit() {
  }

}
