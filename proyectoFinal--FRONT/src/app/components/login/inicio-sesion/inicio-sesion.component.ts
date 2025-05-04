import { Component, input } from '@angular/core';
import { BOTONRegistroComponent } from '../botonregistro/botonregistro.component';
import { InputsComponent } from "../inputs/inputs.component";

@Component({
  selector: 'app-inicio-sesion',
  imports: [BOTONRegistroComponent, InputsComponent],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {

}
