import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
articles = [{text: 'Dies ist ein Beispiel Text um die Databinding funktion zwischen componenten zu testen', chips :[{name: 'Javascript'}, {name: 'Typescript'}, {name: 'Angular'}], blogImg: 'angular_banner.svg'},{text: 'das ist der zweite Artikel', chips :[{name: 'Javascript'}, {name: 'Typescript'}, {name: 'Angular'}], blogImg: 'angular_banner.svg'}];
  constructor() { }

  ngOnInit() {
  }

}
