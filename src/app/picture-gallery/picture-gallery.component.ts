import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.scss']
})
export class PictureGalleryComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }

  ngOnInit() {
  }

}
