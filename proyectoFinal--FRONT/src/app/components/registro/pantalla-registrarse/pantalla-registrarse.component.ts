import { Component } from '@angular/core';
import { BotonRegistroComponent } from "../boton-registro/boton-registro.component";
import { InputComponent } from "../input/input.component";

@Component({
  selector: 'app-pantalla-registrarse',
  imports: [BotonRegistroComponent, InputComponent],
  templateUrl: './pantalla-registrarse.component.html',
  styleUrl: './pantalla-registrarse.component.css'
})
export class PantallaRegistrarseComponent {

}
