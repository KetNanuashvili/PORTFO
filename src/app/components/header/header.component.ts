import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;  
  isMenuOpen = false;  
  openNewNav= false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 1050;  
  }

  toggleMenu() {
    this.openNewNav = !this.openNewNav;
    this.isMenuOpen = !this.isMenuOpen;
  }
}
