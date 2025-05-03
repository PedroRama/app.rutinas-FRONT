import { Component } from '@angular/core';
import { BotonRegistroComponent } from "../boton-registro/boton-registro.component";
import { InputComponent } from "../input/input.component";
import { BotonLoginComponent } from "../boton-login/boton-login.component";

@Component({
  selector: 'app-pantalla-registrarse',
  imports: [BotonRegistroComponent, InputComponent, BotonLoginComponent],
  templateUrl: './pantalla-registrarse.component.html',
  styleUrl: './pantalla-registrarse.component.css'
})
export class PantallaRegistrarseComponent {

}
