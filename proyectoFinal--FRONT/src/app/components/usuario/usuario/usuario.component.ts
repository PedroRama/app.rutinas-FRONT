import { Component } from '@angular/core';
import { BotonInicioComponent } from "../../boton-inicio/boton-inicio.component";
import { InputsUserComponent } from "../inputs-user/inputs-user.component";
import { BotonGuardarComponent } from "../boton-guardar/boton-guardar.component";

@Component({
  selector: 'app-usuario',
  imports: [BotonInicioComponent, InputsUserComponent, BotonGuardarComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

}
