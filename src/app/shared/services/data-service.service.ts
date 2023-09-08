import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, take } from 'rxjs';
import { CompKnowledge } from '../models/comp-knowledge.model';
import { Experience } from '../models/experience.model';
import { PersonalInfo } from '../models/pesonal-info.model';
import { ProgrammingKnowledge } from '../models/programming_knowledge.model';
import { Recommendations } from '../models/recommendations.model';
import { SocialNetInfo } from '../models/social-network.model';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  $CompKnowledgeData = new BehaviorSubject<CompKnowledge | null>(null);
  $ExperienceData = new BehaviorSubject<Experience | null>(null);
  $PersonalInfoData = new BehaviorSubject<PersonalInfo | null>(null);
  $ProgrammingKnowledgeData = new BehaviorSubject<ProgrammingKnowledge | null>(
    null
  );
  $RecommendationData = new BehaviorSubject<Recommendations | null>(null);
  $SocialNetInfoData = new BehaviorSubject<SocialNetInfo | null>(null);

  constructor(private readonly http: HttpClient) {}

  onLoad() {
    this.http
      .get<CompKnowledge>('assets/comp_knowledge.json')
      .pipe(take(1))
      .subscribe((data) => {
        this.$CompKnowledgeData.next(data);
      });
    this.http
      .get<Experience>('assets/experience.json')
      .pipe(take(1))
      .subscribe((data) => {
        this.$ExperienceData.next(data);
      });
    this.http
      .get<PersonalInfo>('assets/personal_info.json')
      .pipe(take(1))
      .subscribe((data) => {
        this.$PersonalInfoData.next(data);
      });
    this.http
      .get<ProgrammingKnowledge>('assets/programming_knowledge.json')
      .pipe(take(1))
      .subscribe((data) => {
        this.$ProgrammingKnowledgeData.next(data);
      });
    this.http
      .get<Recommendations>('assets/recommendations.json')
      .pipe(take(1))
      .subscribe((data) => {
        this.$RecommendationData.next(data);
      });
    this.http
      .get<SocialNetInfo>('assets/social_network.json')
      .pipe(take(1))
      .subscribe((data) => {
        this.$SocialNetInfoData.next(data);
      });
  }
}
