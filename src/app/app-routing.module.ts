import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PictureGalleryComponent} from './picture-gallery/picture-gallery.component';
import {StartPageComponent} from './start-page/start-page.component';
import {MusicComponent} from './music/music.component';
import {KontactComponent} from './kontact/kontact.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {SortAlgorithmenComponent} from './sort-algorithmen/sort-algorithmen.component';
import {ArticleDetailsComponent} from './article-details/article-details.component';


const routes: Routes = [
  {path: 'pictures', component: PictureGalleryComponent},
  {path: '', component: StartPageComponent},
  {path: 'music', component: MusicComponent},
  {path: 'kontact', component: KontactComponent},
  {path: 'articles', component: ArticleListComponent},
  {path: 'sortAlgos', component: SortAlgorithmenComponent},
  {path: 'article/:id', component: ArticleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
