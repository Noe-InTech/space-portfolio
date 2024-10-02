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
    // Détecte la couleur de fond initiale
    this.checkBackground();
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkBackground();
  }

  checkBackground() {
    const homeSection = document.getElementById('home');
    const skillsSection = document.getElementById('skills');

    const homeSectionRect = homeSection?.getBoundingClientRect();
    const skillsSectionRect = skillsSection?.getBoundingClientRect();

    // Vérifie si la section "home" est visible
    if (homeSectionRect && homeSectionRect.bottom > 0) {
      this.isDarkBackground = false; // Couleur claire
    } else if (skillsSectionRect && skillsSectionRect.top < window.innerHeight) {
      this.isDarkBackground = true; // Couleur sombre
    }
  }
}
