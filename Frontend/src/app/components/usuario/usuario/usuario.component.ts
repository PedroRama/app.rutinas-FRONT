import { Component } from '@angular/core';
import { BotonInicioComponent } from "../../boton-inicio/boton-inicio.component";
import { InputsUserComponent } from "../inputs-user/inputs-user.component";
import { BotonGuardarComponent } from "../boton-guardar/boton-guardar.component";
import { BotonCrearRutinaComponent } from "../../incio/boton-crear-rutina/boton-crear-rutina.component";
import { CerrarSesionComponent } from "../cerrar-sesion/cerrar-sesion.component";

@Component({
  selector: 'app-usuario',
  imports: [BotonInicioComponent, InputsUserComponent, BotonGuardarComponent, BotonCrearRutinaComponent, CerrarSesionComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  datosUsuario: any = null; // Variable para almacenar los datos del usuario

  onGuardarDatos(datos: any): void {
    this.datosUsuario = datos; // Guarda los datos emitidos por el componente hijo
    console.log('Datos guardados:', this.datosUsuario); // Depuración
  }
  
}
