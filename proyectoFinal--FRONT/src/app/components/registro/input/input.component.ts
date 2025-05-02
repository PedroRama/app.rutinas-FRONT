import { Component, inject } from '@angular/core';
import { ServerService } from '../../../services/server.service';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  private server = inject(ServerService)

  nameP: string = "";
  emailP: string = "";
  passwordP: string = "";

  private userData = {
    name: this.nameP,
    email: this.emailP,
    password: this.passwordP
  };

  ngOnInit(): void {
  
    this.server.postRegistro(this.userData).subscribe({
      next: (respuesta) => {
        console.log("respuesta", respuesta);
      },
      error: (err) => {
        console.error("Error en postRegistro:", err);
      }
    });
  }

}
