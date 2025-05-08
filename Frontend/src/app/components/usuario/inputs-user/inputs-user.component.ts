import { Component, EventEmitter, Output, inject } from '@angular/core';
import { BotonGuardarComponent } from "../boton-guardar/boton-guardar.component";
import { userDataService } from '../../../services/userdata/user-data.service';

@Component({
  selector: 'app-inputs-user',
  imports: [BotonGuardarComponent],
  templateUrl: './inputs-user.component.html',
  styleUrl: './inputs-user.component.css',
  standalone: true //Lo usamos porque estamos usando un componente independiente
})

export class InputsUserComponent {

  usuarioService = inject(userDataService);

  datosInteres: string = '';
  objetivos: string = '';
  edad: number | null = null;
  fraseMotivadora: string = '';

  onGuardar(): void {
    const datos = {
      datosInteres: this.datosInteres,
      objetivos: this.objetivos,
      edad: this.edad,
      fraseMotivadora: this.fraseMotivadora
    };
    this.usuarioService.setDatosUsuario(datos); // Guardamos los datos en el servicio
  }

  onChangeDatosInteres(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.datosInteres = value;
    console.log('Datos de interés actualizados:', this.datosInteres);
  }

  onChangeObjetivos(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.objetivos = value;
    console.log('Objetivos actualizados:', this.objetivos);
  }

  onChangeEdad(event: Event): void {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    this.edad = value;
    console.log('Edad actualizada:', this.edad);
  }

  onChangeFraseMotivadora(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.fraseMotivadora = value;
    console.log('Frase motivadora actualizada:', this.fraseMotivadora);
  }
  
}