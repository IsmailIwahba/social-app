import { AuthService } from './../../core/auth/services/auth.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  isSuccess: boolean = false;
  msgError: string = '';
  loading: boolean = false;
  loginSub: Subscription = new Subscription();
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
  });
  showPassword(element: HTMLInputElement): void {
    if (element.type === 'password') {
      element.type = 'text';
    } else {
      element.type = 'password';
    }
  }
  submitForm(): void {
    this.msgError = 'auth';
    if (this.loginForm.valid) {
      this.loading = true;
      this.msgError = '';
      this.loginSub.unsubscribe();
      this.loginSub = this.authService.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('socialToken', res.token);
          console.log(res);
          this.loading = false;
          this.isSuccess = true;
          this.router.navigate(['/feed']);

          setTimeout(() => {
            this.isSuccess = false;
          }, 3000);
        },
        error: (err) => {
          this.loading = false;
          this.isSuccess = false;
          this.msgError = err.error.message || 'Invalid email or password';
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
