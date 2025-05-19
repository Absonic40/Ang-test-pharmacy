import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponentComponent } from './componets/sidebar.component/sidebar.component.component';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponentComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cod';
  constructor(private router: Router, private renderer: Renderer2) {
    if (typeof document !== 'undefined') {
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
        if (event.url === '/login') {
          this.renderer.addClass(document.body, 'login-page');
        } else {
          this.renderer.removeClass(document.body, 'login-page');
        }
      });
    }
  }
  get isLoginPage(): boolean {
    return this.router.url.includes('/login');
  }
}
