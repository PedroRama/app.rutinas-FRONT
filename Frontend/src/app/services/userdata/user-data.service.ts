import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userDataService {

  //registro e inicio de sesión
  private userData = {
    name: "",
    email: "",
    password: ""
  };

  setUserData(data: { name: string; email: string; password: string }): void {
    this.userData = data;
  }

  getUserData(): { name: string; email: string; password: string } {
    return this.userData;
  }

  //información del usuario
  private datosUsuario: any = null; // Variable para almacenar los datos del usuario

  setDatosUsuario(datos: any): void {
    this.datosUsuario = datos; // Guarda los datos
  }

  getDatosUsuario(): any {
    return this.datosUsuario; // Devuelve los datos
  }
}