import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  userToken: string | null = null;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      this.http.post('https://fakestoreapi.com/auth/login', { username, password }).subscribe({
        next: (response: any) => {
          localStorage.setItem('authToken', response.token);
        },
        error: (error: any) => console.log(error),
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
