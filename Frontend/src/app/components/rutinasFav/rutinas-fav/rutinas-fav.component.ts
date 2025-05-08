import { Component, inject, OnInit } from '@angular/core';
import { BotonUsuarioComponent } from "../../boton-usuario/boton-usuario.component";
import { RutinasFComponent } from "../rutinas-f/rutinas-f.component";
import { BotonInicioComponent } from "../../boton-inicio/boton-inicio.component";
import { ServerService } from '../../../services/server.service';

@Component({
  selector: 'app-rutinas-fav',
  imports: [BotonUsuarioComponent, RutinasFComponent, BotonInicioComponent],
  templateUrl: './rutinas-fav.component.html',
  styleUrl: './rutinas-fav.component.css'
})
export class RutinasFavComponent {

  
}
