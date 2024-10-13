import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 500; // Check if scrolled more than 500px
    console.log('Scroll Y:', window.scrollY, 'Scrolled:', this.isScrolled); // For debugging
  }
}
