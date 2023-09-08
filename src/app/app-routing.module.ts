import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SocialComponent } from './components/social/social.component';
import { SkillComponent } from './components/skill/skill.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  // { path: 'social', component: SocialComponent },
  // { path: 'skills', component: SkillComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
