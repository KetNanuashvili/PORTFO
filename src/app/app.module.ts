import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GalacticBackgroundComponent } from './galactic-background/galactic-background.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { MyinfoComponent } from './components/myinfo/myinfo.component';
import { InfoCarouselComponent } from './info-carousel/info-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalacticBackgroundComponent,
    AboutmeComponent,
    MyinfoComponent,
    InfoCarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
