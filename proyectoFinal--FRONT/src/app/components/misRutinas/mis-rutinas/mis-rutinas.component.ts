import { Component } from '@angular/core';
import { RutinaComponent } from "../rutina/rutina.component";
import { BotonUsuarioComponent } from "../../boton-usuario/boton-usuario.component";
import { BotonInicioSesionComponent } from "../../incio/boton-inicio-sesion/boton-inicio-sesion.component";
import { InicioComponent } from "../../incio/inicio/inicio.component";
import { BotonInicioComponent } from "../../boton-inicio/boton-inicio.component";

@Component({
  selector: 'app-mis-rutinas',
  imports: [RutinaComponent, BotonUsuarioComponent, BotonInicioSesionComponent, InicioComponent, BotonInicioComponent],
  templateUrl: './mis-rutinas.component.html',
  styleUrl: './mis-rutinas.component.css'
})
export class MisRutinasComponent {

}
