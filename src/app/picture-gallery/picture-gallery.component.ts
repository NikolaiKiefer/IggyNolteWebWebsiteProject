import { Component, OnInit } from '@angular/core';
import {PictureCard} from '../models/models';

@Component({
  selector: 'app-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.scss']
})
export class PictureGalleryComponent implements OnInit {

  pictureCards: [PictureCard];
  constructor() { }

  ngOnInit() {
    this.pictureCards = [{title: 'Cat',
    subTitle: 'Stray Cat',
    img: 'http://lorempixel.com/400/200',
    text: 'Beispiel Katzen Text'}];
  }

}
