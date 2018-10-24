import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PictureGalleryComponent} from './picture-gallery/picture-gallery.component';
import {StartPageComponent} from './start-page/start-page.component';
import {MusicComponent} from './music/music.component';


const routes: Routes = [
  {path: 'pictures', component: PictureGalleryComponent},
  {path: '', component: StartPageComponent},
  {path: 'music', component: MusicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
