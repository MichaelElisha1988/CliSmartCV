import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Info } from 'src/app/shared/models/pesonal-info.model';
import { DataServiceService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  PersonalData: Info | undefined;
  $Subs = new Subscription();

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.$Subs.add(
      this.dataService.$PersonalInfoData.subscribe((data) => {
        this.PersonalData = data?.data[0];
      })
    );
  }

  ngOnDestroy() {
    this.$Subs.unsubscribe();
  }
}
