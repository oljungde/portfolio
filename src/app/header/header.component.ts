import { Component, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('open', style({ bottom: '0%' })),
      state('closed', style({ bottom: '-100%' })),
      transition('closed => open', animate('300ms ease-in')),
      transition('open => closed', animate('300ms ease-in')),
    ]),
  ],
})


export class HeaderComponent {
  menuOpen = false;
  @ViewChild('menu') menu: ElementRef | undefined;

  constructor(private renderer: Renderer2) { }


  ngAfterViewInit() {
    const menuLinks = this.menu?.nativeElement.querySelectorAll('a');
    menuLinks.forEach((link: HTMLElement) =>
      this.renderer.listen(link, 'click', this.closeMenu.bind(this))
    );
  }


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const hamburgerBtn = document.querySelector('.hamburger');
    hamburgerBtn?.classList.remove('no-animation');
    hamburgerBtn?.classList.toggle('active', this.menuOpen);
  }


  closeMenu() {
    this.menuOpen = false;
    const hamburgerBtn = document.querySelector('.hamburger');
    hamburgerBtn?.classList.remove('no-animation');
    hamburgerBtn?.classList.toggle('active', this.menuOpen);
  }
}