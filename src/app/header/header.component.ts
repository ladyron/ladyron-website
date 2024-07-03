import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleOverlay(): void {
    const overlay = document.getElementById('nav-overlay');
    if (overlay) {
      const isActive = overlay.classList.toggle('active');
      if (isActive) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
  }

  closeOverlay(event: Event): void {
    event.preventDefault();

    const overlay = document.getElementById('nav-overlay');
    if (overlay) {
      overlay.classList.remove('active');
    }
    document.body.classList.remove('no-scroll');
  }
    
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        menuElement.style.top = '0';
      } else {
        menuElement.style.top = '-60px';
      }
    }
  }
}
