import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showFirework = false;
  fireworkTimeout: any;
  isHovered = false;

  onMouseEnter() {
    if (!this.showFirework) {
      this.showFirework = true;
      this.isHovered = true;


      if (this.fireworkTimeout) {
        clearTimeout(this.fireworkTimeout);
      }

      this.fireworkTimeout = setTimeout(() => {
        this.showFirework = false;
        this.isHovered = false;
      }, 1700);
    }
  }

  onMouseClick() {
    if (!this.showFirework) {
      this.showFirework = true;
      this.isHovered = true;


      if (this.fireworkTimeout) {
        clearTimeout(this.fireworkTimeout);
      }

      this.fireworkTimeout = setTimeout(() => {
        this.showFirework = false;
        this.isHovered = false;
      }, 1700);
    }
  }

  onMouseLeave() {
  }
}
