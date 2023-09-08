import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appActiveNav]',
})
export class ActiveNavDirective {
  constructor(private activeElement: ElementRef) {}

  @HostListener('click', ['$event'])
  activeNav(ev: Event) {
    if ((ev.target as HTMLElement).tagName.toLowerCase() !== 'a') {
      return;
    }

    this.activeElement.nativeElement.childNodes.forEach((x: any) => {
      x.attributes.class && x.attributes.class.value !== undefined
        ? (x.attributes.class.value = '')
        : '';
    });
    (ev.target as HTMLElement).tagName.toLowerCase() == 'a'
      ? (ev.target as HTMLElement).classList.add('active')
      : '';
  }
}
