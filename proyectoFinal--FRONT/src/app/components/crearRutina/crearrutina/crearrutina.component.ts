import { Component } from '@angular/core';
import { BotonUsuarioComponent } from "../../boton-usuario/boton-usuario.component";
import { InputsCrearrutinaComponent } from "../inputs-crearrutina/inputs-crearrutina.component";
import { BotonCrearrutinaComponent } from "../boton-crearrutina/boton-crearrutina.component";
import { BotonInicioComponent } from "../../boton-inicio/boton-inicio.component";

@Component({
  selector: 'app-crearrutina',
  imports: [BotonUsuarioComponent, InputsCrearrutinaComponent, BotonCrearrutinaComponent, BotonInicioComponent],
  templateUrl: './crearrutina.component.html',
  styleUrl: './crearrutina.component.css'
})
export class CrearrutinaComponent {

}
