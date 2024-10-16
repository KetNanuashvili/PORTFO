import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GalacticBackgroundComponent } from './galactic-background/galactic-background.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { MyinfoComponent } from './components/myinfo/myinfo.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { ResumeComponent } from './components/resume/resume.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalacticBackgroundComponent,
    AboutmeComponent,
    MyinfoComponent,
    PortfolioComponent,
    ProjectModalComponent,
    ResumeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
