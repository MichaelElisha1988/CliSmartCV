import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/shared/models/experience.model';
import { DataServiceService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit, OnDestroy {
  experienceData: Item[] | undefined;
  $Subs = new Subscription();

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.$ExperienceData.subscribe((data) => {
      this.experienceData = data?.data;
    });
  }

  ngOnDestroy() {
    this.$Subs.unsubscribe();
  }
}
