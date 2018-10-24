import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
public smashUrlRaw: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) {
    this.smashUrlRaw = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Hp92T0Iw2cc');
  }
  ngOnInit() {
  }

}
