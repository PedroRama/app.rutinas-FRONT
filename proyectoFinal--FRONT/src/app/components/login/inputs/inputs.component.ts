import { Component, inject } from '@angular/core';
import { ServerService } from '../../../services/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputs',
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  private server = inject(ServerService);
  private router = inject(Router);

  email: string = '';
  password: string = '';

  onChangeEmail(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.email = value;
  }

  onChangePassword(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.password = value;
  }

  onLogin(): void {
    const loginData = { email: this.email, password: this.password };

    this.server.postLogin(loginData).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        alert('¡Inicio de sesión exitoso!');
        this.router.navigate(['/inicio']); // Redirige a la página de inicio
      },
      error: (err) => {
        console.error('Error en el login:', err);
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
    });
  }
}
