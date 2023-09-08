import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './route/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './shared/services/data-service.service';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SocialComponent } from './components/social/social.component';
import { SkillComponent } from './components/skill/skill.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ActiveNavDirective } from './shared/directives/active-nav.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SocialComponent,
    SkillComponent,
    RecommendationsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ActiveNavDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private dataService: DataServiceService) {
    this.dataService.onLoad();
  }
}
