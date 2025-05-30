
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  styles: [`
    :host {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    }`]
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showPassword = false;
  userService = inject(UserService);
  ngOnInit(): void { }

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.userService.login(email, password).subscribe(
      response => {
        if (response &&
          this.loginForm.valid &&
          email !== '' &&
          password !== '' &&
          email == this.userService.currentUser.email &&
          password == this.userService.currentUser.password
        ) {
          console.log('Form submitted:', this.loginForm.value);
          this.router.navigate(['home'])
        } else {
          console.error("Erro ao realizar Login !");
          console.log(`email do FORM: ${email}`);
          console.log(`email do currentUser: ${this.userService.currentUser.email}`);

          this.loginForm.markAllAsTouched();
        }
      }
    )
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
