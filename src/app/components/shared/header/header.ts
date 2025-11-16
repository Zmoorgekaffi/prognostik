import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  //navbar close/open
  state: 'open' | 'close' = 'close';

  //header
  show = true;
  private lastScrollY = 0;
  router = inject(Router);

  constructor() {}

  @HostListener('window:scroll')
  onScroll() {
    const currentY = window.scrollY || 0;

    //unten
    if (currentY > this.lastScrollY) {
      this.show = false; 
    } 

    //oben
    else if (currentY < this.lastScrollY) {
      this.show = true;
    }
    
    this.lastScrollY = currentY
  }

  toggleNav() {
    this.state = this.state === 'open' ? 'close' : 'open';
  }

  navigateToUrl(path:string) {
    let url = `/${path}`;
    this.router.navigate([url]);
  }
}
