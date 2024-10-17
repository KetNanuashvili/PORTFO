import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 500; // 500 პიქსელზე მეტი უნდა იყოს
    console.log('Scrolled:', this.isScrolled); // თუ ეს ჩანს კონსოლში
  }
  
}
