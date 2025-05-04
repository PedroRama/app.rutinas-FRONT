import { Component, inject } from '@angular/core';
import { ServerService } from '../../../services/server.service';
import { userDataService } from '../../../services/userdata/user-data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-boton-registro',
  imports: [RouterLink],
  templateUrl: './boton-registro.component.html',
  styleUrl: './boton-registro.component.css'
})
export class BotonRegistroComponent {

  private server = inject(ServerService);
  private serviceUserData = inject(userDataService);
  
  onRegister(): void {
    const userData = this.serviceUserData.getUserData();
    console.log('Datos del usuario:', userData);
  
    this.server.postRegistro(userData).subscribe({
      next: (respuesta) => {
        console.log('Registro exitoso:', respuesta);
      },
      error: (err) => {
        console.error('Error en el registro:', err);
      }
    });
  }

}
