import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface LoginData {
  userName: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isAnimating = false;
  formData: LoginData = {
    userName: '',
    password: ''
  };
  isPending = false;

  constructor(private http: HttpClient, private router: Router) {}

  handleStart(event: Event) {
    event.preventDefault();
    this.isPending = true;

    this.http.get<any>('assets/db.json').subscribe(data => {
      const user = data.users.find((u: any) => u.username === this.formData.userName && u.password === this.formData.password);
      if (user) {
        this.isAnimating = true;
        localStorage.setItem('token', 'fake-token');

        setTimeout(() => {
          this.router.navigate(['/search']);
        }, 300);
      } else {
        alert('Invalid username or password');
        this.isAnimating = false;
      }
      this.isPending = false;
    }, error => {
      console.error('Error fetching users:', error);
      this.isAnimating = false;
      this.isPending = false;
    });
  }
}