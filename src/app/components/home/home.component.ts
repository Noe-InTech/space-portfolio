import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  showFirework = false;
  fireworkTimeout: any;
  isHovered = false;
  ngAfterViewInit(): void {
    const buttons = document.querySelectorAll('.toggle-details');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const parent = btn.parentElement;
        const content = btn.nextElementSibling as HTMLElement;
        const isVisible = content.style.display === 'block';

        content.style.display = isVisible ? 'none' : 'block';
        parent?.classList.toggle('active');
        btn.textContent = isVisible ? 'Afficher les détails' : 'Masquer les détails';
      });
    });
  }

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
