import { Component, input } from '@angular/core';
import { BOTONRegistroComponent } from '../botonregistro/botonregistro.component';
import { BOTONInicioSesionComponent } from '../botoninicio-sesion/botoninicio-sesion.component';
import { InputsComponent } from "../inputs/inputs.component";

@Component({
  selector: 'app-inicio-sesion',
  imports: [BOTONRegistroComponent, BOTONInicioSesionComponent, InputsComponent],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {

}
