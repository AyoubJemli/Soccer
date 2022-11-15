import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchsComponent } from './components/matchs/matchs.component';
import { PlanningComponent } from './components/planning/planning.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { BindingComponent } from './components/binding/binding.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    BannerComponent,
    MatchsComponent,
    PlanningComponent,
    VideosComponent,
    BlogComponent,
    AddMatchComponent,
    BindingComponent,
    AddPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
