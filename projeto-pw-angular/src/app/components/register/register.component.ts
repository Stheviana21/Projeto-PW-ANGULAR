import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../../../interfaces/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  userService = inject(UserService);

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required]
    });
  };

  criarUser() {
    const novoUser: Omit<User, 'id'> = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      phone: this.registerForm.value.phone
    }

    if (this.registerForm.valid) {
      console.log('Formulário enviado:', this.registerForm.value);
      this.userService.postUser(novoUser).subscribe({
        next: (response) => {
          console.log(`Usuário cirado ${response}`);
        },
        error(e) {
          console.error(`Erro ao criar novo usuário ${e}`);
        }
      })
    };
  };
};
