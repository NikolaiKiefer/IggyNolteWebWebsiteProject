import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PictureGalleryComponent } from './picture-gallery/picture-gallery.component';
import {MatCardModule, MatChipsModule, MatDividerModule, MatStepperModule} from '@angular/material';
import { MusicComponent } from './music/music.component';
import { LoaderComponent } from './loader/loader.component';
import { KontactComponent } from './kontact/kontact.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { SortAlgorithmenComponent } from './sort-algorithmen/sort-algorithmen.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    FooterComponent,
    HeaderComponent,
    PictureGalleryComponent,
    MusicComponent,
    LoaderComponent,
    KontactComponent,
    ArticleComponent,
    ArticleListComponent,
    SortAlgorithmenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
