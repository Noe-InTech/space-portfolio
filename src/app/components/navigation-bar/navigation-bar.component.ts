import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  isMenuOpen = false;
  isDarkBackground = false;

  constructor(private router: Router) {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollTo(param: string) {
    if (this.router.url !== '/home') {
      this.router.navigate(['/home']).then(() => {
        const section = document.getElementById(param);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } else {
      const section = document.getElementById(param);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

}
