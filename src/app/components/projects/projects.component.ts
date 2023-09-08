import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projSelected: HTMLElement | undefined | null;
  projNameSelected: string = '';

  projectsObj: any = {
    'Pig Game': 'pig',
    'XO Game': 'xo',
    'Landing page': 'landing-page',
  };

  constructor() {}

  ngOnInit(): void {}

  changeGame(proj: EventTarget | null) {
    this.projSelected?.classList.add(this.projectsObj[this.projNameSelected]);

    if (this.projSelected === undefined || null) {
      this.projSelected = document.querySelector<HTMLElement>(
        '.' + this.projectsObj[(proj as HTMLElement).innerHTML]
      );
      this.projNameSelected = (proj as HTMLElement).innerHTML;
    }

    this.projSelected = document.querySelector<HTMLElement>(
      '.' + this.projectsObj[(proj as HTMLElement).innerHTML]
    );
    this.projNameSelected = (proj as HTMLElement).innerHTML;

    this.projSelected?.classList.remove(
      this.projectsObj[this.projNameSelected]
    );
  }
}
