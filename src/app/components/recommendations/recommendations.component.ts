import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recommendation } from 'src/app/shared/models/recommendations.model';
import { DataServiceService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  recomaddationData: Recommendation[] | undefined;
  $Subs = new Subscription();

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.$RecommendationData.subscribe((data) => {
      this.recomaddationData = data?.data;
    });
  }

  ngOnDestroy() {
    this.$Subs.unsubscribe();
  }
}
