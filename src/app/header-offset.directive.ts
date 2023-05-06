import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHeaderOffset]'
})
export class HeaderOffsetDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }


  ngAfterViewInit(): void {
    this.addHeaderOffset();
  }


  private addHeaderOffset(): void {
    const anchorLinks = this.el.nativeElement.querySelectorAll("a[href^='#']");
    anchorLinks.forEach((link: HTMLAnchorElement) => {
      link.addEventListener("click", (event: Event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href") as string) as HTMLElement;
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 120,
            behavior: "smooth",
          });
        }
      });
    });
  }
}
