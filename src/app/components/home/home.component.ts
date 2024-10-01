import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showFirework = false;
  fireworkTimeout: any;
  isHovered = false; // Pour suivre l'état du survol

  onMouseEnter() {
    // Démarre l'animation des feux d'artifice si elle n'est pas déjà affichée
    if (!this.showFirework) {
      this.showFirework = true; // Afficher les feux d'artifice lors du survol
      this.isHovered = true; // Activer l'animation

      // Si un timeout existe, le supprimer
      if (this.fireworkTimeout) {
        clearTimeout(this.fireworkTimeout);
      }
      // Cacher les feux d'artifice après 4 secondes
      this.fireworkTimeout = setTimeout(() => {
        this.showFirework = false;
        this.isHovered = false; // Désactiver l'animation après 4 secondes
      }, 1700);
    }
  }

  onMouseLeave() {
    // Lorsque la souris quitte l'élément, on ne fait rien ici
    // L'animation et les feux d'artifice sont déjà gérés par le timeout.
  }
}
