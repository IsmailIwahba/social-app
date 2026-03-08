import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from '../../core/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  imports: [ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  isSuccess: boolean = false;
  msgError: string = '';
  loading: boolean = false;
  loginSub: Subscription = new Subscription();
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  changeForm: FormGroup = this.formBuilder.group({
    currentPass: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    newPass: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    updatePass: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
  });
  showPassword(element: HTMLInputElement): void {
    if (element.type === 'password') {
      element.type = 'text';
    } else {
      element.type = 'password';
    }
  }
  submitForm(): void {
    this.msgError = '';
    if (this.changeForm.valid) {
      this.loading = true;
      this.msgError = '';
      this.loginSub.unsubscribe();
      this.loginSub = this.authService.signIn(this.changeForm.value).subscribe({
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
      this.changeForm.markAllAsTouched();
    }
  }
}
