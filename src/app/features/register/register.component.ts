import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, Injector } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/auth/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  isSuccess: boolean = false;
  userExistsError: boolean = false;
  msgError: string = '';
  loading: boolean = false;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  registerForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: [''],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      gender: ['male', Validators.required],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      rePassword: ['', Validators.required],
    },
    { validators: [this.confirmPassword] },
  );

  registerSub: Subscription = new Subscription();
  confirmPassword(group: AbstractControl) {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;
    if (rePassword !== password && rePassword != '') {
      group.get('rePassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      return null;
    }
  }
  showPassword(element: HTMLInputElement): void {
    if (element.type === 'password') {
      element.type = 'text';
    } else {
      element.type = 'password';
    }
  }
  handleError() {
    this.userExistsError = true;
  }
  submitForm(): void {
    if (this.registerForm.valid) {
      this.loading = true;
      this.registerSub.unsubscribe();
      this.registerSub = this.authService.signUp(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/login']);

          this.loading = false;
        },
        error: (err) => {
          this.msgError = err.error.message;
          this.loading = false;
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
    if (this.registerForm.valid) {
      this.isSuccess = true;

      setTimeout(() => {
        this.isSuccess = false;
      }, 3000);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  isLoginMode: boolean = false;

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.registerForm.reset();
  }
}
