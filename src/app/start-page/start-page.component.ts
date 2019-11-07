import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  jumpto(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
