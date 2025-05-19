import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './sidebar.component.component.html',
  styleUrl: './sidebar.component.component.scss'
})
export class SidebarComponentComponent {
  isOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  logout() {
    this.router.navigate(['/login']); // هدایت به صفحه ورود
  }
}
