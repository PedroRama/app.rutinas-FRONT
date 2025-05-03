import { Component } from '@angular/core';
import { BotonInicioComponent } from "../../boton-inicio/boton-inicio.component";
import { BotonUsuarioComponent } from "../../boton-usuario/boton-usuario.component";
import { BotonMisRutinasComponent } from "../boton-mis-rutinas/boton-mis-rutinas.component";
import { BotonRutinasFavoritasComponent } from "../boton-rutinas-favoritas/boton-rutinas-favoritas.component";
import { BotonProximaRutinaComponent } from "../boton-proxima-rutina/boton-proxima-rutina.component";
import { CrearrutinaComponent } from "../../crearRutina/crearrutina/crearrutina.component";
import { BotonCrearRutinaComponent } from "../boton-crear-rutina/boton-crear-rutina.component";

@Component({
  selector: 'app-inicio',
  imports: [BotonInicioComponent, BotonUsuarioComponent, BotonMisRutinasComponent, BotonRutinasFavoritasComponent, BotonProximaRutinaComponent, CrearrutinaComponent, BotonCrearRutinaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
